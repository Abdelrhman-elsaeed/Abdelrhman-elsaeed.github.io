// ===========================
//   DATA
// ===========================
const DATA = {
  "en": {
    "nav": {
      "home": "Home",
      "about": "About",
      "skills": "Skills",
      "projects": "Projects",
      "experience": "Education",
      "contact": "Contact"
    },
    "hero": {
      "greeting": "Hi, I'm",
      "name": "Abdelrhman Elsaid",
      "role": ".NET Backend Developer",
      "tagline": "Building robust RESTful APIs & layered backend architectures.",
      "cta_projects": "View Projects",
      "cta_contact": "Contact Me",
      "cta_cv": "Download CV",
      "stats": [
        {
          "value": "2+",
          "label": "Major Projects"
        },
        {
          "value": "100+",
          "label": "Unit Tests Written"
        },
        {
          "value": "5+",
          "label": "Architecture Patterns"
        }
      ]
    },
    "about": {
      "title": "About Me",
      "subtitle": "Who I am",
      "bio": ".NET Backend Developer with hands-on experience building RESTful APIs using C#, ASP.NET Core, Entity Framework Core, and SQL Server. Experienced in designing layered backend systems using Onion Architecture, N-Tier Architecture, CQRS with MediatR, Repository Pattern, JWT authentication, role-based authorization, and unit testing. Built practical Web API projects including a Hotel Reservation System and an Examination System.",
      "info": [
        {
          "icon": "📍",
          "text": "Cairo, Egypt"
        },
        {
          "icon": "🎓",
          "text": "B.Sc. Electronics & Comm Engineering — Mansoura University (2020–2025)"
        },
        {
          "icon": "💡",
          "text": "AI & Prompt Engineering Enthusiast"
        },
        {
          "icon": "🌐",
          "text": "Arabic: Native  |  English: Intermediate"
        }
      ],
      "stats": [
        {
          "value": "2+",
          "label": "Major Projects",
          "gradient": "linear-gradient(135deg,#7C3AED,#A78BFA)"
        },
        {
          "value": "100+",
          "label": "Unit Tests Written",
          "gradient": "linear-gradient(135deg,#10b981,#14b8a6)"
        },
        {
          "value": "5+",
          "label": "Architecture Patterns",
          "gradient": "linear-gradient(135deg,#3b82f6,#06b6d4)"
        },
        {
          "value": "10+",
          "label": "Technologies & Tools",
          "gradient": "linear-gradient(135deg,#F59E0B,#f97316)"
        }
      ],
      "languages": [
        {
          "lang": "Arabic",
          "level": "Native"
        },
        {
          "lang": "English",
          "level": "Intermediate"
        }
      ]
    },
    "skills": {
      "title": "Skills",
      "subtitle": "Technologies I work with",
      "categories": [
        {
          "icon": "🖥️",
          "name": "Back-End",
          "items": [
            "C#",
            "C++",
            "ASP.NET Core Web API",
            "ASP.NET MVC",
            "RESTful APIs",
            "LINQ",
            "ADO.NET"
          ]
        },
        {
          "icon": "🗄️",
          "name": "Database & ORM",
          "items": [
            "SQL Server",
            "Entity Framework Core",
            "Code-First Migrations",
            "SQL"
          ]
        },
        {
          "icon": "🏗️",
          "name": "Architecture",
          "items": [
            "OOP",
            "SOLID Principles",
            "Design Patterns",
            "Onion Architecture",
            "3-Tier Architecture",
            "Repository Pattern",
            "CQRS",
            "MediatR",
            "FluentValidation"
          ]
        },
        {
          "icon": "🔒",
          "name": "Security",
          "items": [
            "JWT Authentication",
            "Refresh Tokens",
            "Role-Based Authorization",
            "Network Security Fundamentals"
          ]
        },
        {
          "icon": "🧪",
          "name": "Testing & Logging",
          "items": [
            "Unit Testing",
            "NUnit",
            "Moq",
            "FluentAssertions",
            "Serilog",
            "Seq"
          ]
        },
        {
          "icon": "🔧",
          "name": "Tools & AI",
          "items": [
            "Git",
            "GitHub",
            "Visual Studio",
            "Postman",
            "Swagger",
            "Trello",
            "LLM API Integration",
            "Prompt Engineering",
            "Structured Outputs"
          ]
        }
      ]
    },
    "projects": {
      "title": "Projects",
      "subtitle": "Things I've built",
      "items": [
        {
          "name": "Hotel Reservation System Web API",
          "highlight": "Onion Architecture + CQRS + 82 Unit Tests",
          "desc": "RESTful API for hotel reservation management using Onion Architecture and CQRS with MediatR. Implemented JWT authentication, refresh tokens, custom authorization filters, centralized error handling, and transaction middleware.",
          "tech": [
            "ASP.NET Core",
            "EF Core",
            "SQL Server",
            "CQRS",
            "MediatR",
            "JWT",
            "NUnit"
          ],
          "github": "https://github.com/Abdelrhman-elsaeed/HotelReservationSystemWebAPI",
          "demo": null,
          "icon": "🏨"
        },
        {
          "name": "Examination System Web API",
          "highlight": "N-Tier + Identity + 32 Unit Tests",
          "desc": "RESTful API for managing online exams, courses, questions, students, instructors, and grading. Implemented JWT authentication and role-based authorization using ASP.NET Core Identity. Centralized logging using Serilog and Seq.",
          "tech": [
            "ASP.NET Core",
            "EF Core",
            "SQL Server",
            "Identity",
            "Serilog",
            "AutoMapper"
          ],
          "github": "https://github.com/Abdelrhman-elsaeed/ExaminationSystem",
          "demo": null,
          "icon": "📝"
        }
      ]
    },
    "experience": {
      "title": "Education & Volunteering",
      "subtitle": "My Background",
      "items": [
        {
          "type": "training",
          "icon": "📚",
          "role": "Bachelor of Engineering (Electronics and Communications)",
          "company": "Mansoura University",
          "period": "2020 – 2025",
          "badge": "Education",
          "points": [
            "Studied core engineering principles and computer science fundamentals.",
            "Graduated with practical experience in team collaboration and project execution."
          ]
        },
        {
          "type": "work",
          "icon": "💼",
          "role": "Multimedia Director",
          "company": "Luminous MU",
          "period": "Jan 2023 – Jul 2024",
          "badge": "Extracurricular",
          "points": [
            "Recruited and interviewed over 30 new members.",
            "Restructured the media and marketing team to improve operational efficiency."
          ]
        },
        {
          "type": "work",
          "icon": "💼",
          "role": "Sub-team Leader",
          "company": "IEEE Mansoura Student Branch",
          "period": "Jan 2022 – Dec 2023",
          "badge": "Extracurricular",
          "points": [
            "Managed the end-to-end creation of visual assets for 2 major events.",
            "Led the design sub-team ensuring timely delivery and brand consistency."
          ]
        }
      ]
    },
    "contact": {
      "title": "Contact",
      "subtitle": "Let's work together",
      "description": "I'm currently open to new opportunities. Feel free to reach out via any of the channels below!",
      "info": [
        {
          "icon": "✉️",
          "label": "Email",
          "value": "abdelrhman.ahmed.elsaeed@gmail.com",
          "href": "mailto:abdelrhman.ahmed.elsaeed@gmail.com"
        },
        {
          "icon": "📞",
          "label": "Phone",
          "value": "+201068751057",
          "href": "tel:+201068751057"
        },
        {
          "icon": "📍",
          "label": "Location",
          "value": "Cairo, Egypt",
          "href": null
        }
      ],
      "socials": [
        {
          "label": "GitHub",
          "href": "https://github.com/Abdelrhman-elsaeed",
          "icon": "github"
        },
        {
          "label": "LinkedIn",
          "href": "https://www.linkedin.com/in/elsaeed/",
          "icon": "linkedin"
        }
      ]
    },
    "footer": {
      "made": "Made with ❤️ by Abdelrhman Elsaid",
      "rights": "All rights reserved."
    }
  },
  "ar": {
    "nav": {
      "home": "الرئيسية",
      "about": "عني",
      "skills": "المهارات",
      "projects": "المشاريع",
      "experience": "التعليم",
      "contact": "تواصل"
    },
    "hero": {
      "greeting": "مرحباً، أنا",
      "name": "عبدالرحمن السعيد",
      "role": "مطور واجهات خلفية .NET",
      "tagline": "أبني واجهات برمجة تطبيقات (APIs) قوية ومعماريات خلفية منظمة.",
      "cta_projects": "عرض المشاريع",
      "cta_contact": "تواصل معي",
      "cta_cv": "تحميل السيرة الذاتية",
      "stats": [
        {
          "value": "+2",
          "label": "مشاريع رئيسية"
        },
        {
          "value": "+100",
          "label": "اختبارات برمجية (Unit Tests)"
        },
        {
          "value": "+5",
          "label": "أنماط معمارية"
        }
      ]
    },
    "about": {
      "title": "عني",
      "subtitle": "من أنا",
      "bio": "مطور واجهات خلفية (Backend Developer) بخبرة عملية في بناء واجهات برمجة التطبيقات (RESTful APIs) باستخدام C#, ASP.NET Core, Entity Framework Core، و SQL Server. أمتلك خبرة في تصميم الأنظمة الخلفية متعددة الطبقات باستخدام Onion Architecture, N-Tier Architecture, CQRS، بالإضافة إلى حماية التطبيقات (JWT) والاختبارات البرمجية.",
      "info": [
        {
          "icon": "📍",
          "text": "القاهرة، مصر"
        },
        {
          "icon": "🎓",
          "text": "بكالوريوس هندسة الإلكترونيات والاتصالات — جامعة المنصورة (2020–2025)"
        },
        {
          "icon": "💡",
          "text": "مهتم بتقنيات الذكاء الاصطناعي وهندسة الأوامر (Prompt Engineering)"
        },
        {
          "icon": "🌐",
          "text": "العربية: لغة أم  |  الإنجليزية: متوسط"
        }
      ],
      "stats": [
        {
          "value": "+2",
          "label": "مشاريع رئيسية",
          "gradient": "linear-gradient(135deg,#7C3AED,#A78BFA)"
        },
        {
          "value": "+100",
          "label": "اختبارات برمجية (Unit Tests)",
          "gradient": "linear-gradient(135deg,#10b981,#14b8a6)"
        },
        {
          "value": "+5",
          "label": "أنماط معمارية",
          "gradient": "linear-gradient(135deg,#3b82f6,#06b6d4)"
        },
        {
          "value": "+10",
          "label": "تقنيات وأدوات",
          "gradient": "linear-gradient(135deg,#F59E0B,#f97316)"
        }
      ],
      "languages": [
        {
          "lang": "العربية",
          "level": "لغة أم"
        },
        {
          "lang": "الإنجليزية",
          "level": "متوسط"
        }
      ]
    },
    "skills": {
      "title": "المهارات",
      "subtitle": "التقنيات التي أعمل بها",
      "categories": [
        {
          "icon": "🖥️",
          "name": "الواجهات الخلفية",
          "items": [
            "C#",
            "C++",
            "ASP.NET Core Web API",
            "ASP.NET MVC",
            "RESTful APIs",
            "LINQ",
            "ADO.NET"
          ]
        },
        {
          "icon": "🗄️",
          "name": "قواعد البيانات",
          "items": [
            "SQL Server",
            "Entity Framework Core",
            "Code-First Migrations",
            "SQL"
          ]
        },
        {
          "icon": "🏗️",
          "name": "المعمارية",
          "items": [
            "OOP",
            "SOLID Principles",
            "Design Patterns",
            "Onion Architecture",
            "3-Tier Architecture",
            "Repository Pattern",
            "CQRS",
            "MediatR",
            "FluentValidation"
          ]
        },
        {
          "icon": "🔒",
          "name": "الأمان والحماية",
          "items": [
            "JWT Authentication",
            "Refresh Tokens",
            "Role-Based Authorization",
            "Network Security Fundamentals"
          ]
        },
        {
          "icon": "🧪",
          "name": "الاختبارات والتسجيل",
          "items": [
            "Unit Testing",
            "NUnit",
            "Moq",
            "FluentAssertions",
            "Serilog",
            "Seq"
          ]
        },
        {
          "icon": "🔧",
          "name": "الأدوات والذكاء الاصطناعي",
          "items": [
            "Git",
            "GitHub",
            "Visual Studio",
            "Postman",
            "Swagger",
            "Trello",
            "LLM API Integration",
            "Prompt Engineering",
            "Structured Outputs"
          ]
        }
      ]
    },
    "projects": {
      "title": "المشاريع",
      "subtitle": "ما قمت ببنائه",
      "items": [
        {
          "name": "نظام حجز الفنادق Web API",
          "highlight": "Onion Architecture + CQRS + 82 Unit Test",
          "desc": "واجهة برمجة تطبيقات لإدارة حجوزات الفنادق باستخدام Onion Architecture و CQRS. يتضمن حماية باستخدام JWT، فلاتر مخصصة للصلاحيات، معالجة مركزية للأخطاء، وإدارة المعاملات.",
          "tech": [
            "ASP.NET Core",
            "EF Core",
            "SQL Server",
            "CQRS",
            "MediatR",
            "JWT",
            "NUnit"
          ],
          "github": "https://github.com/Abdelrhman-elsaeed/HotelReservationSystemWebAPI",
          "demo": null,
          "icon": "🏨"
        },
        {
          "name": "نظام الامتحانات Web API",
          "highlight": "N-Tier + Identity + 32 Unit Test",
          "desc": "واجهة برمجة تطبيقات لإدارة الامتحانات الإلكترونية، المقررات، الطلاب، والمحاضرين، وعمليات التصحيح الآلي. حماية مبنية على الأدوار عبر ASP.NET Core Identity، مع نظام تسجيل أخطاء مركزي.",
          "tech": [
            "ASP.NET Core",
            "EF Core",
            "SQL Server",
            "Identity",
            "Serilog",
            "AutoMapper"
          ],
          "github": "https://github.com/Abdelrhman-elsaeed/ExaminationSystem",
          "demo": null,
          "icon": "📝"
        }
      ]
    },
    "experience": {
      "title": "التعليم والأنشطة التطوعية",
      "subtitle": "خلفيتي",
      "items": [
        {
          "type": "training",
          "icon": "📚",
          "role": "بكالوريوس الهندسة (إلكترونيات واتصالات)",
          "company": "جامعة المنصورة",
          "period": "2020 – 2025",
          "badge": "تعليم",
          "points": [
            "دراسة المبادئ الهندسية وأساسيات علوم الحاسب.",
            "التخرج بخبرة عملية في التعاون ضمن فريق وتنفيذ المشاريع."
          ]
        },
        {
          "type": "work",
          "icon": "💼",
          "role": "مدير الوسائط المتعددة",
          "company": "Luminous MU",
          "period": "يناير 2023 – يوليو 2024",
          "badge": "أنشطة تطوعية",
          "points": [
            "توظيف ومقابلة أكثر من 30 عضواً جديداً.",
            "إعادة هيكلة فريق الإعلام والتسويق لتحسين الكفاءة التشغيلية."
          ]
        },
        {
          "type": "work",
          "icon": "💼",
          "role": "قائد فريق فرعي",
          "company": "فرع طلاب IEEE جامعة المنصورة",
          "period": "يناير 2022 – ديسمبر 2023",
          "badge": "أنشطة تطوعية",
          "points": [
            "إدارة عملية إنشاء الأصول البصرية من البداية للنهاية لحدثين رئيسيين.",
            "قيادة فريق التصميم الفرعي لضمان التسليم في الوقت المناسب واتساق الهوية البصرية."
          ]
        }
      ]
    },
    "contact": {
      "title": "تواصل معي",
      "subtitle": "لنعمل معاً",
      "description": "أنا متاح حالياً لفرص جديدة. تواصل معي عبر أي من القنوات أدناه!",
      "info": [
        {
          "icon": "✉️",
          "label": "البريد الإلكتروني",
          "value": "abdelrhman.ahmed.elsaeed@gmail.com",
          "href": "mailto:abdelrhman.ahmed.elsaeed@gmail.com"
        },
        {
          "icon": "📞",
          "label": "الهاتف",
          "value": "+201068751057",
          "href": "tel:+201068751057"
        },
        {
          "icon": "📍",
          "label": "الموقع",
          "value": "القاهرة، مصر",
          "href": null
        }
      ],
      "socials": [
        {
          "label": "GitHub",
          "href": "https://github.com/Abdelrhman-elsaeed",
          "icon": "github"
        },
        {
          "label": "LinkedIn",
          "href": "https://www.linkedin.com/in/elsaeed/",
          "icon": "linkedin"
        }
      ]
    },
    "footer": {
      "made": "صُنع بـ ❤️ بواسطة عبدالرحمن السعيد",
      "rights": "جميع الحقوق محفوظة."
    }
  }
};

// ===========================
//   STATE
// ===========================
let currentLang  = localStorage.getItem("mak_lang")  || "en";
let currentTheme = localStorage.getItem("mak_theme") || "dark";

function t(path) {
  const keys = path.split(".");
  let val = DATA[currentLang];
  for (const k of keys) { val = val?.[k]; }
  return val;
}

// ===========================
//   THEME
// ===========================
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("theme-btn");
  if (!btn) return;
  btn.innerHTML = theme === "dark"
    ? `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5"/><path stroke-linecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>`
    : `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
      </svg>`;
  btn.title = theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
}

function initTheme() {
  applyTheme(currentTheme);
  document.getElementById("theme-btn").addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("mak_theme", currentTheme);
    applyTheme(currentTheme);
  });
}

// ===========================
//   RENDER FUNCTIONS
// ===========================
function renderNav() {
  const nav = t("nav");
  document.querySelectorAll("[data-nav]").forEach(el => {
    el.textContent = nav[el.dataset.nav];
  });
  document.getElementById("lang-btn").textContent = currentLang === "en" ? "عربي" : "EN";
}

function renderHero() {
  const h = t("hero");
  document.getElementById("hero-greeting").textContent     = h.greeting;
  document.getElementById("hero-name").textContent         = h.name;
  const roleEl = document.getElementById("hero-role");
  roleEl.innerHTML = h.role + '<span class="typing-cursor">|</span>';
  document.getElementById("hero-tagline").textContent      = h.tagline;
  document.getElementById("hero-cta-projects").textContent = h.cta_projects;
  document.getElementById("hero-cta-contact").textContent  = h.cta_contact;
  const cvBtn = document.getElementById("hero-cta-cv");
  const svgEl = cvBtn.querySelector("svg");
  cvBtn.textContent = "";
  cvBtn.appendChild(svgEl);
  cvBtn.appendChild(document.createTextNode(" " + h.cta_cv));

  document.getElementById("hero-stats").innerHTML = h.stats.map(s => `
    <div>
      <div class="hero-stat-num">${s.value}</div>
      <div class="hero-stat-label">${s.label}</div>
    </div>
  `).join("");
}

function renderAbout() {
  const a = t("about");
  document.getElementById("about-subtitle").textContent = a.subtitle;
  document.getElementById("about-title").textContent    = a.title;
  document.getElementById("about-bio").textContent      = a.bio;

  document.getElementById("about-info").innerHTML = a.info.map(i => `
    <div class="about-info-item">
      <span class="about-info-icon">${i.icon}</span>
      <span class="about-info-text">${i.text}</span>
    </div>
  `).join("");

  document.getElementById("about-langs").innerHTML = a.languages.map(l => `
    <div class="lang-chip">
      <span class="lang-chip-name">${l.lang}</span>
      <span class="lang-chip-sep">·</span>
      <span class="lang-chip-level">${l.level}</span>
    </div>
  `).join("");

  document.getElementById("about-stats").innerHTML = a.stats.map(s => `
    <div class="col-6">
      <div class="stat-card">
        <div class="stat-card-num" style="background:${s.gradient};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">
          ${s.value}
        </div>
        <div class="stat-card-label">${s.label}</div>
      </div>
    </div>
  `).join("");
}

function renderSkills() {
  const s = t("skills");
  document.getElementById("skills-subtitle").textContent = s.subtitle;
  document.getElementById("skills-title").textContent    = s.title;

  document.getElementById("skills-grid").innerHTML = s.categories.map(cat => `
    <div class="col-md-6 col-lg-4">
      <div class="skill-card reveal">
        <div class="skill-icon">${cat.icon}</div>
        <div class="skill-name">${cat.name}</div>
        <div class="tags-wrap">
          ${cat.items.map(item => `<span class="tag">${item}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

function renderProjects() {
  const p = t("projects");
  document.getElementById("projects-subtitle").textContent = p.subtitle;
  document.getElementById("projects-title").textContent    = p.title;

  const githubSVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>`;

  // All 4 projects: 2 per row (col-md-6)
  document.getElementById("projects-grid").innerHTML = p.items.map(proj => `
    <div class="col-md-6">
      <div class="project-card reveal">
        <div class="project-card-top">
          <div class="project-icon">${proj.icon}</div>
          <div class="d-flex gap-2">
            ${proj.github ? `<a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="proj-icon-btn" title="GitHub">${githubSVG}</a>` : ""}
          </div>
        </div>
        ${proj.highlight ? `<div class="project-highlight">✦ ${proj.highlight}</div>` : ""}
        <div class="project-name">${proj.name}</div>
        <p class="project-desc">${proj.desc}</p>
        <div class="project-tags">
          ${proj.tech.map(tech => `<span class="tag">${tech}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

function renderExperience() {
  const e = t("experience");
  document.getElementById("exp-subtitle").textContent = e.subtitle;
  document.getElementById("exp-title").textContent    = e.title;

  // Each experience card: col-md-6 → 2 per row, filling the page
  document.getElementById("exp-grid").innerHTML = e.items.map(item => `
    <div class="col-md-6">
      <div class="exp-card reveal">
        <div class="exp-card-header">
          <div class="d-flex gap-3 align-items-start">
            <div class="exp-card-icon ${item.type}">${item.icon}</div>
            <div>
              <div class="exp-card-role">${item.role}</div>
              <div class="exp-card-company">${item.company}</div>
              <span class="exp-card-badge ${item.type}">${item.badge}</span>
            </div>
          </div>
          <span class="exp-card-period">${item.period}</span>
        </div>
        <ul class="exp-card-points">
          ${item.points.map(point => `<li>${point}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

function renderContact() {
  const c = t("contact");
  document.getElementById("contact-subtitle").textContent    = c.subtitle;
  document.getElementById("contact-title").textContent       = c.title;
  document.getElementById("contact-description").textContent = c.description;

  document.getElementById("contact-info").innerHTML = c.info.map(i => `
    <div class="contact-info-item">
      <div class="contact-icon">${i.icon}</div>
      <div>
        <div class="contact-info-label">${i.label}</div>
        ${i.href
          ? `<a href="${i.href}" class="contact-info-value">${i.value}</a>`
          : `<span class="contact-info-value">${i.value}</span>`}
      </div>
    </div>
  `).join("");

  const iconSVG = {
    github:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
    linkedin: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    globe:    `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`
  };

  document.getElementById("contact-socials").innerHTML = c.socials.map(s => `
    <a href="${s.href}" target="_blank" rel="noopener noreferrer" class="social-card-btn" aria-label="${s.label}">
      <span class="social-card-icon">${iconSVG[s.icon] || ""}</span>
      <span class="social-card-label">${s.label}</span>
    </a>
  `).join("");
}

function renderFooter() {
  const f = t("footer");
  document.getElementById("footer-made").textContent   = f.made;
  document.getElementById("footer-year").textContent   = new Date().getFullYear();
  document.getElementById("footer-rights").textContent = f.rights;
}

function applyStaggeredDelays() {
  document.querySelectorAll("#skills-grid .reveal, #projects-grid .reveal, #exp-grid .reveal").forEach((el, i) => {
    const delayClass = `reveal-delay-${(i % 6) + 1}`;
    el.classList.add(delayClass);
  });
}

function renderAll() {
  renderNav();
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperience();
  renderContact();
  renderFooter();
  applyStaggeredDelays();
  observeReveal();
}

// ===========================
//   SCROLL ANIMATIONS
// ===========================
function observeReveal() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
    { threshold: 0.08 }
  );
  document.querySelectorAll(".reveal:not(.visible)").forEach(el => observer.observe(el));
}

// ===========================
//   NAVBAR
// ===========================
function initNavbar() {
  const navbar   = document.getElementById("navbar");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
    let current = "";
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
    navLinks.forEach(l => l.classList.toggle("active", l.dataset.section === current));
  });

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.getElementById(link.dataset.section)?.scrollIntoView({ behavior: "smooth" });
      closeMobileMenu();
    });
  });
}

// ===========================
//   MOBILE MENU
// ===========================
function initMobileMenu() {
  const hamburger  = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
    document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
  });
  document.getElementById("close-menu").addEventListener("click", closeMobileMenu);
}
function closeMobileMenu() {
  document.getElementById("hamburger").classList.remove("open");
  document.getElementById("mobile-menu").classList.remove("open");
  document.body.style.overflow = "";
}

// ===========================
//   LANGUAGE TOGGLE
// ===========================
function initLang() {
  document.getElementById("lang-btn").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    localStorage.setItem("mak_lang", currentLang);
    document.documentElement.dir  = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
    renderAll();
  });
}

// ===========================
//   SCROLL-TO-TOP
// ===========================
function initScrollTop() {
  const btn = document.getElementById("scroll-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===========================
//   INIT
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.dir  = currentLang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = currentLang;
  initTheme();
  renderAll();
  initNavbar();
  initMobileMenu();
  initLang();
  initScrollTop();
});
