/* ============================================================
   TAXQUEST — PPh Pasal 24 & 25
   APP — Bootstrap & Orchestration Layer
   Depends on: content.js, components.js
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     0. SHORTCUTS
     ============================================================ */
  const { $, $$, el, State, EventBus, Toast, XP, Renderer } = window.TQ;

  /* ============================================================
     1. APP OBJECT
     ============================================================ */
  const App = {
    content: null,
    booted: false,
    current: null,
    _sectionEls: {},
    _tabEls: {},

    /* ------------------------------------------------------------
       1.1 BOOTSTRAP
       ------------------------------------------------------------ */
    boot() {
      if (this.booted) return;
      this.booted = true;

      this.content = window.TaxQuestContent;
      if (!this.content) {
        console.error('[TaxQuest] content.js not loaded');
        this._renderFatal('Materi tidak ditemukan. Pastikan content.js sudah dimuat.');
        return;
      }

      // Load persisted state
      State.load();

      // Build UI
      this._buildHeader();
      this._buildNav();
      this._buildSections();
      this._buildFooter();

      // Init components
      Toast.init();
      XP.init();

      // Wire global events
      this._wireGlobalEvents();

      // Route to initial section (hash or stored)
      const initialId = this._resolveInitialSection();
      this.openSection(initialId, { silent: true, scroll: false });

      // Mark first section visited (award XP on real open, not silent)
      setTimeout(() => {
        this.openSection(initialId, { silent: false, scroll: false, noDoubleAward: true });
      }, 50);

      console.log('[TaxQuest] Booted ·', this.content.sections.length, 'sections');
    },

    /* ------------------------------------------------------------
       1.2 FATAL ERROR UI
       ------------------------------------------------------------ */
    _renderFatal(msg) {
      document.body.innerHTML = '';
      document.body.appendChild(el('div', {
        style: {
          padding: '60px 20px',
          textAlign: 'center',
          fontFamily: 'system-ui, sans-serif'
        }
      }, [
        el('div', { style: { fontSize: '48px', marginBottom: '16px' }, text: '⚠️' }),
        el('div', { style: { fontSize: '18px', fontWeight: '700' }, text: 'Gagal Memuat' }),
        el('div', { style: { marginTop: '8px', color: '#666' }, text: msg })
      ]));
    },

    /* ------------------------------------------------------------
       1.3 BUILD HEADER (TOPBAR)
       ------------------------------------------------------------ */
    _buildHeader() {
      const header = el('header', { class: 'topbar', role: 'banner' }, [
        el('div', { class: 'topbar-brand' }, [
          el('div', { class: 'topbar-brand-mark', text: '⚖' }),
          el('span', { text: 'TaxQuest' })
        ]),
        el('div', { class: 'level-badge', id: 'tq-level-badge', text: '🌱 Pemula' }),
        el('div', { class: 'topbar-spacer' }),
        el('div', { class: 'xp-wrap' }, [
          el('div', { class: 'xp-bar' }, [
            el('div', { class: 'xp-fill', id: 'tq-xp-fill' })
          ]),
          el('div', { class: 'xp-label', id: 'tq-xp-label', text: '0 XP' })
        ]),
        el('button', {
          class: 'btn btn-ghost btn-sm',
          id: 'tq-reset',
          type: 'button',
          title: 'Reset semua progres',
          onclick: () => this._confirmReset()
        }, [
          el('span', { text: '↺' }),
          el('span', { text: 'Reset', class: 'tq-hide-mobile' })
        ])
      ]);

      document.body.insertBefore(header, document.body.firstChild);
    },

    /* ------------------------------------------------------------
       1.4 BUILD NAV TABS
       ------------------------------------------------------------ */
    _buildNav() {
      const nav = el('nav', {
        class: 'nav-tabs',
        role: 'tablist',
        'aria-label': 'Navigasi Misi'
      });

      this.content.sections.forEach((section) => {
        const tab = el('button', {
          class: 'nav-tab',
          type: 'button',
          role: 'tab',
          dataset: { sec: section.id },
          'aria-controls': 'tq-sec-' + section.id,
          onclick: () => this.openSection(section.id)
        }, [
          el('span', { class: 'nav-tab-num', text: section.tab.num }),
          el('span', { text: section.tab.label })
        ]);

        this._tabEls[section.id] = tab;
        nav.appendChild(tab);
      });

      const header = $('.topbar');
      header.parentNode.insertBefore(nav, header.nextSibling);
    },

    /* ------------------------------------------------------------
       1.5 BUILD SECTIONS
       ------------------------------------------------------------ */
    _buildSections() {
      const main = el('main', {
        class: 'container',
        id: 'tq-main',
        role: 'main'
      });

      this.content.sections.forEach((section) => {
        const secEl = el('section', {
          class: 'section',
          id: 'tq-sec-' + section.id,
          dataset: { sec: section.id },
          role: 'tabpanel',
          'aria-labelledby': 'tq-tab-' + section.id,
          'aria-hidden': 'true'
        });

        // Section head
        secEl.appendChild(el('div', { class: 'section-head' }, [
          el('div', { class: 'eyebrow', text: section.head.kicker }),
          el('h1', { class: 'section-title', html: section.head.title }),
          el('p', { class: 'section-desc', text: section.head.desc })
        ]));

        // Section body
        secEl.appendChild(Renderer.renderSection(section));

        this._sectionEls[section.id] = secEl;
        main.appendChild(secEl);
      });

      document.body.appendChild(main);
    },

    /* ------------------------------------------------------------
       1.6 BUILD FOOTER
       ------------------------------------------------------------ */
    _buildFooter() {
      const footer = el('footer', {
        style: {
          textAlign: 'center',
          padding: '48px 24px 80px',
          fontSize: '12px',
          color: 'var(--ink-4)',
          lineHeight: '1.7'
        }
      }, [
        el('div', { style: { marginBottom: '8px' } }, [
          el('strong', { text: 'TaxQuest' }),
          el('span', { text: ' · PPh Pasal 24 & 25' })
        ]),
        el('div', {
          text: 'Materi bersumber dari UU PPh Pasal 24 & 25, PMK 192/PMK.03/2018, PMK 81/2024, PMK 215/PMK.03/2018.'
        }),
        el('div', {
          style: { marginTop: '12px', opacity: '0.7' },
          text: 'Dibuat untuk pembelajaran interaktif Akuntansi & Perpajakan.'
        })
      ]);
      document.body.appendChild(footer);
    },

    /* ------------------------------------------------------------
       1.7 WIRE GLOBAL EVENTS
       ------------------------------------------------------------ */
    _wireGlobalEvents() {
      // Keyboard shortcuts
      document.addEventListener('keydown', (e) => {
        // Ignore when typing in input/textarea
        const tag = (e.target.tagName || '').toLowerCase();
        if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

        const sections = this.content.sections.map((s) => s.id);
        const idx = sections.indexOf(this.current);

        // Arrow left/right: previous/next section
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          const next = sections[idx + 1];
          if (next) this.openSection(next);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const prev = sections[idx - 1];
          if (prev) this.openSection(prev);
        } else if (e.key === 'Home') {
          e.preventDefault();
          this.openSection(sections[0]);
        } else if (e.key === 'End') {
          e.preventDefault();
          this.openSection(sections[sections.length - 1]);
        } else if (e.key === 'Escape') {
          // Collapse all reveals in current section
          $$('.reveal.open').forEach((r) => r.classList.remove('open'));
        } else if (e.key === 'r' || e.key === 'R') {
          // Reset if Shift held
          if (e.shiftKey) this._confirmReset();
        }
      });

      // Hash routing
      window.addEventListener('hashchange', () => {
        const id = this._sectionFromHash();
        if (id && id !== this.current) this.openSection(id, { silent: false });
      });

      // Section-done event: mark tab as done
      EventBus.on('section:done', ({ id }) => {
        const tab = this._tabEls[id];
        if (tab) tab.classList.add('done');
      });

      // Restore done tabs from state
      State.data.completedSections.forEach((id) => {
        const tab = this._tabEls[id];
        if (tab) tab.classList.add('done');
      });
    },

    /* ------------------------------------------------------------
       1.8 OPEN SECTION
       ------------------------------------------------------------ */
    openSection(id, options = {}) {
      const { silent = false, scroll = true, noDoubleAward = false } = options;

      // Guard: unknown section
      if (!this._sectionEls[id]) {
        console.warn('[TaxQuest] Unknown section:', id);
        return;
      }

      const prev = this.current;

      // Hide all, deactivate all tabs
      Object.entries(this._sectionEls).forEach(([sid, secEl]) => {
        secEl.classList.toggle('active', sid === id);
        secEl.setAttribute('aria-hidden', sid === id ? 'false' : 'true');
      });
      Object.entries(this._tabEls).forEach(([sid, tabEl]) => {
        tabEl.classList.toggle('active', sid === id);
        tabEl.setAttribute('aria-selected', sid === id ? 'true' : 'false');
      });

      this.current = id;
      State.data.currentSection = id;

      // Award XP for first visit only (once per section, persisted)
      if (!silent && !noDoubleAward && !State.data.completedSections.includes(id)) {
        State.markSectionDone(id);
        State.awardXP(5);
      }

      // Update hash (without triggering scroll jump)
      if (window.location.hash !== '#' + id) {
        try {
          history.replaceState(null, '', '#' + id);
        } catch (e) { /* ignore in sandboxed env */ }
      }

      // Scroll to top of main
      if (scroll && !silent) {
        const main = $('#tq-main');
        if (main) {
          const y = main.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }

      // Announce for accessibility
      this._announce(`Membuka ${this._sectionEls[id].querySelector('.section-title')?.textContent || id}`);

      EventBus.emit('section:opened', { id, prev });
    },

    /* ------------------------------------------------------------
       1.9 HASH ROUTING
       ------------------------------------------------------------ */
    _sectionFromHash() {
      const hash = (window.location.hash || '').replace(/^#/, '').trim();
      if (!hash) return null;
      const valid = this.content.sections.map((s) => s.id);
      return valid.includes(hash) ? hash : null;
    },

    _resolveInitialSection() {
      const fromHash = this._sectionFromHash();
      if (fromHash) return fromHash;
      if (State.data.currentSection) return State.data.currentSection;
      return this.content.sections[0].id;
    },

    /* ------------------------------------------------------------
       1.10 RESET
       ------------------------------------------------------------ */
    _confirmReset() {
      const confirmed = window.confirm(
        'Reset semua progres?\n\n' +
        'Semua XP, jawaban kuis, dan riwayat pembelajaran akan dihapus. ' +
        'Tindakan ini tidak bisa dibatalkan.'
      );
      if (!confirmed) return;

      State.reset();

      // Reset UI: tabs
      Object.values(this._tabEls).forEach((tab) => {
        tab.classList.remove('done', 'active');
      });

      // Reset XP display
      const fill = $('#tq-xp-fill');
      const label = $('#tq-xp-label');
      const lvlBadge = $('#tq-level-badge');
      if (fill) fill.style.width = '0%';
      if (label) label.textContent = '0 XP';
      if (lvlBadge) {
        lvlBadge.textContent = '🌱 Pemula';
        lvlBadge.dataset.lvlName = '🌱 Pemula';
      }

      // Close all reveals and myth-facts
      $$('.reveal.open').forEach((r) => r.classList.remove('open'));
      $$('.mf.revealed').forEach((m) => m.classList.remove('revealed'));

      // Navigate to first section (award will be re-triggered naturally)
      const firstId = this.content.sections[0].id;
      this.current = null;
      this.openSection(firstId, { silent: true, scroll: true });

      Toast.show({
        icon: '↺',
        title: 'Progres direset',
        sub: 'Mulai dari awal lagi',
        duration: 2200
      });

      EventBus.emit('app:reset');
    },

    /* ------------------------------------------------------------
       1.11 A11Y ANNOUNCER
       ------------------------------------------------------------ */
    _announce(msg) {
      let node = $('#tq-live');
      if (!node) {
        node = el('div', {
          id: 'tq-live',
          'aria-live': 'polite',
          'aria-atomic': 'true',
          style: {
            position: 'absolute',
            left: '-9999px',
            width: '1px',
            height: '1px',
            overflow: 'hidden'
          }
        });
        document.body.appendChild(node);
      }
      node.textContent = msg;
    },

    /* ------------------------------------------------------------
       1.12 NAVIGATE HELPERS (exposed to content)
       ------------------------------------------------------------ */
    next() {
      const ids = this.content.sections.map((s) => s.id);
      const idx = ids.indexOf(this.current);
      const target = ids[idx + 1];
      if (target) this.openSection(target);
    },

    prev() {
      const ids = this.content.sections.map((s) => s.id);
      const idx = ids.indexOf(this.current);
      const target = ids[idx - 1];
      if (target) this.openSection(target);
    }
  };

  /* ============================================================
     2. INJECT MINIMAL RESPONSIVE STYLES (dependencies)
     ============================================================ */
  function injectAppStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* Helper responsive for topbar */
      @media (max-width: 640px) {
        .tq-hide-mobile { display: none; }
      }

      /* Smooth active section transition */
      .section.active {
        animation: tq-fade 360ms cubic-bezier(.4,0,.2,1);
      }
      @keyframes tq-fade {
        from { opacity: 0; transform: translateY(12px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      /* Make sure scroll-to-top works after openSection */
      #tq-main { scroll-margin-top: 120px; }

      /* Hide tab "done" styling when active */
      .nav-tab.done.active::after { content: ""; }

      /* Print adjustments */
      @media print {
        .topbar, .nav-tabs, .toast, #tq-live { display: none !important; }
        .section { display: block !important; }
        .section:not(.active) { display: block !important; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ============================================================
     3. ADD NAV NEXT/PREV TO HEADER (auto-nav bar at bottom of each section)
     ============================================================ */
  function injectSectionNav(sections, sectionEls) {
    sections.forEach((section, idx) => {
      const secEl = sectionEls[section.id];
      if (!secEl) return;

      // Skip if section already has an explicit nav-next block
      const hasExplicitNext = section.blocks.some((b) => b.type === 'nav-next');
      if (hasExplicitNext) return;

      const prev = sections[idx - 1];
      const next = sections[idx + 1];
      const navRow = el('div', {
        class: 'btn-group',
        style: {
          marginTop: '48px',
          paddingTop: '24px',
          borderTop: '1px solid var(--border)',
          justifyContent: 'space-between'
        }
      });

      if (prev) {
        navRow.appendChild(el('button', {
          class: 'btn btn-ghost',
          type: 'button',
          onclick: () => App.openSection(prev.id)
        }, [
          el('span', { text: '←' }),
          el('span', { text: `Sebelumnya: ${prev.tab.label}` })
        ]));
      } else {
        navRow.appendChild(el('div'));
      }

      if (next) {
        navRow.appendChild(el('button', {
          class: 'btn btn-primary',
          type: 'button',
          onclick: () => App.openSection(next.id)
        }, [
          el('span', { text: `Selanjutnya: ${next.tab.label}` }),
          el('span', { text: '→' })
        ]));
      }

      secEl.appendChild(navRow);
    });
  }

  /* ============================================================
     4. EXPOSE APP TO GLOBAL
     ============================================================ */
  window.TQ = window.TQ || {};
  Object.assign(window.TQ, {
    App,

    // Convenience alias for content references
    openSection: (id, opts) => App.openSection(id, opts),
    next: () => App.next(),
    prev: () => App.prev(),
    reset: () => App._confirmReset()
  });

  /* ============================================================
     5. KICK OFF ON DOM READY
     ============================================================ */
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(() => {
    injectAppStyles();
    App.boot();

    // Inject auto-nav to sections that don't have explicit nav-next
    const sections = window.TaxQuestContent.sections;
    injectSectionNav(sections, App._sectionEls);

    // Persist state on unload
    window.addEventListener('beforeunload', () => State.save());
  });

})();