/* ==========================================================================
   The AI Engineer Roadmap — app
   ========================================================================== */
(function () {
  'use strict';

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const KEY = 'air.progress.v1';
  const THEME_KEY = 'air.theme';

  /* ---------- state ---------- */
  let done = new Set();
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) done = new Set(JSON.parse(raw));
  } catch (e) { /* private mode — run without persistence */ }

  const save = () => {
    try { localStorage.setItem(KEY, JSON.stringify(Array.from(done))); } catch (e) {}
  };

  const allModules = ROADMAP.flatMap(p => p.modules);
  const totalModules = allModules.length;

  /* ---------- theme ---------- */
  const root = document.documentElement;
  try {
    const t = localStorage.getItem(THEME_KEY);
    if (t) root.setAttribute('data-theme', t);
  } catch (e) {}

  $('#theme').addEventListener('click', () => {
    const cur = root.getAttribute('data-theme');
    const sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = cur ? (cur === 'dark' ? 'light' : 'dark') : (sysDark ? 'light' : 'dark');
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    toast(next === 'dark' ? 'Dark theme' : 'Light theme');
  });

  /* ---------- toast ---------- */
  let toastTimer;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 1900);
  }

  /* ---------- helpers ---------- */
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const hrs = m => m.hours[0] === 0 && m.hours[1] === 0
    ? 'ongoing'
    : (m.hours[0] === m.hours[1] ? m.hours[0] + 'h' + (m.per || '') : m.hours[0] + '–' + m.hours[1] + 'h');
  const phaseHrs = p => p.ongoing ? 'ongoing' : p.hours[0] + '–' + p.hours[1] + 'h';

  const VERDICT_LABEL = { free: 'Verdict — go free', paid: 'Verdict — worth paying', mixed: 'Verdict — mostly free, buy one thing' };

  /* ---------- render ---------- */
  function moduleHTML(m) {
    const isDone = done.has(m.id);
    const res = m.resources.map(r => `
      <li data-cost="${r.t}">
        <span class="tag ${r.t}">${r.t}</span>
        <span>
          <a class="rn" href="${esc(r.u)}" target="_blank" rel="noopener noreferrer">${esc(r.n)}</a>
          ${r.price ? ` <span class="price">${esc(r.price)}</span>` : ''}
          <span class="rd">${r.d}</span>
        </span>
      </li>`).join('');

    return `
    <div class="module${isDone ? ' done' : ''}" data-mod="${m.id}">
      <div class="mod-head">
        <input class="check" type="checkbox" ${isDone ? 'checked' : ''} data-check="${m.id}"
               aria-label="Mark module ${m.id} complete">
        <div class="mod-main" data-toggle-mod>
          <div class="mod-line">
            <span class="mod-id">${m.id}</span>
            <span class="mod-name">${esc(m.title)}</span>
            ${m.flag ? `<span class="flag">${esc(m.flag)}</span>` : ''}
            <span class="mod-hrs">${hrs(m)}</span>
          </div>
          <div class="mod-topics">${m.topics}</div>
        </div>
      </div>
      <div class="mod-body"><div><div class="mod-inner">
        <ul class="res">${res}</ul>
        <div class="verdict ${m.verdict}">
          <span class="vh">${VERDICT_LABEL[m.verdict]}</span>${m.verdictText}
        </div>
        <div class="buildbox"><span class="vh">Build this</span>${m.build}</div>
      </div></div></div>
    </div>`;
  }

  function phaseHTML(p) {
    const skip = p.skipTest && p.skipTest.length ? `
      <details class="skiptest">
        <summary>Skip test — answer these and skip the phase</summary>
        <div class="st-body">
          <ol>${p.skipTest.map(q => `<li>${q}</li>`).join('')}</ol>
          ${p.skipRule ? `<p class="rule">${p.skipRule}</p>` : ''}
        </div>
      </details>` : '';

    return `
    <div class="phase" data-phase="${p.id}">
      <div class="phase-card">
        <button class="phase-head" data-toggle-phase aria-expanded="false">
          <div class="badge">${p.icon}<span class="num">${p.id}</span></div>
          <div class="phase-title">
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.tagline)}</p>
          </div>
          <div class="phase-meta">
            <span class="hours">${phaseHrs(p)}</span>
            <span class="minibar"><i></i></span>
            <span class="caret">›</span>
          </div>
        </button>
        <div class="phase-body"><div><div class="phase-inner">
          <p class="why">${p.why}</p>
          ${skip}
          ${p.modules.map(moduleHTML).join('')}
          <div class="donebox"><b>Done when:</b> ${p.done}</div>
        </div></div></div>
      </div>
    </div>`;
  }

  $('#rail').innerHTML = ROADMAP.map(phaseHTML).join('');

  /* ---------- stats ---------- */
  const allRes = allModules.flatMap(m => m.resources);
  $('#modCount').textContent = totalModules;
  $('#resCount').textContent = allRes.length;
  $('#freePct').textContent = Math.round(allRes.filter(r => r.t === 'free').length / allRes.length * 100) + '%';

  /* ---------- projects + spend tables ---------- */
  $('#projTable').innerHTML = PROJECTS.map(p => `
    <tr>
      <td class="num">${p.n}</td>
      <td><b>${p.star ? '<span class="star">★</span> ' : ''}${esc(p.name)}</b></td>
      <td class="num">${p.phase}</td>
      <td>${p.proves}</td>
    </tr>`).join('');

  $('#spendTable').innerHTML = SPEND.map(s => `
    <tr>
      <td><b>${esc(s.item)}</b></td>
      <td class="cost">${esc(s.cost)}</td>
      <td><span class="pill ${s.v}">${s.v === 'buy' ? 'Buy' : s.v === 'maybe' ? 'Optional' : 'Free'}</span></td>
      <td>${esc(s.why)}</td>
    </tr>`).join('');

  $('#neverBuy').innerHTML = NEVER_BUY.map(x => `<li>${esc(x)}</li>`).join('');

  /* ---------- progress ---------- */
  function updateProgress() {
    const n = allModules.filter(m => done.has(m.id)).length;
    const pct = Math.round(n / totalModules * 100);
    $('#pct').textContent = pct + '%';
    const C = 2 * Math.PI * 9;
    $('#ring').style.strokeDashoffset = String(C - (C * pct / 100));

    ROADMAP.forEach(p => {
      const el = $(`.phase[data-phase="${p.id}"]`);
      if (!el) return;
      const d = p.modules.filter(m => done.has(m.id)).length;
      const frac = p.modules.length ? d / p.modules.length : 0;
      $('.minibar i', el).style.width = (frac * 100) + '%';
      el.classList.toggle('complete', frac === 1);
    });
  }

  /* ---------- interaction ---------- */
  $('#rail').addEventListener('click', e => {
    const phaseHead = e.target.closest('[data-toggle-phase]');
    if (phaseHead) {
      const ph = phaseHead.closest('.phase');
      const open = ph.classList.toggle('open');
      phaseHead.setAttribute('aria-expanded', String(open));
      return;
    }
    const modHead = e.target.closest('[data-toggle-mod]');
    if (modHead) { modHead.closest('.module').classList.toggle('open'); }
  });

  $('#rail').addEventListener('change', e => {
    const cb = e.target.closest('[data-check]');
    if (!cb) return;
    const id = cb.dataset.check;
    if (cb.checked) { done.add(id); } else { done.delete(id); }
    cb.closest('.module').classList.toggle('done', cb.checked);
    save();
    updateProgress();
    applyFilters();
  });

  /* expand / collapse all */
  $('#expandAll').addEventListener('click', () => {
    const anyClosed = $$('.phase:not(.hidden)').some(p => !p.classList.contains('open'));
    $$('.phase').forEach(p => {
      p.classList.toggle('open', anyClosed);
      const h = $('[data-toggle-phase]', p);
      if (h) h.setAttribute('aria-expanded', String(anyClosed));
    });
    toast(anyClosed ? 'All phases expanded' : 'All phases collapsed');
  });

  /* ---------- filtering ---------- */
  const state = { q: '', free: false, paid: false, todo: false };

  function applyFilters() {
    const q = state.q.trim().toLowerCase();
    let visibleModules = 0;

    ROADMAP.forEach(p => {
      const pEl = $(`.phase[data-phase="${p.id}"]`);
      let phaseHas = 0;

      p.modules.forEach(m => {
        const mEl = $(`.module[data-mod="${m.id}"]`, pEl);
        if (!mEl) return;

        let ok = true;

        if (q) {
          const hay = [
            m.id, m.title, m.topics, m.verdictText, m.build, m.flag || '',
            p.title, p.tagline,
            m.resources.map(r => r.n + ' ' + r.d).join(' ')
          ].join(' ').toLowerCase();
          ok = hay.includes(q);
        }
        if (ok && state.todo && done.has(m.id)) ok = false;
        if (ok && state.free && !m.resources.some(r => r.t === 'free')) ok = false;
        if (ok && state.paid && !m.resources.some(r => r.t === 'paid')) ok = false;

        mEl.classList.toggle('hidden', !ok);
        if (ok) { phaseHas++; visibleModules++; }

        // resource-level cost filter
        $$('.res li', mEl).forEach(li => {
          const c = li.dataset.cost;
          let show = true;
          if (state.free && !state.paid) show = c === 'free';
          if (state.paid && !state.free) show = c === 'paid';
          li.classList.toggle('hidden', !show);
        });
      });

      pEl.classList.toggle('hidden', phaseHas === 0);
      // auto-open phases when actively searching/filtering
      if ((q || state.free || state.paid || state.todo) && phaseHas > 0) {
        pEl.classList.add('open');
        const h = $('[data-toggle-phase]', pEl);
        if (h) h.setAttribute('aria-expanded', 'true');
        if (q) $$('.module:not(.hidden)', pEl).forEach(m => m.classList.add('open'));
      }
    });

    $('#empty').style.display = visibleModules ? 'none' : 'block';
  }

  const qEl = $('#q');
  let qt;
  qEl.addEventListener('input', () => {
    clearTimeout(qt);
    qt = setTimeout(() => { state.q = qEl.value; applyFilters(); }, 140);
  });

  function bindChip(sel, key) {
    const el = $(sel);
    el.addEventListener('click', () => {
      state[key] = !state[key];
      el.setAttribute('aria-pressed', String(state[key]));
      if (key === 'free' && state.free) { state.paid = false; $('#fPaid').setAttribute('aria-pressed', 'false'); }
      if (key === 'paid' && state.paid) { state.free = false; $('#fFree').setAttribute('aria-pressed', 'false'); }
      applyFilters();
    });
  }
  bindChip('#fFree', 'free');
  bindChip('#fPaid', 'paid');
  bindChip('#fTodo', 'todo');

  $('#reset').addEventListener('click', () => {
    state.q = ''; state.free = false; state.paid = false; state.todo = false;
    qEl.value = '';
    ['#fFree', '#fPaid', '#fTodo'].forEach(s => $(s).setAttribute('aria-pressed', 'false'));
    $$('.phase').forEach(p => { p.classList.remove('open'); const h = $('[data-toggle-phase]', p); if (h) h.setAttribute('aria-expanded', 'false'); });
    $$('.module').forEach(m => m.classList.remove('open'));
    applyFilters();
    toast('Filters cleared');
  });

  /* ---------- keyboard ---------- */
  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== qEl) { e.preventDefault(); qEl.focus(); qEl.select(); }
    if (e.key === 'Escape' && document.activeElement === qEl) { qEl.blur(); }
  });

  /* ---------- scroll-in animation ---------- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.02 });
    $$('.phase').forEach((el, i) => { el.style.transitionDelay = Math.min(i * 45, 280) + 'ms'; io.observe(el); });
  } else {
    $$('.phase').forEach(el => el.classList.add('in'));
  }

  /* ---------- scroll progress line ---------- */
  const line = $('#scrollLine');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      line.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
      ticking = false;
    });
  }, { passive: true });

  /* ---------- go ---------- */
  updateProgress();
  applyFilters();

  // open Phase 0 on first visit so the page isn't a wall of closed rows
  if (done.size === 0) {
    const first = $('.phase[data-phase="0"]');
    if (first) { first.classList.add('open'); $('[data-toggle-phase]', first).setAttribute('aria-expanded', 'true'); }
  }
})();
