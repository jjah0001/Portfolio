/* ==========================================================================
   PORTFOLIO — behaviour
   Builds every section from window.PORTFOLIO (js/data.js) and wires up the
   interactions. You shouldn't need to edit this file to change content.
   ========================================================================== */
(() => {
  'use strict';

  const D = window.PORTFOLIO || {};
  const META = D.meta || {};
  const PROJECTS = D.projects || [];
  const TRAVEL = D.travel || { visited: [] };

  /* ------------------------------------------------------------ helpers */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = (n) => String(n).padStart(2, '0');
  const norm = (s) => String(s || '').trim().toLowerCase();
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  };

  const ICONS = {
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.8s-1.2-.3-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 0 0-.9 2.6V22"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 7 9-7"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/>',
    'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    grad: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    game: '<rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4M8 10v4"/><circle cx="15" cy="13" r="1"/><circle cx="18" cy="11" r="1"/>',
    run: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
    coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    compass: '<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z"/>',
    layers: '<path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
    spark: '<path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.2 16.2l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.2 7.8l2.8-2.8"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
    code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
    robot: '<rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 8V4M9 4h6M2 13v3M22 13v3"/><circle cx="9" cy="14" r="1.2"/><circle cx="15" cy="14" r="1.2"/>',
    mountain: '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
    food: '<path d="M3 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3zm0 0v7"/>',
    pen: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',
    'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    shuttlecock: '<circle cx="12" cy="19" r="2.6"/><path d="M9.8 17.6 6 4.5h12l-3.8 13.1M7.3 9h9.4M10 4.5l1 12.6M14 4.5l-1 12.6"/>',
    tea: '<path d="M4 9.5h13V13a5.5 5.5 0 0 1-5.5 5.5h-2A5.5 5.5 0 0 1 4 13V9.5z"/><path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H16M3 21h16M8.5 2.5c-.8 1 .8 2-.1 3.4M12.5 2.5c-.8 1 .8 2-.1 3.4"/>',
    zoom: '<circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.6-4.6M11 8v6M8 11h6"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
    flip: '<path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>'
  };
  const icon = (name, cls = '') =>
    `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.spark}</svg>`;

  const DEVICON = (name, variant = 'original') =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-${variant}.svg`;
  const FLAG = (code, w = 160) => `https://flagcdn.com/w${w}/${String(code).toLowerCase()}.png`;
  const monogram = (name) => esc(String(name).replace(/[^A-Za-z0-9+#]/g, '').slice(0, 3) || '?');

  // Every coding language / framework with an icon, so tags elsewhere can reuse it.
  const allSkillItems = [...(D.coding || []), ...(D.frameworks || []).flatMap((g) => g.items || [])];
  const skillInfo = new Map(allSkillItems.map((s) => [norm(s.name), s]));
  const projectsUsing = (skill) => PROJECTS.filter((p) => (p.skills || []).some((s) => norm(s) === norm(skill)));

  const skillImg = (s, size = '') => {
    if (!s || !s.icon) return '';
    return `<img src="${DEVICON(s.icon, s.variant)}" alt="" loading="lazy" class="${s.invertDark ? 'invert-dark' : ''} ${size}" data-fallback="${monogram(s.name)}">`;
  };
  const tagHTML = (name, withIcon = false) => {
    const info = withIcon ? skillInfo.get(norm(name)) : null;
    return `<span class="tag">${info ? skillImg(info) : ''}${esc(name)}</span>`;
  };

  // Broken icons (offline / unknown name) → remove, or swap for a monogram where one is expected.
  function wireImageFallbacks(root = document) {
    $$('img[data-fallback]', root).forEach((img) => {
      img.addEventListener('error', () => {
        if (img.closest('.ring')) {
          const span = document.createElement('span');
          span.className = 'mono-icon';
          span.textContent = img.dataset.fallback;
          img.replaceWith(span);
        } else {
          img.remove();
        }
      }, { once: true });
    });
  }

  function money(amount, currency) {
    const cur = currency || META.currency || 'AUD';
    const n = Number(amount) || 0;
    try {
      return new Intl.NumberFormat(undefined, {
        style: 'currency', currency: cur,
        minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2
      }).format(n);
    } catch (e) {
      return `${cur} ${n.toLocaleString()}`;
    }
  }
  const projectCost = (p) => {
    const c = p.cost || {};
    const breakdown = c.breakdown || [];
    const total = c.total != null ? Number(c.total) : breakdown.reduce((a, b) => a + (Number(b.amount) || 0), 0);
    return { total, breakdown, currency: c.currency || META.currency || 'AUD', note: c.note || '' };
  };

  // Images can be written as "path.jpg" or { src: "path.jpg", caption: "..." }
  const toImages = (list) => (list || [])
    .filter(Boolean)
    .map((x) => (typeof x === 'string' ? { src: x, caption: '' } : { src: x.src, caption: x.caption || '' }))
    .filter((x) => x.src);
  const projectImages = (p) => {
    const seen = new Set();
    return toImages([p.image, ...(p.gallery || [])]).filter((x) => !seen.has(x.src) && seen.add(x.src));
  };

  /* ---------------------------------------------------------- lightbox */
  const lightbox = { el: null, items: [], i: 0 };

  function openLightbox(items, i = 0) {
    if (!items || !items.length) return;
    lightbox.items = items;
    lightbox.i = i;
    renderLightbox(0);
    if (!lightbox.el.open) lightbox.el.showModal();
  }

  function renderLightbox(dir) {
    const { items, i, el } = lightbox;
    const it = items[i];
    const img = $('.lightbox__img', el);
    img.src = it.src;
    img.alt = it.caption || '';
    $('.lightbox__caption', el).textContent = it.caption;
    $('.lightbox__count', el).textContent = items.length > 1 ? `${pad(i + 1)} / ${pad(items.length)}` : '';
    $$('.lightbox__nav', el).forEach((b) => { b.hidden = items.length < 2; });
    if (dir && !reduceMotion) {
      img.style.setProperty('--swap-from', `${dir * 40}px`);
      img.classList.remove('is-swapping');
      void img.offsetWidth;
      img.classList.add('is-swapping');
    }
  }

  function stepLightbox(dir) {
    const n = lightbox.items.length;
    if (n < 2) return;
    lightbox.i = (lightbox.i + dir + n) % n;
    renderLightbox(dir);
  }

  function wireLightbox() {
    const el = lightbox.el = $('#lightbox');
    $('.lightbox__close', el).addEventListener('click', () => el.close());
    $('.lightbox__prev', el).addEventListener('click', () => stepLightbox(-1));
    $('.lightbox__next', el).addEventListener('click', () => stepLightbox(1));
    el.addEventListener('click', (e) => { if (e.target === el || e.target.classList.contains('lightbox__stage')) el.close(); });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.stopPropagation(); stepLightbox(1); }
      if (e.key === 'ArrowLeft') { e.stopPropagation(); stepLightbox(-1); }
    });
    let sx = 0;
    el.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
    el.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 60) stepLightbox(dx < 0 ? 1 : -1);
    }, { passive: true });
    el.addEventListener('close', () => { $('.lightbox__img', el).removeAttribute('src'); });
  }

  function countUp(el, target, { duration = 1200, format = (v) => Math.round(v) } = {}) {
    if (reduceMotion) { el.textContent = format(target); return; }
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = format(target * eased);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* -------------------------------------------------------------- meta */
  function renderMeta() {
    document.title = `${META.name || 'Portfolio'} — Portfolio`;
    $$('[data-bind]').forEach((el) => {
      const v = META[el.dataset.bind];
      if (v != null && v !== '') el.textContent = v;
    });
    if (!META.status) $('#hero-status').hidden = true;

    const initials = String(META.name || '').split(/\s+/).filter(Boolean).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
    $$('[data-initials]').forEach((el) => { el.textContent = initials || '—'; });

    const socials = (META.socials || []).map((s) => {
      const isMail = /^mailto:/i.test(s.url);
      return `<a class="social" href="${esc(s.url)}" ${isMail ? '' : 'target="_blank" rel="noopener"'}>${icon(s.icon)}<span>${esc(s.label)}</span></a>`;
    }).join('');
    $$('[data-socials]').forEach((el) => { el.innerHTML = socials; });
    $$('[data-email]').forEach((el) => { el.href = `mailto:${META.email || ''}`; });

    if (META.resume) {
      const r = $('#resume-btn');
      r.href = META.resume;
      r.hidden = false;
    }
    $('#year').textContent = new Date().getFullYear();
  }

  /* -------------------------------------------------------------- hero */
  function renderHero() {
    const el = $('#hero-name');
    const name = META.name || 'Your Name';
    let d = 0;
    el.setAttribute('aria-label', name);
    el.innerHTML = name.split(/\s+/).filter(Boolean).map((word) =>
      `<span class="word" aria-hidden="true">${Array.from(word).map((ch) => `<span class="ch" style="--d:${d++}">${esc(ch)}</span>`).join('')}</span>`
    ).join(' ');
  }

  function typedRoles() {
    const el = $('#typed');
    const words = (D.about && D.about.typed && D.about.typed.length) ? D.about.typed : [META.role || ''];
    if (reduceMotion || words.length === 1) { el.textContent = words[0]; return; }
    let w = 0, i = 0, deleting = false;
    const tick = () => {
      const word = words[w];
      if (!deleting) {
        i++;
        el.textContent = word.slice(0, i);
        if (i >= word.length) { deleting = true; return setTimeout(tick, 1800); }
        return setTimeout(tick, 60 + Math.random() * 50);
      }
      i--;
      el.textContent = word.slice(0, i);
      if (i <= 0) { deleting = false; w = (w + 1) % words.length; return setTimeout(tick, 380); }
      setTimeout(tick, 32);
    };
    setTimeout(tick, 900);
  }

  function hudClock() {
    const el = $('#hud-time');
    let fmt;
    try {
      fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: META.timezone || undefined });
    } catch (e) {
      fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    const tick = () => { el.textContent = fmt.format(new Date()); };
    tick();
    setInterval(tick, 1000);
  }

  // Interactive dot-grid: dots near the cursor glow, get pushed away and link to the pointer.
  function heroCanvas() {
    const canvas = $('#hero-canvas');
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    const GAP = 34, RADIUS = 170;
    let w = 0, h = 0, pts = [], colors = {}, running = false, raf = 0;
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      colors = { accent: cs.getPropertyValue('--accent').trim(), dot: cs.getPropertyValue('--faint').trim() };
    };
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pts = [];
      for (let y = GAP / 2; y < h; y += GAP) for (let x = GAP / 2; x < w; x += GAP) pts.push({ ox: x, oy: y, x, y });
      if (!running) draw(0);
    };
    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      mouse.x += (mouse.tx - mouse.x) * 0.15;
      mouse.y += (mouse.ty - mouse.y) * 0.15;
      const scanY = (t * 0.06) % (h + 200) - 100;

      for (const p of pts) {
        const dx = p.ox - mouse.x, dy = p.oy - mouse.y;
        const dist = Math.hypot(dx, dy) || 1;
        const s = dist < RADIUS ? 1 - dist / RADIUS : 0;
        const tx = p.ox + (dx / dist) * s * 16;
        const ty = p.oy + (dy / dist) * s * 16;
        p.x += (tx - p.x) * 0.2;
        p.y += (ty - p.y) * 0.2;
        const scan = Math.max(0, 1 - Math.abs(p.oy - scanY) / 60) * 0.5;
        const wave = (Math.sin(p.ox * 0.012 + p.oy * 0.008 + t * 0.0012) + 1) * 0.5;

        if (s > 0.32) {
          ctx.globalAlpha = (s - 0.32) * 0.55;
          ctx.strokeStyle = colors.accent;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(p.x, p.y); ctx.stroke();
        }
        ctx.globalAlpha = Math.min(1, 0.16 + wave * 0.12 + s * 0.85 + scan);
        ctx.fillStyle = s > 0.05 || scan > 0.15 ? colors.accent : colors.dot;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1 + s * 1.8 + scan * 1.2, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
    };
    const loop = (t) => { draw(t); raf = requestAnimationFrame(loop); };

    readColors();
    resize();
    window.addEventListener('resize', debounce(resize, 150));
    document.addEventListener('themechange', () => { readColors(); if (!running) draw(0); });
    if (reduceMotion) return;

    const hero = $('#home');
    hero.addEventListener('pointermove', (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - r.left; mouse.ty = e.clientY - r.top;
      if (mouse.x < -1000) { mouse.x = mouse.tx; mouse.y = mouse.ty; }
    });
    hero.addEventListener('pointerleave', () => { mouse.tx = mouse.ty = -9999; });
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) { running = true; raf = requestAnimationFrame(loop); }
      else if (!entry.isIntersecting && running) { running = false; cancelAnimationFrame(raf); }
    }).observe(hero);
  }

  /* ------------------------------------------------------------- about */
  function renderAbout() {
    const a = D.about || {};
    const img = $('#profile-photo');
    img.alt = `Portrait of ${META.name || 'me'}`;
    img.addEventListener('error', () => {
      if (!img.src.endsWith('profile-placeholder.svg')) img.src = 'images/profile-placeholder.svg';
    });
    if (a.photo) img.src = a.photo;

    $('#about-text').innerHTML = (a.paragraphs || []).map((p, i) => `<p class="${i === 0 ? 'lead' : ''}">${p}</p>`).join('');

    $('#about-facts').innerHTML = (a.facts || []).map((f) =>
      `<li class="fact">${icon(f.icon)}<div><small>${esc(f.label)}</small><span>${esc(f.value)}</span></div></li>`
    ).join('');

    const autoCount = {
      projects: PROJECTS.length,
      languages: (D.languages || []).length,
      countries: (TRAVEL.visited || []).length,
      coding: (D.coding || []).length
    };
    const stats = (a.stats || []).map((s) => ({ ...s, value: s.auto ? autoCount[s.auto] ?? 0 : Number(s.value) || 0 }));
    const box = $('#about-stats');
    box.innerHTML = stats.map((s) =>
      `<div class="stat"><strong><span data-count="${s.value}">0</span><em>${esc(s.suffix || '')}</em></strong><span>${esc(s.label)}</span></div>`
    ).join('');
    onceVisible(box, () => $$('[data-count]', box).forEach((el) => countUp(el, Number(el.dataset.count))));
  }

  /* ---------------------------------------------------------- timeline */
  function renderTimeline() {
    const items = D.timeline || [];
    const list = $('#timeline');
    list.innerHTML = items.map((t, i) => {
      const isWork = t.type === 'work';
      const points = t.points || [];
      const tags = t.tags || [];
      const hasMore = points.length || tags.length;
      return `
      <li class="tl-item reveal" data-type="${isWork ? 'work' : 'education'}">
        <span class="tl-marker ${t.logo ? 'tl-marker--logo' : ''}">${t.logo
          ? `<img src="${esc(t.logo)}" alt="${esc(t.org)} logo" loading="lazy">`
          : icon(isWork ? 'briefcase' : 'grad')}</span>
        <article class="tl-card">
          <div class="tl-head">
            <p class="tl-date mono">${esc(t.start)}${t.end ? ' — ' + esc(t.end) : ''}</p>
            <span class="tl-type mono">${isWork ? 'Work' : 'Education'}</span>
          </div>
          <h3 class="tl-title">${esc(t.title)}</h3>
          <p class="tl-org">${esc(t.org)}${t.location ? ` <span class="tl-loc">· ${esc(t.location)}</span>` : ''}</p>
          ${t.summary ? `<p class="tl-summary">${esc(t.summary)}</p>` : ''}
          ${hasMore ? `
            <button class="tl-toggle mono" type="button" aria-expanded="false" aria-controls="tl-more-${i}">Details ${icon('chevron-down')}</button>
            <div class="tl-more" id="tl-more-${i}">
              <div>
                ${points.length ? `<ul>${points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}
                ${tags.length ? `<div class="tl-tags">${tags.map((s) => tagHTML(s, true)).join('')}</div>` : ''}
              </div>
            </div>` : ''}
        </article>
      </li>`;
    }).join('');

    $$('.tl-toggle', list).forEach((btn) => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.tl-card');
        const open = card.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(open));
        btn.firstChild.textContent = open ? 'Hide ' : 'Details ';
      });
    });

    const counts = { all: items.length, education: items.filter((t) => t.type !== 'work').length, work: items.filter((t) => t.type === 'work').length };
    $$('#tl-tabs .tab').forEach((tab) => {
      tab.insertAdjacentHTML('beforeend', `<sup>${counts[tab.dataset.filter]}</sup>`);
      tab.addEventListener('click', () => {
        $$('#tl-tabs .tab').forEach((t) => t.setAttribute('aria-selected', String(t === tab)));
        const f = tab.dataset.filter;
        $$('.tl-item', list).forEach((item) => {
          const show = f === 'all' || item.dataset.type === f;
          if (show && item.hidden) {
            item.classList.remove('is-entering');
            void item.offsetWidth;
            item.classList.add('is-entering');
          }
          item.hidden = !show;
        });
      });
    });
  }

  /* ---------------------------------------------------------- projects */
  let pFilter = 'All';
  let pQuery = '';
  const STATUS_TONE = { completed: 'ok', done: 'ok', shipped: 'ok', 'in progress': 'warn', ongoing: 'warn', wip: 'warn', prototype: 'cyan', concept: 'cyan' };

  function renderProjectFilters() {
    const freq = new Map();
    PROJECTS.forEach((p) => (p.skills || []).forEach((s) => freq.set(s, (freq.get(s) || 0) + 1)));
    const skills = [...freq.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    const box = $('#proj-filters');
    box.innerHTML = [`<button class="chip" type="button" data-skill="All" aria-pressed="true">All<small>${PROJECTS.length}</small></button>`]
      .concat(skills.map(([s, n]) => `<button class="chip" type="button" data-skill="${esc(s)}" aria-pressed="false">${esc(s)}<small>${n}</small></button>`))
      .join('');
    box.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (chip) setSkillFilter(chip.dataset.skill);
    });
  }

  function setSkillFilter(skill, { scroll = false } = {}) {
    pFilter = skill || 'All';
    let active = null;
    $$('#proj-filters .chip').forEach((c) => {
      const on = norm(c.dataset.skill) === norm(pFilter);
      c.setAttribute('aria-pressed', String(on));
      if (on) active = c;
    });
    if (active) active.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
    applyProjectFilter();
    if (scroll) $('#projects').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  function cardHTML(p, i) {
    const skills = p.skills || [];
    const shown = p.featured ? skills.slice(0, 6) : skills.slice(0, 3);
    const extra = skills.length - shown.length;
    const tone = STATUS_TONE[norm(p.status)] || 'ok';
    const photos = projectImages(p);
    const cover = photos[0];
    return `
    <div class="proj-cell reveal ${p.featured ? 'is-featured' : ''}" style="--i:${i % 6}">
      <button class="proj-card" type="button" data-index="${i}" aria-haspopup="dialog" aria-label="${esc(p.title)} — view details">
        ${cover ? `<span class="proj-card__img" style="background-image:url('${esc(cover.src)}')" aria-hidden="true"></span>` : ''}
        ${photos.length > 1 ? `<span class="proj-card__photos mono" aria-hidden="true">${icon('image')} ${photos.length}</span>` : ''}
        <span class="proj-card__glow" aria-hidden="true"></span>
        <span class="proj-card__num" aria-hidden="true">${pad(i + 1)}</span>
        <span class="proj-card__top mono">
          <span>${esc(p.category || 'Project')}${p.year ? ' · ' + esc(p.year) : ''}</span>
          ${p.status ? `<span class="status" data-tone="${tone}">${esc(p.status)}</span>` : ''}
        </span>
        <span class="proj-card__body">
          <span class="proj-card__title">${esc(p.title)}</span>
          <span class="proj-card__desc">${esc(p.short)}</span>
        </span>
        <span class="proj-card__tags">${shown.map((s) => tagHTML(s)).join('')}${extra > 0 ? `<span class="tag tag--more">+${extra}</span>` : ''}</span>
        <span class="proj-card__more mono">View details ${icon('arrow-right')}</span>
      </button>
    </div>`;
  }

  function renderProjects() {
    const grid = $('#proj-grid');
    grid.innerHTML = PROJECTS.map(cardHTML).join('');
    $$('.proj-card', grid).forEach((card) => {
      card.addEventListener('click', () => openProject(Number(card.dataset.index)));
      if (finePointer && !reduceMotion) {
        card.addEventListener('pointermove', (e) => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width;
          const y = (e.clientY - r.top) / r.height;
          card.style.setProperty('--mx', `${x * 100}%`);
          card.style.setProperty('--my', `${y * 100}%`);
          card.style.setProperty('--rx', `${((0.5 - y) * 7).toFixed(2)}deg`);
          card.style.setProperty('--ry', `${((x - 0.5) * 7).toFixed(2)}deg`);
        });
        card.addEventListener('pointerleave', () => {
          card.style.setProperty('--rx', '0deg');
          card.style.setProperty('--ry', '0deg');
        });
      }
    });

    const search = $('#proj-search');
    search.addEventListener('input', debounce(() => { pQuery = norm(search.value); applyProjectFilter(); }, 120));
    $('#proj-reset').addEventListener('click', () => { search.value = ''; pQuery = ''; setSkillFilter('All'); });
    applyProjectFilter();
  }

  function projectMatches(p) {
    const skillOk = pFilter === 'All' || (p.skills || []).some((s) => norm(s) === norm(pFilter));
    if (!skillOk) return false;
    if (!pQuery) return true;
    const hay = [p.title, p.short, p.category, p.year, p.status, ...(p.skills || [])].join(' ').toLowerCase();
    return pQuery.split(/\s+/).every((word) => hay.includes(word));
  }

  function applyProjectFilter() {
    let shown = 0;
    $$('.proj-cell').forEach((cell) => {
      const p = PROJECTS[Number($('.proj-card', cell).dataset.index)];
      const ok = projectMatches(p);
      cell.hidden = !ok;
      if (ok) shown++;
    });
    $('#proj-count').textContent = shown === PROJECTS.length
      ? `${PROJECTS.length} project${PROJECTS.length === 1 ? '' : 's'}`
      : `Showing ${shown} of ${PROJECTS.length}${pFilter !== 'All' ? ` · ${pFilter}` : ''}`;
    $('#proj-empty').hidden = shown !== 0;
  }

  const visibleProjectIndices = () => {
    const vis = PROJECTS.map((p, i) => i).filter((i) => projectMatches(PROJECTS[i]));
    return vis.length ? vis : PROJECTS.map((p, i) => i);
  };

  /* -------------------------------------------------------------- modal */
  const modal = $('#project-modal');
  let current = -1;
  let lastTrigger = null;

  function fillModal(i) {
    const p = PROJECTS[i];
    const cost = projectCost(p);
    const vis = visibleProjectIndices();
    const pos = vis.indexOf(i);

    $('#m-kicker').textContent = [`P/${pad(i + 1)}`, p.category, p.year, p.status].filter(Boolean).join('  ·  ');
    $('#m-title').textContent = p.title;

    // photo gallery: big image + thumbnails; click the big image for full screen
    const media = $('#m-media');
    const shots = projectImages(p);
    media.hidden = !shots.length;
    media.innerHTML = shots.length ? `
      <button class="media-main" type="button" aria-label="View image full screen">
        <img src="${esc(shots[0].src)}" alt="${esc(shots[0].caption || p.title)}">
        <span class="media-zoom mono">${icon('zoom')} ${shots.length > 1 ? `1 / ${shots.length}` : 'Expand'}</span>
      </button>
      <p class="media-caption">${esc(shots[0].caption)}</p>
      ${shots.length > 1 ? `<div class="media-thumbs">${shots.map((s, k) => `
        <button class="media-thumb ${k === 0 ? 'is-active' : ''}" type="button" data-k="${k}" aria-label="Show image ${k + 1}">
          <img src="${esc(s.src)}" alt="" loading="lazy">
        </button>`).join('')}</div>` : ''}` : '';
    let shown = 0;
    media.onclick = (e) => {
      const thumb = e.target.closest('.media-thumb');
      if (thumb) {
        shown = Number(thumb.dataset.k);
        const s = shots[shown];
        const main = $('.media-main img', media);
        main.src = s.src;
        main.alt = s.caption || p.title;
        $('.media-caption', media).textContent = s.caption;
        $('.media-zoom', media).lastChild.textContent = ` ${shown + 1} / ${shots.length}`;
        $$('.media-thumb', media).forEach((t) => t.classList.toggle('is-active', t === thumb));
        return;
      }
      if (e.target.closest('.media-main')) openLightbox(shots, shown);
    };

    $('#m-overview').innerHTML = (p.details || [p.short]).map((x) => `<p>${x}</p>`).join('');
    const hl = p.highlights || [];
    $('#m-highlights-wrap').hidden = !hl.length;
    $('#m-highlights').innerHTML = hl.map((h) => `<li>${esc(h)}</li>`).join('');

    $('#m-skills').innerHTML = (p.skills || []).map((s) => tagHTML(s, true)).join('');

    const facts = [['Role', p.role], ['Duration', p.duration], ['Team size', p.team], ['Status', p.status], ['Year', p.year]].filter(([, v]) => v);
    $('#m-facts-wrap').hidden = !facts.length;
    $('#m-facts').innerHTML = facts.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join('');

    // cost
    const costEl = $('#m-cost');
    costEl.closest('.cost-card').hidden = !p.cost;
    countUp(costEl, cost.total, { duration: 900, format: (v) => money(cost.total % 1 ? v : Math.round(v), cost.currency) });
    $('#m-cost-note').textContent = cost.note || (cost.total === 0 && !cost.breakdown.length ? 'No cost' : '');
    const max = Math.max(...cost.breakdown.map((b) => Number(b.amount) || 0), 1);
    $('#m-cost-table').innerHTML = cost.breakdown.length ? `
      <tbody>${cost.breakdown.map((b) => `
        <tr><td>${esc(b.item)}<span class="cost-bar"><span style="--w:${((Number(b.amount) || 0) / max) * 100}%"></span></span></td>
        <td>${money(b.amount, cost.currency)}</td></tr>`).join('')}
      </tbody>
      <tfoot><tr><td>Total</td><td>${money(cost.total, cost.currency)}</td></tr></tfoot>` : '';

    $('#m-links').innerHTML = (p.links || []).map((l, k) =>
      `<a class="btn ${k === 0 ? 'btn--primary' : 'btn--ghost'} btn--sm" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ${icon('external')}</a>`
    ).join('');

    $('#m-counter').textContent = `${pad(pos + 1)} / ${pad(vis.length)}`;
    $('#m-prev').disabled = $('#m-next').disabled = vis.length < 2;
    wireImageFallbacks(modal);
  }

  function openProject(i, { direction = 0 } = {}) {
    if (i < 0 || i >= PROJECTS.length) return;
    current = i;
    if (!modal.open) lastTrigger = document.activeElement;
    fillModal(i);
    const body = $('#m-body');
    body.scrollTop = 0;
    if (direction && !reduceMotion) {
      body.style.setProperty('--swap-from', `${direction * 28}px`);
      body.classList.remove('is-swapping');
      void body.offsetWidth;
      body.classList.add('is-swapping');
    }
    if (!modal.open) modal.showModal();
    const id = PROJECTS[i].id || `project-${i + 1}`;
    history.replaceState(null, '', `#project/${encodeURIComponent(id)}`);
  }

  function closeProject() {
    if (!modal.open) return;
    const finish = () => {
      modal.classList.remove('is-closing');
      modal.close();
    };
    if (reduceMotion) return finish();
    modal.classList.add('is-closing');
    setTimeout(finish, 190);
  }

  function stepProject(dir) {
    const vis = visibleProjectIndices();
    let k = vis.indexOf(current);
    if (k < 0) k = 0;
    openProject(vis[(k + dir + vis.length) % vis.length], { direction: dir });
  }

  function wireModal() {
    $('#m-close').addEventListener('click', closeProject);
    $('#m-prev').addEventListener('click', () => stepProject(-1));
    $('#m-next').addEventListener('click', () => stepProject(1));
    modal.addEventListener('cancel', (e) => { e.preventDefault(); closeProject(); });
    modal.addEventListener('click', (e) => { if (e.target === modal) closeProject(); });
    modal.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') stepProject(1);
      if (e.key === 'ArrowLeft') stepProject(-1);
    });
    modal.addEventListener('close', () => {
      history.replaceState(null, '', '#projects');
      const card = $(`.proj-card[data-index="${current}"]`);
      (card || lastTrigger)?.focus({ preventScroll: true });
    });

    // swipe left/right on touch screens
    let sx = 0, sy = 0;
    modal.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    modal.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) stepProject(dx < 0 ? 1 : -1);
    }, { passive: true });

    // deep link: index.html#project/project-01
    const m = location.hash.match(/^#project\/(.+)$/);
    if (m) {
      const id = decodeURIComponent(m[1]);
      const idx = PROJECTS.findIndex((p, i) => (p.id || `project-${i + 1}`) === id);
      if (idx > -1) setTimeout(() => openProject(idx), 300);
    }
  }

  /* ------------------------------------------------------------ skills */
  function renderLanguages() {
    const grid = $('#lang-grid');
    const L = D.languages || [];
    const subLabel = { speaking: 'Speaking', listening: 'Listening', reading: 'Reading', writing: 'Writing' };
    grid.innerHTML = L.map((l, i) => {
      const flag = l.flag ? FLAG(l.flag) : '';
      const subs = Object.entries(l.skills || {});
      return `
      <div class="lang-cell reveal" style="--i:${i}">
        <button class="lang-card" type="button" aria-pressed="false" aria-label="${esc(l.name)} — ${esc(l.level)}. Show proficiency">
          <span class="lang-card__inner">
            <span class="lang-face lang-face--front" style="--flag:url('${flag}')">
              <span class="flag" aria-hidden="true">
                ${flag ? `<img class="flag__bloom" src="${flag}" alt="" loading="lazy" data-fallback><img class="flag__img" src="${flag}" alt="" loading="lazy" data-fallback>` : ''}
                <span class="flag__shine"></span>
              </span>
              <span class="lang-name">${esc(l.name)}</span>
              <span class="lang-native">${esc(l.native || '')}</span>
              <span class="lang-hint mono">${icon('flip')} Proficiency</span>
            </span>
            <span class="lang-face lang-face--back">
              <span class="lang-back-head">
                ${flag ? `<img class="mini-flag" src="${FLAG(l.flag, 80)}" alt="" loading="lazy" data-fallback>` : ''}
                <span class="lang-back-name">${esc(l.name)}</span>
                ${l.cefr ? `<span class="cefr mono">${esc(l.cefr)}</span>` : ''}
              </span>
              <span class="lang-level">${esc(l.level || '')}</span>
              <span class="meter" role="img" aria-label="Overall ${Number(l.percent) || 0}%"><span style="--v:${Number(l.percent) || 0}%"></span></span>
              ${subs.length ? `<span class="sub-meters">${subs.map(([k, v]) => `
                <span class="sub-meter"><span class="mono"><span>${esc(subLabel[k] || k)}</span><span>${Number(v) || 0}</span></span>
                <span class="meter meter--sm"><span style="--v:${Number(v) || 0}%"></span></span></span>`).join('')}
              </span>` : ''}
              ${l.note ? `<span class="lang-note">${esc(l.note)}</span>` : ''}
            </span>
          </span>
        </button>
      </div>`;
    }).join('');

    $$('.lang-card', grid).forEach((card) => {
      card.addEventListener('click', () => {
        const flipped = card.classList.toggle('is-flipped');
        card.setAttribute('aria-pressed', String(flipped));
      });
      // Moving the mouse away "switches the flag off" again — and flips the card back.
      card.addEventListener('pointerleave', (e) => {
        if (e.pointerType === 'mouse' && card.classList.contains('is-flipped')) {
          card.classList.remove('is-flipped');
          card.setAttribute('aria-pressed', 'false');
        }
      });
    });
  }

  const levelLabel = (v) => (v >= 85 ? 'Expert' : v >= 70 ? 'Advanced' : v >= 50 ? 'Intermediate' : 'Familiar');

  function renderCoding() {
    const grid = $('#code-grid');
    grid.innerHTML = (D.coding || []).map((c, i) => {
      const n = projectsUsing(c.name).length;
      const level = Math.max(0, Math.min(100, Number(c.level) || 0));
      const tag = n ? 'button' : 'div';
      const inner = `
        <span class="ring">
          <svg viewBox="0 0 64 64" aria-hidden="true"><circle class="ring-bg" cx="32" cy="32" r="28"/><circle class="ring-fg" cx="32" cy="32" r="28" style="--p:${level}"/></svg>
          ${c.icon ? skillImg(c) : `<span class="mono-icon">${monogram(c.name)}</span>`}
        </span>
        <span class="code-name">${esc(c.name)}</span>
        <span class="code-meta mono">${levelLabel(level)}${c.years ? ' · ' + esc(c.years) : ''}</span>
        ${n ? `<span class="code-link mono">${n} project${n === 1 ? '' : 's'} →</span>` : ''}`;
      return `<div class="code-cell reveal" style="--i:${i % 8}">
        <${tag} class="code-tile" ${n ? `type="button" data-skill="${esc(c.name)}" aria-label="${esc(c.name)}: ${levelLabel(level)}. Show ${n} related project${n === 1 ? '' : 's'}"` : ''}>${inner}</${tag}>
      </div>`;
    }).join('');
    grid.addEventListener('click', (e) => {
      const t = e.target.closest('[data-skill]');
      if (t) setSkillFilter(t.dataset.skill, { scroll: true });
    });
  }

  function renderFrameworks() {
    const grid = $('#fw-grid');
    grid.innerHTML = (D.frameworks || []).map((g, i) => `
      <div class="fw-group reveal" style="--i:${i}">
        <h4 class="fw-title mono">${esc(g.group)} <span>${pad((g.items || []).length)}</span></h4>
        <div class="fw-chips">
          ${(g.items || []).map((it) => {
            const n = projectsUsing(it.name).length;
            return n
              ? `<button class="fw-chip" type="button" data-skill="${esc(it.name)}" title="See ${n} related project${n === 1 ? '' : 's'}">${skillImg(it)}${esc(it.name)}<span class="badge">${n}</span></button>`
              : `<span class="fw-chip">${skillImg(it)}${esc(it.name)}</span>`;
          }).join('')}
        </div>
      </div>`).join('');
    grid.addEventListener('click', (e) => {
      const t = e.target.closest('[data-skill]');
      if (t) setSkillFilter(t.dataset.skill, { scroll: true });
    });
  }

  function renderSoftSkills() {
    $('#soft-grid').innerHTML = (D.softSkills || []).map((s, i) => `
      <li class="soft reveal" style="--i:${i}">
        <span class="soft-num mono">${pad(i + 1)}</span>
        ${icon(s.icon)}
        <h4>${esc(s.name)}</h4>
        <p>${esc(s.description || '')}</p>
      </li>`).join('');
  }

  /* --------------------------------------------------------- interests */
  function renderInterests() {
    const list = D.interests || [];
    const galleries = list.map((it) => toImages([it.image, ...(it.gallery || [])]));
    const grid = $('#interest-grid');
    grid.innerHTML = list.map((it, i) => {
      const imgs = galleries[i];
      const tag = imgs.length ? 'button' : 'article';
      return `
      <${tag} class="interest reveal ${imgs.length ? 'interest--photo' : ''}" style="--i:${i}" ${imgs.length ? `type="button" data-k="${i}" aria-label="${esc(it.title)}: view ${imgs.length} photo${imgs.length === 1 ? '' : 's'}"` : ''}>
        ${imgs.length ? `<span class="interest__media">
          <img src="${esc(imgs[0].src)}" alt="" loading="lazy"${it.imagePosition ? ` style="object-position:${esc(it.imagePosition)}"` : ''}>
          <span class="interest__count mono">${icon('image')} ${imgs.length}</span>
        </span>` : icon(it.icon, 'interest__ghost')}
        <span class="interest__body">
          ${icon(it.icon)}
          <span class="interest__title">${esc(it.title)}</span>
          <span class="interest__text">${esc(it.text || '')}</span>
        </span>
      </${tag}>`;
    }).join('');
    grid.addEventListener('click', (e) => {
      const card = e.target.closest('.interest--photo');
      if (card) openLightbox(galleries[Number(card.dataset.k)]);
    });
  }

  /* -------------------------------------------------------- travel map */
  const geo = { ready: false, chart: null, data: null, region: 'world' };
  const visited = TRAVEL.visited || [];

  function renderTravel() {
    const regionsTotal = visited.reduce((a, p) => a + (p.regions || []).length, 0);
    const countEl = $('#travel-count'), regEl = $('#travel-regions');
    onceVisible($('#travel'), () => { countUp(countEl, visited.length); countUp(regEl, regionsTotal); });
    if (!regionsTotal) regEl.closest('.tstat').hidden = true;

    $('#places').innerHTML = visited.map((p) => `
      <li><button class="place" type="button" data-code="${esc(p.code)}">
        <img src="${FLAG(p.code, 80)}" alt="" loading="lazy" data-fallback>${esc(p.name)}${(p.regions || []).length ? ` <small>${p.regions.length}</small>` : ''}${(p.photos || []).length ? icon('image', 'place__cam') : ''}
      </button></li>`).join('');
    $('#places').addEventListener('click', (e) => {
      const b = e.target.closest('.place');
      if (b) selectPlace(b.dataset.code, { zoom: true });
    });
    $('#map-back').addEventListener('click', () => { geo.region = 'world'; drawGeo(); $('#map-back').hidden = true; });

    if (TRAVEL.darkMap !== false) $('.gmap').classList.add('is-dark');
    if (visited[0]) selectPlace(visited[0].code, { zoom: false, lazy: true });

    // Load Google Charts only when the map is about to scroll into view.
    onceVisible($('#travel'), loadGeoChart, '400px');
  }

  function setGoogleMap(query, label) {
    const frame = $('#gmap');
    const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=${/,/.test(query) ? 6 : 4}&output=embed`;
    if (frame.dataset.src !== src) {
      frame.dataset.src = src;
      frame.src = src;
    }
    $('#gmap-label').textContent = label;
  }

  function selectPlace(code, { zoom = true } = {}) {
    const p = visited.find((v) => norm(v.code) === norm(code));
    if (!p) return;
    $$('.place').forEach((b) => b.classList.toggle('is-active', norm(b.dataset.code) === norm(code)));
    setGoogleMap(p.mapQuery || p.name, p.name);
    $('#gmap-note').textContent = p.note || '';
    const photos = toImages(p.photos);
    const box = $('#place-photos');
    box.hidden = !photos.length;
    box.innerHTML = photos.map((s, k) => `
      <button class="place-photo" type="button" data-k="${k}" aria-label="View photo ${k + 1} from ${esc(p.name)}">
        <img src="${esc(s.src)}" alt="${esc(s.caption)}" loading="lazy">
      </button>`).join('');
    box.onclick = (e) => {
      const b = e.target.closest('.place-photo');
      if (b) openLightbox(photos, Number(b.dataset.k));
    };
    if (zoom && (p.regions || []).length && geo.ready) {
      geo.region = p.code.toUpperCase();
      drawGeo();
      $('#map-back').hidden = false;
    }
  }

  function loadGeoChart() {
    const fail = () => { if (!geo.ready) { $('#geo-fallback').hidden = false; $('#geochart').hidden = true; $('#map-hint').hidden = true; } };
    const timer = setTimeout(fail, 12000);
    const s = document.createElement('script');
    s.src = 'https://www.gstatic.com/charts/loader.js';
    s.async = true;
    s.onload = () => {
      try {
        google.charts.load('current', { packages: ['geochart'] });
        google.charts.setOnLoadCallback(() => {
          clearTimeout(timer);
          geo.ready = true;
          drawGeo();
          window.addEventListener('resize', debounce(drawGeo, 200));
          document.addEventListener('themechange', drawGeo);
        });
      } catch (e) { fail(); }
    };
    s.onerror = () => { clearTimeout(timer); fail(); };
    document.head.appendChild(s);
  }

  function drawGeo() {
    if (!geo.ready) return;
    const cs = getComputedStyle(document.documentElement);
    const accent = cs.getPropertyValue('--accent').trim();
    const empty = cs.getPropertyValue('--map-empty').trim();
    const tip = (name, note) => `<div class="geo-tip"><strong>${esc(name)}</strong>${note ? `<span>${esc(note)}</span>` : ''}</div>`;

    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Region');
    data.addColumn('number', 'Visited');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });

    const isWorld = geo.region === 'world';
    if (isWorld) {
      visited.forEach((p) => data.addRow([p.code.toUpperCase(), 1, tip(p.name, (p.regions || []).length ? `${p.regions.length} regions · click to zoom` : p.note)]));
    } else {
      const place = visited.find((p) => p.code.toUpperCase() === geo.region) || { regions: [] };
      (place.regions || []).forEach((r) => {
        const code = typeof r === 'string' ? r : r.code;
        const name = typeof r === 'string' ? r : r.name || r.code;
        data.addRow([code, 1, tip(name, place.name)]);
      });
    }
    geo.data = data;

    const options = {
      region: isWorld ? 'world' : geo.region,
      resolution: isWorld ? 'countries' : 'provinces',
      backgroundColor: 'transparent',
      datalessRegionColor: empty,
      defaultColor: accent,
      colorAxis: { colors: [accent, accent], minValue: 0, maxValue: 1 },
      legend: 'none',
      tooltip: { isHtml: true, trigger: 'focus' },
      keepAspectRatio: true
    };

    if (!geo.chart) {
      geo.chart = new google.visualization.GeoChart($('#geochart'));
      google.visualization.events.addListener(geo.chart, 'select', () => {
        const sel = geo.chart.getSelection()[0];
        if (!sel || sel.row == null) return;
        const code = geo.data.getValue(sel.row, 0);
        if (geo.region === 'world') {
          selectPlace(code, { zoom: true });
        } else {
          const place = visited.find((p) => p.code.toUpperCase() === geo.region);
          const r = (place.regions || []).find((x) => (typeof x === 'string' ? x : x.code) === code);
          const name = typeof r === 'string' ? r : (r && r.name) || code;
          setGoogleMap(`${name}, ${place.name}`, name);
        }
      });
    }
    geo.chart.draw(data, options);
    $('#map-hint').textContent = isWorld ? 'Click a highlighted country' : 'Click a highlighted region';
  }

  /* --------------------------------------------------------- page chrome */
  function wireNav() {
    const nav = $('#nav');
    const progress = $('.progress');
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.setProperty('--p', max > 0 ? (scrollY / max).toFixed(4) : 0);
      nav.classList.toggle('is-scrolled', scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const links = $$('.nav__links a');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) links.forEach((a) => a.classList.toggle('is-active', a.hash === `#${e.target.id}`));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach((a) => { const s = $(a.hash); if (s) io.observe(s); });

    const btn = $('#menu-btn');
    const setMenu = (open) => {
      nav.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    btn.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
    links.forEach((a) => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  }

  function wireTheme() {
    const btn = $('#theme-toggle');
    const sync = () => {
      const t = document.documentElement.dataset.theme;
      btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    };
    btn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      store.set('theme', next);
      sync();
      document.dispatchEvent(new Event('themechange'));
    });
    sync();
  }

  function wireCursorGlow() {
    if (!finePointer || reduceMotion) return;
    const glow = $('.cursor-glow');
    let x = 0, y = 0, queued = false;
    window.addEventListener('pointermove', (e) => {
      x = e.clientX; y = e.clientY;
      document.body.classList.add('has-pointer');
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        glow.style.setProperty('--x', `${x}px`);
        glow.style.setProperty('--y', `${y}px`);
        queued = false;
      });
    }, { passive: true });
    document.addEventListener('pointerleave', () => document.body.classList.remove('has-pointer'));
  }

  function wireReveal() {
    const els = $$('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('is-in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));
  }

  function onceVisible(el, fn, margin = '0px') {
    if (!el) return;
    if (!('IntersectionObserver' in window)) { fn(); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { io.disconnect(); fn(); }
    }, { rootMargin: margin, threshold: 0.01 });
    io.observe(el);
  }

  function debounce(fn, ms) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
  }

  /* -------------------------------------------------------------- init */
  function init() {
    renderMeta();
    renderHero();
    renderAbout();
    renderTimeline();
    renderProjectFilters();
    renderProjects();
    renderLanguages();
    renderCoding();
    renderFrameworks();
    renderSoftSkills();
    renderInterests();
    renderTravel();
    wireImageFallbacks();
    wireModal();
    wireLightbox();
    wireNav();
    wireTheme();
    wireCursorGlow();
    wireReveal();
    typedRoles();
    hudClock();
    heroCanvas();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
