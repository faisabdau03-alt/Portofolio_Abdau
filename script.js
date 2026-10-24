/* ====================================================================
   FAISAL ABDAU - MODERN DEVELOPER PORTFOLIO (16-BIT RETRO EDITION)
   SCRIPT.JS (Interactive Features, Web Audio API & Project Filter)
   ==================================================================== */

(function () {
  "use strict";

  /* ====================================================================
     1. PROCEDURAL 8/16-BIT WEB AUDIO API SYNTHESIZER
     ==================================================================== */
  let audioCtx = null;
  let sfxEnabled = true;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playTone(freq, type, duration, startTime = 0, gainLevel = 0.08) {
    if (!sfxEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type; // 'square', 'sawtooth', 'triangle', 'sine'
      osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);

      gain.gain.setValueAtTime(gainLevel, ctx.currentTime + startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + startTime);
      osc.stop(ctx.currentTime + startTime + duration);
    } catch (e) {
      // Audio error suppressed silently
    }
  }

  // Preset Sound Effects
  function sfxBlip() {
    playTone(520, "square", 0.05, 0, 0.06);
  }

  function sfxSelect() {
    if (!sfxEnabled) return;
    playTone(320, "square", 0.07, 0, 0.07);
    playTone(480, "square", 0.07, 0.05, 0.07);
  }

  function sfxCoin() {
    if (!sfxEnabled) return;
    playTone(987.77, "square", 0.08, 0, 0.09);
    playTone(1318.51, "square", 0.25, 0.08, 0.09);
  }

  function sfxPowerUp() {
    if (!sfxEnabled) return;
    const notes = [330, 392, 523, 659, 784, 1046];
    notes.forEach((freq, idx) => {
      playTone(freq, "square", 0.09, idx * 0.05, 0.08);
    });
  }

  function sfxLaser() {
    if (!sfxEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.16);

      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.16);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.17);
    } catch (e) {}
  }

  function sfxFanfare() {
    if (!sfxEnabled) return;
    const notes = [
      { f: 523.25, d: 0.12, t: 0 },
      { f: 659.25, d: 0.12, t: 0.11 },
      { f: 783.99, d: 0.12, t: 0.22 },
      { f: 1046.5, d: 0.38, t: 0.33 }
    ];
    notes.forEach(n => {
      playTone(n.f, "square", n.d, n.t, 0.1);
    });
  }

  const sfxLibrary = {
    blip: sfxBlip,
    select: sfxSelect,
    coin: sfxCoin,
    powerup: sfxPowerUp,
    laser: sfxLaser,
    fanfare: sfxFanfare
  };

  function playSfx(name) {
    if (sfxLibrary[name]) {
      sfxLibrary[name]();
    } else {
      sfxSelect();
    }
  }

  // Delegated Click Sound Listener
  document.addEventListener("click", function (e) {
    const target = e.target.closest("[data-sfx]");
    if (target) {
      const sound = target.getAttribute("data-sfx");
      playSfx(sound);
    }
  });


  /* ====================================================================
     2. HUD CONTROLS: COINS, SFX, CRT, HAMBURGER
     ==================================================================== */
  const sfxToggleBtn = document.getElementById("sfxToggle");
  const sfxIcon = document.getElementById("sfxIcon");
  const crtToggleBtn = document.getElementById("crtToggle");
  const crtIcon = document.getElementById("crtIcon");
  const coinBtn = document.getElementById("coinBtn");
  const coinCountEl = document.getElementById("coinCount");
  const scoreValEl = document.getElementById("scoreVal");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileNav = document.getElementById("mobileNav");

  let coins = 99;
  let score = 82026;

  // Toggle Sound FX
  if (sfxToggleBtn) {
    sfxToggleBtn.addEventListener("click", function () {
      sfxEnabled = !sfxEnabled;
      sfxIcon.textContent = sfxEnabled ? "🔊" : "🔇";
      sfxToggleBtn.title = sfxEnabled ? "Mute Sound Effects" : "Unmute Sound Effects";
      if (sfxEnabled) sfxCoin();
    });
  }

  // Toggle CRT Scanlines
  if (crtToggleBtn) {
    crtToggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("crt-enabled");
      const isEnabled = document.body.classList.contains("crt-enabled");
      crtIcon.textContent = isEnabled ? "📺" : "🖥️";
      crtToggleBtn.title = isEnabled ? "Disable CRT Scanlines" : "Enable CRT Scanlines";
      sfxSelect();
    });
  }

  // Click Coin HUD Button
  if (coinBtn) {
    coinBtn.addEventListener("click", function () {
      coins++;
      score += 100;
      if (coinCountEl) coinCountEl.textContent = `x${coins}`;
      if (scoreValEl) scoreValEl.textContent = String(score).padStart(6, "0");
      sfxCoin();

      coinBtn.style.transform = "scale(1.15)";
      setTimeout(() => {
        coinBtn.style.transform = "scale(1)";
      }, 120);
    });
  }

  // Mobile Hamburger Toggle
  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener("click", function () {
      mobileNav.classList.toggle("open");
      hamburgerBtn.textContent = mobileNav.classList.contains("open") ? "✕" : "☰";
      sfxSelect();
    });

    // Auto-close on link click
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        hamburgerBtn.textContent = "☰";
      });
    });
  }


  /* ====================================================================
     3. DYNAMIC PROJECT RENDERING, SEARCH & FILTERS
     ==================================================================== */
  const projectsGrid = document.getElementById("projectsGrid");
  const searchInput = document.getElementById("projectSearchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const categoryFilters = document.querySelectorAll(".filter-btn");
  const statusFilters = document.querySelectorAll(".status-toggle-btn");
  const sortSelect = document.getElementById("projectSortSelect");
  const projectCounterEl = document.getElementById("projectCountBadge");

  let currentCategory = "all";
  let currentStatus = "all";
  let currentSearch = "";
  let currentSort = "default";

  function getFilteredProjects() {
    if (typeof PROJECTS_DATA === "undefined" || !Array.isArray(PROJECTS_DATA)) {
      return [];
    }

    return PROJECTS_DATA.filter(project => {
      // Category filter
      const matchCategory = currentCategory === "all" || project.category === currentCategory;

      // Status filter (Mendukung repositori privat secara aman)
      let matchStatus = false;
      if (currentStatus === "all") {
        matchStatus = true;
      } else if (currentStatus === "live") {
        matchStatus = Boolean(project.demoUrl) && project.showDemo !== false;
      } else if (currentStatus === "source") {
        const isPriv = Boolean(project.isPrivate) || project.showSourceCode === false;
        matchStatus = !isPriv && Boolean(project.repoUrl) && project.showSourceCode !== false;
      }

      // Search filter
      const query = currentSearch.toLowerCase().trim();
      const matchSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        (project.techStack && project.techStack.some(t => t.toLowerCase().includes(query))) ||
        (project.categoryLabel && project.categoryLabel.toLowerCase().includes(query));

      return matchCategory && matchStatus && matchSearch;
    }).sort((a, b) => {
      if (currentSort === "name-asc") {
        return a.title.localeCompare(b.title);
      }
      if (currentSort === "name-desc") {
        return b.title.localeCompare(a.title);
      }
      // Default: featured first, then original order
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }

  function renderProjects() {
    if (!projectsGrid) return;

    const filtered = getFilteredProjects();

    if (projectCounterEl) {
      projectCounterEl.textContent = `${filtered.length} Proyek`;
    }

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <h4 class="empty-state-title">Tidak ada proyek yang sesuai</h4>
          <p class="empty-state-desc">
            Coba gunakan kata kunci pencarian lain atau reset filter kategori di atas.
          </p>
          <button type="button" class="btn btn-secondary btn-sm" id="resetFilterBtn">
            ↺ Reset Semua Filter
          </button>
        </div>
      `;

      const resetBtn = document.getElementById("resetFilterBtn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          currentCategory = "all";
          currentStatus = "all";
          currentSearch = "";
          if (searchInput) searchInput.value = "";
          if (clearSearchBtn) clearSearchBtn.style.display = "none";
          categoryFilters.forEach(btn => btn.classList.toggle("active", btn.dataset.category === "all"));
          statusFilters.forEach(btn => btn.classList.toggle("active", btn.dataset.status === "all"));
          renderProjects();
          sfxSelect();
        });
      }
      return;
    }

    projectsGrid.innerHTML = filtered
      .map(p => {
        // Logika Keamanan Repositori Privat & Demo
        const isPrivate = Boolean(p.isPrivate) || p.showSourceCode === false;
        const canShowSource = !isPrivate && p.showSourceCode !== false && Boolean(p.repoUrl);
        const canShowDemo = p.showDemo !== false && Boolean(p.demoUrl);

        // Status badge di pojok kartu
        let statusBadgeClass = "source";
        let statusBadgeText = "○ PROJECT";

        if (canShowDemo) {
          statusBadgeClass = "live";
          statusBadgeText = "● LIVE DEMO";
        } else if (isPrivate) {
          statusBadgeClass = "source";
          statusBadgeText = "🔒 PRIVATE REPO";
        } else if (canShowSource) {
          statusBadgeClass = "source";
          statusBadgeText = "○ SOURCE CODE";
        }

        // Tombol Demo (kiri)
        const demoBtnHtml = canShowDemo
          ? `<a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn demo" data-sfx="coin">
              <span>▶ Live Demo</span>
             </a>`
          : (p.category === "mobile"
              ? `<span class="project-link-btn disabled" title="Aplikasi Android Native (Dijalankan via Android Studio)">
                  <span>📱 App Native</span>
                 </span>`
              : "");

        // Tombol Source Code (kanan) - AMAN: Tidak merender tautan jika repositori privat
        const repoBtnHtml = canShowSource
          ? `<a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn code" data-sfx="select">
              <span>🐙 Source Code</span>
             </a>`
          : (isPrivate
              ? `<span class="project-link-btn private-badge" title="Source code repositori ini bersifat privat (akses terbatas)">
                  <span>🔒 Private Repo</span>
                 </span>`
              : "");

        const techChipsHtml = p.techStack
          ? p.techStack.map(t => `<span class="tech-chip">${t}</span>`).join("")
          : "";

        return `
          <article class="project-card" data-category="${p.category}">
            <div class="project-card-header">
              <span class="project-card-icon">${p.bannerIcon || "💻"}</span>
              <span class="project-status-tag ${statusBadgeClass}">${statusBadgeText}</span>
            </div>

            <div class="project-card-body">
              <h3 class="project-card-title">${p.title}</h3>
              <span class="project-card-subtitle">${p.subtitle}</span>
              <p class="project-card-desc">${p.description}</p>
              
              <div class="project-card-tech">
                ${techChipsHtml}
              </div>
            </div>

            <div class="project-card-footer">
              ${demoBtnHtml}
              ${repoBtnHtml}
            </div>
          </article>
        `;
      })
      .join("");
  }

  // Search Input Event
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      currentSearch = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = currentSearch ? "block" : "none";
      }
      renderProjects();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", function () {
      if (searchInput) {
        searchInput.value = "";
        currentSearch = "";
        clearSearchBtn.style.display = "none";
        searchInput.focus();
        renderProjects();
        sfxSelect();
      }
    });
  }

  // Category Filter Buttons
  categoryFilters.forEach(btn => {
    btn.addEventListener("click", function () {
      categoryFilters.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      currentCategory = this.dataset.category || "all";
      renderProjects();
      sfxSelect();
    });
  });

  // Status Filter Buttons
  statusFilters.forEach(btn => {
    btn.addEventListener("click", function () {
      statusFilters.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      currentStatus = this.dataset.status || "all";
      renderProjects();
      sfxSelect();
    });
  });

  // Sort Selector
  if (sortSelect) {
    sortSelect.addEventListener("change", function (e) {
      currentSort = e.target.value;
      renderProjects();
      sfxSelect();
    });
  }


  /* ====================================================================
     4. HERO INTERACTIVE TERMINAL / CODE WIDGET
     ==================================================================== */
  const terminalTabs = document.querySelectorAll(".widget-tab");
  const terminalCodeBody = document.getElementById("terminalCodeBody");
  const terminalRunBtn = document.getElementById("terminalRunBtn");

  const terminalSnippets = {
    profile: `
<div class="code-line"><span class="code-keyword">const</span> developer = {</div>
<div class="code-line">&nbsp;&nbsp;<span class="code-prop">name</span>: <span class="code-str">"Faisal Abdau"</span>,</div>
<div class="code-line">&nbsp;&nbsp;<span class="code-prop">role</span>: <span class="code-str">"Junior Web Developer & IT Student"</span>,</div>
<div class="code-line">&nbsp;&nbsp;<span class="code-prop">semester</span>: <span class="code-num">5</span>,</div>
<div class="code-line">&nbsp;&nbsp;<span class="code-prop">verifiedProjects</span>: <span class="code-num">8</span>,</div>
<div class="code-line">&nbsp;&nbsp;<span class="code-prop">liveDeployments</span>: <span class="code-num">6</span>,</div>
<div class="code-line">&nbsp;&nbsp;<span class="code-prop">favoriteLeisure</span>: <span class="code-str">"PlayStation Gaming & Tech Exploration"</span>,</div>
<div class="code-line">&nbsp;&nbsp;<span class="code-prop">motto</span>: <span class="code-str">"Code with precision, learn continuously."</span></div>
<div class="code-line">};</div>
    `.trim(),

    skills: `
<div class="code-line"><span class="code-keyword">interface</span> <span class="code-prop">TechStack</span> {</div>
<div class="code-line">&nbsp;&nbsp;<span class="code-prop">frontend</span>: [<span class="code-str">"HTML5"</span>, <span class="code-str">"CSS3"</span>, <span class="code-str">"JavaScript"</span>, <span class="code-str">"Bootstrap"</span>, <span class="code-str">"Tailwind"</span>],</div>
<div class="code-line">&nbsp;&nbsp;<span class="code-prop">backendBaaS</span>: [<span class="code-str">"Supabase"</span>, <span class="code-str">"PostgreSQL"</span>, <span class="code-str">"Realtime API"</span>, <span class="code-str">"Firebase"</span>],</div>
<div class="code-line">&nbsp;&nbsp;<span class="code-prop">mobile</span>: [<span class="code-str">"Android Java"</span>, <span class="code-str">"Material 3"</span>],</div>
<div class="code-line">&nbsp;&nbsp;<span class="code-prop">tooling</span>: [<span class="code-str">"Vite"</span>, <span class="code-str">"Git/GitHub"</span>, <span class="code-str">"Vercel"</span>, <span class="code-str">"VS Code"</span>]</div>
<div class="code-line">}</div>
    `.trim(),

    journey: `
<div class="code-line"><span class="code-comment"># PERJALANAN & PROYEK UTAMA</span></div>
<div class="code-line">1. <span class="code-str">Atur Produksi</span>: ERP manufaktur realtime (Supabase + Vite)</div>
<div class="code-line">2. <span class="code-str">Mulyo Adventure</span>: Platform rental outdoor + WhatsApp generator</div>
<div class="code-line">3. <span class="code-str">PO ASM Putra</span>: Booking & rute pariwisata real-time</div>
<div class="code-line">4. <span class="code-str">Fokusku</span>: Mobile Pomodoro productivity timer (Android Java)</div>
<div class="code-line"><span class="code-comment"># Status: Selalu bersemangat eksplorasi teknologi baru!</span></div>
    `.trim()
  };

  terminalTabs.forEach(tab => {
    tab.addEventListener("click", function () {
      terminalTabs.forEach(t => t.classList.remove("active"));
      this.classList.add("active");
      const tabKey = this.dataset.tab;
      if (terminalCodeBody && terminalSnippets[tabKey]) {
        terminalCodeBody.innerHTML = terminalSnippets[tabKey];
      }
      sfxSelect();
    });
  });

  if (terminalRunBtn) {
    terminalRunBtn.addEventListener("click", function () {
      sfxPowerUp();
      terminalRunBtn.textContent = "⚡ EXECUTED (200 OK)";
      terminalRunBtn.style.background = "var(--color-accent)";
      terminalRunBtn.style.color = "#FFFFFF";

      setTimeout(() => {
        terminalRunBtn.textContent = "▶ RUN CODE";
        terminalRunBtn.style.background = "";
        terminalRunBtn.style.color = "";
      }, 2000);
    });
  }


  /* ====================================================================
     5. PLAYSTATION COMBO PAD & SOUNDBOARD (PS Zone)
     ==================================================================== */
  const psComboBtns = document.querySelectorAll(".ps-action-btn");
  const comboDisplayText = document.getElementById("comboDisplayText");

  const psSkillsQuotes = {
    TRI: {
      text: "▲ TRIANGLE: RESPONSIVE FLEXBOX & CSS GRID SHIELD!",
      sfx: "laser"
    },
    CIR: {
      text: "● CIRCLE: CLEAN SEMANTIC MARKUP & ACCESSIBILITY!",
      sfx: "powerup"
    },
    CRO: {
      text: "✖ CROSS: HIGH-PERFORMANCE JS REALTIME STRIKE!",
      sfx: "coin"
    },
    SQU: {
      text: "■ SQUARE: SUPABASE POSTGRESQL & BACKEND POWER!",
      sfx: "fanfare"
    }
  };

  psComboBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const combo = this.dataset.combo;
      if (psSkillsQuotes[combo] && comboDisplayText) {
        comboDisplayText.textContent = psSkillsQuotes[combo].text;
        comboDisplayText.style.color = "var(--color-accent)";
        playSfx(psSkillsQuotes[combo].sfx);

        setTimeout(() => {
          comboDisplayText.style.color = "var(--color-text-primary)";
        }, 500);
      }
    });
  });

  // Sound test buttons
  const soundboardBtns = document.querySelectorAll(".sfx-pill-btn");
  soundboardBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const soundKey = this.dataset.sound;
      playSfx(soundKey);
    });
  });


  /* ====================================================================
     6. ACTIVE SCROLL SPY & SMOOTH NAVIGATION
     ==================================================================== */
  const navLinks = document.querySelectorAll(".hud-nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });


  /* ====================================================================
     7. CONTACT FORM: DIRECT WHATSAPP GENERATOR
     ==================================================================== */
  const waSendBtn = document.getElementById("waSendBtn");
  const senderNameInput = document.getElementById("senderName");
  const senderMsgInput = document.getElementById("senderMsg");
  const copyWaBtn = document.getElementById("copyWaBtn");

  if (waSendBtn) {
    waSendBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const name = senderNameInput ? senderNameInput.value.trim() : "";
      const msg = senderMsgInput ? senderMsgInput.value.trim() : "";

      const text = `Halo Faisal! Saya ${name || "Pengunjung Website"}.${
        msg ? `\n\n${msg}` : "\n\nSaya tertarik dengan portofolio dan proyek website Anda, mau diskusi peluang kolaborasi."
      }`;

      const waUrl = `https://wa.me/62882005363151?text=${encodeURIComponent(text)}`;
      sfxCoin();
      window.open(waUrl, "_blank", "noopener,noreferrer");
    });
  }

  if (copyWaBtn) {
    copyWaBtn.addEventListener("click", function () {
      navigator.clipboard.writeText("+62882005363151").then(() => {
        copyWaBtn.textContent = "✔ Disalin!";
        sfxCoin();
        setTimeout(() => {
          copyWaBtn.textContent = "📋 Salin";
        }, 1800);
      });
    });
  }


  /* ====================================================================
     8. EASTER EGG: KONAMI CODE (↑ ↑ ↓ ↓ ← → ← → B A)
     ==================================================================== */
  const konamiPattern = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "KeyB", "KeyA"
  ];
  let konamiProgress = 0;

  const secretModal = document.getElementById("secretModalOverlay");
  const secretCloseBtn = document.getElementById("secretCloseBtn");
  const secretOkBtn = document.getElementById("secretOkBtn");

  function closeSecret() {
    if (secretModal) {
      secretModal.classList.remove("active");
      sfxSelect();
    }
  }

  if (secretCloseBtn) secretCloseBtn.addEventListener("click", closeSecret);
  if (secretOkBtn) secretOkBtn.addEventListener("click", closeSecret);

  window.addEventListener("keydown", function (e) {
    const expected = konamiPattern[konamiProgress];

    if (e.code === expected || e.key.toLowerCase() === expected.toLowerCase()) {
      konamiProgress++;
      sfxBlip();

      if (konamiProgress === konamiPattern.length) {
        konamiProgress = 0;
        sfxFanfare();
        score = 999999;
        coins = 999;
        if (scoreValEl) scoreValEl.textContent = "999999";
        if (coinCountEl) coinCountEl.textContent = "x999";
        if (secretModal) secretModal.classList.add("active");
      }
    } else {
      konamiProgress = 0;
    }
  });


  /* ====================================================================
     9. DYNAMIC FOOTER YEAR
     ==================================================================== */
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }


  /* ====================================================================
     10. INITIALIZATION
     ==================================================================== */
  renderProjects();

  console.log(
    "%c[FAISAL.DEV] Portofolio Faisal Abdau loaded successfully! 🚀",
    "color: #06b6d4; font-weight: bold; font-size: 13px;"
  );
  console.log(
    "%cCrafted with HTML5, CSS3 Modern, Vanilla JS ES6+ & Web Audio API",
    "color: #8b5cf6; font-size: 11px;"
  );
})();
