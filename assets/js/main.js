/* ============================================================
   main.js — interactions & GSAP motion
   Fails gracefully: if GSAP is unavailable or reduced-motion
   is requested, all content is revealed immediately.
   ============================================================ */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header scroll state ---------- */
  const header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 20);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile nav ---------- */
  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav-toggle");
  if (nav && navToggle) {
    navToggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    nav.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Reveal fallback ---------- */
  function revealAll() {
    document.querySelectorAll(".reveal, .reveal-up, .reveal-scale, [data-hero]").forEach(function (el) {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }

  /* ---------- Counters ---------- */
  function localeFmt(v, decimals) {
    return v.toLocaleString(document.documentElement.lang === "en" ? "en-US" : "bg-BG", {
      minimumFractionDigits: decimals, maximumFractionDigits: decimals,
    });
  }
  function setFinal(el) {
    const target = parseFloat(el.getAttribute("data-count"));
    const decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
    el.textContent = localeFmt(target, decimals);
  }
  function animateCounter(el) {
    if (el.dataset.done === "1") return;
    el.dataset.done = "1";
    const target = parseFloat(el.getAttribute("data-count"));
    const decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
    const dur = 1600;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = localeFmt(target * eased, decimals);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // Reliable for elements already in view at load (unlike ScrollTrigger.onEnter).
  function initCounters() {
    const els = document.querySelectorAll("[data-count]");
    if (!els.length) return;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach(setFinal);
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animateCounter(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.35 });
    els.forEach(function (el) { io.observe(el); });
  }

  // Re-format already-completed counters when the language changes.
  document.addEventListener("langchange", function () {
    document.querySelectorAll('[data-count][data-done="1"]').forEach(setFinal);
  });

  /* ---------- GSAP motion ---------- */
  function initMotion() {
    if (!window.gsap) { revealAll(); return; }
    const gsap = window.gsap;

    if (prefersReduced) {
      revealAll();
      return;
    }

    if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

    // Hero entrance
    const heroEls = gsap.utils.toArray("[data-hero]");
    if (heroEls.length) {
      gsap.set(heroEls, { opacity: 0, y: 40 });
      gsap.to(heroEls, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        stagger: 0.12, delay: 0.15,
      });
    }

    // Hero image parallax (background layer only)
    const heroImg = document.querySelector(".hero__media img");
    if (heroImg && window.ScrollTrigger) {
      gsap.to(heroImg, {
        yPercent: 12, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
    }

    // Generic reveals
    if (window.ScrollTrigger) {
      gsap.utils.toArray(".reveal-up").forEach(function (el) {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
      gsap.utils.toArray(".reveal").forEach(function (el) {
        gsap.to(el, {
          opacity: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
      gsap.utils.toArray(".reveal-scale").forEach(function (el) {
        gsap.to(el, {
          opacity: 1, scale: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Staggered groups
      gsap.utils.toArray("[data-stagger]").forEach(function (group) {
        const items = group.children;
        gsap.set(items, { opacity: 0, y: 30 });
        gsap.to(items, {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.09,
          scrollTrigger: { trigger: group, start: "top 82%" },
        });
      });

    } else {
      revealAll();
    }
  }

  /* ---------- Contact form (client-side demo) ---------- */
  function initForm() {
    const form = document.querySelector("form[data-contact]");
    if (!form) return;
    const status = form.querySelector(".form__status");

    function validateField(field) {
      const input = field.querySelector("input, textarea, select");
      if (!input) return true;
      let ok = true;
      const val = (input.value || "").trim();
      const errEl = field.querySelector(".error-msg");
      if (input.required && !val) {
        ok = false;
        if (errEl) errEl.textContent = window.i18n ? window.i18n.t("contact.err.required", document.documentElement.lang) : "Required";
      } else if (input.type === "email" && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        ok = false;
        if (errEl) errEl.textContent = window.i18n ? window.i18n.t("contact.err.email", document.documentElement.lang) : "Invalid email";
      }
      field.classList.toggle("invalid", !ok);
      return ok;
    }

    form.querySelectorAll(".field").forEach(function (field) {
      const input = field.querySelector("input, textarea, select");
      if (input) input.addEventListener("blur", function () { validateField(field); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;
      let firstInvalid = null;
      form.querySelectorAll(".field").forEach(function (field) {
        const ok = validateField(field);
        if (!ok && !firstInvalid) firstInvalid = field.querySelector("input, textarea, select");
        valid = valid && ok;
      });
      if (!valid) { if (firstInvalid) firstInvalid.focus(); return; }

      const btn = form.querySelector("button[type=submit]");
      const lang = document.documentElement.lang;
      const original = btn.textContent;
      btn.disabled = true;
      btn.textContent = window.i18n ? window.i18n.t("contact.sending", lang) : "...";

      // Demo: simulate async submit. Replace with real endpoint (Formspree/API).
      setTimeout(function () {
        btn.disabled = false;
        btn.textContent = original;
        form.reset();
        if (status) {
          status.className = "form__status ok";
          status.textContent = window.i18n ? window.i18n.t("contact.ok", document.documentElement.lang) : "Thank you!";
          status.setAttribute("role", "status");
        }
      }, 900);
    });
  }

  /* ---------- Boot ---------- */
  function boot() {
    initMotion();
    initCounters();
    initForm();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  // Absolute failsafe: if anything above threw before revealing, show content.
  window.addEventListener("load", function () {
    setTimeout(function () {
      const hidden = document.querySelector(".reveal-up, .reveal, .reveal-scale, [data-hero]");
      if (hidden && getComputedStyle(hidden).opacity === "0") revealAll();
    }, 1200);
  });
})();
