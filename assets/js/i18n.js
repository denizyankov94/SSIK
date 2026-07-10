/* ============================================================
   i18n — BG / EN toggle
   Usage in HTML:  <span data-i18n="nav.home">Начало</span>
   Attributes:     data-i18n-attr="placeholder:contact.namePh"
   ============================================================ */
(function () {
  "use strict";

  const T = {
    bg: {
      "meta.langName": "БГ",
      // Nav
      "nav.home": "Начало",
      "nav.about": "За нас",
      "nav.services": "Услуги",
      "nav.projects": "Проекти",
      "nav.contact": "Контакти",
      "nav.cta": "Заявка за оферта",
      "brand.tag": "Строителство",

      // Hero (home)
      "home.eyebrow": "Жилищно строителство · Къщи · От 2006 г.",
      "home.h1a": "Строим",
      "home.h1b": "бъдеще",
      "home.h1c": "което остава",
      "home.lead": "ССИК проектира и изгражда жилищни сгради и еднофамилни къщи в България — с инженерна прецизност, качествени материали и предаване в срок.",
      "home.ctaPrimary": "Започнете проект",
      "home.ctaSecondary": "Вижте проектите",
      "home.stat1": "Завършени проекта",
      "home.stat2": "Години опит",
      "home.stat3": "м² разгъната площ",
      "home.scroll": "Скролнете",

      // Services preview
      "svc.eyebrow": "Какво правим",
      "svc.h2": "Пълен цикъл на строителство",
      "svc.lead": "От идеен проект до ключ — поемаме отговорност за всеки етап от изграждането.",
      "svc.1.t": "Жилищни сгради",
      "svc.1.d": "Многофамилни жилищни комплекси с подземни гаражи, общи части и завършена инфраструктура.",
      "svc.2.t": "Еднофамилни къщи",
      "svc.2.d": "Индивидуални къщи по проект — монолитни и с енергоефективни решения по избор на клиента.",
      "svc.3.t": "Проектиране",
      "svc.3.d": "Архитектурно и конструктивно проектиране, разрешителни и пълна документация.",
      "svc.4.t": "Груб строеж",
      "svc.4.d": "Изкопни работи, фундиране, монолитна конструкция и покривни системи по стандарт.",
      "svc.5.t": "Довършителни работи",
      "svc.5.d": "Мазилки, настилки, ВиК и ел. инсталации, изолации и фасади до пълна готовност.",
      "svc.6.t": "Управление на проекти",
      "svc.6.d": "Строителен надзор, координация на екипи и контрол на качеството и бюджета.",
      "svc.all": "Всички услуги",

      // About preview
      "abt.eyebrow": "За ССИК",
      "abt.h2": "Инженерна дисциплина, зад която стоим",
      "abt.p": "Над 20 години изграждаме жилищни сгради и къщи в София и страната. Работим със собствени екипи и проверени партньори, за да контролираме качеството на всеки етап.",
      "abt.li1": "Собствени строителни екипи и техника",
      "abt.li2": "Прозрачно ценообразуване и фиксирани срокове",
      "abt.li3": "10-годишна гаранция на конструкцията",
      "abt.li4": "Сертифицирани материали и енергийна ефективност",
      "abt.badgeNum": "98%",
      "abt.badgeLabel": "предадени в срок проекти",
      "abt.more": "Повече за нас",

      // Process
      "proc.eyebrow": "Как работим",
      "proc.h2": "Ясен процес, без изненади",
      "proc.1.t": "Консултация",
      "proc.1.d": "Обсъждаме нуждите, терена и бюджета. Изготвяме първоначална концепция.",
      "proc.2.t": "Проект и оферта",
      "proc.2.d": "Детайлен проект с количествено-стойностна сметка и фиксиран срок.",
      "proc.3.t": "Строителство",
      "proc.3.d": "Изпълнение с редовни отчети и контрол на качеството на място.",
      "proc.4.t": "Предаване",
      "proc.4.d": "Приемане, документация, гаранция и поддръжка след завършване.",

      // Projects preview / page
      "prj.eyebrow": "Избрани проекти",
      "prj.h2": "Реализирани обекти",
      "prj.lead": "Показваме част от завършените ни жилищни и еднофамилни проекти.",
      "prj.all": "Всички проекти",
      "prj.1.t": "Резиденция Витоша",
      "prj.1.tag": "Жилищна сграда",
      "prj.2.t": "Къща Бояна",
      "prj.2.tag": "Еднофамилна къща",
      "prj.3.t": "Комплекс Парк Лейн",
      "prj.3.tag": "Жилищен комплекс",
      "prj.4.t": "Вила Родопи",
      "prj.4.tag": "Еднофамилна къща",
      "prj.5.t": "Сграда Централ",
      "prj.5.tag": "Жилищна сграда",
      "prj.meta.year": "Година",
      "prj.meta.area": "Площ",
      "prj.meta.loc": "Локация",

      // Testimonial
      "tst.eyebrow": "Доверие",
      "tst.quote": "„ССИК изградиха къщата ни за 11 месеца — точно по график и в рамките на бюджета. Комуникацията беше безупречна на всеки етап.“",
      "tst.name": "Инж. Петър Илиев",
      "tst.role": "Клиент, Къща Бояна",

      // CTA band
      "cta.h2": "Имате идея за строеж?",
      "cta.p": "Разкажете ни за проекта си — ще получите безплатна консултация и ориентировъчна оферта до 3 работни дни.",
      "cta.btn": "Заявка за оферта",

      // Footer
      "ft.tag": "Строим жилищни сгради и къщи в България с инженерна прецизност от 2006 г.",
      "ft.nav": "Навигация",
      "ft.services": "Услуги",
      "ft.contactTitle": "Контакти",
      "ft.address": "бул. Черни връх 61, ет. 2, ап. 11, София",
      "ft.rights": "Всички права запазени.",
      "ft.built": "Демонстрационен сайт · съдържанието е примерно",

      // About page
      "about.crumb": "За нас",
      "about.h1": "Изграждаме с отговорност от 2006 г.",
      "about.lead": "ССИК е строителна компания, специализирана в жилищно строителство и еднофамилни къщи. Комбинираме инженерен опит с модерни технологии и стриктен контрол на качеството.",
      "about.mv.eyebrow": "Мисия и ценности",
      "about.mv.h2": "Качество, което се вижда след години",
      "about.mv.p": "Не гоним най-ниската цена, а най-доброто съотношение между качество, срок и дълготрайност. Всеки обект се изпълнява така, сякаш е за нас самите.",
      "about.v1.t": "Прецизност",
      "about.v1.d": "Инженерен подход и внимание към детайла на всеки етап.",
      "about.v2.t": "Прозрачност",
      "about.v2.d": "Ясни договори, фиксирани цени и редовни отчети.",
      "about.v3.t": "Отговорност",
      "about.v3.d": "Гаранция на конструкцията и дългосрочна поддръжка.",
      "about.v4.t": "Устойчивост",
      "about.v4.d": "Енергийна ефективност и сертифицирани материали.",
      "about.team.eyebrow": "Екип",
      "about.team.h2": "Хората зад проектите",
      "about.t1.role": "Управител",
      "about.t2.role": "Главен инженер",
      "about.t3.role": "Ръководител проекти",
      "about.t4.role": "Архитект",
      "about.hist.eyebrow": "Нашият път",
      "about.hist.h2": "От 2006 г. до днес",
      "about.hist.d1": "Основаване на ССИК в София.",
      "about.hist.d2": "Първи многофамилен жилищен комплекс.",
      "about.hist.d3": "Собствени строителни екипи и техника.",
      "about.hist.d4": "Над 150 завършени обекта в страната.",
      "about.hist.d5": "20 години на пазара и над 250 проекта.",
      "about.build.eyebrow": "Процес",
      "about.build.h2": "Как изграждаме",
      "about.build.lead": "От чертеж до ключ — водим всеки етап със собствени екипи и контрол на качеството.",
      "about.build.1.t": "Проектиране",
      "about.build.1.d": "Идеен и технически проект, разрешителни и пълна документация.",
      "about.build.2.t": "Първа копка и груб строеж",
      "about.build.2.d": "Изкопни работи, фундиране и монолитна конструкция.",
      "about.build.3.t": "Инженеринг и СМР",
      "about.build.3.d": "ВиК, електро и специализирани инсталации.",
      "about.build.4.t": "Саниране и довършване",
      "about.build.4.d": "Изолации, фасади и финишни работи до ключ.",
      "about.cert.eyebrow": "Доверие",
      "about.cert.h2": "Сертификати и лицензи",
      "about.cert.lead": "Работим по стандарт и сме напълно застраховани.",
      "about.cert.1.t": "Регистрация в ЦПРС",
      "about.cert.1.d": "Вписани в Централния професионален регистър на строителя.",
      "about.cert.2.t": "ISO 9001:2015",
      "about.cert.2.d": "Сертифицирана система за управление на качеството.",
      "about.cert.3.t": "Застраховка отговорност",
      "about.cert.3.d": "Професионална отговорност на проектанта и строителя.",
      "about.cert.4.t": "10 години гаранция",
      "about.cert.4.d": "Гаранция на носещата конструкция на всеки обект.",
      "about.cert.note": "Примерни — заменете с реалните ви документи и номера.",

      // Services page
      "services.crumb": "Услуги",
      "services.h1": "Строителни услуги от край до край",
      "services.lead": "Поемаме целия процес — проектиране, разрешителни, груб строеж и довършване — или само отделни етапи по ваш избор.",

      // Projects page
      "projects.crumb": "Проекти",
      "projects.h1": "Нашето портфолио",
      "projects.lead": "Избрани жилищни сгради и еднофамилни къщи, изградени от нашите екипи.",

      // Contact page
      "contact.crumb": "Контакти",
      "contact.h1": "Да започнем разговор",
      "contact.lead": "Попълнете формата или се свържете директно с нас. Отговаряме в рамките на един работен ден.",
      "contact.formTitle": "Заявка за оферта",
      "contact.name": "Име",
      "contact.namePh": "Вашето име",
      "contact.email": "Имейл",
      "contact.emailPh": "name@example.com",
      "contact.phone": "Телефон",
      "contact.phonePh": "+359 ...",
      "contact.type": "Тип проект",
      "contact.type1": "Жилищна сграда",
      "contact.type2": "Еднофамилна къща",
      "contact.type3": "Проектиране",
      "contact.type4": "Друго",
      "contact.msg": "Съобщение",
      "contact.msgPh": "Разкажете за проекта, локацията и приблизителния бюджет...",
      "contact.submit": "Изпратете заявка",
      "contact.sending": "Изпращане...",
      "contact.ok": "Благодарим! Заявката е получена — ще се свържем с вас скоро.",
      "contact.err.required": "Това поле е задължително.",
      "contact.err.email": "Въведете валиден имейл адрес.",
      "contact.infoTitle": "Свържете се директно",
      "contact.phoneLabel": "Телефон",
      "contact.emailLabel": "Имейл",
      "contact.addrLabel": "Офис",
      "contact.hoursLabel": "Работно време",
      "contact.hours": "Пон–Пет: 09:00 – 18:00",
      "contact.openMap": "Отвори в Google Maps ↗",
    },

    en: {
      "meta.langName": "EN",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.cta": "Request a quote",
      "brand.tag": "Construction",

      "home.eyebrow": "Residential · Houses · Since 2006",
      "home.h1a": "Building",
      "home.h1b": "a future",
      "home.h1c": "that lasts",
      "home.lead": "SSIK designs and builds residential buildings and single-family houses across Bulgaria — with engineering precision, quality materials and on-time delivery.",
      "home.ctaPrimary": "Start a project",
      "home.ctaSecondary": "View projects",
      "home.stat1": "Completed projects",
      "home.stat2": "Years of experience",
      "home.stat3": "m² built area",
      "home.scroll": "Scroll",

      "svc.eyebrow": "What we do",
      "svc.h2": "Full-cycle construction",
      "svc.lead": "From concept to turnkey — we take responsibility for every stage of the build.",
      "svc.1.t": "Residential buildings",
      "svc.1.d": "Multi-family residential complexes with underground parking, common areas and finished infrastructure.",
      "svc.2.t": "Single-family houses",
      "svc.2.d": "Custom houses to design — monolithic and energy-efficient solutions to the client's choice.",
      "svc.3.t": "Design & planning",
      "svc.3.d": "Architectural and structural design, permits and complete documentation.",
      "svc.4.t": "Structural works",
      "svc.4.d": "Excavation, foundations, monolithic structure and roofing systems to standard.",
      "svc.5.t": "Finishing works",
      "svc.5.d": "Plastering, flooring, plumbing and electrical, insulation and façades to full readiness.",
      "svc.6.t": "Project management",
      "svc.6.d": "Site supervision, team coordination and control of quality and budget.",
      "svc.all": "All services",

      "abt.eyebrow": "About SSIK",
      "abt.h2": "Engineering discipline we stand behind",
      "abt.p": "For over 20 years we have built residential buildings and houses in Sofia and across the country. We work with in-house teams and trusted partners to control quality at every stage.",
      "abt.li1": "In-house construction crews and equipment",
      "abt.li2": "Transparent pricing and fixed timelines",
      "abt.li3": "10-year structural warranty",
      "abt.li4": "Certified materials and energy efficiency",
      "abt.badgeNum": "98%",
      "abt.badgeLabel": "projects delivered on time",
      "abt.more": "More about us",

      "proc.eyebrow": "How we work",
      "proc.h2": "A clear process, no surprises",
      "proc.1.t": "Consultation",
      "proc.1.d": "We discuss your needs, the site and the budget, then draft an initial concept.",
      "proc.2.t": "Design & quote",
      "proc.2.d": "Detailed design with a bill of quantities and a fixed timeline.",
      "proc.3.t": "Construction",
      "proc.3.d": "Execution with regular reports and on-site quality control.",
      "proc.4.t": "Handover",
      "proc.4.d": "Acceptance, documentation, warranty and post-completion support.",

      "prj.eyebrow": "Selected projects",
      "prj.h2": "Delivered projects",
      "prj.lead": "A selection of our completed residential and single-family projects.",
      "prj.all": "All projects",
      "prj.1.t": "Vitosha Residence",
      "prj.1.tag": "Residential building",
      "prj.2.t": "Boyana House",
      "prj.2.tag": "Single-family house",
      "prj.3.t": "Park Lane Complex",
      "prj.3.tag": "Residential complex",
      "prj.4.t": "Rhodope Villa",
      "prj.4.tag": "Single-family house",
      "prj.5.t": "Central Building",
      "prj.5.tag": "Residential building",
      "prj.meta.year": "Year",
      "prj.meta.area": "Area",
      "prj.meta.loc": "Location",

      "tst.eyebrow": "Trust",
      "tst.quote": "\"SSIK built our house in 11 months — right on schedule and within budget. Communication was flawless at every stage.\"",
      "tst.name": "Eng. Petar Iliev",
      "tst.role": "Client, Boyana House",

      "cta.h2": "Have a project in mind?",
      "cta.p": "Tell us about it — you'll get a free consultation and a ballpark quote within 3 business days.",
      "cta.btn": "Request a quote",

      "ft.tag": "Building residential buildings and houses across Bulgaria with engineering precision since 2006.",
      "ft.nav": "Navigation",
      "ft.services": "Services",
      "ft.contactTitle": "Contact",
      "ft.address": "61 Cherni Vrah Blvd, fl. 2, apt. 11, Sofia",
      "ft.rights": "All rights reserved.",
      "ft.built": "Demo website · sample content",

      "about.crumb": "About",
      "about.h1": "Building responsibly since 2006",
      "about.lead": "SSIK is a construction company specialising in residential buildings and single-family houses. We combine engineering experience with modern technology and strict quality control.",
      "about.mv.eyebrow": "Mission & values",
      "about.mv.h2": "Quality that shows years later",
      "about.mv.p": "We don't chase the lowest price, but the best balance of quality, timing and durability. Every site is built as if it were our own.",
      "about.v1.t": "Precision",
      "about.v1.d": "An engineering approach and attention to detail at every stage.",
      "about.v2.t": "Transparency",
      "about.v2.d": "Clear contracts, fixed prices and regular reports.",
      "about.v3.t": "Responsibility",
      "about.v3.d": "Structural warranty and long-term support.",
      "about.v4.t": "Sustainability",
      "about.v4.d": "Energy efficiency and certified materials.",
      "about.team.eyebrow": "Team",
      "about.team.h2": "The people behind the projects",
      "about.t1.role": "Managing Director",
      "about.t2.role": "Chief Engineer",
      "about.t3.role": "Head of Projects",
      "about.t4.role": "Architect",
      "about.hist.eyebrow": "Our journey",
      "about.hist.h2": "From 2006 to today",
      "about.hist.d1": "SSIK founded in Sofia.",
      "about.hist.d2": "First multi-family residential complex.",
      "about.hist.d3": "In-house construction crews and equipment.",
      "about.hist.d4": "Over 150 completed projects nationwide.",
      "about.hist.d5": "20 years in the market and 250+ projects.",
      "about.build.eyebrow": "Process",
      "about.build.h2": "How we build",
      "about.build.lead": "From drawing to turnkey — we lead every stage with in-house teams and quality control.",
      "about.build.1.t": "Design",
      "about.build.1.d": "Concept and technical design, permits and full documentation.",
      "about.build.2.t": "Groundbreaking & structure",
      "about.build.2.d": "Excavation, foundations and monolithic structure.",
      "about.build.3.t": "Engineering & MEP",
      "about.build.3.d": "Plumbing, electrical and specialised installations.",
      "about.build.4.t": "Renovation & finishing",
      "about.build.4.d": "Insulation, facades and finishing works to turnkey.",
      "about.cert.eyebrow": "Trust",
      "about.cert.h2": "Certifications & licenses",
      "about.cert.lead": "We build to standard and are fully insured.",
      "about.cert.1.t": "CPRS registration",
      "about.cert.1.d": "Listed in Bulgaria's Central Professional Register of Builders.",
      "about.cert.2.t": "ISO 9001:2015",
      "about.cert.2.d": "Certified quality management system.",
      "about.cert.3.t": "Liability insurance",
      "about.cert.3.d": "Professional liability of the designer and builder.",
      "about.cert.4.t": "10-year warranty",
      "about.cert.4.d": "Warranty on the load-bearing structure of every project.",
      "about.cert.note": "Sample — replace with your real documents and numbers.",

      "services.crumb": "Services",
      "services.h1": "End-to-end construction services",
      "services.lead": "We handle the whole process — design, permits, structural and finishing works — or just individual stages of your choice.",

      "projects.crumb": "Projects",
      "projects.h1": "Our portfolio",
      "projects.lead": "Selected residential buildings and single-family houses built by our teams.",

      "contact.crumb": "Contact",
      "contact.h1": "Let's start a conversation",
      "contact.lead": "Fill in the form or reach us directly. We reply within one business day.",
      "contact.formTitle": "Request a quote",
      "contact.name": "Name",
      "contact.namePh": "Your name",
      "contact.email": "Email",
      "contact.emailPh": "name@example.com",
      "contact.phone": "Phone",
      "contact.phonePh": "+359 ...",
      "contact.type": "Project type",
      "contact.type1": "Residential building",
      "contact.type2": "Single-family house",
      "contact.type3": "Design & planning",
      "contact.type4": "Other",
      "contact.msg": "Message",
      "contact.msgPh": "Tell us about the project, location and approximate budget...",
      "contact.submit": "Send request",
      "contact.sending": "Sending...",
      "contact.ok": "Thank you! Your request has been received — we'll be in touch soon.",
      "contact.err.required": "This field is required.",
      "contact.err.email": "Please enter a valid email address.",
      "contact.infoTitle": "Reach us directly",
      "contact.phoneLabel": "Phone",
      "contact.emailLabel": "Email",
      "contact.addrLabel": "Office",
      "contact.hoursLabel": "Working hours",
      "contact.hours": "Mon–Fri: 09:00 – 18:00",
      "contact.openMap": "Open in Google Maps ↗",
    },
  };

  const SUPPORTED = ["bg", "en"];
  const STORE_KEY = "monolit.lang";

  function getLang() {
    let l = null;
    try { l = localStorage.getItem(STORE_KEY); } catch (e) {}
    if (!SUPPORTED.includes(l)) l = "bg";
    return l;
  }

  function t(key, lang) {
    const dict = T[lang] || T.bg;
    return dict[key] != null ? dict[key] : (T.bg[key] != null ? T.bg[key] : key);
  }

  function apply(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"), lang);
    });

    // attribute translations:  data-i18n-attr="placeholder:key, aria-label:key"
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        const parts = pair.split(":");
        if (parts.length === 2) {
          el.setAttribute(parts[0].trim(), t(parts[1].trim(), lang));
        }
      });
    });

    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      const active = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });

    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    apply(lang);
  }

  // expose minimal API
  window.i18n = { t: t, setLang: setLang, getLang: getLang };

  // init ASAP (before DOMContentLoaded elements exist we still bind on ready)
  function init() {
    apply(getLang());
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
