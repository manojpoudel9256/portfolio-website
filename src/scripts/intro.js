/* Short intro: the name and a filling line (CSS), then a fade. Once per
   browser session; skipped for reduced motion, deep links and ?nopreload.
   Independent of GSAP and CDN scripts. */
(function () {
    'use strict';
    var pre = document.getElementById('preloader');
    var heroPlay = function () { if (window.__heroPlay) window.__heroPlay(); };
    if (!pre) { heroPlay(); return; }
    var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var params = new URLSearchParams(window.location.search);
    var seen = false;
    try { seen = sessionStorage.getItem('pp_intro_seen') === '1'; } catch (e) { /* Storage is optional. */ }
    if (params.has('nopreload') || motion.matches || seen || window.location.hash.length > 1) {
        pre.remove();
        heroPlay();
        return;
    }
    try { sessionStorage.setItem('pp_intro_seen', '1'); } catch (e) { /* Storage is optional. */ }

    var lang = params.get('lang');
    if (!lang) {
        try { lang = localStorage.getItem('pp_lang'); } catch (e) { /* Storage is optional. */ }
    }
    if (lang === 'ja') pre.setAttribute('aria-label', 'ポートフォリオを読み込み中');

    var done = false;
    var timer;
    var oldOverflow = document.documentElement.style.overflow;
    var oldBodyOverflow = document.body.style.overflow;

    function finish() {
        pre.remove();
        document.documentElement.style.overflow = oldOverflow;
        document.body.style.overflow = oldBodyOverflow;
    }
    function dismiss(immediate) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        heroPlay(); // the hero entrance starts as the intro fades
        document.removeEventListener('keydown', onKey, true);
        pre.removeEventListener('click', onClick);
        window.removeEventListener('pagehide', onPageHide);
        if (immediate) { finish(); return; }
        pre.classList.add('pl-done');
        setTimeout(finish, 340);
    }
    function onKey(event) { if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') dismiss(false); }
    function onClick() { dismiss(false); }
    function onPageHide() { dismiss(true); }

    document.addEventListener('keydown', onKey, true);
    pre.addEventListener('click', onClick);
    window.addEventListener('pagehide', onPageHide);
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    pre.hidden = false;
    timer = setTimeout(function () { dismiss(false); }, 760);
})();
