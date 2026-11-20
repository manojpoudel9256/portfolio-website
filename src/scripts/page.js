// Smooth scroll and ScrollTrigger start once the motion libraries arrive.
window.__motion.then(function () {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
    });
    window.lenis = lenis;

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Integrate Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// TOP NAV + hero CTA smooth-scroll (real anchors + Lenis)
document.querySelectorAll('.top-nav a[href^="#"], .hero a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
        const target = document.getElementById(a.getAttribute('href').slice(1));
        if (target) {
            e.preventDefault();
            window.scrollToSection(target);
            if (location.hash !== '#' + target.id) history.pushState(null, '', '#' + target.id);
        }
    });
});

// TOOLS MARQUEE — real self-hosted logos, duplicated for a seamless loop.
// Movement is driven by requestAnimationFrame (not CSS keyframes), which
// starts immediately and runs reliably on iOS/Android.
(function () {
    const LOGOS = [
        ["unrealengine", "Unreal Engine"], ["blender", "Blender"], ["cplusplus", "C++"],
        ["python", "Python"], ["javascript", "JavaScript"], ["typescript", "TypeScript"],
        ["threejs", "Three.js"], ["react", "React"], ["nodejs", "Node.js"],
        ["php", "PHP"], ["java", "Java"], ["html5", "HTML5"],
        ["css3", "CSS3"], ["tailwindcss", "Tailwind CSS"], ["bootstrap", "Bootstrap"],
        ["mysql", "MySQL"], ["mongodb", "MongoDB"], ["firebase", "Firebase"],
        ["opencv", "OpenCV"], ["docker", "Docker"], ["linux", "Linux"],
        ["git", "Git"], ["github", "GitHub"], ["vscode", "VS Code"],
        ["figma", "Figma"], ["vercel", "Vercel"]
    ];
    // build the hero tech marquee (CSS handles the infinite scroll)
    const tsItem = ([f, n], hidden) =>
        `<span class="ts-item"${hidden ? ' aria-hidden="true"' : ''}><img src="assets/logos/${f}.svg" alt="" width="20" height="20" loading="lazy" decoding="async"> ${n}</span>`;
    const tsTrack = document.querySelector(".hero-techstrip .ts-track");
    if (tsTrack) {
        tsTrack.innerHTML = LOGOS.map(t => tsItem(t, false)).join("") + LOGOS.map(t => tsItem(t, true)).join("");
    }
})();

// SELECTED WORK — category filters. The cards that remain settle in with a
// short rise (260 ms, 40 ms apart) so the change reads as a state transition.
(function () {
    const btns = document.querySelectorAll(".pw-fbtn");
    const cards = [...document.querySelectorAll(".pw-card")];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    btns.forEach(btn => btn.addEventListener("click", () => {
        btns.forEach(b => b.classList.toggle("active", b === btn));
        const f = btn.dataset.filter;
        cards.forEach(c => {
            const show = f === "all" || (c.dataset.cat || "").split(" ").includes(f);
            c.classList.toggle("pw-hide", !show);
        });
        if (window.ScrollTrigger) ScrollTrigger.refresh();
        if (reduce.matches || !Element.prototype.animate) return;
        cards.filter(c => !c.classList.contains("pw-hide")).forEach((c, i) => {
            c.animate([{ opacity: 0, translate: "0 8px" }, { opacity: 1, translate: "0 0" }],
                { duration: 260, delay: i * 40, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" });
        });
    }));
})();

// NAV INDICATOR — one pill slides to the active link (the scroll-spy in
// i18n.js toggles .active; a MutationObserver follows it). It appears in place
// on load, then animates; it re-measures on resize and language change.
(function () {
    const pill = document.querySelector(".top-nav .nav-pill");
    if (!pill) return;
    const ind = document.createElement("span");
    ind.className = "np-indicator no-anim";
    ind.setAttribute("aria-hidden", "true");
    pill.prepend(ind);
    pill.classList.add("has-indicator");
    const place = () => {
        const a = pill.querySelector(".np-link.active");
        if (!a || !a.offsetParent) { ind.style.setProperty("--np-o", "0"); return; }
        ind.style.setProperty("--np-x", a.offsetLeft + "px");
        ind.style.setProperty("--np-w", a.offsetWidth + "px");
        ind.style.setProperty("--np-o", "1");
    };
    new MutationObserver(place).observe(pill, { subtree: true, attributes: true, attributeFilter: ["class"] });
    window.addEventListener("resize", place, { passive: true });
    window.addEventListener("portfolio:languagechange", () => requestAnimationFrame(place));
    if (document.fonts) document.fonts.ready.then(place);
    place();
    requestAnimationFrame(() => requestAnimationFrame(() => ind.classList.remove("no-anim")));
})();

// PRESS FEEDBACK — controls dip to 97 % while pressed and spring back on
// release (WAAPI on the independent `scale` property, so it never overrides a
// component's own CSS transitions or transforms).
(function () {
    if (!Element.prototype.animate) return;
    const PRESS = ".hero-cta, .pw-view, .pw-fbtn, .pw-viewall, .cred-btn, .cf-submit, .cf-topic, .bi-control, " +
        ".proj-live, .proj-open, .ue-toggle, .menu-text, .theme-toggle, .lang-flag-btn, .edu-more, .bw-inspect, " +
        ".cl-contact, .social-icon, .cl-social, .proj-close, .bi-close, .menu-link, .menu-language-option, .menu-theme";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ease = "cubic-bezier(0.22, 1, 0.36, 1)";
    document.addEventListener("pointerdown", e => {
        if (reduce.matches || e.button > 0) return;
        const el = e.target.closest(PRESS);
        if (!el || el.disabled) return;
        if (el._press) el._press.cancel();
        const down = el.animate([{ scale: 1 }, { scale: 0.97 }], { duration: 120, easing: ease, fill: "forwards" });
        el._press = down;
        const events = ["pointerup", "pointercancel", "pointerleave"];
        const release = () => {
            events.forEach(t => el.removeEventListener(t, release));
            const now = getComputedStyle(el).scale;
            down.cancel();
            el._press = el.animate([{ scale: now === "none" ? 1 : now }, { scale: 1 }], { duration: 180, easing: ease });
        };
        events.forEach(t => el.addEventListener(t, release));
    }, { passive: true });
})();

// SCROLL REVEALS — one motion language (docs/MOTION-PLAN.md): cards rise 24px
// and fade in small batches; section headings reveal top-down from a mask line.
// Desktop only (phones keep content static while swiping) and never under
// reduced motion. Elements already on screen at load are left untouched.
window.__motion.then(function () {
    const CARDS = ".pw-card, .ue-card, .bw-card, .xp-item, .lc-card, .cred-card, .edu-card, .fg-card, .contact-card";
    const HEADINGS = ".pw-title, #ue-title, .bw-title, .section-title, .lc-title, .cert-title, .fg-title, .cl-headline";
    const below = el => el.getBoundingClientRect().top > window.innerHeight;
    gsap.matchMedia().add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray(CARDS).filter(below);
        const heads = gsap.utils.toArray(HEADINGS).filter(below);
        gsap.set(cards, { opacity: 0, y: 24 });
        gsap.set(heads, { clipPath: "inset(0 0 100% 0)", y: 16 });
        ScrollTrigger.batch(cards, {
            start: "top 88%", once: true,
            onEnter: batch => gsap.to(batch, {
                opacity: 1, y: 0, duration: 0.64, ease: "power3.out", stagger: 0.07,
                overwrite: true, clearProps: "opacity,transform"
            })
        });
        ScrollTrigger.batch(heads, {
            start: "top 90%", once: true,
            onEnter: batch => gsap.to(batch, {
                clipPath: "inset(0 0 0% 0)", y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08,
                overwrite: true, clearProps: "clipPath,transform"
            })
        });
        // leaving the breakpoint (resize to phone / reduced motion on) shows everything
        return () => gsap.set([...cards, ...heads], { clearProps: "opacity,transform,clipPath" });
    });
});


// FUTURE GOALS MAP — the wires draw on when the map scrolls in (desktop,
// motion allowed, and only if it starts below the fold); the arm/twin cycle
// and signal pulses run only while the map is on screen. Reduced motion keeps
// it a still drawing.
(function () {
    const art = document.querySelector(".fg-art");
    const map = art && art.querySelector(".fg-map");
    if (!map || !map.pauseAnimations) return;
    map.pauseAnimations();
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (matchMedia("(min-width: 769px)").matches && art.getBoundingClientRect().top > window.innerHeight) art.classList.add("fg-armed");
    new IntersectionObserver(([entry]) => {
        art.classList.toggle("is-live", entry.isIntersecting);
        if (entry.isIntersecting) { art.classList.add("fg-in"); map.unpauseAnimations(); }
        else map.pauseAnimations();
    }, { threshold: 0.15 }).observe(art);
})();


// SECTION HEADING ICONS — each icon tile pops in and its drawing plays once,
// the first time the heading scrolls into view. Without IntersectionObserver
// or with reduced motion the icons simply stay still.
(function () {
    const marks = document.querySelectorAll(".project-heading-mark");
    if (!marks.length || !("IntersectionObserver" in window)) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("marks-armed");
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
        });
    }, { threshold: 0.6 });
    marks.forEach(mark => io.observe(mark));
})();


// SELECTED WORK CAROUSEL — one row of cards that:
//  - loops endlessly (the visible cards are cloned once after the originals,
//    and the position wraps back by one full set, so the seam never shows);
//  - glides slowly on its own, pausing on hover, focus, drag/touch, while
//    off screen, or via the pause button, and never under reduced motion;
//  - can be dragged with the mouse (and swiped on touch), settling on the
//    nearest card; arrows step one card; dots show which project leads.
(function () {
    const track = document.querySelector(".pw-track");
    const nav = document.querySelector(".pw-carousel-nav");
    if (!track || !nav) return;
    const prev = nav.querySelector(".pw-prev");
    const next = nav.querySelector(".pw-next");
    const play = nav.querySelector(".pw-play");
    const dotsBox = nav.querySelector(".pw-dots");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const phone = matchMedia("(max-width: 768px)");
    const LABEL = {
        en: { pause: "Pause autoplay", play: "Play autoplay" },
        ja: { pause: "自動スクロールを停止", play: "自動スクロールを再生" }
    };
    const smooth = () => (reduce.matches ? "auto" : "smooth");
    const originals = () => [...track.querySelectorAll(".pw-card:not(.pw-clone):not(.pw-hide)")];
    const gap = () => parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = () => {
        const c = originals()[0];
        return c ? c.getBoundingClientRect().width + gap() : track.clientWidth;
    };

    let n = 0, setW = 0, looping = false;
    let userPaused = false, hover = false, focusIn = false, touching = false, onScreen = false;
    let idleUntil = 0, settleTimer = 0, lastAuto = 0;
    let dragging = false, down = false, startX = 0, startScroll = 0, justDragged = false;

    function build() {
        track.querySelectorAll(".pw-clone").forEach(c => c.remove());
        const cards = originals();
        n = cards.length;
        looping = n > 1 && track.scrollWidth - track.clientWidth > 2;
        nav.hidden = !looping;
        if (looping) {
            cards.forEach(card => {
                const k = card.cloneNode(true);
                k.classList.add("pw-clone");
                k.setAttribute("aria-hidden", "true");
                k.querySelectorAll("[id]").forEach(e => e.removeAttribute("id"));
                k.querySelectorAll("[aria-labelledby]").forEach(e => e.removeAttribute("aria-labelledby"));
                k.querySelectorAll("button, a, [tabindex]").forEach(e => e.setAttribute("tabindex", "-1"));
                k.querySelectorAll("img").forEach(i => { i.loading = "eager"; });
                track.appendChild(k);
            });
        }
        setW = n * step();
        dotsBox.innerHTML = "";
        if (looping) for (let i = 0; i < n; i++) {
            const d = document.createElement("span");
            d.className = "pw-dot";
            dotsBox.appendChild(d);
        }
        update();
    }
    function wrap() {
        if (!looping || !setW) return;
        if (track.scrollLeft >= setW - 0.5) track.scrollLeft -= setW;
    }
    function update() {
        if (!looping || !setW) return;
        const pos = ((track.scrollLeft % setW) + setW) % setW;
        const i = Math.round(pos / step()) % n;
        [...dotsBox.children].forEach((d, k) => d.classList.toggle("is-active", k === i));
    }
    function settle() {
        if (dragging || touching || down) return;
        wrap();
        const s = step();
        const target = Math.round(track.scrollLeft / s) * s;
        if (Math.abs(target - track.scrollLeft) > 1) track.scrollTo({ left: target, behavior: smooth() });
    }
    const interacted = (ms = 3000) => { idleUntil = performance.now() + ms; };

    // arrows (looping, so never disabled)
    next.addEventListener("click", () => {
        interacted(); wrap();
        track.scrollBy({ left: step(), behavior: smooth() });
    });
    prev.addEventListener("click", () => {
        interacted();
        if (looping && track.scrollLeft < step() - 1) track.scrollLeft += setW;
        track.scrollBy({ left: -step(), behavior: smooth() });
    });

    // pause / play
    function syncPlay() {
        const lang = document.documentElement.lang === "ja" ? "ja" : "en";
        play.setAttribute("aria-pressed", String(userPaused));
        play.setAttribute("aria-label", LABEL[lang][userPaused ? "play" : "pause"]);
        play.classList.toggle("is-paused", userPaused);
    }
    play.addEventListener("click", () => { userPaused = !userPaused; syncPlay(); });
    new MutationObserver(syncPlay).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    if (reduce.matches) { userPaused = true; play.hidden = true; }
    syncPlay();

    // user or arrow scrolling: update the dots, then settle on a card
    track.addEventListener("scroll", () => {
        update();
        if (performance.now() - lastAuto < 60) return; // our own glide step
        clearTimeout(settleTimer);
        settleTimer = setTimeout(settle, 140);
    }, { passive: true });

    // hover / focus / touch / wheel pause the glide
    track.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") hover = true; });
    track.addEventListener("pointerleave", e => { if (e.pointerType === "mouse") { hover = false; interacted(1200); } });
    track.addEventListener("focusin", () => { focusIn = true; });
    track.addEventListener("focusout", () => { focusIn = false; interacted(); });
    track.addEventListener("touchstart", () => { touching = true; interacted(); }, { passive: true });
    const endTouch = () => {
        touching = false; interacted();
        clearTimeout(settleTimer); settleTimer = setTimeout(settle, 140);
    };
    track.addEventListener("touchend", endTouch, { passive: true });
    track.addEventListener("touchcancel", endTouch, { passive: true });
    track.addEventListener("wheel", () => interacted(), { passive: true });

    // mouse drag
    track.addEventListener("dragstart", e => e.preventDefault());
    track.addEventListener("pointerdown", e => {
        if (e.pointerType !== "mouse" || e.button !== 0) return;
        down = true; dragging = false; startX = e.clientX; startScroll = track.scrollLeft;
        interacted();
    });
    addEventListener("pointermove", e => {
        if (!down) return;
        const dx = e.clientX - startX;
        if (!dragging && Math.abs(dx) > 5) { dragging = true; track.classList.add("is-dragging"); }
        if (!dragging) return;
        let left = startScroll - dx;
        if (looping) {
            if (left < 0) { left += setW; startScroll += setW; }
            else if (left >= setW) { left -= setW; startScroll -= setW; }
        }
        track.scrollLeft = left;
    });
    addEventListener("pointerup", () => {
        if (!down) return;
        down = false;
        if (dragging) {
            dragging = false; justDragged = true;
            track.classList.remove("is-dragging");
            interacted(); settle();
            setTimeout(() => { justDragged = false; }, 0);
        }
    });
    // a drag must not open the project under the cursor
    track.addEventListener("click", e => {
        if (justDragged) { e.stopPropagation(); e.preventDefault(); justDragged = false; }
    }, true);

    // only glide while the row is on screen
    if ("IntersectionObserver" in window) {
        new IntersectionObserver(([en]) => { onScreen = en.isIntersecting; }, { threshold: 0.35 }).observe(track);
    } else onScreen = true;

    // the slow glide (px per second), with sub-pixel accumulation
    let acc = 0, last = 0;
    function tick(t) {
        const dt = last ? Math.min(0.05, (t - last) / 1000) : 0;
        last = t;
        const run = looping && !userPaused && !reduce.matches && !hover && !focusIn && !touching &&
            !dragging && !down && onScreen && t > idleUntil;
        if (run) {
            acc += (phone.matches ? 22 : 32) * dt;
            const whole = Math.floor(acc);
            if (whole >= 1) {
                acc -= whole;
                lastAuto = performance.now();
                track.scrollLeft += whole;
                if (track.scrollLeft >= setW - 0.5) track.scrollLeft -= setW;
            }
        } else acc = 0;
        requestAnimationFrame(tick);
    }

    // filters: rebuild for the visible cards and start from the first one
    document.querySelectorAll(".pw-fbtn").forEach(btn => btn.addEventListener("click", () => {
        requestAnimationFrame(() => { build(); track.scrollLeft = 0; interacted(); });
    }));
    let resizeTimer = 0;
    addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const i = setW ? Math.round(track.scrollLeft / step()) % Math.max(1, n) : 0;
            build();
            track.scrollLeft = i * step();
        }, 150);
    }, { passive: true });

    build();
    requestAnimationFrame(tick);
})();
