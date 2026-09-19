/* lachlanchen.github.io — 11-language switch, theme toggle, GitHub stars. No dependencies.
   Translations live in assets/i18n/<code>.json; English is the fallback. */
(function () {
  'use strict';

  // ---------------------------------------------------------------- languages
  // Same eleven languages as the README header. `dir` marks right-to-left scripts.
  const LANGS = [
    { code: 'en',      label: 'English',        html: 'en' },
    { code: 'zh-Hans', label: '中文（简体）',     html: 'zh-Hans' },
    { code: 'zh-Hant', label: '中文（繁體）',     html: 'zh-Hant' },
    { code: 'ja',      label: '日本語',          html: 'ja' },
    { code: 'ko',      label: '한국어',          html: 'ko' },
    { code: 'vi',      label: 'Tiếng Việt',     html: 'vi' },
    { code: 'ar',      label: 'العربية',        html: 'ar', dir: 'rtl' },
    { code: 'es',      label: 'Español',        html: 'es' },
    { code: 'fr',      label: 'Français',       html: 'fr' },
    { code: 'de',      label: 'Deutsch',        html: 'de' },
    { code: 'ru',      label: 'Русский',        html: 'ru' },
  ];
  const CODES = LANGS.map(l => l.code);
  const dicts = {};                 // loaded JSON dictionaries by code
  let current = 'en';

  // Map a browser/URL language tag onto one of our codes.
  function normalize(tag) {
    if (!tag) return null;
    tag = String(tag).trim();
    if (CODES.includes(tag)) return tag;
    const t = tag.toLowerCase();
    if (t === 'zh' || t.startsWith('zh-cn') || t.startsWith('zh-sg') || t.startsWith('zh-hans')) return 'zh-Hans';
    if (t.startsWith('zh-tw') || t.startsWith('zh-hk') || t.startsWith('zh-mo') || t.startsWith('zh-hant')) return 'zh-Hant';
    const base = t.split('-')[0];
    return CODES.includes(base) ? base : null;
  }
  function detectLang() {
    const q = normalize(new URLSearchParams(location.search).get('lang'));
    if (q) return q;
    try { const s = normalize(localStorage.getItem('lang')); if (s) return s; } catch (e) {}
    const prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
    for (const p of prefs) { const n = normalize(p); if (n) return n; }
    return 'en';
  }

  function base() {
    // works from the site root and from any sub-path
    const s = document.querySelector('script[src*="site.js"]');
    return s ? s.getAttribute('src').replace(/assets\/js\/site\.js.*$/, '') : '';
  }
  function loadDict(code) {
    if (dicts[code]) return Promise.resolve(dicts[code]);
    return fetch(base() + 'assets/i18n/' + code + '.json', { cache: 'force-cache' })
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(d => { dicts[code] = d; return d; });
  }

  function render(code) {
    const dict = dicts[code] || {};
    const en = dicts.en || {};
    const meta = LANGS.find(l => l.code === code) || LANGS[0];
    document.documentElement.lang = meta.html;
    document.documentElement.dir = meta.dir || 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key] !== undefined ? dict[key] : en[key];
      if (val === undefined) return;
      if (key.endsWith('_html')) el.innerHTML = val; else el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.getAttribute('data-i18n-attr').split(';').forEach(pair => {
        const [attr, key] = pair.split(':');
        const val = dict[key] || en[key];
        if (val) el.setAttribute(attr, val);
      });
    });
    document.querySelectorAll('.lang-select').forEach(s => { s.value = code; });
    // embedded CV preview follows the language: Chinese variants show the Chinese PDF
    const zh = code.startsWith('zh');
    document.querySelectorAll('[data-pdf-en]').forEach(f => {
      const src = f.getAttribute(zh ? 'data-pdf-zh' : 'data-pdf-en');
      if (src && f.getAttribute('src') !== src) f.setAttribute('src', src);
    });
  }

  function applyLang(code) {
    code = normalize(code) || 'en';
    current = code;
    try { localStorage.setItem('lang', code); } catch (e) {}
    const jobs = [loadDict('en')];
    if (code !== 'en') jobs.push(loadDict(code).catch(() => null));
    return Promise.all(jobs).then(() => { if (current === code) render(code); });
  }

  function buildSelects() {
    document.querySelectorAll('.lang-select').forEach(s => {
      s.innerHTML = '';
      LANGS.forEach(l => {
        const o = document.createElement('option');
        o.value = l.code; o.textContent = l.label; o.lang = l.html;
        s.appendChild(o);
      });
    });
  }

  // ---------------------------------------------------------------- theme
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute('data-theme', t); else document.documentElement.removeAttribute('data-theme');
    const effective = t || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.querySelectorAll('.theme-btn').forEach(b => { b.textContent = effective === 'dark' ? '☀' : '☾'; });
    try { if (t) localStorage.setItem('theme', t); else localStorage.removeItem('theme'); } catch (e) {}
  }

  // ---------------------------------------------------------------- GitHub stars
  function loadStars() {
    const els = document.querySelectorAll('[data-repo]');
    if (!els.length) return;
    let cache = {};
    try { cache = JSON.parse(localStorage.getItem('gh-stars') || '{}'); } catch (e) {}
    const fresh = Date.now() - (cache._t || 0) < 6 * 3600 * 1000;
    els.forEach(el => {
      const repo = el.getAttribute('data-repo');
      const show = n => { if (typeof n === 'number') el.textContent = n > 0 ? '★ ' + n : ''; };
      if (fresh && cache[repo] !== undefined) { show(cache[repo]); return; }
      fetch('https://api.github.com/repos/' + repo).then(r => r.ok ? r.json() : null).then(j => {
        if (!j) return;
        cache[repo] = j.stargazers_count; cache._t = Date.now();
        try { localStorage.setItem('gh-stars', JSON.stringify(cache)); } catch (e) {}
        show(j.stargazers_count);
      }).catch(() => {});
    });
  }

  // ---------------------------------------------------------------- project filters
  function initFilters() {
    const bar = document.querySelector('.filters');
    if (!bar) return;
    bar.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      bar.querySelectorAll('button').forEach(x => x.classList.toggle('active', x === b));
      const f = b.getAttribute('data-filter');
      document.querySelectorAll('.grid .card').forEach(c => {
        const cats = (c.getAttribute('data-cat') || '').split(' ');
        c.classList.toggle('hidden', !(f === 'all' || cats.includes(f)));
      });
    });
  }

  // ---------------------------------------------------------------- boot
  document.addEventListener('DOMContentLoaded', () => {
    buildSelects();
    applyLang(detectLang());
    let theme = null; try { theme = localStorage.getItem('theme'); } catch (e) {}
    applyTheme(theme);
    document.querySelectorAll('.lang-select').forEach(s => s.addEventListener('change', () => applyLang(s.value)));
    document.querySelectorAll('.theme-btn').forEach(b => b.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    }));
    const tog = document.querySelector('.nav-toggle');
    if (tog) tog.addEventListener('click', () => document.querySelector('.nav-links').classList.toggle('open'));
    // active nav link
    const file = (location.pathname.split('/').pop() || 'index.html');
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      const target = (href === './' || href === '/') ? 'index.html' : href.split('/').pop();
      if (target === file) a.classList.add('active');
    });
    initFilters();
    loadStars();
  });
})();
