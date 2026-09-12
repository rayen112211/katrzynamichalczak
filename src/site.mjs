import {
  articles,
  awards,
  biography,
  books,
  childrenCopy,
  mediaGroups,
  portraits,
  workshopsCopy
} from "./content.mjs";

const navItems = [
  ["/", "O mnie"],
  ["/ksiazki/", "Książki"],
  ["/artykuly/", "Artykuły"],
  ["/dla-dzieci/", "Dla dzieci"],
  ["/warsztaty/", "Warsztaty"],
  ["/media/", "Media o moich książkach"]
];

const pageData = {
  home: {
    path: "/",
    title: "Katarzyna Klau Michalczak — poetka i pisarka",
    description: "Oficjalna strona Katarzyny Klau Michalczak — poetki, pisarki i członkini Unii Literackiej. Książki, artykuły, twórczość dla dzieci, warsztaty i media."
  },
  books: {
    path: "/ksiazki/",
    title: "Książki — Katarzyna Klau Michalczak",
    description: "Książki Katarzyny Klau Michalczak: poezja, opowiadania i proza od „Pamięci przyjęć” po „Zwiezdę”."
  },
  articles: {
    path: "/artykuly/",
    title: "Artykuły — Katarzyna Klau Michalczak",
    description: "Artykuły i wywiady Katarzyny Klau Michalczak publikowane w Przekroju, gazeta.pl i Kosmosie dla Dziewczynek."
  },
  children: {
    path: "/dla-dzieci/",
    title: "Dla dzieci — Katarzyna Klau Michalczak",
    description: "Twórczość Katarzyny Klau Michalczak dla dzieci i jej praca dla pisma Kosmos dla Dziewczynek."
  },
  workshops: {
    path: "/warsztaty/",
    title: "Warsztaty — Katarzyna Klau Michalczak",
    description: "Warsztaty pisania i indywidualne wsparcie w tworzeniu tekstów prowadzone przez Katarzynę Klau Michalczak."
  },
  media: {
    path: "/media/",
    title: "Media o moich książkach — Katarzyna Klau Michalczak",
    description: "Wywiady, rozmowy, audycje i recenzje książek Katarzyny Klau Michalczak."
  }
};

const esc = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const toId = (value) => String(value)
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");

const arrow = `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg>`;

function imageFigure(portrait, className = "") {
  const priority = className.includes("hero-photo") ? `fetchpriority="high"` : `loading="lazy"`;
  return `<figure class="photo ${className}">
    <img src="${portrait.src}" alt="${esc(portrait.alt)}" width="${portrait.width}" height="${portrait.height}" ${priority} decoding="async">
    <figcaption>${esc(portrait.credit)}</figcaption>
  </figure>`;
}

function head(meta, siteUrl) {
  const canonical = siteUrl ? `${siteUrl}${meta.path}` : "";
  const socialImage = siteUrl ? `${siteUrl}/images/portrait-archiwum-prywatne.jpg` : "";
  return `<!doctype html>
<html lang="pl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(meta.title)}</title>
  <meta name="description" content="${esc(meta.description)}">
  <meta name="author" content="Katarzyna Klau Michalczak">
  <meta name="theme-color" content="#8d2d31">
  <meta name="robots" content="index, follow, max-image-preview:large">
  ${canonical ? `<link rel="canonical" href="${canonical}">` : ""}
  <meta property="og:locale" content="pl_PL">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Katarzyna Klau Michalczak">
  <meta property="og:title" content="${esc(meta.title)}">
  <meta property="og:description" content="${esc(meta.description)}">
  ${canonical ? `<meta property="og:url" content="${canonical}">` : ""}
  ${socialImage ? `<meta property="og:image" content="${socialImage}"><meta property="og:image:alt" content="Portret Katarzyny Klau Michalczak">` : ""}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(meta.title)}">
  <meta name="twitter:description" content="${esc(meta.description)}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="stylesheet" href="/styles.css">
</head>`;
}

function header(activePath) {
  const nav = navItems.map(([href, label]) => `<a href="${href}"${href === activePath ? ` aria-current="page"` : ""}>${label}</a>`).join("");
  return `<body>
  <a class="skip-link" href="#main">Przejdź do treści</a>
  <header class="site-header" data-header>
    <a class="wordmark" href="/" aria-label="Katarzyna Klau Michalczak — strona główna">
      <span>Katarzyna</span><span>Klau Michalczak</span>
    </a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav">
      <span class="menu-label">Menu</span><span class="menu-glyph" aria-hidden="true"></span>
    </button>
    <nav class="site-nav" id="site-nav" aria-label="Główna nawigacja">${nav}</nav>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="footer-orbit" aria-hidden="true"><span>śń</span></div>
    <p class="footer-name">Katarzyna<br>Klau Michalczak</p>
    <nav aria-label="Nawigacja w stopce">${navItems.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}</nav>
    <p class="footer-meta">© ${new Date().getFullYear()} Katarzyna Klau Michalczak</p>
  </footer>
  <script src="/main.js" defer></script>
</body>
</html>`;
}

function layout(key, content, schema, siteUrl) {
  const meta = pageData[key];
  return `${head(meta, siteUrl)}
${schema ? `<script type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>` : ""}
${header(meta.path)}
<main id="main">${content}</main>
${footer()}`;
}

function marquee() {
  const line = "poezja · proza · opowiadania · warsztaty · literatura dla dzieci · ";
  return `<div class="marquee" aria-hidden="true"><div>${line.repeat(4)}</div></div>`;
}

function pageIntro(kicker, title, note = "") {
  return `<section class="page-intro content-shell reveal">
    <p class="eyebrow">${kicker}</p>
    <h1>${title}</h1>
    ${note ? `<p class="page-note">${note}</p>` : ""}
    <span class="intro-star" aria-hidden="true">✦</span>
  </section>`;
}

function routeCards() {
  return `<section class="route-cards content-shell" aria-labelledby="dalej-title">
    <div class="section-heading reveal"><p class="eyebrow">Dalej</p><h2 id="dalej-title">Wejdź głębiej</h2></div>
    <div class="route-grid">
      ${navItems.slice(1).map(([href, label], index) => `<a class="route-card reveal" href="${href}"><span>0${index + 1}</span><strong>${label}</strong>${arrow}</a>`).join("")}
    </div>
  </section>`;
}

function homePage(siteUrl) {
  const featured = [books[7], books[4], books[1], books[0]];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Katarzyna Klau Michalczak",
    birthPlace: { "@type": "Place", name: "Miechów" },
    jobTitle: ["poetka", "pisarka"],
    memberOf: { "@type": "Organization", name: "Unia Literacka" },
    alumniOf: { "@type": "Organization", name: "ISNS UW" },
    award: awards.map((award) => `${award.year}: ${award.text}`),
    image: siteUrl ? `${siteUrl}/images/portrait-archiwum-prywatne.jpg` : undefined
  };
  const content = `<section class="hero content-shell">
      <div class="hero-copy reveal">
        <p class="eyebrow">Poetka · pisarka</p>
        <h1><span>Katarzyna</span><span class="hero-klau">Klau</span><span>Michalczak</span></h1>
        <a class="text-link" href="#o-mnie">O mnie ${arrow}</a>
      </div>
      <div class="hero-visual reveal">
        <span class="hero-disc" aria-hidden="true"></span>
        ${imageFigure(portraits[3], "hero-photo")}
        <p class="hero-ticket"><span>Miechów</span><span>1981</span></p>
      </div>
      <p class="hero-side" aria-hidden="true">poezja / proza / opowiadania</p>
    </section>
    ${marquee()}
    <section class="film-section content-shell reveal" aria-labelledby="film-title">
      <div class="film-frame">
        <div class="film-count" aria-hidden="true">03 · 02 · 01</div>
        <div class="play-mark" aria-hidden="true"><span></span></div>
        <div><p class="eyebrow">W przygotowaniu</p><h2 id="film-title">Krótki film<br>„o mnie”</h2></div>
        <p>Wkrótce</p>
      </div>
    </section>
    <section class="about content-shell" id="o-mnie" aria-labelledby="about-title">
      <div class="about-title reveal"><p class="eyebrow">O mnie</p><h2 id="about-title">Podziemne korytarze.<br>Historie nad ziemią.</h2></div>
      <div class="about-copy reveal"><p>${esc(biography)}</p></div>
      ${imageFigure(portraits[0], "about-photo reveal")}
      <blockquote class="pullquote reveal">„A potem napisałam kilka innych książek, gdyż z roku na rok staje się to dla mnie coraz ważniejsze.”</blockquote>
    </section>
    <section class="awards-stage" id="nagrody" aria-labelledby="awards-title">
      <div class="awards-inner content-shell">
        <div class="awards-heading reveal"><p class="eyebrow">Nagrody i nominacje</p><h2 id="awards-title">Pięć ważnych<br>momentów</h2><span aria-hidden="true">✦</span></div>
        ${imageFigure(portraits[1], "awards-photo reveal")}
        <ol class="awards-list">
          ${awards.map((award) => `<li class="award-item reveal"><time>${award.year}</time><p>${esc(award.text)}</p></li>`).join("")}
        </ol>
      </div>
    </section>
    <section class="photo-interlude content-shell" id="portret" aria-label="Portret Katarzyny Klau Michalczak">
      ${imageFigure(portraits[2], "interlude-photo reveal")}
      <p class="interlude-type reveal" aria-hidden="true">poezja<br>proza<br>opowiadania</p>
      <blockquote class="interlude-quote reveal">„z roku na rok staje się to dla mnie coraz ważniejsze”</blockquote>
    </section>
    <section class="selected-books" aria-labelledby="selected-title">
      <div class="content-shell section-heading reveal"><p class="eyebrow">Książki</p><h2 id="selected-title">Wybrane tytuły</h2><a class="text-link" href="/ksiazki/">Wszystkie książki ${arrow}</a></div>
      <div class="book-ribbon content-shell">
        ${featured.map((book) => `<article class="mini-book reveal"><div class="mini-book-art"><img src="${book.image}" alt="Okładka książki „${esc(book.title)}”" width="${book.width}" height="${book.height}" loading="lazy" decoding="async"></div><p><span>${book.year}</span>${esc(book.title)}</p></article>`).join("")}
      </div>
    </section>
    ${routeCards()}`;
  return layout("home", content, schema, siteUrl);
}

function booksPage(siteUrl) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: books.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@type": "Book", name: book.title, datePublished: book.year, author: { "@type": "Person", name: "Katarzyna Klau Michalczak" } }
    }))
  };
  const cards = books.map((book, index) => `<article class="book-card book-theme-${(index % 5) + 1} reveal ${book.planned ? "book-planned" : ""}" id="${toId(book.title)}">
    <div class="book-number">${String(index + 1).padStart(2, "0")}</div>
    ${book.image ? `<div class="book-cover"><img src="${book.image}" alt="Okładka książki „${esc(book.title)}”" width="${book.width}" height="${book.height}" ${index < 2 ? `fetchpriority="high"` : `loading="lazy"`} decoding="async"></div>` : `<div class="book-cover book-cover-placeholder" aria-hidden="true"><span>✦</span><i>W planach</i></div>`}
    <div class="book-info"><p class="eyebrow">${book.planned ? "W planach" : book.year}</p><h2>${esc(book.title)}</h2>${book.details ? `<p>${esc(book.details)}</p>` : ""}${book.mediaPath ? `<a class="book-media-link" href="${book.mediaPath}">Media o książce ${arrow}</a>` : ""}${book.planned ? `<p class="book-year">${book.year}</p>` : ""}</div>
  </article>`).join("");
  return layout("books", `${pageIntro("Bibliografia", "Książki", "Poezja · opowiadania · proza")}${marquee()}<section class="book-list content-shell">${cards}</section>`, schema, siteUrl);
}

function articlesPage(siteUrl) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.map((article, index) => ({ "@type": "ListItem", position: index + 1, url: article.url, name: article.title }))
  };
  const list = articles.map((article, index) => `<a class="article-row reveal" href="${article.url}" target="_blank" rel="noopener noreferrer">
    <span class="article-index">${String(index + 1).padStart(2, "0")}</span>
    <span class="article-title">${esc(article.title)}</span>
    <span class="article-publication">${esc(article.publication)}</span>
    <span class="article-arrow">${arrow}<span class="sr-only">Otwórz w nowej karcie</span></span>
  </a>`).join("");
  return layout("articles", `${pageIntro("Teksty", "Artykuły", "Przekrój · gazeta.pl · Kosmos dla Dziewczynek")}<section class="article-list content-shell">${list}</section>`, schema, siteUrl);
}

function childrenPage(siteUrl) {
  const content = `${pageIntro("Dla dzieci", "Nazwij TO", "Kosmos dla Dziewczynek")}
    <section class="children-lead content-shell">
      <div class="children-orbit reveal" aria-hidden="true"><span>6–14</span><i></i></div>
      <div class="children-copy">
        ${childrenCopy.map((paragraph, index) => `<article class="children-card reveal"><span>0${index + 1}</span><p>${esc(paragraph)}</p></article>`).join("")}
      </div>
    </section>
    <section class="guides content-shell reveal" aria-label="Przewodniki">
      <p class="eyebrow">Przewodniki</p>
      <div><p>2025</p><h2>Przewodnik po Koleżankowaniu się</h2></div>
      <div><p>2026</p><h2>Przewodnik po dziewczyńskich grupkach</h2></div>
      <p class="guide-publisher">Fundacja Kosmos dla Dziewczynek</p>
    </section>`;
  return layout("children", content, null, siteUrl);
}

function workshopsPage(siteUrl) {
  const content = `${pageIntro("Pisanie", "Warsztaty", "W grupie i indywidualnie")}
    <section class="workshop-stage content-shell">
      <div class="workshop-shape reveal" aria-hidden="true"><span>pisz</span><i>✦</i></div>
      <div class="workshop-copy reveal"><p>${esc(workshopsCopy)}</p></div>
      <div class="workshop-places reveal"><p class="eyebrow">Miejsca</p><ul><li>Fundacja Ad Hoc</li><li>OK Brwinów</li><li>Grupa Światy</li></ul></div>
      <div class="workshop-note reveal"><span>→</span><p>pomagam również indywidualnie w tworzeniu tekstów, doradzam, prowadzę w rozwoju.</p></div>
    </section>`;
  return layout("workshops", content, null, siteUrl);
}

function mediaPage(siteUrl) {
  const groups = mediaGroups.map((group, groupIndex) => {
    const groupId = toId(group.title);
    return `<section class="media-group content-shell" id="${groupId}" aria-labelledby="media-${groupIndex}">
    <div class="media-group-title reveal"><p class="eyebrow">${String(groupIndex + 1).padStart(2, "0")}</p><h2 id="media-${groupIndex}">${esc(group.title)}</h2></div>
    <div class="media-items">
      ${group.items.map((item) => {
        const body = `<span class="media-kind">${esc(item.kind)}</span><div><p class="media-source">${esc(item.source || "")}</p><h3>${esc(item.title)}</h3>${item.description ? `<p>${esc(item.description)}</p>` : ""}</div>${item.url ? arrow : ""}`;
        return item.url ? `<a class="media-item reveal" href="${item.url}" target="_blank" rel="noopener noreferrer">${body}<span class="sr-only">Otwórz w nowej karcie</span></a>` : `<article class="media-item media-item-static reveal">${body}</article>`;
      }).join("")}
    </div>
  </section>`;
  }).join("");
  return layout("media", `${pageIntro("Rozmowy · recenzje · wideo", "Media o moich książkach")}${groups}`, null, siteUrl);
}

export function renderPages(siteUrl = "") {
  return new Map([
    ["index.html", homePage(siteUrl)],
    ["ksiazki/index.html", booksPage(siteUrl)],
    ["artykuly/index.html", articlesPage(siteUrl)],
    ["dla-dzieci/index.html", childrenPage(siteUrl)],
    ["warsztaty/index.html", workshopsPage(siteUrl)],
    ["media/index.html", mediaPage(siteUrl)]
  ]);
}

export { navItems, pageData };
