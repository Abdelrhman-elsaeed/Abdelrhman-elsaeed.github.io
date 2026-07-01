;(function($) {

    $(document).ready(function() {
        // Mobile Menu toggle
        $(document).on('click', '.header-area .show-menu', function() {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });

        // Initialize AOS
        AOS.init({
            duration: 1500,
            once: true,
        });

        // Setup active section indicator for navbar on scroll
        $(window).scroll(function() {
            var scrollDistance = $(window).scrollTop();
            $('section').each(function(i) {
                if ($(this).position().top <= scrollDistance + 120) {
                    $('.navbar ul li.active').removeClass('active');
                    $('.navbar ul li').eq(i).addClass('active');
                }
            });
        }).scroll();
    });

})(jQuery);

// Preloader logic
var div = document.createElement("div");
div.id = "preloader";
div.className = "preloader";
div.innerHTML = '<div class="black_wall"></div><div class="loader"></div>';
document.body.insertBefore(div, document.body.firstChild);
window.onload = function() {
    document.getElementById("preloader").classList.add("off");
};

// ==========================================
//   LOCALIZATION & THEME SWITCHER
// ==========================================

function applyTranslations() {
    const lang = localStorage.getItem("lang") || "en";
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    
    // Update language toggle button label (show opposite lang)
    const langBtn = document.getElementById("lang-btn");
    if (langBtn) {
        langBtn.textContent = lang === "ar" ? "EN" : "عربي";
    }

    // Apply standard text translations
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (window.translations && window.translations[lang] && window.translations[lang][key]) {
            el.textContent = window.translations[lang][key];
        }
    });

    // Render features lists for Tools page if present
    document.querySelectorAll("[data-i18n-list]").forEach(el => {
        const listName = el.getAttribute("data-i18n-list");
        if (window.translations && window.translations[lang]) {
            let html = "";
            let i = 1;
            while (true) {
                const key = `${listName}_feat${i}`;
                const val = window.translations[lang][key];
                if (!val) break;
                html += `<li>${val}</li>`;
                i++;
            }
            if (html) el.innerHTML = html;
        }
    });
}

function applyTheme() {
    const theme = localStorage.getItem("theme") || "dark";
    const themeLink = document.getElementById("theme-link");
    const themeBtnIcon = document.querySelector("#theme-btn i");
    
    if (themeLink) {
        if (theme === "light") {
            themeLink.setAttribute("href", "./assets/css/style-light.css");
            document.body.classList.add("light-mode");
            if (themeBtnIcon) {
                themeBtnIcon.className = "iconoir-half-moon"; // show moon when light
            }
        } else {
            themeLink.setAttribute("href", "./assets/css/style.css");
            document.body.classList.remove("light-mode");
            if (themeBtnIcon) {
                themeBtnIcon.className = "iconoir-sun-light"; // show sun when dark
            }
        }
    }
}

function initThemeAndLang() {
    // Bind Theme Button Click
    const themeBtn = document.getElementById("theme-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const currentTheme = localStorage.getItem("theme") || "dark";
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            localStorage.setItem("theme", newTheme);
            applyTheme();
        });
    }

    // Bind Lang Button Click
    const langBtn = document.getElementById("lang-btn");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            const currentLang = localStorage.getItem("lang") || "en";
            const newLang = currentLang === "en" ? "ar" : "en";
            localStorage.setItem("lang", newLang);
            applyTranslations();
            // Close mobile menu if open
            const menu = document.querySelector(".header-area .navbar");
            if (menu && menu.classList.contains("active")) {
                menu.classList.remove("active");
                const burger = document.querySelector(".header-area .show-menu");
                if (burger) burger.classList.remove("active");
            }
        });
    }

    // Initial run
    applyTranslations();
    applyTheme();
}

document.addEventListener("DOMContentLoaded", initThemeAndLang);