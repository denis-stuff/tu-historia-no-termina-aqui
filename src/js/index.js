import "../styles/main.scss";

(function () {
  "use strict";

  /* Año del pie */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Menú móvil ---------- */
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");

  function setMenu(open) {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  }

  toggle.addEventListener("click", function () {
    setMenu(!menu.classList.contains("open"));
  });
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  /* ---------- Enlace activo según la sección visible ---------- */
  var links = document.querySelectorAll(".nav__link");
  var map = {};
  links.forEach(function (l) { map[l.getAttribute("href").slice(1)] = l; });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && map[entry.target.id]) {
          links.forEach(function (l) { l.classList.remove("active"); });
          map[entry.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });

    Object.keys(map).forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec) io.observe(sec);
    });
  }

  /* ---------- Ejercicio de respiración (4 - 4 - 6) ---------- */
  var orb = document.getElementById("breath-orb");
  var label = document.getElementById("breath-label");
  var live = document.getElementById("breath-live");
  var btn = document.getElementById("breath-btn");

  var phases = [
    { text: "Inhala", seconds: 4, scale: 1 },
    { text: "Sostén", seconds: 4, scale: 1 },
    { text: "Exhala", seconds: 6, scale: 0.62 }
  ];
  var running = false;
  var timer = null;
  var cycles = 0;
  var maxCycles = 4; // aproximadamente un minuto

  function runPhase(i) {
    if (!running) return;
    var p = phases[i];
    label.textContent = p.text;
    live.textContent = p.text;
    orb.style.transitionDuration = p.seconds + "s";
    orb.style.transform = "scale(" + p.scale + ")";

    timer = setTimeout(function () {
      var next = (i + 1) % phases.length;
      if (next === 0) {
        cycles += 1;
        if (cycles >= maxCycles) { finish(); return; }
      }
      runPhase(next);
    }, p.seconds * 1000);
  }

  function stop(message) {
    running = false;
    clearTimeout(timer);
    orb.style.transitionDuration = "1s";
    orb.style.transform = "scale(0.62)";
    label.textContent = "Listo";
    live.textContent = message;
    btn.textContent = "Empezar";
  }

  function finish() {
    stop("Ejercicio terminado");
    label.textContent = "¡Bien!";
    btn.textContent = "Repetir";
  }

  btn.addEventListener("click", function () {
    if (running) {
      stop("Ejercicio detenido");
      return;
    }
    running = true;
    cycles = 0;
    btn.textContent = "Detener";
    runPhase(0);
  });

  /* ---------- Copiar mensajes ---------- */
  document.querySelectorAll(".note__copy").forEach(function (b) {
    b.addEventListener("click", function () {
      var text = b.getAttribute("data-copy");
      var original = b.textContent;

      function done() {
        b.textContent = "Copiado";
        setTimeout(function () { b.textContent = original; }, 1800);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(fallback);
      } else {
        fallback();
      }

      function fallback() {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); done(); } catch (err) { /* sin acción */ }
        document.body.removeChild(ta);
      }
    });
  });

  /* ---------- Formulario ---------- */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  function setError(id, msg) {
    var input = document.getElementById(id);
    document.getElementById(id + "-error").textContent = msg;
    input.setAttribute("aria-invalid", msg ? "true" : "false");
    return !msg;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.hidden = true;

    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var role = form.role.value;

    var okName = setError("name", name ? "" : "Escribe tu nombre.");
    var okEmail = setError(
      "email",
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Escribe un correo válido, por ejemplo nombre@correo.com."
    );
    var okRole = setError("role", role ? "" : "Elige cómo quieres sumarte.");

    if (!(okName && okEmail && okRole)) return;

    // Aquí puedes conectar el envío real (Formspree, tu API, etc.).
    status.textContent = "Gracias, " + name.split(" ")[0] + ". Recibimos tu mensaje y te escribiremos pronto.";
    status.hidden = false;
    form.reset();
  });
})();
