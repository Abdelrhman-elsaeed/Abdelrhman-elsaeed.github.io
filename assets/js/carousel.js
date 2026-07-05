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

    function initCarousel(root) {
        if (root.dataset.carouselReady === 'true') return;
        root.dataset.carouselReady = 'true';

        const track      = root.querySelector('.carousel-track');
        const viewport   = root.querySelector('.carousel-viewport');
        const dotsHost   = root.querySelector('.carousel-dots');
        const prevBtn    = root.querySelector('.carousel-arrow-prev');
        const nextBtn    = root.querySelector('.carousel-arrow-next');
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
                btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
                btn.addEventListener('click', () => goTo(i, true));
                dotsHost.appendChild(btn);
            });
        }
        const dots = dotsHost ? Array.from(dotsHost.children) : [];

        // -------- Core render --------
        function render() {
            const step = getStep(track);
            if (step <= 0) return;

            const logicalOffset = index * step;
            const signedOffset  = isRTL() ? logicalOffset : -logicalOffset;
            track.style.transform = `translate3d(${signedOffset}px, 0, 0)`;

            slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
            dots.forEach((d, i) => d.classList.toggle('is-active', i === index));

            if (prevBtn) prevBtn.disabled = false;
            if (nextBtn) nextBtn.disabled = false;

            if (live) {
                const card = slides[index].querySelector('.carousel-card');
                const titleEl = card ? card.querySelector('.card-title') : null;
                const title = titleEl ? titleEl.textContent.trim() : `Slide ${index + 1}`;
                live.textContent = `${title} (${index + 1} of ${total})`;
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

        // -------- Keep offsets correct on resize / language toggle --------
        let resizeRaf = null;
        function onResize() {
            if (resizeRaf) cancelAnimationFrame(resizeRaf);
            resizeRaf = requestAnimationFrame(render);
        }
        window.addEventListener('resize', onResize);

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