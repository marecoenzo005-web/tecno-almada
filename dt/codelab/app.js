/* ============================================================
   NovaTech Studio — lógica del panel
   Login demo: acepta cualquier usuario y contraseña no vacíos.
   ============================================================ */

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var SESSION_KEY = 'novatech.session';
  var CHECK_KEY = 'novatech.checklist.v1';
  var PREMIUM_KEY = 'novatech.premium.v1';
  var RETAINER_PRICE = 390;
  var MARGIN = 0.65;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------
     Utilidades
     ------------------------------------------------------------ */

  function wait(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  function safeGet(storage, key) {
    try { return storage.getItem(key); } catch (e) { return null; }
  }

  function safeSet(storage, key, value) {
    try { storage.setItem(key, value); return true; } catch (e) { return false; }
  }

  function safeRemove(storage, key) {
    try { storage.removeItem(key); } catch (e) { /* sin permisos */ }
  }

  function money(value) {
    // Agrupación con punto para que 4 y 5 cifras se lean igual ($1.800 / $49.680).
    return '$' + Math.round(value).toLocaleString('de-DE');
  }

  function readSession() {
    var raw = safeGet(localStorage, SESSION_KEY) || safeGet(sessionStorage, SESSION_KEY);
    if (!raw) return null;
    try {
      var data = JSON.parse(raw);
      return data && data.user ? data : null;
    } catch (e) {
      return null;
    }
  }

  function saveSession(user, keep) {
    var payload = JSON.stringify({ user: user, at: Date.now() });
    if (keep) {
      safeSet(localStorage, SESSION_KEY, payload);
      safeRemove(sessionStorage, SESSION_KEY);
    } else {
      safeSet(sessionStorage, SESSION_KEY, payload);
      safeRemove(localStorage, SESSION_KEY);
    }
  }

  function clearSession() {
    safeRemove(localStorage, SESSION_KEY);
    safeRemove(sessionStorage, SESSION_KEY);
  }

  var toastTimer = null;
  function toast(message) {
    var el = $('#toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove('is-visible');
    }, 3400);
  }

  function scrollToTop() {
    var html = document.documentElement;
    var previous = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    html.style.scrollBehavior = previous;
  }

  /* ------------------------------------------------------------
     Login
     ------------------------------------------------------------ */

  var loginView = $('#loginView');
  var appView = $('#appView');
  var loginForm = $('#loginForm');
  var loginShell = $('#loginShell');
  var loginBtn = $('#loginBtn');
  var loginLabel = $('.btn-label', loginBtn);
  var userInput = $('#user');
  var passInput = $('#pass');
  var errorBox = $('#loginError');
  var togglePass = $('#togglePass');
  var rememberBox = $('#remember');
  var appInitialized = false;

  function showError(message) {
    errorBox.textContent = message;
    errorBox.hidden = false;
  }

  function hideError() {
    errorBox.hidden = true;
    errorBox.textContent = '';
  }

  function shakeLogin() {
    loginShell.classList.remove('is-shaking');
    // Forzar reinicio de la animación
    void loginShell.offsetWidth;
    loginShell.classList.add('is-shaking');
  }

  loginShell.addEventListener('animationend', function (event) {
    if (event.animationName === 'shake') loginShell.classList.remove('is-shaking');
  });

  togglePass.addEventListener('click', function () {
    var showing = passInput.type === 'password';
    passInput.type = showing ? 'text' : 'password';
    togglePass.classList.toggle('is-on', showing);
    togglePass.setAttribute('aria-pressed', String(showing));
    togglePass.setAttribute('aria-label', showing ? 'Ocultar contraseña' : 'Mostrar contraseña');
    passInput.focus();
  });

  userInput.addEventListener('input', hideError);
  passInput.addEventListener('input', hideError);

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var user = userInput.value.trim();
    var pass = passInput.value;

    if (!user || !pass) {
      showError('Escribe un usuario y una contraseña. Puede ser cualquiera, pero no pueden quedar vacíos.');
      shakeLogin();
      if (!user) userInput.focus();
      else passInput.focus();
      return;
    }

    hideError();
    loginBtn.disabled = true;
    loginBtn.classList.add('is-loading');
    loginLabel.textContent = 'Verificando acceso...';

    wait(700).then(function () {
      // Demo: se acepta cualquier combinación no vacía. Aquí iría una llamada real de autenticación.
      saveSession(user, rememberBox.checked);
      loginLabel.textContent = 'Acceso concedido';
      return wait(320);
    }).then(function () {
      loginBtn.disabled = false;
      loginBtn.classList.remove('is-loading');
      loginLabel.textContent = 'Entrar al panel';
      showApp(user);
      toast('Bienvenido, ' + user + '. Sesión iniciada.');
    });
  });

  /* ------------------------------------------------------------
     Cambio de vistas
     ------------------------------------------------------------ */

  function showApp(user) {
    loginView.hidden = true;
    appView.hidden = false;
    document.title = 'NovaTech · Plan de negocio';

    $('#userName').textContent = user;
    $('#footerUser').textContent = user;
    $('#avatar').textContent = (user.charAt(0) || 'N').toUpperCase();

    scrollToTop();

    if (!appInitialized) {
      appInitialized = true;
      initApp();
    } else {
      // Recalcular animaciones al volver a entrar
      $$('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
    }
  }

  function showLogin() {
    appView.hidden = true;
    loginView.hidden = false;
    document.title = 'NovaTech · Acceso al plan de negocio';

    loginForm.reset();
    rememberBox.checked = true;
    hideError();
    passInput.type = 'password';
    togglePass.classList.remove('is-on');
    togglePass.setAttribute('aria-pressed', 'false');
    togglePass.setAttribute('aria-label', 'Mostrar contraseña');
    scrollToTop();
    setTimeout(function () { userInput.focus(); }, 80);
  }

  $('#logoutBtn').addEventListener('click', function () {
    clearSession();
    showLogin();
    toast('Sesión cerrada. Puedes volver a entrar con cualquier usuario.');
  });

  /* ------------------------------------------------------------
     Inicialización del panel
     ------------------------------------------------------------ */

  function initApp() {
    setupReveal();
    setupCounters();
    setupCalculator();
    setupChecklist();
    setupPremium();
    setupPrint();
  }

  /* ---------- Animación de aparición ---------- */

  function setupReveal() {
    var targets = $$(
      '.section-head, .stats-grid, .step, .important-card, .calc-panel, .calc-results, .check-card, .hero-copy, .hero-card'
    );
    targets.forEach(function (el) { el.classList.add('reveal'); });

    if (reducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Contadores ---------- */

  function setupCounters() {
    var counters = $$('.stat strong');
    if (!counters.length) return;

    if (reducedMotion || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.6 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  function animateCounter(el) {
    var target = parseFloat(el.dataset.count || '0');
    var prefix = el.dataset.prefix || '';
    var suffix = el.dataset.suffix || '';
    var duration = 1100;
    var start = performance.now();

    function frame(now) {
      var progress = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.round(target * eased);
      el.textContent = prefix + value.toLocaleString('de-DE') + suffix;
      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  /* ---------- Calculadora ---------- */

  function setupCalculator() {
    var clients = $('#calcClients');
    var ticket = $('#calcTicket');
    var retainers = $('#calcRetainers');
    if (!clients || !ticket || !retainers) return;

    var clientsVal = $('#clientsVal');
    var ticketVal = $('#ticketVal');
    var retainersVal = $('#retainersVal');
    var outProjects = $('#outProjects');
    var outMrr = $('#outMrr');
    var outTotal = $('#outTotal');
    var outProfit = $('#outProfit');
    var outYear = $('#outYear');

    function update() {
      var newClients = Number(clients.value);
      var avgTicket = Number(ticket.value);
      var monthlyClients = Number(retainers.value);

      var projects = newClients * avgTicket;
      var recurring = monthlyClients * RETAINER_PRICE;
      var total = projects + recurring;
      var profit = total * MARGIN;
      var year = total * 12;

      clientsVal.textContent = String(newClients);
      ticketVal.textContent = money(avgTicket);
      retainersVal.textContent = String(monthlyClients);

      outProjects.textContent = money(projects);
      outMrr.textContent = money(recurring);
      outTotal.textContent = money(total);
      outProfit.textContent = money(profit);
      outYear.textContent = money(year);
    }

    [clients, ticket, retainers].forEach(function (input) {
      input.addEventListener('input', update);
    });

    update();
  }

  /* ---------- Checklist ---------- */

  var TASKS = [
    { id: 'nicho', text: 'Nicho elegido y escrito en una frase' },
    { id: 'entrevistas', text: '10 entrevistas con clientes potenciales' },
    { id: 'oferta', text: 'Oferta de 3 paquetes con precios fijos' },
    { id: 'legal', text: 'Contrato y política de privacidad listos' },
    { id: 'fiscal', text: 'Alta fiscal y cuenta bancaria separada' },
    { id: 'web', text: 'Web de una página publicada' },
    { id: 'demo', text: 'Demo grabada de 3 minutos' },
    { id: 'lista', text: '50 negocios objetivo en una lista' },
    { id: 'mensajes', text: 'Primeros 10 mensajes personalizados enviados' },
    { id: 'propuestas', text: '3 propuestas enviadas' },
    { id: 'cobro', text: 'Primer cliente cobrado (50% al inicio)' },
    { id: 'recurrencia', text: 'Plan de mantenimiento mensual ofrecido' }
  ];

  function loadDone() {
    var raw = safeGet(localStorage, CHECK_KEY);
    var result = {};
    if (!raw) return {};
    try {
      var parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        parsed.forEach(function (id) {
          if (typeof id === 'string') result[id] = true;
        });
      }
    } catch (e) { /* datos corruptos: empezamos de cero */ }
    return result;
  }

  function saveDone(done) {
    var ids = Object.keys(done).filter(function (id) { return done[id]; });
    safeSet(localStorage, CHECK_KEY, JSON.stringify(ids));
  }

  function setupChecklist() {
    var list = $('#checkList');
    var bar = $('#checkBar');
    var label = $('#checkLabel');
    var pctEl = $('#checkPct');
    var progress = $('#checkProgress');
    var resetBtn = $('#resetChecklist');
    if (!list) return;

    var total = TASKS.length;
    var done = loadDone();

    function render() {
      list.innerHTML = '';

      TASKS.forEach(function (task) {
        var item = document.createElement('li');
        var wrap = document.createElement('label');
        wrap.className = 'check-item' + (done[task.id] ? ' is-done' : '');

        var input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = Boolean(done[task.id]);
        input.setAttribute('data-id', task.id);

        var text = document.createElement('span');
        text.className = 'txt';
        text.textContent = task.text;

        wrap.appendChild(input);
        wrap.appendChild(text);
        item.appendChild(wrap);
        list.appendChild(item);
      });

      updateProgress();
    }

    function updateProgress() {
      var count = Object.keys(done).filter(function (id) { return done[id]; }).length;
      var pct = Math.round((count / total) * 100);

      label.textContent = count + ' de ' + total + ' completados';
      pctEl.textContent = pct + '%';
      bar.style.width = pct + '%';
      progress.setAttribute('aria-valuenow', String(count));
      progress.setAttribute('aria-valuemax', String(total));
    }

    list.addEventListener('change', function (event) {
      var input = event.target;
      if (!input || input.type !== 'checkbox') return;

      var id = input.getAttribute('data-id');
      if (!id) return;

      var wasComplete = Object.keys(done).filter(function (key) { return done[key]; }).length === total;

      done[id] = input.checked;
      if (!input.checked) delete done[id];

      input.closest('.check-item').classList.toggle('is-done', input.checked);
      saveDone(done);
      updateProgress();

      var nowComplete = Object.keys(done).filter(function (key) { return done[key]; }).length === total;
      if (nowComplete && !wasComplete) {
        toast('¡Checklist completo! Ahora toca ejecutar.');
      }
    });

    resetBtn.addEventListener('click', function () {
      if (!window.confirm('¿Reiniciar el checklist? Se borrará tu progreso guardado.')) return;
      done = {};
      saveDone(done);
      render();
      toast('Checklist reiniciado.');
    });

    render();
  }

  /* ---------- Premium ---------- */

  function isValidEmail(value) {
    return typeof value === 'string' &&
      value.length <= 120 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  }

  function readPremium() {
    var raw = safeGet(localStorage, PREMIUM_KEY);
    if (!raw) return null;
    try {
      var data = JSON.parse(raw);
      if (!data || !isValidEmail(data.email)) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  function burstConfetti(container) {
    if (!container || reducedMotion) return;

    var colors = ['#f6c56b', '#3ce8c5', '#8b7bff', '#ff7bb6', '#ffffff'];

    for (var i = 0; i < 26; i++) {
      var piece = document.createElement('span');
      piece.className = 'confetti';
      piece.style.left = (Math.random() * 100) + '%';
      piece.style.background = colors[i % colors.length];
      piece.style.width = (5 + Math.random() * 5) + 'px';
      piece.style.height = (8 + Math.random() * 8) + 'px';
      piece.style.setProperty('--x', Math.round(Math.random() * 180 - 90) + 'px');
      piece.style.setProperty('--r', Math.round(Math.random() * 720 - 360) + 'deg');
      piece.style.animationDelay = Math.round(Math.random() * 180) + 'ms';
      container.appendChild(piece);

      (function (node) {
        setTimeout(function () { node.remove(); }, 2300);
      })(piece);
    }
  }

  function setupPremium() {
    var section = $('#premium');
    var locked = $('#premiumLocked');
    var unlocked = $('#premiumUnlocked');
    var form = $('#premiumForm');
    var emailInput = $('#premiumEmail');
    var errorBox = $('#premiumError');
    var btn = $('#premiumBtn');
    var btnLabel = $('.btn-label', btn);
    var emailOut = $('#premiumEmailOut');
    var changeBtn = $('#changeEmailBtn');
    var printBtn = $('#printPremiumBtn');
    var title = $('#premiumTitle');
    var confettiLayer = $('#confettiLayer');

    if (!section || !locked || !unlocked || !form) return;

    function showError(message) {
      errorBox.textContent = message;
      errorBox.hidden = false;
    }

    function hideError() {
      errorBox.hidden = true;
      errorBox.textContent = '';
    }

    function showPremium(email, options) {
      options = options || {};
      locked.hidden = true;
      unlocked.hidden = false;
      emailOut.textContent = email;

      if (!options.silent) {
        toast('Premium desbloqueado para ' + email + '.');
        setTimeout(function () { burstConfetti(confettiLayer); }, 300);
      }

      if (options.scroll) {
        section.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
        setTimeout(function () {
          if (title) title.focus({ preventScroll: true });
        }, reducedMotion ? 60 : 420);
      }
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var email = emailInput.value.trim();

      if (!email) {
        showError('Escribe tu correo electrónico para desbloquear Premium.');
        emailInput.focus();
        return;
      }

      if (!isValidEmail(email)) {
        showError('Ese correo no parece válido. Revisa el formato (ejemplo: tu@empresa.com).');
        emailInput.focus();
        return;
      }

      hideError();
      btn.disabled = true;
      btn.classList.add('is-loading');
      btnLabel.textContent = 'Desbloqueando...';

      wait(750).then(function () {
        var stored = safeSet(localStorage, PREMIUM_KEY, JSON.stringify({ email: email, at: Date.now() }));
        btn.disabled = false;
        btn.classList.remove('is-loading');
        btnLabel.textContent = 'Desbloquear Premium';
        showPremium(email, { scroll: true });
        if (!stored) {
          toast('Premium desbloqueado solo para esta visita: el navegador bloqueó el guardado.');
        }
      });
    });

    emailInput.addEventListener('input', hideError);

    changeBtn.addEventListener('click', function () {
      safeRemove(localStorage, PREMIUM_KEY);
      unlocked.hidden = true;
      locked.hidden = false;
      emailInput.value = '';
      hideError();
      section.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
      setTimeout(function () { emailInput.focus({ preventScroll: true }); }, reducedMotion ? 60 : 420);
      toast('Premium bloqueado. Puedes desbloquearlo con otro correo.');
    });

    printBtn.addEventListener('click', function () { window.print(); });

    var saved = readPremium();
    if (saved) showPremium(saved.email, { silent: true });
  }

  /* ---------- Imprimir ---------- */

  function setupPrint() {
    var printBtn = $('#printBtn');
    if (!printBtn) return;

    var opened = [];

    printBtn.addEventListener('click', function () { window.print(); });

    window.addEventListener('beforeprint', function () {
      opened = $$('.step').filter(function (step) { return !step.open; });
      opened.forEach(function (step) { step.open = true; });
    });

    window.addEventListener('afterprint', function () {
      opened.forEach(function (step) { step.open = false; });
      opened = [];
    });
  }

  /* ------------------------------------------------------------
     Arranque
     ------------------------------------------------------------ */

  var session = readSession();
  if (session) {
    showApp(session.user);
  } else {
    loginView.hidden = false;
    appView.hidden = true;
    setTimeout(function () { userInput.focus(); }, 150);
  }

  // Mantener el año del documento coherente si se reutiliza la plantilla.
  window.NovaTechDemo = { clearSession: clearSession };
})();
