/* ============================================================
   Reusable Carousel Component (vanilla, no dependencies)
   ------------------------------------------------------------
   Usage: see data-carousel attribute on .carousel element.
   ============================================================ */

(function () {
    'use strict';

    const AUTOPLAY_DEFAULT_MS = 5000;
    const SWIPE_THRESHOLD_PX = 50;
    const SWIPE_VELOCITY_PX_MS = 0.4;

    // Shared helper: compute the step (slide outer width) including gap
    function getStep(track) {
        const slide = track.querySelector('.carousel-slide');
        if (!slide) return 0;
        const w = slide.getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        return w + gap;
    }

    function getTranslation(key, fallback) {
        const lang = document.documentElement.lang || 'en';
        if (window.translations && window.translations[lang] && window.translations[lang][key]) {
            return window.translations[lang][key];
        }
        return fallback;
    }

    function initCarousel(root) {
        if (root.dataset.carouselReady === 'true') return;
        root.dataset.carouselReady = 'true';

        const parentSection = root.closest('section');
        const track      = root.querySelector('.carousel-track');
        const viewport   = root.querySelector('.carousel-viewport');
        const dotsHost   = parentSection ? parentSection.querySelector('.carousel-dots') : null;
        const prevBtn    = parentSection ? parentSection.querySelector('.carousel-arrow-prev') : null;
        const nextBtn    = parentSection ? parentSection.querySelector('.carousel-arrow-next') : null;
        const live       = root.querySelector('.carousel-live');
        const slides     = Array.from(root.querySelectorAll('.carousel-slide'));

        if (!track || slides.length === 0) return;

        const total = slides.length;
        const isRTL = () => document.documentElement.dir === 'rtl';

        // -------- Single-slide graceful collapse --------
        if (total <= 1) {
            root.classList.add('is-single');
            if (prevBtn) prevBtn.hidden = true;
            if (nextBtn) nextBtn.hidden = true;
            if (dotsHost) dotsHost.hidden = true;
            if (slides[0]) slides[0].classList.add('is-active');
            return;
        }

        const autoplayMs = parseInt(root.dataset.autoplay, 10) || AUTOPLAY_DEFAULT_MS;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let index = 0;
        let autoplayTimer = null;
        let isPaused = false;

        // -------- Build dots --------
        if (dotsHost) {
            dotsHost.innerHTML = '';
            slides.forEach((_, i) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'carousel-dot';
                btn.setAttribute('role', 'tab');
                btn.addEventListener('click', () => goTo(i, true));
                dotsHost.appendChild(btn);
            });
        }
        const dots = dotsHost ? Array.from(dotsHost.children) : [];

        // -------- Core render --------
        function render() {
            const step = getStep(track);
            if (step <= 0) return;

            let logicalOffset = index * step;
            
            // Constrain offset to prevent scrolling past the last slide's right edge
            const maxOffset = track.scrollWidth - viewport.clientWidth;
            if (maxOffset > 0 && logicalOffset > maxOffset) {
                logicalOffset = maxOffset;
            }

            const signedOffset  = isRTL() ? logicalOffset : -logicalOffset;
            track.style.transform = `translate3d(${signedOffset}px, 0, 0)`;

            // Localize main carousel container label
            const isBlog = root.closest('#blog-preview');
            const ariaLabelKey = isBlog ? 'carousel_blog_aria' : 'carousel_tools_aria';
            const defaultAriaLabel = isBlog ? 'Latest blog posts' : 'My developer tools';
            root.setAttribute('aria-label', getTranslation(ariaLabelKey, defaultAriaLabel));

            slides.forEach((s, i) => s.classList.toggle('is-active', i === index));

            // Localize dot aria-labels and set active class
            if (dots.length > 0) {
                const dotTemplate = getTranslation('carousel_dot', 'Go to slide {num}');
                dots.forEach((d, i) => {
                    d.setAttribute('aria-label', dotTemplate.replace('{num}', i + 1));
                    d.classList.toggle('is-active', i === index);
                });
            }

            // Localize arrow aria-labels
            if (prevBtn) {
                prevBtn.setAttribute('aria-label', getTranslation('carousel_prev', 'Previous slide'));
                prevBtn.disabled = false;
            }
            if (nextBtn) {
                nextBtn.setAttribute('aria-label', getTranslation('carousel_next', 'Next slide'));
                nextBtn.disabled = false;
            }

            // Localize live region
            if (live) {
                const card = slides[index].querySelector('.carousel-card');
                const titleEl = card ? card.querySelector('.card-title') : null;
                const title = titleEl ? titleEl.textContent.trim() : `Slide ${index + 1}`;
                const ofText = getTranslation('carousel_of', 'of');
                live.textContent = `${title} (${index + 1} ${ofText} ${total})`;
            }
        }

        function goTo(i, announce) {
            index = ((i % total) + total) % total;
            render();
            if (announce) restartAutoplay();
        }
        function next() { goTo(index + 1); }
        function prev() { goTo(index - 1); }

        // -------- Autoplay --------
        function startAutoplay() {
            if (reduceMotion || isPaused) return;
            stopAutoplay();
            autoplayTimer = setInterval(next, autoplayMs);
        }
        function stopAutoplay() {
            if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; }
        }
        function restartAutoplay() {
            stopAutoplay();
            startAutoplay();
        }

        root.addEventListener('mouseenter', () => { isPaused = true;  stopAutoplay(); });
        root.addEventListener('mouseleave', () => { isPaused = false; startAutoplay(); });
        root.addEventListener('focusin',  () => { isPaused = true;  stopAutoplay(); });
        root.addEventListener('focusout', () => { isPaused = false; startAutoplay(); });

        // -------- Arrow buttons --------
        if (prevBtn) prevBtn.addEventListener('click', () => { prev(); restartAutoplay(); });
        if (nextBtn) nextBtn.addEventListener('click', () => { next(); restartAutoplay(); });

        // -------- Keyboard navigation --------
        root.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft')  { e.preventDefault(); prev(); restartAutoplay(); }
            if (e.key === 'ArrowRight') { e.preventDefault(); next(); restartAutoplay(); }
            if (e.key === 'Home')       { e.preventDefault(); goTo(0);      restartAutoplay(); }
            if (e.key === 'End')        { e.preventDefault(); goTo(total - 1); restartAutoplay(); }
        });

        // -------- Touch / mouse drag swipe --------
        let dragStartX = 0;
        let dragStartT = 0;
        let dragging = false;
        let dragDelta = 0;

        function onDown(e) {
            if (e.target.closest('a, button')) return;
            dragging = true;
            dragStartX = e.clientX;
            dragStartT = Date.now();
            dragDelta = 0;
            track.classList.add('is-dragging');
            stopAutoplay();
        }
        function onMove(e) {
            if (!dragging) return;
            dragDelta = e.clientX - dragStartX;
            const step = getStep(track);
            const baseOffset = (isRTL() ? 1 : -1) * index * step;
            track.style.transform = `translate3d(${baseOffset + dragDelta}px, 0, 0)`;
        }
        function onUp() {
            if (!dragging) return;
            dragging = false;
            track.classList.remove('is-dragging');

            const elapsed = Date.now() - dragStartT || 1;
            const velocity = Math.abs(dragDelta) / elapsed;

            if (Math.abs(dragDelta) > SWIPE_THRESHOLD_PX || velocity > SWIPE_VELOCITY_PX_MS) {
                if (isRTL()) {
                    if (dragDelta < 0) prev(); else next();
                } else {
                    if (dragDelta < 0) next(); else prev();
                }
            } else {
                render();
            }
            startAutoplay();
        }

        viewport.addEventListener('pointerdown', onDown);
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
        window.addEventListener('pointercancel', onUp);

        // -------- Keep offsets correct on size change / language toggle --------
        let resizeRaf = null;
        function onResize() {
            if (resizeRaf) cancelAnimationFrame(resizeRaf);
            resizeRaf = requestAnimationFrame(render);
        }

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (entry.contentRect.width > 0) {
                    onResize();
                }
            }
        });
        resizeObserver.observe(track);

        const dirObserver = new MutationObserver(() => render());
        dirObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['dir', 'lang'],
        });

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) stopAutoplay(); else if (!isPaused) startAutoplay();
        });

        // -------- Initial render (wait for layout) --------
        requestAnimationFrame(() => {
            render();
            startAutoplay();
        });
    }

    function initAll() {
        document.querySelectorAll('[data-carousel]').forEach(initCarousel);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }
})();