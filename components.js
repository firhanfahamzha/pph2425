/* ============================================================
   TAXQUEST — PPh Pasal 24 & 25
   COMPONENTS — Interactive Widget Library
   Namespace: TQ
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     0. UTILITIES
     ============================================================ */
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v === null || v === undefined || v === false) continue;
      if (k === 'class')      node.className = v;
      else if (k === 'html')  node.innerHTML = v;
      else if (k === 'text')  node.textContent = v;
      else if (k === 'style' && typeof v === 'object') Object.assign(node.style, v);
      else if (k.startsWith('on') && typeof v === 'function')
        node.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === 'dataset' && typeof v === 'object')
        Object.assign(node.dataset, v);
      else node.setAttribute(k, v);
    }
    const kids = Array.isArray(children) ? children : [children];
    kids.forEach((c) => {
      if (c == null || c === false) return;
      node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return node;
  }

  const fmtIDR = (n) => 'Rp ' + Math.round(Number(n) || 0).toLocaleString('id-ID');

  const fmtCompact = (n) => {
    n = Number(n) || 0;
    const abs = Math.abs(n);
    if (abs >= 1e12) return 'Rp ' + (n / 1e12).toFixed(2).replace('.', ',') + ' T';
    if (abs >= 1e9)  return 'Rp ' + (n / 1e9).toFixed(2).replace('.', ',') + ' M';
    if (abs >= 1e6)  return 'Rp ' + (n / 1e6).toFixed(1).replace('.', ',') + ' jt';
    return fmtIDR(n);
  };

  /* ============================================================
     1. STATE MANAGER
     ============================================================ */
  const State = {
    KEY: 'taxquest-pph24-25-state-v1',

    data: {
      xp: 0,
      completedSections: [],
      answeredQuizzes: {},
      revealedIds: [],
      ddSubmissions: {},
      currentSection: 'intro'
    },

    load() {
      try {
        const raw = localStorage.getItem(this.KEY);
        if (raw) this.data = Object.assign(this.data, JSON.parse(raw));
      } catch (e) { /* ignore corrupt state */ }
    },

    save() {
      try {
        localStorage.setItem(this.KEY, JSON.stringify(this.data));
      } catch (e) { /* ignore quota */ }
    },

    reset() {
      this.data = {
        xp: 0,
        completedSections: [],
        answeredQuizzes: {},
        revealedIds: [],
        ddSubmissions: {},
        currentSection: 'intro'
      };
      this.save();
    },

    awardXP(amount) {
      if (!amount || amount <= 0) return;
      const prev = this.data.xp;
      this.data.xp = prev + amount;
      this.save();
      EventBus.emit('xp:changed', { prev, next: this.data.xp, delta: amount });
    },

    markSectionDone(id) {
      if (!this.data.completedSections.includes(id)) {
        this.data.completedSections.push(id);
        this.save();
        EventBus.emit('section:done', { id });
      }
    },

    markRevealed(id) {
      if (!this.data.revealedIds.includes(id)) {
        this.data.revealedIds.push(id);
        this.save();
      }
    },

    isRevealed(id) {
      return this.data.revealedIds.includes(id);
    }
  };

  /* ============================================================
     2. EVENT BUS
     ============================================================ */
  const EventBus = {
    listeners: {},
    on(evt, fn) {
      (this.listeners[evt] ||= []).push(fn);
      return () => this.off(evt, fn);
    },
    off(evt, fn) {
      this.listeners[evt] = (this.listeners[evt] || []).filter((f) => f !== fn);
    },
    emit(evt, payload) {
      (this.listeners[evt] || []).forEach((fn) => {
        try { fn(payload); } catch (e) { console.error(e); }
      });
    }
  };

  /* ============================================================
     3. TOAST NOTIFICATION
     ============================================================ */
  const Toast = {
    _queue: [],
    _busy: false,

    init() {
      this.el = el('div', { class: 'toast', id: 'tq-toast' }, [
        el('div', { class: 'toast-icon', id: 'tq-toast-icon', text: '⭐' }),
        el('div', { class: 'toast-body' }, [
          el('div', { class: 'toast-title', id: 'tq-toast-title', text: 'XP!' }),
          el('div', { class: 'toast-sub',   id: 'tq-toast-sub',   text: '' })
        ])
      ]);
      document.body.appendChild(this.el);

      EventBus.on('xp:changed', ({ delta, next }) => {
        const lvl = TQ.getLevel(next);
        this.show({
          icon: '⭐',
          title: `+${delta} XP`,
          sub: lvl.name,
          duration: 2200
        });
      });

      EventBus.on('level:up', ({ name }) => {
        setTimeout(() => this.show({
          icon: '🎉',
          title: 'Level Up!',
          sub: name,
          duration: 3000,
          variant: 'gold'
        }), 900);
      });
    },

    show({ icon = '⭐', title = '', sub = '', duration = 2400, variant = 'gold' } = {}) {
      this._queue.push({ icon, title, sub, duration, variant });
      if (!this._busy) this._run();
    },

    _run() {
      const next = this._queue.shift();
      if (!next) { this._busy = false; return; }
      this._busy = true;

      $('#tq-toast-icon', this.el).textContent = next.icon;
      $('#tq-toast-title', this.el).textContent = next.title;
      $('#tq-toast-sub', this.el).textContent = next.sub;

      this.el.style.borderColor =
        next.variant === 'gold' ? 'var(--gold)' : 'var(--p24)';

      this.el.classList.add('show');
      setTimeout(() => {
        this.el.classList.remove('show');
        setTimeout(() => this._run(), 300);
      }, next.duration);
    }
  };

  /* ============================================================
     4. XP / LEVEL SYSTEM
     ============================================================ */
  const XP = {
    init() {
      this.fill  = $('#tq-xp-fill');
      this.label = $('#tq-xp-label');
      this.level = $('#tq-level-badge');
      this._sync(true);

      EventBus.on('xp:changed', () => this._sync());
    },

    _sync(initial = false) {
      const { xp } = State.data;
      const lvl = TQ.getLevel(xp);
      const max = TQ.CONTENT.meta.totalXP;
      const pct = Math.min((xp / max) * 100, 100);

      if (this.fill)  this.fill.style.width = pct + '%';
      if (this.label) this.label.textContent = xp + ' XP';

      if (this.level) {
        const prevName = this.level.dataset.lvlName;
        this.level.textContent = lvl.name;
        this.level.dataset.lvlName = lvl.name;
        if (!initial && prevName && prevName !== lvl.name) {
          EventBus.emit('level:up', { name: lvl.name, xp });
        }
      }
    }
  };

  /* ============================================================
     5. RENDERERS
     ============================================================ */
  const R = {};

  /* -------- 5.1 PILLARS -------- */
  R.pillars = (block) => {
    const wrap = el('div', { class: 'pillars' });
    block.items.forEach((it) => {
      const card = el('div', {
        class: `pillar pillar-${it.variant}`,
        role: 'button',
        tabindex: '0',
        onclick: () => TQ.openSection(it.goto),
        onkeydown: (e) => {
          if (e.key === 'Enter' || e.key === ' ') TQ.openSection(it.goto);
        }
      }, [
        el('div', { class: 'pillar-badge', text: it.badge }),
        el('div', { class: 'pillar-icon',  text: it.icon }),
        el('div', { class: 'pillar-title', text: it.title }),
        el('div', { class: 'pillar-desc',  html: it.desc }),
        el('div', { class: 'pillar-cta',   text: it.cta })
      ]);
      wrap.appendChild(card);
    });
    return wrap;
  };

  /* -------- 5.2 CARD -------- */
  R.card = (block) => {
    const children = [];

    const head = el('div', { class: 'card-title' }, [
      block.icon ? el('span', { text: block.icon, 'aria-hidden': 'true' }) : null,
      el('span', { html: block.title })
    ]);
    children.push(head);

    if (block.html) {
      const body = el('div', { class: 'card-body', html: block.html });
      children.push(body);
    }

    const card = el('div', {
      class: `card ${block.variant || ''}`.trim()
    }, children);

    if (block.extra && block.extra.length) {
      block.extra.forEach((extra) => {
        card.appendChild(Renderer.render(extra));
      });
    }

    return card;
  };

  /* -------- 5.3 CALLOUT -------- */
  R.callout = (block) => {
    return el('div', { class: `callout ${block.variant || ''}`.trim() }, [
      block.title
        ? el('div', { class: 'callout-title' }, [
            block.icon ? el('span', { text: block.icon }) : null,
            el('span', { text: block.title })
          ])
        : null,
      el('div', { html: block.html || '' })
    ]);
  };

  /* -------- 5.4 REVEAL -------- */
  R.reveal = (block) => {
    const uniqueId = 'rv-' + Math.random().toString(36).slice(2, 9);

    const head = el('div', { class: 'reveal-head' }, [
      el('div', { class: 'reveal-head-label' }, [
        block.icon ? el('span', { class: 'reveal-num', text: block.icon }) : null,
        el('span', { html: block.title })
      ]),
      el('span', { class: 'reveal-arrow', text: '▾' })
    ]);

    const body = el('div', { class: 'reveal-body' }, [
      el('div', { class: 'reveal-body-inner', html: block.body })
    ]);

    const node = el('div', { class: 'reveal' }, [head, body]);

    const toggle = () => {
      const open = node.classList.toggle('open');
      if (open && !State.isRevealed(uniqueId)) {
        State.markRevealed(uniqueId);
        State.awardXP(3);
      }
    };

    head.addEventListener('click', toggle);
    head.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
    head.setAttribute('role', 'button');
    head.setAttribute('tabindex', '0');
    head.setAttribute('aria-expanded', 'false');
    head.addEventListener('click', () => {
      head.setAttribute('aria-expanded', node.classList.contains('open'));
    });

    return node;
  };

  /* -------- 5.5 TABLE -------- */
  R.table = (block) => {
    const thead = el('thead', {}, [
      el('tr', {}, block.headers.map((h) => el('th', { html: h })))
    ]);

    const tbody = el('tbody', {}, block.rows.map((row) => {
      const tds = row.cells.map((cell, i) => {
        const cls = (row.variant && row.variant[i]) || '';
        return el('td', { class: cls, html: cell });
      });
      return el('tr', {}, tds);
    }));

    return el('table', { class: 'tbl' }, [thead, tbody]);
  };

  /* -------- 5.6 CALC STEPS -------- */
  R.calc = (block) => {
    const wrap = el('div', { class: 'calc-wrap' });

    block.steps.forEach((step) => {
      const variant = step.variant === 'p25' ? 'p25'
                    : step.variant === 'gold' ? 'gold'
                    : '';
      wrap.appendChild(
        el('div', { class: `calc-step ${variant}`.trim() }, [
          el('div', { class: 'calc-label', html: step.label }),
          el('div', { class: 'calc-body',  html: step.html })
        ])
      );
    });

    if (block.final) {
      wrap.appendChild(el('div', { class: 'calc-final', text: block.final }));
    }

    return wrap;
  };

  /* -------- 5.7 TWO COLUMN -------- */
  R['two-col'] = (block) => {
    const col = (c) => el('div', { class: `col-box ${c.variant || ''}`.trim() }, [
      el('div', { class: 'col-title', html: c.title }),
      el('div', { html: c.html })
    ]);
    return el('div', { class: 'two-col' }, [col(block.left), col(block.right)]);
  };

  /* -------- 5.8 FLOW -------- */
  R.flow = (block) => {
    const wrap = el('div', { class: 'flow' });
    block.steps.forEach((step, i) => {
      wrap.appendChild(
        el('div', { class: `flow-step ${step.variant || ''}`.trim(), html: step.text })
      );
      if (i < block.steps.length - 1) {
        wrap.appendChild(el('div', { class: 'flow-arrow', text: '▼' }));
      }
    });
    return wrap;
  };

  /* -------- 5.9 GRID CARDS -------- */
  R['grid-cards'] = (block) => {
    const cols = block.cols || 3;
    const wrap = el('div', {
      class: 'grid',
      style: { gridTemplateColumns: `repeat(auto-fit, minmax(${cols === 2 ? 240 : 200}px, 1fr))` }
    });
    block.items.forEach((it) => {
      const variant = it.variant === 'p24' ? 'card-p24'
                    : it.variant === 'p25' ? 'card-p25'
                    : it.variant === 'gold' ? 'card-gold'
                    : '';
      wrap.appendChild(el('div', { class: `card ${variant}`.trim() }, [
        el('div', {
          style: {
            fontSize: '20px',
            fontWeight: '800',
            color: it.variant === 'p25' ? 'var(--p25)'
                 : it.variant === 'gold' ? 'var(--gold)'
                 : 'var(--p24)',
            marginBottom: '8px'
          },
          text: it.icon
        }),
        el('div', {
          style: {
            fontSize: '13px',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '8px',
            color: 'var(--ink)'
          },
          text: it.title
        }),
        el('div', {
          style: { fontSize: '13px', color: 'var(--ink-2)', lineHeight: '1.55' },
          html: it.html
        })
      ]));
    });
    return wrap;
  };

  /* -------- 5.10 DRAG & DROP (Click-to-place) -------- */
  R.dragdrop = (block) => {
    const containerId = block.id || 'dd-' + Math.random().toString(36).slice(2, 7);

    const pool    = el('div', { class: 'dd-pool', id: containerId + '-pool' });
    const zones   = el('div', { class: 'dd-zones' });
    const feedback = el('div', { style: { marginTop: '16px' } });
    const buttons = el('div', { class: 'btn-group', style: { marginTop: '16px' } }, [
      el('button', {
        class: 'btn btn-primary',
        text: '✓ Periksa Jawaban',
        onclick: () => checkDD()
      }),
      el('button', {
        class: 'btn btn-ghost',
        text: '↺ Ulangi',
        onclick: () => resetDD()
      })
    ]);

    // State for this instance
    let selectedItem = null;
    const placed = {}; // itemId -> zoneId
    const itemsById = {};
    block.items.forEach((it) => itemsById[it.id] = it);

    const zoneMap = {};
    block.zones.forEach((z) => {
      const zoneEl = el('div', {
        class: 'dd-zone',
        dataset: { zone: z.id }
      }, [
        el('div', { class: 'dd-zone-title', text: z.title }),
        el('div', { class: 'dd-zone-items', dataset: { zone: z.id } })
      ]);

      // Click zone to place selected item
      zoneEl.addEventListener('click', () => {
        if (!selectedItem) return;
        placeItem(selectedItem, z.id);
        clearSelection();
      });
      // Allow dropping back to pool
      zoneEl.addEventListener('dragover', (e) => {
        e.preventDefault();
        zoneEl.classList.add('over');
      });
      zoneEl.addEventListener('dragleave', () => zoneEl.classList.remove('over'));
      zoneEl.addEventListener('drop', (e) => {
        e.preventDefault();
        zoneEl.classList.remove('over');
        const id = e.dataTransfer.getData('text/plain');
        if (id) placeItem(id, z.id);
      });

      zones.appendChild(zoneEl);
      zoneMap[z.id] = zoneEl;
    });

    // Pool drop target (for returning items)
    pool.addEventListener('dragover', (e) => e.preventDefault());
    pool.addEventListener('drop', (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData('text/plain');
      if (id) returnItem(id);
    });

    function makeItemEl(item) {
      const itemEl = el('div', {
        class: 'dd-item',
        dataset: { itemId: item.id },
        draggable: 'true'
      }, [el('span', { text: item.text })]);

      itemEl.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.id);
        itemEl.classList.add('dragging');
        clearSelection();
        selectedItem = item.id;
        updateSelectionStyle();
      });
      itemEl.addEventListener('dragend', () => {
        itemEl.classList.remove('dragging');
      });

      itemEl.addEventListener('click', (e) => {
        e.stopPropagation();
        if (placed[item.id]) {
          // Click a placed item to return it to pool
          returnItem(item.id);
          return;
        }
        if (selectedItem === item.id) {
          clearSelection();
        } else {
          selectedItem = item.id;
          updateSelectionStyle();
        }
      });

      return itemEl;
    }

    function updateSelectionStyle() {
      $$('.dd-item', pool).forEach((n) => {
        n.style.outline = n.dataset.itemId === selectedItem ? '2px solid var(--p24)' : 'none';
        n.style.background = n.dataset.itemId === selectedItem ? 'var(--p24-bg)' : '';
      });
      Object.values(zoneMap).forEach((z) => {
        z.style.cursor = selectedItem ? 'pointer' : '';
      });
    }

    function clearSelection() {
      selectedItem = null;
      updateSelectionStyle();
    }

    function placeItem(itemId, zoneId) {
      const item = itemsById[itemId];
      if (!item) return;

      // Remove existing placement
      const existing = $('.dd-item[data-item-id="' + itemId + '"]', zones);
      if (existing) existing.remove();

      placed[itemId] = zoneId;
      const itemEl = makeItemEl(item);
      itemEl.classList.add('placed');
      $('.dd-zone-items[data-zone="' + zoneId + '"]', zones).appendChild(itemEl);

      // Clear previous feedback styling
      Object.values(zoneMap).forEach((z) => {
        z.classList.remove('correct', 'wrong');
      });
    }

    function returnItem(itemId) {
      delete placed[itemId];
      const itemEl = $('.dd-item[data-item-id="' + itemId + '"]', zones);
      if (itemEl) itemEl.remove();

      const newEl = makeItemEl(itemsById[itemId]);
      pool.appendChild(newEl);

      Object.values(zoneMap).forEach((z) => {
        z.classList.remove('correct', 'wrong');
      });

      // hide empty pool hint
      togglePoolEmpty();
    }

    function togglePoolEmpty() {
      pool.classList.toggle('empty', pool.querySelectorAll('.dd-item').length === 0);
    }

    function checkDD() {
      let correct = 0;
      const total = block.items.length;

      // Reset
      Object.values(zoneMap).forEach((z) => z.classList.remove('correct', 'wrong'));

      Object.entries(placed).forEach(([itemId, zoneId]) => {
        const item = itemsById[itemId];
        const zoneEl = zoneMap[zoneId];
        if (!zoneEl) return;
        if (item.zone === zoneId) correct++;
      });

      // Mark zones
      block.zones.forEach((z) => {
        const zoneEl = zoneMap[z.id];
        const placedHere = Object.entries(placed).filter(([, zid]) => zid === z.id);
        if (!placedHere.length) return;
        const allCorrect = placedHere.every(([iid]) => itemsById[iid].zone === z.id);
        zoneEl.classList.add(allCorrect ? 'correct' : 'wrong');
      });

      feedback.innerHTML = '';

      if (correct === total) {
        feedback.appendChild(el('div', { class: 'callout ok' }, [
          el('div', { class: 'callout-title', html: '✅ Sempurna!' }),
          el('div', { text: `Semua ${total} item ditempatkan dengan benar.` })
        ]));
        if (!State.data.ddSubmissions[containerId]) {
          State.data.ddSubmissions[containerId] = { correct, total };
          State.save();
          State.awardXP(total * (block.xpPerCorrect || 5));
        }
      } else {
        feedback.appendChild(el('div', { class: 'callout warn' }, [
          el('div', { class: 'callout-title', html: `⚠️ ${correct}/${total} Benar` }),
          el('div', { text: 'Periksa kembali zona yang berwarna merah.' })
        ]));
        if (!State.data.ddSubmissions[containerId]) {
          State.data.ddSubmissions[containerId] = { correct, total };
          State.save();
          State.awardXP(correct * (block.xpPerCorrect || 5));
        }
      }
    }

    function resetDD() {
      Object.keys(placed).forEach(returnItem);
      placed && Object.keys(placed).forEach((k) => delete placed[k]);
      clearSelection();
      feedback.innerHTML = '';
      Object.values(zoneMap).forEach((z) => z.classList.remove('correct', 'wrong'));
      togglePoolEmpty();
    }

    // Init items in pool
    block.items.forEach((item) => pool.appendChild(makeItemEl(item)));
    togglePoolEmpty();

    return el('div', { class: 'dd-container' }, [
      el('div', { class: 'card-title' }, [
        el('span', { text: block.icon || '🎯' }),
        el('span', { html: block.title })
      ]),
      block.desc ? el('p', {
        style: { fontSize: '13px', color: 'var(--ink-3)', marginBottom: '14px' },
        text: block.desc
      }) : null,
      pool,
      zones,
      buttons,
      feedback
    ]);
  };

  /* -------- 5.11 SIMULATOR -------- */
  R.simulator = (block) => {
    const mode = block.mode || 'p24-basic';
    const fieldEls = {};

    const grid = el('div', { class: 'sim-grid' });
    block.fields.forEach((f) => {
      const wrap = el('div', { class: 'sim-field' });
      wrap.appendChild(el('label', { text: f.label, for: block.id + '-' + f.key }));

      let input;
      if (f.type === 'select') {
        input = el('select', {
          id: block.id + '-' + f.key,
          oninput: () => update()
        });
        f.options.forEach((opt) => {
          input.appendChild(el('option', {
            value: opt.value,
            text: opt.label,
            selected: opt.value === f.default
          }));
        });
      } else {
        input = el('input', {
          type: 'number',
          id: block.id + '-' + f.key,
          value: f.default,
          step: f.step || 1000000,
          oninput: () => update()
        });
      }

      fieldEls[f.key] = input;
      wrap.appendChild(input);
      grid.appendChild(wrap);
    });

    const result = el('div', { class: 'sim-result', id: block.id + '-result' });

    function update() {
      const values = {};
      Object.entries(fieldEls).forEach(([k, inputEl]) => {
        values[k] = inputEl.value;
      });
      const rows = Simulators.compute(mode, values);
      renderResult(rows);
    }

    function renderResult(rows) {
      result.innerHTML = '';
      rows.forEach((row) => {
        if (row.isTotal) {
          result.appendChild(el('div', { class: 'sim-total' }, [
            el('div', { class: 'sim-total-label', text: row.label }),
            el('div', { class: 'sim-total-val', text: row.value })
          ]));
        } else {
          result.appendChild(el('div', { class: 'sim-row' }, [
            el('div', { class: 'sim-row-label', text: row.label }),
            el('div', { class: 'sim-row-val',   text: row.value })
          ]));
        }
      });
    }

    // Award XP once when user changes any value
    let awarded = false;
    const onFirstInteraction = () => {
      if (awarded) return;
      awarded = true;
      State.awardXP(10);
    };

    Object.values(fieldEls).forEach((inp) => {
      inp.addEventListener('input', onFirstInteraction, { once: false });
      inp.addEventListener('change', onFirstInteraction, { once: false });
    });

    const container = el('div', {
      class: `sim ${block.variant || ''}`.trim()
    }, [
      el('div', { class: 'sim-head' }, [
        el('div', { class: 'sim-icon', text: block.icon || '🧪' }),
        el('div', {}, [
          el('div', { class: 'sim-title', text: block.title }),
          block.sub ? el('div', { class: 'sim-sub', text: block.sub }) : null
        ])
      ]),
      grid,
      result
    ]);

    setTimeout(update, 0);
    return container;
  };

  /* -------- 5.12 QUIZ (single) -------- */
  R.quiz = (block) => {
    const container = el('div', { class: 'quiz', id: block.id });

    const header = el('div', { class: 'quiz-header' }, [
      el('div', { class: 'quiz-badge', text: block.badge || 'Kuis' }),
      el('div', { class: 'quiz-xp', text: '+' + (block.xp || 10) + ' XP' })
    ]);

    const q = el('div', { class: 'quiz-q', html: block.q });
    const optsWrap = el('div', { class: 'quiz-opts' });
    const feedback = el('div', { class: 'quiz-feedback', id: block.id + '-fb' });

    let answered = false;

    block.options.forEach((opt, idx) => {
      const optEl = el('button', {
        class: 'quiz-opt',
        type: 'button',
        html: opt.text,
        onclick: () => handleAnswer(idx, opt.correct)
      });
      optsWrap.appendChild(optEl);
    });

    function handleAnswer(idx, correct) {
      if (answered) return;
      answered = true;

      const optEls = $$('.quiz-opt', optsWrap);
      optEls.forEach((o) => o.disabled = true);

      if (correct) {
        optEls[idx].classList.add('correct');
        container.classList.add('correct-answered');
        feedback.classList.add('ok', 'show');
        feedback.innerHTML =
          '<div class="quiz-feedback-title">✅ Benar!</div>' +
          (block.explanation || '');
        if (!State.data.answeredQuizzes[block.id]) {
          State.data.answeredQuizzes[block.id] = { correct: true };
          State.save();
          State.awardXP(block.xp || 10);
        }
      } else {
        optEls[idx].classList.add('wrong');
        block.options.forEach((o, i) => {
          if (o.correct) optEls[i].classList.add('correct');
        });
        container.classList.add('wrong-answered');
        feedback.classList.add('no', 'show');
        feedback.innerHTML =
          '<div class="quiz-feedback-title">❌ Kurang tepat</div>' +
          (block.explanation || 'Lihat jawaban yang benar di atas.');
        if (!State.data.answeredQuizzes[block.id]) {
          State.data.answeredQuizzes[block.id] = { correct: false };
          State.save();
        }
      }
    }

    container.appendChild(header);
    container.appendChild(q);
    container.appendChild(optsWrap);
    container.appendChild(feedback);
    return container;
  };

  /* -------- 5.13 MYTH vs FACT -------- */
  R['myth-fact'] = (block) => {
    const wrap = el('div', {});
    block.items.forEach((item) => {
      const node = el('div', { class: 'mf' }, [
        el('div', { class: 'mf-side mf-myth', html: item.myth }),
        el('div', { class: 'mf-side mf-fact', html: item.fact })
      ]);
      node.setAttribute('role', 'button');
      node.setAttribute('tabindex', '0');
      const toggle = () => {
        const revealed = node.classList.toggle('revealed');
        if (revealed) State.awardXP(2);
      };
      node.addEventListener('click', toggle);
      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      });
      wrap.appendChild(node);
    });
    return wrap;
  };

  /* -------- 5.14 XP BUTTON -------- */
  R['xp-button'] = (block) => {
    let used = false;
    return el('div', { class: 'btn-group', style: { marginTop: '14px' } }, [
      el('button', {
        class: 'btn btn-gold',
        text: block.label,
        onclick: (e) => {
          if (used) return;
          used = true;
          e.currentTarget.disabled = true;
          e.currentTarget.textContent = '✓ Selesai';
          State.awardXP(block.xp || 10);
        }
      })
    ]);
  };

  /* -------- 5.15 NAV NEXT -------- */
  R['nav-next'] = (block) => {
    return el('div', {
      class: 'btn-group',
      style: { marginTop: '32px', justifyContent: 'flex-end' }
    }, [
      el('button', {
        class: 'btn btn-primary btn-lg',
        text: block.label,
        onclick: () => TQ.openSection(block.goto)
      })
    ]);
  };

  /* -------- 5.16 FINAL QUIZ -------- */
  R['final-quiz'] = (block) => {
    const wrap = el('div', { id: 'tq-final-quiz' });
    const certWrap = el('div', { id: 'tq-cert-wrap', style: { marginTop: '40px' } });

    const total = TQ.CONTENT.finalQuiz.length;
    const state = { answered: 0, correct: 0 };

    TQ.CONTENT.finalQuiz.forEach((q, i) => {
      const quiz = R.quiz({
        id: 'fq-' + i,
        badge: `Soal ${i + 1} / ${total}`,
        xp: 0,
        q: q.q,
        options: q.options.map((optText, oi) => ({
          text: optText,
          correct: oi === q.correct
        })),
        explanation: q.explanation
      });
      // Override XP behavior: no direct award; handle by final-quiz
      const handler = () => {};
      wrap.appendChild(quiz);
    });

    // Intercept answers via event delegation on wrap
    wrap.addEventListener('click', (e) => {
      const opt = e.target.closest('.quiz-opt');
      if (!opt || opt.disabled) return;
      const quizEl = opt.closest('.quiz');
      if (!quizEl || quizEl.dataset.counted === 'true') return;

      const idx = Array.from(quizEl.querySelectorAll('.quiz-opt')).indexOf(opt);
      const qIndex = parseInt(quizEl.id.replace('fq-', ''), 10);
      const correct = idx === TQ.CONTENT.finalQuiz[qIndex].correct;

      quizEl.dataset.counted = 'true';
      state.answered++;
      if (correct) state.correct++;

      // Award small XP per question
      if (correct) State.awardXP(10);

      if (state.answered === total) {
        finishQuiz(state.correct, total);
      }
    });

    function finishQuiz(correct, total) {
      const pct = Math.round((correct / total) * 100);
      const passed = pct >= (block.passThreshold || 70);

      if (passed) {
        State.awardXP(50);
        renderCertificate(pct, correct, total);
      } else {
        certWrap.innerHTML = '';
        certWrap.appendChild(el('div', { class: 'callout warn' }, [
          el('div', { class: 'callout-title', html: '⚠️ Belum Lulus' }),
          el('div', {
            html: `Skor Anda: <strong>${correct}/${total} (${pct}%)</strong>. Diperlukan minimal ${block.passThreshold || 70}% untuk mendapatkan sertifikat. Silakan pelajari kembali materi dan coba lagi.`
          }),
          el('button', {
            class: 'btn btn-primary',
            style: { marginTop: '12px' },
            text: '↺ Ulangi Kuis Final',
            onclick: () => location.reload()
          })
        ]));
      }
    }

    function renderCertificate(pct, correct, total) {
      certWrap.innerHTML = '';
      const cert = el('div', { class: 'cert-wrap' }, [
        el('div', { class: 'cert' }, [
          el('div', { class: 'cert-kicker', text: 'Sertifikat Penyelesaian' }),
          el('div', { class: 'cert-title', text: '🏆 TaxQuest' }),
          el('div', { class: 'cert-sub', text: 'PPh Pasal 24 & Pasal 25 — Kredit Pajak & Angsuran' }),
          el('div', { class: 'cert-name', id: 'tq-cert-name', text: 'Peserta' }),
          el('div', { class: 'cert-score', text: `Skor Akhir: ${correct}/${total} (${pct}%) — LULUS` }),
          el('div', { class: 'cert-foot', text: 'Diberikan sebagai bukti penyelesaian modul pembelajaran interaktif PPh Pasal 24 & 25' })
        ])
      ]);
      certWrap.appendChild(cert);

      // Prompt for name
      setTimeout(() => {
        const name = prompt('Masukkan nama Anda untuk sertifikat:', 'Peserta');
        if (name && name.trim()) {
          $('#tq-cert-name').textContent = name.trim();
        }
        cert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 400);
    }

    return el('div', {}, [wrap, certWrap]);
  };

  /* ============================================================
     6. SIMULATOR COMPUTE ENGINES
     ============================================================ */
  const Simulators = {
    compute(mode, values) {
      switch (mode) {
        case 'p24-basic': return this.p24Basic(values);
        case 'p25-basic': return this.p25Basic(values);
        default: return [{ label: 'Mode tidak dikenal', value: '' }];
      }
    },

    p24Basic(v) {
      const dn    = Number(v.dn)    || 0;
      const ln    = Number(v.ln)    || 0;
      const pphln = Number(v.pphln) || 0;
      const tarif = Number(v.tarif) || 0.22;

      const pkp = dn + ln;
      const pphTerutang = pkp * tarif;
      const jumlahTertentu = pkp > 0 ? (ln / pkp) * pphTerutang : 0;
      const kredit = Math.min(pphln, jumlahTertentu);

      return [
        { label: 'PKP (DN + LN)',                value: fmtIDR(pkp) },
        { label: `PPh Terutang (${(tarif * 100).toFixed(0)}%)`, value: fmtIDR(pphTerutang) },
        { label: 'Jumlah Tertentu',              value: fmtIDR(jumlahTertentu) },
        { label: 'PPh Luar Negeri',              value: fmtIDR(pphln) },
        { label: 'PPh 24 yang dapat dikreditkan', value: fmtIDR(kredit), isTotal: true }
      ];
    },

    p25Basic(v) {
      const pph = Number(v.pph) || 0;
      const k22 = Number(v.k22) || 0;
      const k23 = Number(v.k23) || 0;
      const k24 = Number(v.k24) || 0;

      const totalKredit = k22 + k23 + k24;
      const sendiri = Math.max(pph - totalKredit, 0);
      const bulanan = sendiri / 12;

      return [
        { label: 'PPh Terutang',                       value: fmtIDR(pph) },
        { label: 'Total Kredit Pajak (22+23+24)',      value: '(' + fmtIDR(totalKredit) + ')' },
        { label: 'PPh yang harus dibayar sendiri',     value: fmtIDR(sendiri) },
        { label: 'PPh 25 = 1/12 × sendiri',            value: fmtIDR(bulanan) + '/bulan', isTotal: true }
      ];
    }
  };

  /* ============================================================
     7. RENDERER DISPATCHER
     ============================================================ */
  const Renderer = {
    render(block) {
      if (!block || !block.type) return el('div');
      const fn = R[block.type];
      if (!fn) {
        console.warn('Unknown block type:', block.type);
        return el('div', { text: `[Unknown block: ${block.type}]` });
      }
      try {
        return fn(block);
      } catch (err) {
        console.error('Render error for block:', block, err);
        return el('div', { class: 'callout warn' }, [
          el('div', { class: 'callout-title', text: 'Error rendering' }),
          el('div', { text: String(err.message || err) })
        ]);
      }
    },

    renderSection(section) {
      const wrap = el('div', { class: 'section-body stack-lg' });
      section.blocks.forEach((b) => wrap.appendChild(this.render(b)));
      return wrap;
    }
  };

  /* ============================================================
     8. EXPORT TO GLOBAL NAMESPACE
     ============================================================ */
  window.TQ = window.TQ || {};
  Object.assign(window.TQ, {
    $, $$, el, fmtIDR, fmtCompact,
    State, EventBus, Toast, XP, Renderer, Simulators,
    getLevel(xp) {
      const levels = TQ.CONTENT.levels;
      let cur = levels[0];
      for (const l of levels) if (xp >= l.min) cur = l;
      return cur;
    }
  });

})();