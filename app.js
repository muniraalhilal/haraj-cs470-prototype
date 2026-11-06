const paths = {
  heart:
    "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",
  message:
    "M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z",
  plus: "M12 5v14M5 12h14",
  search: "m21 21-4.4-4.4M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
  pin: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  car: "m5 17-1 3m15-3 1 3M3 16v-5l3-7h12l3 7v5H3Zm0-5h18M7 14h1m8 0h1",
  device: "M3 3h18v13H3zM8 21h8m-4-5v5",
  home: "m3 11 9-8 9 8M5 10v11h14V10M9 21v-8h6v8",
  sofa: "M4 11V6h16v5M2 10h4v7h12v-7h4v10H2zM5 20v2m14-2v2",
  tool: "m14 6 4 4M3 21l9-9M14 3l-3 5 5 5 5-3V5l-4 4-2-2 4-4z",
  grid: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
  shield: "m12 3 9 4v6c0 5-9 9-9 9s-9-4-9-9V7l9-4Zm-4 9 3 3 5-6",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  check: "m5 12 4 4L19 6",
};
const icon = (n) =>
  `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="${paths[n] || paths.grid}"/></svg>`;
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const categories = [
  ["all", "الكل", "grid"],
  ["cars", "سيارات", "car"],
  ["electronics", "أجهزة", "device"],
  ["property", "عقارات", "home"],
  ["furniture", "أثاث", "sofa"],
  ["services", "خدمات", "tool"],
  ["other", "مستلزمات أخرى", "grid"],
];
const cities = ["الرياض", "جدة", "الدمام"];
function read(k, f) {
  try {
    return JSON.parse(localStorage.getItem("haraj470-" + k)) ?? f;
  } catch {
    return f;
  }
}
let storageWarned = false;
function write(k, v) {
  try {
    localStorage.setItem("haraj470-" + k, JSON.stringify(v));
    return true;
  } catch {
    if (!storageWarned) {
      notify("تعذر حفظ البيانات على هذا الجهاز. ستبقى متاحة خلال هذه الجلسة.");
      storageWarned = true;
    }
    return false;
  }
}
const raw = [
  [
    "تويوتا كامري 2022",
    "cars",
    87500,
    "الرياض",
    "car",
    "سيارة سيدان بحالة ممتازة، صيانة منتظمة، ممشى ٤٨ ألف كم.",
  ],
  [
    "كنبة مودرن بلون أخضر",
    "furniture",
    1800,
    "جدة",
    "sofa",
    "كنبة مريحة لثلاثة أشخاص، قماش قابل للتنظيف، استخدام خفيف.",
  ],
  [
    "آيفون برو · 128 جيجا",
    "electronics",
    1850,
    "الرياض",
    "phone",
    "جهاز بحالة ممتازة مع العلبة، البطارية ٨٨٪، لا توجد كسور.",
  ],
  [
    "شقة عصرية للإيجار السنوي",
    "property",
    42000,
    "الدمام",
    "apartment",
    "ثلاث غرف وصالة، مطبخ راكب وموقف سيارة. السعر للإيجار السنوي.",
  ],
  [
    "لابتوب للعمل والدراسة",
    "electronics",
    2800,
    "جدة",
    "laptop",
    "ذاكرة ١٦ جيجا وتخزين ٥١٢ جيجا، مناسب للدراسة والعمل اليومي.",
  ],
  [
    "مكتب منزلي بتصميم بسيط",
    "furniture",
    1250,
    "الرياض",
    "table",
    "مكتب منزلي بلون أبيض، مناسب للعمل والدراسة، دون كرسي.",
  ],
  [
    "سيارة رياضية مستعملة",
    "cars",
    59000,
    "الدمام",
    "car2",
    "سيارة رياضية، ناقل أوتوماتيكي، ممشى ٧٢ ألف كم.",
  ],
  [
    "خدمة تنسيق الحدائق",
    "services",
    350,
    "جدة",
    "garden",
    "زيارة لتنسيق حديقة منزلية صغيرة. السعر يبدأ من ٣٥٠ ريال حسب المساحة.",
  ],
  [
    "كاميرا للتصوير اليومي",
    "electronics",
    2200,
    "الرياض",
    "camera",
    "كاميرا مع عدسة أساسية وحقيبة. بحالة جيدة للتصوير والهواية.",
  ],
  [
    "كرسي بذراعين وقماش رمادي",
    "furniture",
    650,
    "الدمام",
    "chair",
    "كرسي ثابت بقاعدة خشبية وقماش رمادي مع دعم للظهر.",
  ],
  [
    "دراجة هوائية للمدينة",
    "other",
    850,
    "جدة",
    "bike",
    "دراجة مناسبة للتنقل اليومي، فرامل وإطارات بحالة جيدة.",
  ],
  [
    "شقة مفروشة للإيجار السنوي",
    "property",
    58000,
    "الرياض",
    "apartment",
    "شقة بغرفتين وصالة مع أثاث ومطبخ. السعر سنوي.",
  ],
  [
    "تويوتا سيدان 2020",
    "cars",
    64000,
    "جدة",
    "car",
    "سيارة للاستخدام اليومي، صيانة موثقة، ممشى ٩٥ ألف كم.",
  ],
  [
    "كنبة مريحة لغرفة المعيشة",
    "furniture",
    2300,
    "الرياض",
    "sofa",
    "كنبة واسعة بلون محايد، استخدام سنة واحدة.",
  ],
  [
    "هاتف ذكي 128 جيجا",
    "electronics",
    1300,
    "الدمام",
    "phone",
    "هاتف مع شاحن، الشاشة سليمة وجميع الوظائف تعمل.",
  ],
  [
    "جلسة تصوير منتجات",
    "services",
    450,
    "الرياض",
    "camera",
    "جلسة تصوير حتى عشرة منتجات صغيرة مع تعديل الصور.",
  ],
  [
    "دراجة هوائية مستعملة",
    "other",
    600,
    "الدمام",
    "bike",
    "دراجة بحالة جيدة، تحتاج ضبط ارتفاع المقعد فقط.",
  ],
  [
    "مكتب للمساحات الصغيرة",
    "furniture",
    900,
    "جدة",
    "table",
    "مكتب منزلي بحالة جيدة، مناسب للمساحات الصغيرة.",
  ],
  [
    "لابتوب مستعمل بحالة جيدة",
    "electronics",
    2100,
    "الدمام",
    "laptop",
    "لابتوب خفيف مع شاحن أصلي، مناسب للتصفح والدراسة.",
  ],
  [
    "شقة واسعة للإيجار السنوي",
    "property",
    36000,
    "جدة",
    "apartment",
    "شقة بثلاث غرف قرب الخدمات، السعر للإيجار السنوي.",
  ],
  [
    "خدمة صيانة الحدائق",
    "services",
    250,
    "الدمام",
    "garden",
    "قص العشب وتقليم النباتات لحديقة صغيرة. السعر للزيارة.",
  ],
  [
    "كرسي قماش للمجلس",
    "furniture",
    480,
    "الرياض",
    "chair",
    "كرسي نظيف بقاعدة خشبية، مناسب للمجلس أو غرفة النوم.",
  ],
  [
    "سيارة رياضية 2023",
    "cars",
    98000,
    "الرياض",
    "car2",
    "سيارة رياضية مع كاميرا خلفية، ممشى ٢٦ ألف كم.",
  ],
  [
    "كاميرا مع عدسة",
    "electronics",
    1750,
    "جدة",
    "camera",
    "كاميرا مستعملة للهواة مع عدسة وحزام وبطارية.",
  ],
];
const seed = raw.map((r, i) => ({
  id: String(i + 1),
  title: r[0],
  category: r[1],
  price: r[2],
  city: r[3],
  images: [`assets/${r[4]}.jpg`, `assets/${r[4]}-detail.jpg`],
  description: r[5],
  seller: ["أحمد", "سارة", "خالد", "نورة"][i % 4] + " · بائع تجريبي",
  condition: "مستعمل بحالة جيدة",
  created: 24 - i,
}));
let listings = [...read("listings", []), ...seed],
  favorites = read("favorites", []),
  conversations = read("messages", {}),
  filters = {
    q: "",
    city: "",
    category: "all",
    min: "",
    max: "",
    sort: "recent",
  },
  draft = read("draft", {}),
  step = 1,
  errors = {},
  uploadBusy = false,
  activeChat = null,
  gallery = 0,
  toastTimer;
const main = document.querySelector("main");
function notify(t) {
  const e = document.querySelector("#toast");
  e.textContent = t;
  e.style.display = "block";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (e.style.display = "none"), 3500);
}
function catLabel(k) {
  return categories.find((c) => c[0] === k)?.[1] || "أخرى";
}
function options(items, value, empty) {
  return `${empty ? `<option value="">${empty}</option>` : ""}${items.map((x) => `<option ${x === value ? "selected" : ""} value="${esc(x)}">${esc(x)}</option>`).join("")}`;
}
function card(p) {
  return `<article class="card"><a class="card-image" ${p.id === "preview" ? "" : `href="#/listing/${p.id}"`}><img loading="lazy" src="${esc(p.images[0])}" alt="${esc(p.title)}"></a>${p.id === "preview" ? "" : `<button class="save ${favorites.includes(p.id) ? "saved" : ""}" data-save="${p.id}" aria-label="${favorites.includes(p.id) ? "إزالة من" : "حفظ في"} المفضلة: ${esc(p.title)}" aria-pressed="${favorites.includes(p.id)}">${icon("heart")}</button>`}<div class="card-body"><div class="card-meta"><span>${catLabel(p.category)}</span><span>إعلان تجريبي</span></div><h3><a ${p.id === "preview" ? "" : `href="#/listing/${p.id}"`}>${esc(p.title)}</a></h3><div class="price">${p.price.toLocaleString("en-US")} <small>ر.س${p.category === "property" ? " / سنة" : p.category === "services" ? " · يبدأ من" : ""}</small></div><div class="card-bottom"><span>${icon("pin")} ${esc(p.city)}</span><span>${esc(p.seller)}</span></div></div></article>`;
}
function searchbar() {
  return `<form class="searchbar" id="search-form"><div class="search-input">${icon("search")}<label for="query">ابحث عن منتج</label><input id="query" name="query" value="${esc(filters.q)}" placeholder="ابحث عن سيارة، جهاز، أثاث…" aria-label="ابحث عن منتج"></div><label for="search-city">مدينة البحث</label><select id="search-city" aria-label="مدينة البحث">${options(cities, filters.city, "كل المدن")}</select><button class="primary" type="submit">${icon("search")} بحث</button></form>`;
}
function categoryNav() {
  return `<div class="categories">${categories.map((c) => `<a class="category ${filters.category === c[0] ? "active" : ""}" href="#/browse?category=${c[0]}">${icon(c[2])}<strong>${c[1]}</strong><small>${c[0] === "all" ? listings.length : listings.filter((p) => p.category === c[0]).length} إعلان</small></a>`).join("")}</div>`;
}
function home() {
  return `<section class="hero"><div class="wrap"><div class="hero-inner"><div><div class="eyebrow">سوقك المحلي، بتجربة أبسط</div><h1>كل ما تحتاجه،<br><span>أقرب إليك.</span></h1><p>اكتشف فرصًا جديدة، وبِع ما لم تعد تحتاجه.<br>من السيارات إلى تفاصيل بيتك، تجدها في حراج.</p></div><div class="hero-art" aria-hidden="true"><img src="assets/car.jpg" alt=""><img src="assets/sofa.jpg" alt=""><span class="hero-tag">${icon("pin")} من مجتمعك، بالقرب منك</span></div></div>${searchbar()}<div class="quick"><span>عمليات بحث شائعة:</span><a href="#/browse?q=تويوتا">تويوتا</a><a href="#/browse?q=آيفون">آيفون</a><a href="#/browse?category=furniture">أثاث المنزل</a></div></div></section><div class="wrap"><section class="section"><div class="section-head"><h2>ماذا تبحث عنه؟</h2><span class="text-link">كل احتياجاتك في مكان واحد</span></div>${categoryNav()}</section><section class="section"><div class="section-head"><div><h2>اكتشف أحدث الإعلانات</h2><p>خيارات متنوعة، وفرص تستحق أن تراها</p></div><a class="text-link" href="#/browse">عرض جميع الإعلانات ←</a></div><div class="grid">${listings.slice(0, 8).map(card).join("")}</div></section><aside class="note-banner">${icon("shield")}<div><h3>تواصل بوضوح، واختر باطمئنان</h3><p>عاين المنتج قبل الدفع، ولا تشارك معلوماتك البنكية.</p></div><a class="secondary" href="#/add">عندك شيء تبيعه؟ أضف إعلانك</a></aside></div>`;
}
const norm = (s) =>
  s
    .normalize("NFKD")
    .replace(/[\u064B-\u065F]/g, "")
    .replace(/[أإآ]/g, "ا")
    .toLowerCase();
function filtered() {
  return listings
    .filter(
      (p) =>
        (filters.category === "all" || p.category === filters.category) &&
        (!filters.city || p.city === filters.city) &&
        (!filters.q ||
          norm(p.title + " " + p.description).includes(norm(filters.q))) &&
        (!filters.min || p.price >= Number(filters.min)) &&
        (!filters.max || p.price <= Number(filters.max)),
    )
    .sort((a, b) =>
      filters.sort === "low"
        ? a.price - b.price
        : filters.sort === "high"
          ? b.price - a.price
          : b.created - a.created,
    );
}
function empty(title, description) {
  return `<div class="empty">${icon("search")}<h2>${title}</h2><p>${description}</p><a class="primary" href="#/browse">تصفح الإعلانات</a></div>`;
}
function browse() {
  const results = filtered();
  return `<div class="wrap page"><div class="breadcrumb"><a href="#/">الرئيسية</a> / تصفح الإعلانات</div><h1>فرصتك تبدأ من هنا</h1>${searchbar()}<div class="chips">${[
    "q",
    "city",
    "category",
    "min",
    "max",
  ]
    .filter((k) => filters[k] && filters[k] !== "all")
    .map(
      (k) =>
        `<button class="chip" data-clear="${k}">${k === "category" ? catLabel(filters[k]) : k === "min" ? "من " + esc(filters[k]) + " ر.س" : k === "max" ? "إلى " + esc(filters[k]) + " ر.س" : esc(filters[k])} ×</button>`,
    )
    .join(
      "",
    )}</div><div class="browse-layout"><aside class="panel filters"><form id="filter-form"><h3>تصفية النتائج</h3><div><label for="filter-category">القسم</label><select id="filter-category">${categories.map((c) => `<option value="${c[0]}" ${filters.category === c[0] ? "selected" : ""}>${c[1]}</option>`).join("")}</select></div><div><label for="filter-city">المدينة</label><select id="filter-city">${options(cities, filters.city, "كل المدن")}</select></div><div><label for="min">السعر من (ر.س)</label><input type="text" inputmode="decimal" dir="ltr" id="min" value="${esc(filters.min)}" placeholder="0"></div><div><label for="max">السعر إلى (ر.س)</label><input type="text" inputmode="decimal" dir="ltr" id="max" value="${esc(filters.max)}" placeholder="بدون حد"></div><p class="error" id="filter-error" role="alert"></p><button class="primary" style="width:100%;margin-top:15px">تطبيق الفلاتر</button><button class="secondary" type="button" id="reset">مسح جميع الفلاتر</button></form></aside><section><div class="toolbar"><div><h2>${filters.category === "all" ? "جميع الإعلانات" : catLabel(filters.category)}</h2><small role="status">${results.length} إعلان متاح</small></div><label>الترتيب <select id="sort" aria-label="ترتيب النتائج">${[
    ["recent", "الأحدث أولاً"],
    ["low", "السعر: الأقل أولاً"],
    ["high", "السعر: الأعلى أولاً"],
  ]
    .map(
      ([v, l]) =>
        `<option value="${v}" ${filters.sort === v ? "selected" : ""}>${l}</option>`,
    )
    .join(
      "",
    )}</select></label></div>${results.length ? `<div class="grid browse-grid">${results.map(card).join("")}</div>` : `<div class="panel empty">${icon("search")}<h2>لم نجد إعلانات بهذه الخيارات</h2><p>جرّب كلمة أقصر أو وسّع نطاق السعر والمدينة.</p><button class="primary" id="empty-reset">مسح الفلاتر وعرض الكل</button></div>`}</section></div></div>`;
}
function details(id) {
  const p = listings.find((x) => x.id === id);
  if (!p)
    return `<div class="wrap page">${empty("الإعلان غير موجود", "يمكنك العودة لاكتشاف إعلانات أخرى.")}</div>`;
  gallery = Math.min(gallery, p.images.length - 1);
  return `<div class="wrap page"><div class="breadcrumb"><a href="#/browse">${icon("arrow")} العودة إلى النتائج</a> / ${catLabel(p.category)}</div><div class="detail-layout"><section><img class="gallery-main" src="${esc(p.images[gallery])}" alt="${esc(p.title)} — الصورة ${gallery + 1}"><div class="thumbs">${p.images.map((im, i) => `<button data-gallery="${i}" class="${gallery === i ? "selected" : ""}" aria-label="عرض الصورة ${i + 1}" aria-pressed="${gallery === i}"><img src="${esc(im)}" alt=""></button>`).join("")}</div><div class="panel"><h2>عن الإعلان</h2><p style="white-space:pre-wrap">${esc(p.description)}</p><div class="details-list"><div><span>القسم</span>${catLabel(p.category)}</div><div><span>الحالة</span>${esc(p.condition)}</div><div><span>المدينة</span>${esc(p.city)}</div><div><span>رقم الإعلان التجريبي</span>${esc(p.id)}</div></div></div></section><aside class="panel detail-info" style="align-self:start"><span class="demo-pill">إعلان توضيحي · ليس عرضًا حقيقيًا</span><h1>${esc(p.title)}</h1><p>${icon("pin")} ${esc(p.city)}</p><div class="price">${p.price.toLocaleString("en-US")} <small>ر.س${p.category === "property" ? " / سنة" : p.category === "services" ? " · يبدأ من" : ""}</small></div><div class="seller"><div class="avatar">${esc(p.seller[0])}</div><div><strong>${esc(p.seller)}</strong><small>ملف بائع افتراضي لأغراض المشروع</small></div></div><div class="stack"><button class="primary" data-contact="${p.id}">${icon("message")} تواصل مع البائع</button><button class="secondary" data-save="${p.id}" aria-pressed="${favorites.includes(p.id)}">${icon("heart")} ${favorites.includes(p.id) ? "تم الحفظ" : "حفظ الإعلان"}</button></div><div class="trust">${icon("shield")} المحادثة محاكاة فقط. لا ترسل بيانات شخصية أو مبالغ مالية.</div></aside></div></div>`;
}
function favPage() {
  const saved = listings.filter((p) => favorites.includes(p.id));
  return `<div class="wrap page"><div class="breadcrumb"><a href="#/">الرئيسية</a> / المفضلة</div><h1>أشياء أعجبتك، في مكان واحد</h1><p>${saved.length} إعلان محفوظ · ارجع لها وقت ما تحب</p>${saved.length ? `<div class="grid">${saved.map(card).join("")}</div>` : empty("لم تحفظ أي إعلان بعد", "اضغط على رمز القلب في أي إعلان ليظهر هنا.")}</div>`;
}
function field(key, label, type = "text", hint = "") {
  return `<div class="field ${key === "description" || key === "title" ? "full" : ""}"><label for="${key}">${label} <span aria-hidden="true">*</span></label>${
    type === "textarea"
      ? `<textarea id="${key}" required minlength="20" maxlength="2000" aria-describedby="${key}-error ${key}-hint" aria-invalid="${!!errors[key]}">${esc(draft[key])}</textarea>`
      : type === "category"
        ? `<select id="${key}" required aria-describedby="${key}-error" aria-invalid="${!!errors[key]}">${
            '<option value="">اختر القسم</option>' +
            categories
              .slice(1)
              .map(
                (c) =>
                  `<option value="${c[0]}" ${draft.category === c[0] ? "selected" : ""}>${c[1]}</option>`,
              )
              .join("")
          }</select>`
        : type === "city"
          ? `<select id="${key}" required aria-describedby="${key}-error" aria-invalid="${!!errors[key]}">${options(cities, draft.city, "اختر المدينة")}</select>`
          : `<input id="${key}" type="${type}" ${type === "number" ? 'min="1" max="99999999" step="1"' : 'minlength="5" maxlength="90"'} required value="${esc(draft[key])}" aria-describedby="${key}-error ${key}-hint" aria-invalid="${!!errors[key]}">`
  }<p class="hint" id="${key}-hint">${hint}</p><p class="error" id="${key}-error">${errors[key] || ""}</p></div>`;
}
function addPage() {
  return `<div class="wrap page form-shell"><div class="breadcrumb"><a href="#/">الرئيسية</a> / أضف إعلانك</div><h1>خلّ إعلانك يحكي عن منتجك</h1><p>خطوات بسيطة، وفرصة جديدة لشيء عندك. كل الحقول مطلوبة.</p><div class="steps">${["تفاصيل الإعلان", "مراجعة الإعلان", "تم النشر"].map((s, i) => `<div class="step ${step === i + 1 ? "active" : ""}" ${step === i + 1 ? 'aria-current="step"' : ""}>${i + 1}. ${s}</div>`).join("")}</div>${step === 1 ? `<form class="panel" id="listing-form" novalidate><h2>أخبرنا عن منتجك</h2><div class="fields">${field("category", "القسم", "category")}${field("city", "المدينة", "city")}${field("title", "عنوان الإعلان", "text", "عنوان واضح بين ٥ و٩٠ حرفًا.")}${field("description", "الوصف", "textarea", "٢٠ حرفًا على الأقل. وضّح الحالة وما يشمله العرض.")}${field("price", "السعر بالريال السعودي", "number", "سعر كامل موجب، حتى ٩٩٬٩٩٩٬٩٩٩ ريال.")}</div><label for="images" style="display:block;margin-top:18px;font-weight:600">صور المنتج *</label><div class="upload">${icon("plus")}<p>أضف صورًا واضحة لمنتجك</p><small>حتى ٣ صور JPEG أو PNG أو WebP، بحد أقصى ٢ ميجابايت للصورة</small><input type="file" id="images" accept="image/jpeg,image/png,image/webp" multiple aria-describedby="image-error"><div id="upload-preview">${(draft.images || []).map((im) => `<img src="${esc(im)}" alt="معاينة الصورة المرفوعة">`).join("")}</div><p class="error" id="image-error">${errors.images || ""}</p></div><p class="hint">تُحفظ المسودة على جهازك. يمكنك مراجعتها قبل النشر.</p><div class="form-actions"><a class="secondary" href="#/browse">العودة للتصفح</a><button class="primary" id="review" ${uploadBusy ? "disabled" : ""}>مراجعة الإعلان ←</button></div></form>` : step === 2 ? `<section class="panel"><h2>تأكد أن كل شيء واضح</h2><p>سيظهر إعلانك في هذا المتصفح فقط، ضمن النموذج الأكاديمي.</p><div class="grid" style="grid-template-columns:minmax(0,330px)">${card({ ...draft, id: "preview", price: Number(draft.price), seller: "أنت · بائع تجريبي" })}</div><p style="white-space:pre-wrap;margin-top:20px">${esc(draft.description)}</p><div class="form-actions"><button class="secondary" id="edit-draft">تعديل التفاصيل</button><button class="primary" id="publish">${icon("check")} نشر الإعلان التجريبي</button></div></section>` : `<section class="panel empty">${icon("check")}<h2>تم نشر إعلانك بنجاح!</h2><p>إعلانك متاح الآن في هذا النموذج على جهازك.</p><a class="primary" href="#/listing/${esc(draft.publishedId)}">عرض إعلاني</a> <a class="secondary" href="#/browse">تصفح الإعلانات</a></section>`}</div>`;
}
function ensureChat(id) {
  if (!conversations[id])
    conversations[id] = [
      {
        text: "مرحبًا! هذه محادثة تجريبية. كيف يمكنني مساعدتك؟",
        mine: false,
        time: "الآن",
      },
    ];
  write("messages", conversations);
  activeChat = id;
  location.hash = "/messages/" + id;
}
function messagesPage(id) {
  if (id && conversations[id]) activeChat = id;
  const entries = Object.keys(conversations).filter((i) =>
    listings.some((p) => p.id === i),
  );
  const p = listings.find((x) => x.id === activeChat);
  return `<div class="wrap page"><h1>الرسائل</h1><p>محادثات توضيحية فقط · لا يتم إرسال أي رسالة إلى بائع حقيقي</p><div class="panel messages"><aside class="conversation-list"><h3>محادثاتك (${entries.length})</h3>${
    entries
      .map((i) => {
        const l = listings.find((x) => x.id === i);
        return `<button data-chat="${i}" ${i === activeChat ? 'aria-current="true"' : ""}><div class="avatar">${esc(l.seller[0])}</div><div>${esc(l.seller)}<small>${esc(l.title)}</small></div></button>`;
      })
      .join("") || "<p>ابدأ محادثة من صفحة أي إعلان.</p>"
  }</aside>${p && conversations[p.id] ? `<section class="chat"><div class="chat-header"><h3>${esc(p.seller)}</h3><a class="text-link" ${p.id === "preview" ? "" : `href="#/listing/${p.id}"`}>${esc(p.title)} ←</a></div><div class="chat-history" role="log" aria-label="سجل المحادثة">${conversations[p.id].map((m) => `<div class="bubble ${m.mine ? "mine" : ""}">${esc(m.text)}<small>${m.mine ? "أنت" : "بائع افتراضي"} · ${esc(m.time)}</small></div>`).join("")}</div><form id="message-form" class="compose"><input id="message" aria-label="اكتب رسالتك" placeholder="اكتب رسالتك هنا…" required maxlength="1000"><button class="primary">إرسال</button></form><small class="hint">ردود البائع آلية لأغراض العرض فقط.</small></section>` : `<section>${empty("كل محادثة تبدأ بفرصة", "افتح إعلانًا واختر «تواصل مع البائع» لبدء المحاكاة.")}</section>`}</div></div>`;
}
function concepts() {
  return `<div class="wrap page"><h1>أربعة تصورات لتجربة أوضح</h1><p>مخططات مفاهيمية للمشروع · التصور الأول هو الأساس المختار، مع تطبيق مبادئ البقية في الشاشات المناسبة.</p><div class="concepts">${[
    [
      "١ · الاكتشاف أولاً — المختار",
      "بحث واضح ثم أقسام مختصرة وبطاقات قابلة للمقارنة.",
      "البحث + المدينة",
      "الأقسام الرئيسية",
      "بطاقات الإعلانات",
    ],
    [
      "٢ · البحث المركّز",
      "شريط بحث ثابت وفلاتر جانبية عند وجود هدف محدد.",
      "البحث",
      "الفلاتر | النتائج",
      "الترتيب + الفلاتر النشطة",
    ],
    [
      "٣ · الثقة أولاً",
      "صورة كبيرة وتفاصيل واضحة مع معلومات البائع قرب إجراء التواصل.",
      "معرض الصور | السعر",
      "الوصف | البائع",
      "تواصل + حفظ",
    ],
    [
      "٤ · خطوة بخطوة",
      "إدخال منطقي ثم مراجعة وتأكيد لتقليل أخطاء النشر.",
      "مؤشر التقدم",
      "حقول الإعلان + معاينة الصور",
      "المراجعة ← التأكيد",
    ],
  ]
    .map(
      (c) =>
        `<article class="wire"><h2>${c[0]}</h2><p>${c[1]}</p><div class="wire-box">شريط التنقل</div><div class="wire-box">${c[2]}</div><div class="wire-row"><div class="wire-box">${c[3]}</div></div><div class="wire-box">${c[4]}</div></article>`,
    )
    .join("")}</div></div>`;
}
function render(focus = false) {
  const [route, query = ""] = location.hash.slice(1).split("?");
  const parts = (route || "/").split("/").filter(Boolean),
    page = parts[0] || "home";
  if (page === "browse" && query) {
    const q = new URLSearchParams(query);
    for (const k of ["q", "category", "city"])
      if (q.has(k)) filters[k] = q.get(k);
  }
  main.innerHTML =
    page === "home"
      ? home()
      : page === "browse"
        ? browse()
        : page === "listing"
          ? details(parts[1])
          : page === "favorites"
            ? favPage()
            : page === "add"
              ? addPage()
              : page === "messages"
                ? messagesPage(parts[1])
                : page === "concepts"
                  ? concepts()
                  : empty("الصفحة غير موجودة", "عد إلى التصفح.");
  document
    .querySelectorAll("[data-icon]")
    .forEach((e) => (e.outerHTML = icon(e.dataset.icon)));
  document.querySelectorAll("[data-nav]").forEach((a) => {
    a.classList.toggle("active", a.dataset.nav === page);
    if (a.dataset.nav === page) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  document.querySelector("#fav-count").textContent = favorites.length || "";
  bind();
  if (focus) main.focus({ preventScroll: true });
  document.querySelector(".chat-history")?.scrollTo(0, 999999);
}
function reset() {
  filters = {
    q: "",
    city: "",
    category: "all",
    min: "",
    max: "",
    sort: "recent",
  };
  history.replaceState(null, "", "#/browse");
  render();
  notify("تم مسح جميع الفلاتر");
}
function collectDraft() {
  for (const k of ["category", "city", "title", "description", "price"])
    draft[k] = document.getElementById(k)?.value?.trim() || "";
  write("draft", draft);
}
// Native number inputs reject Arabic digits in some browsers.
function normalizePrice(value) {
  return value.trim()
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x660))
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 0x6f0))
    .replace(/٫/g, ".");
}
function bind() {
  document.querySelector("#search-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    filters.q = document.querySelector("#query").value.trim();
    filters.city = document.querySelector("#search-city").value;
    history.replaceState(null, "", "#/browse");
    render();
    notify("تم تحديث نتائج البحث");
  });
  document.querySelectorAll("[data-save]").forEach(
    (b) =>
      (b.onclick = () => {
        if (b.dataset.save === "preview") return;
        const id = b.dataset.save;
        favorites = favorites.includes(id)
          ? favorites.filter((i) => i !== id)
          : [...favorites, id];
        write("favorites", favorites);
        render();
        notify(
          favorites.includes(id)
            ? "تم حفظ الإعلان في المفضلة"
            : "تمت إزالة الإعلان من المفضلة",
        );
      }),
  );
  document.querySelectorAll("[data-clear]").forEach(
    (b) =>
      (b.onclick = () => {
        filters[b.dataset.clear] = b.dataset.clear === "category" ? "all" : "";
        history.replaceState(null, "", "#/browse");
        render();
        notify("تمت إزالة الفلتر");
      }),
  );
  document.querySelector("#sort")?.addEventListener("change", (e) => {
    filters.sort = e.target.value;
    render();
    notify("تم ترتيب النتائج");
  });
  document.querySelector("#filter-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const min = normalizePrice(document.querySelector("#min").value),
      max = normalizePrice(document.querySelector("#max").value);
    for (const [id, value] of [["min", min], ["max", max]]) {
      if (value && (!/^\d+(?:\.\d+)?$/.test(value) || !Number.isFinite(Number(value)))) {
        document.querySelector("#filter-error").textContent =
          "أدخل سعرًا صحيحًا يساوي صفرًا أو أكبر.";
        document.getElementById(id).focus();
        return;
      }
    }
    if (min && max && Number(min) > Number(max)) {
      document.querySelector("#filter-error").textContent =
        "يجب أن يكون الحد الأعلى أكبر من الحد الأدنى.";
      document.querySelector("#max").focus();
      return;
    }
    Object.assign(filters, {
      category: document.querySelector("#filter-category").value,
      city: document.querySelector("#filter-city").value,
      min,
      max,
    });
    history.replaceState(null, "", "#/browse");
    render();
    notify("تم تطبيق الفلاتر");
  });
  for (const id of ["reset", "empty-reset"])
    document.getElementById(id)?.addEventListener("click", reset);
  document.querySelectorAll("[data-gallery]").forEach(
    (b) =>
      (b.onclick = () => {
        gallery = Number(b.dataset.gallery);
        render();
      }),
  );
  document
    .querySelectorAll("[data-contact]")
    .forEach((b) => (b.onclick = () => ensureChat(b.dataset.contact)));
  document.querySelectorAll("[data-chat]").forEach(
    (b) =>
      (b.onclick = () => {
        activeChat = b.dataset.chat;
        location.hash = "/messages/" + activeChat;
        render();
      }),
  );
  document.querySelector("#message-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = document.querySelector("#message").value.trim();
    if (!text) {
      document
        .querySelector("#message")
        .setCustomValidity("اكتب رسالة قبل الإرسال.");
      document.querySelector("#message").reportValidity();
      return;
    }
    conversations[activeChat].push(
      { text, mine: true, time: "الآن" },
      {
        text: "شكرًا لتواصلك! هذا رد آلي تجريبي، ويمكننا مناقشة تفاصيل المنتج هنا.",
        mine: false,
        time: "الآن",
      },
    );
    write("messages", conversations);
    render();
    document.querySelector("#message").focus();
    notify("تم إرسال الرسالة التجريبية");
  });
  document
    .querySelector("#message")
    ?.addEventListener("input", (e) => e.target.setCustomValidity(""));
  document.querySelector("#listing-form")?.addEventListener("input", (e) => {
    if (e.target.id !== "images") collectDraft();
  });
  document.querySelector("#listing-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    collectDraft();
    errors = {};
    if (!draft.category) errors.category = "اختر قسمًا لإعلانك.";
    if (!draft.city) errors.city = "اختر المدينة.";
    if (draft.title.length < 5)
      errors.title = "اكتب عنوانًا من ٥ أحرف على الأقل.";
    if (draft.description.length < 20)
      errors.description = "اكتب وصفًا من ٢٠ حرفًا على الأقل.";
    if (
      !Number.isInteger(Number(draft.price)) ||
      Number(draft.price) <= 0 ||
      Number(draft.price) > 99999999
    )
      errors.price = "أدخل سعرًا صحيحًا موجبًا ضمن الحد الموضح.";
    if (!draft.images?.length) errors.images = "أضف صورة واحدة على الأقل.";
    if (uploadBusy) return;
    if (Object.keys(errors).length) {
      render();
      document
        .getElementById(
          Object.keys(errors)[0] === "images"
            ? "images"
            : Object.keys(errors)[0],
        )
        ?.focus();
      notify("راجع الحقول الموضحة لإكمال إعلانك");
      return;
    }
    step = 2;
    render(true);
    window.scrollTo(0, 0);
  });
  document.querySelector("#images")?.addEventListener("change", async (e) => {
    const files = [...e.target.files];
    if (!files.length) return;
    if (
      files.length > 3 ||
      files.some(
        (f) =>
          f.size > 2 * 1024 * 1024 ||
          !["image/jpeg", "image/png", "image/webp"].includes(f.type),
      )
    ) {
      document.querySelector("#image-error").textContent =
        "اختر حتى ٣ صور صالحة، بحد أقصى ٢ ميجابايت لكل صورة.";
      e.target.value = "";
      return;
    }
    uploadBusy = true;
    document.querySelector("#review").disabled = true;
    try {
      draft.images = await Promise.all(
        files.map(
          (f) =>
            new Promise((res, rej) => {
              const r = new FileReader();
              r.onload = () => {
                const im = new Image();
                im.onload = () => {
                  const canvas = document.createElement("canvas"),
                    scale = Math.min(1, 1000 / im.width);
                  canvas.width = im.width * scale;
                  canvas.height = im.height * scale;
                  canvas
                    .getContext("2d")
                    .drawImage(im, 0, 0, canvas.width, canvas.height);
                  res(canvas.toDataURL("image/jpeg", 0.75));
                };
                im.onerror = rej;
                im.src = r.result;
              };
              r.onerror = rej;
              r.readAsDataURL(f);
            }),
        ),
      );
      write("draft", draft);
      document.querySelector("#upload-preview").innerHTML = draft.images
        .map((im) => `<img src="${im}" alt="معاينة الصورة المرفوعة">`)
        .join("");
      document.querySelector("#image-error").textContent = "";
      notify("تمت إضافة الصور");
    } catch {
      document.querySelector("#image-error").textContent =
        "تعذر قراءة الصورة. جرّب ملفًا آخر.";
    } finally {
      uploadBusy = false;
      document.querySelector("#review").disabled = false;
    }
  });
  document.querySelector("#edit-draft")?.addEventListener("click", () => {
    step = 1;
    render(true);
  });
  document.querySelector("#publish")?.addEventListener("click", () => {
    const p = {
      ...draft,
      id: "local-" + Date.now(),
      price: Number(draft.price),
      seller: "أنت · بائع تجريبي",
      condition: "حسب الوصف",
      created: Date.now(),
    };
    listings.unshift(p);
    write(
      "listings",
      listings.filter((x) => x.id.startsWith("local-")),
    );
    draft = { publishedId: p.id };
    write("draft", {});
    step = 3;
    render(true);
    notify("تم نشر إعلانك التجريبي");
  });
}
document.querySelector(".skip").addEventListener("click", (e) => {
  e.preventDefault();
  main.focus();
  main.scrollIntoView();
});
window.addEventListener("hashchange", () => {
  gallery = 0;
  render(true);
  window.scrollTo(0, 0);
});
render();
