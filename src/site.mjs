import {
  articles,
  awards,
  biography,
  books,
  childrenCopy,
  guides,
  mediaGroups,
  portraits,
  workshops
} from "./content.mjs";

const routeDefinitions = [
  { key: "home", pl: { path: "/", label: "O mnie" }, en: { path: "/en/", label: "About" } },
  { key: "books", pl: { path: "/ksiazki/", label: "Książki" }, en: { path: "/en/books/", label: "Books" } },
  { key: "articles", pl: { path: "/artykuly/", label: "Artykuły" }, en: { path: "/en/articles/", label: "Articles" } },
  { key: "children", pl: { path: "/dla-dzieci/", label: "Dla dzieci" }, en: { path: "/en/for-children/", label: "For children" } },
  { key: "workshops", pl: { path: "/warsztaty/", label: "Warsztaty" }, en: { path: "/en/workshops/", label: "Workshops" } },
  { key: "media", pl: { path: "/media/", label: "Media o moich książkach" }, en: { path: "/en/media/", label: "Books in the media" } }
];

const copy = {
  pl: {
    locale: "pl_PL",
    skip: "Przejdź do treści",
    homeLabel: "Katarzyna Klau Michalczak — strona główna",
    mainNav: "Główna nawigacja",
    footerNav: "Nawigacja w stopce",
    language: "Język strony",
    openNew: "Otwórz w nowej karcie",
    menu: "Menu",
    role: "Poetka · pisarka",
    heroLink: "Poznaj mnie",
    heroSide: "poezja / proza / opowiadania",
    marquee: "poezja · proza · opowiadania · warsztaty · literatura dla dzieci · ",
    aboutKicker: "O mnie",
    aboutTitle: "Podziemne korytarze.<br>Historie nad ziemią.",
    quote: "Z każdą kolejną książką pisanie staje się dla mnie coraz ważniejsze.",
    awardsKicker: "Nagrody i nominacje",
    awardsTitle: "Pięć ważnych<br>momentów",
    portraitLabel: "Portret Katarzyny Klau Michalczak",
    photoWords: "poezja<br>proza<br>opowiadania",
    selectedKicker: "Książki",
    selectedTitle: "Wybrane tytuły",
    allBooks: "Wszystkie książki",
    deeperKicker: "Dalej",
    deeperTitle: "Wejdź głębiej",
    bibliography: "Bibliografia",
    booksTitle: "Książki",
    booksNote: "Poezja · opowiadania · proza",
    mediaForBook: "Media o książce",
    upcoming: "W przygotowaniu",
    upcomingNote: "Zapowiedziana książka",
    texts: "Teksty",
    articlesTitle: "Artykuły",
    articlesNote: "Przekrój · Gazeta.pl · Kosmos dla Dziewczynek",
    childrenKicker: "Dla dzieci",
    childrenTitle: "Nazwij TO",
    guides: "Przewodniki",
    mainAuthor: "główna autorka",
    writing: "Pisanie",
    workshopsTitle: "Warsztaty",
    workshopsNote: "W grupie i indywidualnie",
    places: "Miejsca",
    scope: "Zakres współpracy",
    mediaKicker: "Rozmowy · recenzje · wideo",
    mediaTitle: "Media o moich książkach",
    mediaNote: "Materiały prowadzą do publikacji w języku polskim.",
    originalTitle: "Tytuł oryginalny",
    photography: "Zdjęcia: Tomasz Nalewajk, Justyna Lazizi oraz archiwum prywatne."
  },
  en: {
    locale: "en_GB",
    skip: "Skip to content",
    homeLabel: "Katarzyna Klau Michalczak — home",
    mainNav: "Main navigation",
    footerNav: "Footer navigation",
    language: "Site language",
    openNew: "Open in a new tab",
    menu: "Menu",
    role: "Poet · writer",
    heroLink: "About me",
    heroSide: "poetry / prose / short stories",
    marquee: "poetry · prose · short stories · workshops · writing for children · ",
    aboutKicker: "About",
    aboutTitle: "Tunnels underground.<br>Stories above.",
    quote: "With every new book, writing becomes more important to me.",
    awardsKicker: "Awards and nominations",
    awardsTitle: "Five defining<br>moments",
    portraitLabel: "Portrait of Katarzyna Klau Michalczak",
    photoWords: "poetry<br>prose<br>short stories",
    selectedKicker: "Books",
    selectedTitle: "Selected titles",
    allBooks: "All books",
    deeperKicker: "Explore",
    deeperTitle: "Discover more",
    bibliography: "Bibliography",
    booksTitle: "Books",
    booksNote: "Poetry · short stories · prose",
    mediaForBook: "Book in the media",
    upcoming: "Forthcoming",
    upcomingNote: "Announced title",
    texts: "Writing",
    articlesTitle: "Articles",
    articlesNote: "Przekrój · Gazeta.pl · Kosmos dla Dziewczynek",
    childrenKicker: "For children",
    childrenTitle: "Nazwij TO",
    guides: "Guides",
    mainAuthor: "lead author",
    writing: "Writing",
    workshopsTitle: "Workshops",
    workshopsNote: "For groups and individuals",
    places: "Previous hosts",
    scope: "Ways of working",
    mediaKicker: "Interviews · reviews · video",
    mediaTitle: "Books in the media",
    mediaNote: "Linked coverage is published in Polish.",
    originalTitle: "Original title",
    photography: "Photography: Tomasz Nalewajk, Justyna Lazizi and private archive."
  }
};

const pageData = {
  pl: {
    home: { title: "Katarzyna Klau Michalczak — poetka i pisarka", description: "Oficjalna strona Katarzyny Klau Michalczak — poetki, pisarki i członkini Unii Literackiej." },
    books: { title: "Książki — Katarzyna Klau Michalczak", description: "Poezja, opowiadania i proza Katarzyny Klau Michalczak — od „Pamięci przyjęć” po „Zwiezdę”." },
    articles: { title: "Artykuły — Katarzyna Klau Michalczak", description: "Artykuły i wywiady Katarzyny Klau Michalczak publikowane w Przekroju, Gazeta.pl i Kosmosie dla Dziewczynek." },
    children: { title: "Dla dzieci — Katarzyna Klau Michalczak", description: "Teksty Katarzyny Klau Michalczak dla dzieci oraz jej praca dla pisma Kosmos dla Dziewczynek." },
    workshops: { title: "Warsztaty — Katarzyna Klau Michalczak", description: "Warsztaty pisania i indywidualna praca nad tekstem z Katarzyną Klau Michalczak." },
    media: { title: "Media o moich książkach — Katarzyna Klau Michalczak", description: "Wywiady, rozmowy, audycje i recenzje książek Katarzyny Klau Michalczak." }
  },
  en: {
    home: { title: "Katarzyna Klau Michalczak — poet and writer", description: "The official website of Katarzyna Klau Michalczak, Polish poet, writer and member of Unia Literacka." },
    books: { title: "Books — Katarzyna Klau Michalczak", description: "Poetry, short stories and prose by Katarzyna Klau Michalczak, from Pamięć przyjęć to Zwiezda." },
    articles: { title: "Articles — Katarzyna Klau Michalczak", description: "Articles and interviews by Katarzyna Klau Michalczak for Przekrój, Gazeta.pl and Kosmos dla Dziewczynek." },
    children: { title: "For children — Katarzyna Klau Michalczak", description: "Katarzyna Klau Michalczak’s writing for children and editorial work for Kosmos dla Dziewczynek." },
    workshops: { title: "Workshops — Katarzyna Klau Michalczak", description: "Writing workshops and one-to-one text development with Katarzyna Klau Michalczak." },
    media: { title: "Books in the media — Katarzyna Klau Michalczak", description: "Interviews, broadcasts, videos and reviews of books by Katarzyna Klau Michalczak." }
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

function routeFor(key, locale) {
  return routeDefinitions.find((route) => route.key === key)[locale];
}

function imageFigure(portrait, className, locale) {
  const priority = className.includes("hero-photo") ? `fetchpriority="high"` : `loading="lazy"`;
  return `<figure class="photo ${className}">
    <img src="${portrait.src}" alt="${esc(portrait.alt[locale])}" width="${portrait.width}" height="${portrait.height}" ${priority} decoding="async">
  </figure>`;
}

function absoluteUrl(siteUrl, path) {
  return siteUrl ? `${siteUrl}${path}` : path;
}

function head(key, locale, siteUrl) {
  const meta = pageData[locale][key];
  const currentRoute = routeFor(key, locale);
  const polishRoute = routeFor(key, "pl");
  const englishRoute = routeFor(key, "en");
  const canonical = siteUrl ? absoluteUrl(siteUrl, currentRoute.path) : "";
  const socialImage = siteUrl ? `${siteUrl}/images/portrait-archiwum-prywatne.jpg` : "";
  return `<!doctype html>
<html lang="${locale}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(meta.title)}</title>
  <meta name="description" content="${esc(meta.description)}">
  <meta name="author" content="Katarzyna Klau Michalczak">
  <meta name="theme-color" content="#8d2d31">
  <meta name="robots" content="index, follow, max-image-preview:large">
  ${canonical ? `<link rel="canonical" href="${canonical}">` : ""}
  <link rel="alternate" hreflang="pl" href="${absoluteUrl(siteUrl, polishRoute.path)}">
  <link rel="alternate" hreflang="en" href="${absoluteUrl(siteUrl, englishRoute.path)}">
  <link rel="alternate" hreflang="x-default" href="${absoluteUrl(siteUrl, polishRoute.path)}">
  <meta property="og:locale" content="${copy[locale].locale}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Katarzyna Klau Michalczak">
  <meta property="og:title" content="${esc(meta.title)}">
  <meta property="og:description" content="${esc(meta.description)}">
  ${canonical ? `<meta property="og:url" content="${canonical}">` : ""}
  ${socialImage ? `<meta property="og:image" content="${socialImage}"><meta property="og:image:alt" content="${esc(portraits[3].alt[locale])}">` : ""}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(meta.title)}">
  <meta name="twitter:description" content="${esc(meta.description)}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="stylesheet" href="/styles.css">
</head>`;
}

function languageSwitch(key, locale) {
  return `<div class="language-switch" aria-label="${copy[locale].language}">
    <a href="${routeFor(key, "pl").path}" lang="pl"${locale === "pl" ? ` aria-current="page"` : ""}>PL</a>
    <span aria-hidden="true">/</span>
    <a href="${routeFor(key, "en").path}" lang="en"${locale === "en" ? ` aria-current="page"` : ""}>EN</a>
  </div>`;
}

function header(key, locale) {
  const strings = copy[locale];
  const activePath = routeFor(key, locale).path;
  const nav = routeDefinitions.map((route) => `<a href="${route[locale].path}"${route[locale].path === activePath ? ` aria-current="page"` : ""}>${route[locale].label}</a>`).join("");
  return `<body>
  <a class="skip-link" href="#main">${strings.skip}</a>
  <header class="site-header" data-header>
    <a class="wordmark" href="${routeFor("home", locale).path}" aria-label="${strings.homeLabel}">
      <span>Katarzyna</span><span>Klau Michalczak</span>
    </a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav">
      <span class="menu-label">${strings.menu}</span><span class="menu-glyph" aria-hidden="true"></span>
    </button>
    <nav class="site-nav" id="site-nav" aria-label="${strings.mainNav}">${nav}${languageSwitch(key, locale)}</nav>
  </header>`;
}

function footer(locale) {
  const strings = copy[locale];
  return `<footer class="site-footer">
    <div class="footer-orbit" aria-hidden="true"><span>śń</span></div>
    <p class="footer-name">Katarzyna<br>Klau Michalczak</p>
    <nav aria-label="${strings.footerNav}">${routeDefinitions.map((route) => `<a href="${route[locale].path}">${route[locale].label}</a>`).join("")}</nav>
    <p class="photo-credits">${strings.photography}</p>
    <p class="footer-meta">© ${new Date().getFullYear()} Katarzyna Klau Michalczak</p>
  </footer>
  <script src="/main.js" defer></script>
</body>
</html>`;
}

function layout(key, locale, content, schema, siteUrl) {
  return `${head(key, locale, siteUrl)}
${schema ? `<script type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>` : ""}
${header(key, locale)}
<main id="main">${content}</main>
${footer(locale)}`;
}

function marquee(locale) {
  return `<div class="marquee" aria-hidden="true"><div>${copy[locale].marquee.repeat(4)}</div></div>`;
}

function pageIntro(kicker, title, note = "") {
  return `<section class="page-intro content-shell reveal">
    <p class="eyebrow">${kicker}</p>
    <h1>${title}</h1>
    ${note ? `<p class="page-note">${note}</p>` : ""}
    <span class="intro-star" aria-hidden="true">✦</span>
  </section>`;
}

function routeCards(locale) {
  const strings = copy[locale];
  return `<section class="route-cards content-shell" aria-labelledby="deeper-title">
    <div class="section-heading reveal"><p class="eyebrow">${strings.deeperKicker}</p><h2 id="deeper-title">${strings.deeperTitle}</h2></div>
    <div class="route-grid">
      ${routeDefinitions.slice(1).map((route, index) => `<a class="route-card reveal" href="${route[locale].path}"><span>0${index + 1}</span><strong>${route[locale].label}</strong>${arrow}</a>`).join("")}
    </div>
  </section>`;
}

function homePage(locale, siteUrl) {
  const strings = copy[locale];
  const featured = [books[7], books[4], books[1], books[0]];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Katarzyna Klau Michalczak",
    birthPlace: { "@type": "Place", name: "Miechów" },
    jobTitle: locale === "pl" ? ["poetka", "pisarka"] : ["poet", "writer"],
    memberOf: { "@type": "Organization", name: "Unia Literacka" },
    alumniOf: { "@type": "Organization", name: "ISNS UW" },
    award: awards.map((award) => `${award.year}: ${award.text[locale]}`),
    image: siteUrl ? `${siteUrl}/images/portrait-archiwum-prywatne.jpg` : undefined
  };
  const content = `<section class="hero content-shell">
      <div class="hero-copy reveal">
        <p class="eyebrow">${strings.role}</p>
        <h1><span>Katarzyna</span><span class="hero-klau">Klau</span><span>Michalczak</span></h1>
        <a class="text-link" href="#about">${strings.heroLink} ${arrow}</a>
      </div>
      <div class="hero-visual reveal">
        <span class="hero-disc" aria-hidden="true"></span>
        ${imageFigure(portraits[3], "hero-photo", locale)}
        <p class="hero-ticket"><span>Miechów</span><span>1981</span></p>
      </div>
      <p class="hero-side" aria-hidden="true">${strings.heroSide}</p>
    </section>
    ${marquee(locale)}
    <section class="about content-shell" id="about" aria-labelledby="about-title">
      <div class="about-title reveal"><p class="eyebrow">${strings.aboutKicker}</p><h2 id="about-title">${strings.aboutTitle}</h2></div>
      <div class="about-copy reveal">${biography[locale].map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}</div>
      ${imageFigure(portraits[0], "about-photo reveal", locale)}
      <dl class="about-facts reveal"><div><dt>1981</dt><dd>Miechów</dd></div><div><dt>2015</dt><dd>${locale === "pl" ? "doktorat z socjologii" : "PhD in sociology"}</dd></div><div><dt>UL</dt><dd>Unia Literacka</dd></div></dl>
    </section>
    <section class="awards-stage" id="awards" aria-labelledby="awards-title">
      <div class="awards-inner content-shell">
        <div class="awards-heading reveal"><p class="eyebrow">${strings.awardsKicker}</p><h2 id="awards-title">${strings.awardsTitle}</h2><span aria-hidden="true">✦</span></div>
        ${imageFigure(portraits[1], "awards-photo reveal", locale)}
        <ol class="awards-list">
          ${awards.map((award) => `<li class="award-item reveal"><time datetime="${award.year}">${award.year}</time><p>${esc(award.text[locale])}</p></li>`).join("")}
        </ol>
      </div>
    </section>
    <section class="photo-interlude content-shell" id="portrait" aria-label="${strings.portraitLabel}">
      ${imageFigure(portraits[2], "interlude-photo reveal", locale)}
      <p class="interlude-type reveal" aria-hidden="true">${strings.photoWords}</p>
      <blockquote class="interlude-quote reveal">${strings.quote}</blockquote>
    </section>
    <section class="selected-books" aria-labelledby="selected-title">
      <div class="content-shell section-heading reveal"><p class="eyebrow">${strings.selectedKicker}</p><h2 id="selected-title">${strings.selectedTitle}</h2><a class="text-link" href="${routeFor("books", locale).path}">${strings.allBooks} ${arrow}</a></div>
      <div class="book-ribbon content-shell">
        ${featured.map((book) => `<article class="mini-book reveal"><div class="mini-book-art"><img src="${book.image}" alt="${locale === "pl" ? "Okładka książki" : "Book cover"} „${esc(book.title)}”" width="${book.width}" height="${book.height}" loading="lazy" decoding="async"></div><p><span>${book.year}</span>${esc(book.title)}</p></article>`).join("")}
      </div>
    </section>
    ${routeCards(locale)}`;
  return layout("home", locale, content, schema, siteUrl);
}

function booksPage(locale, siteUrl) {
  const strings = copy[locale];
  const publishedBooks = books.filter((book) => !book.upcoming);
  const upcomingBook = books.find((book) => book.upcoming);
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: books.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@type": "Book", name: book.title, datePublished: book.year, author: { "@type": "Person", name: "Katarzyna Klau Michalczak" } }
    }))
  };
  const cards = publishedBooks.map((book, index) => `<article class="book-card book-theme-${(index % 5) + 1} reveal" id="${toId(book.title)}">
    <div class="book-number">${String(index + 1).padStart(2, "0")}</div>
    <div class="book-cover"><img src="${book.image}" alt="${locale === "pl" ? "Okładka książki" : "Book cover"} „${esc(book.title)}”" width="${book.width}" height="${book.height}" ${index < 2 ? `fetchpriority="high"` : `loading="lazy"`} decoding="async"></div>
    <div class="book-info"><p class="eyebrow">${book.year}</p><h2>${esc(book.title)}</h2><p>${esc(book.details[locale])}</p>${book.mediaId ? `<a class="book-media-link" href="${routeFor("media", locale).path}#${book.mediaId}">${strings.mediaForBook} ${arrow}</a>` : ""}</div>
  </article>`).join("");
  const upcoming = `<section class="upcoming-book content-shell reveal" aria-labelledby="upcoming-title">
    <div><p class="eyebrow">${strings.upcoming}</p><p>${strings.upcomingNote}</p></div>
    <time datetime="${upcomingBook.year}">${upcomingBook.year}</time>
    <div><h2 id="upcoming-title">${upcomingBook.title}</h2><p>${upcomingBook.details[locale]}</p></div>
  </section>`;
  return layout("books", locale, `${pageIntro(strings.bibliography, strings.booksTitle, strings.booksNote)}${marquee(locale)}<section class="book-list content-shell">${cards}</section>${upcoming}`, schema, siteUrl);
}

function articlesPage(locale, siteUrl) {
  const strings = copy[locale];
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.map((article, index) => ({ "@type": "ListItem", position: index + 1, url: article.url, name: article.title.pl }))
  };
  const list = articles.map((article, index) => `<a class="article-row reveal" href="${article.url}" target="_blank" rel="noopener noreferrer">
    <span class="article-index">${String(index + 1).padStart(2, "0")}</span>
    <span class="article-title">${esc(article.title[locale])}${locale === "en" ? `<small class="original-title">${strings.originalTitle}: ${esc(article.title.pl)}</small>` : ""}</span>
    <span class="article-publication">${esc(article.publication)}</span>
    <span class="article-arrow">${arrow}<span class="sr-only">${strings.openNew}</span></span>
  </a>`).join("");
  return layout("articles", locale, `${pageIntro(strings.texts, strings.articlesTitle, strings.articlesNote)}<section class="article-list content-shell">${list}</section>`, schema, siteUrl);
}

function childrenPage(locale, siteUrl) {
  const strings = copy[locale];
  const content = `${pageIntro(strings.childrenKicker, strings.childrenTitle, "Kosmos dla Dziewczynek")}
    <section class="children-lead content-shell">
      <div class="children-orbit reveal" aria-hidden="true"><span>6–14</span><i></i></div>
      <div class="children-copy">${childrenCopy[locale].map((paragraph, index) => `<article class="children-card reveal"><span>0${index + 1}</span><p>${esc(paragraph)}</p></article>`).join("")}</div>
    </section>
    <section class="guides content-shell reveal" aria-label="${strings.guides}">
      <p class="eyebrow">${strings.guides} · ${strings.mainAuthor}</p>
      ${guides.map((guide) => `<div><p>${guide.year}</p><h2 lang="pl">${guide.title}</h2></div>`).join("")}
      <p class="guide-publisher">Fundacja Kosmos dla Dziewczynek</p>
    </section>`;
  return layout("children", locale, content, null, siteUrl);
}

function workshopsPage(locale, siteUrl) {
  const strings = copy[locale];
  const content = `${pageIntro(strings.writing, strings.workshopsTitle, strings.workshopsNote)}
    <section class="workshop-stage content-shell">
      <div class="workshop-shape reveal" aria-hidden="true"><span>${locale === "pl" ? "pisz" : "write"}</span><i>✦</i></div>
      <div class="workshop-copy reveal"><p>${esc(workshops[locale].intro)}</p></div>
      <div class="workshop-places reveal"><p class="eyebrow">${strings.places}</p><ul>${workshops.places.map((place) => `<li>${place}</li>`).join("")}</ul></div>
      <div class="workshop-services reveal"><p class="eyebrow">${strings.scope}</p><ul>${workshops[locale].services.map((service) => `<li>${service}</li>`).join("")}</ul></div>
    </section>`;
  return layout("workshops", locale, content, null, siteUrl);
}

function mediaPage(locale, siteUrl) {
  const strings = copy[locale];
  const groups = mediaGroups.map((group, groupIndex) => {
    const groupId = toId(group.title);
    return `<section class="media-group content-shell" id="${groupId}" aria-labelledby="media-${locale}-${groupIndex}">
      <div class="media-group-title reveal"><p class="eyebrow">${String(groupIndex + 1).padStart(2, "0")}</p><h2 id="media-${locale}-${groupIndex}">${esc(group.title)}</h2></div>
      <div class="media-items">${group.items.map((item) => {
        const description = item.description ? `<p>${esc(item.description[locale])}</p>` : "";
        const original = locale === "en" ? `<small class="original-title">${strings.originalTitle}: ${esc(item.title.pl)}</small>` : "";
        const body = `<span class="media-kind">${esc(item.kind[locale])}</span><div><p class="media-source">${esc(item.source)}</p><h3>${esc(item.title[locale])}</h3>${original}${description}</div>${arrow}`;
        return `<a class="media-item reveal" href="${item.url}" target="_blank" rel="noopener noreferrer">${body}<span class="sr-only">${strings.openNew}</span></a>`;
      }).join("")}</div>
    </section>`;
  }).join("");
  return layout("media", locale, `${pageIntro(strings.mediaKicker, strings.mediaTitle, strings.mediaNote)}${groups}`, null, siteUrl);
}

const pageRenderers = { home: homePage, books: booksPage, articles: articlesPage, children: childrenPage, workshops: workshopsPage, media: mediaPage };

function outputPath(routePath) {
  return routePath === "/" ? "index.html" : `${routePath.replace(/^\//, "")}index.html`;
}

export const allRoutes = routeDefinitions.flatMap((route) => [route.pl.path, route.en.path]);

export function renderPages(siteUrl = "") {
  const pages = new Map();
  for (const locale of ["pl", "en"]) {
    for (const route of routeDefinitions) {
      pages.set(outputPath(route[locale].path), pageRenderers[route.key](locale, siteUrl));
    }
  }
  return pages;
}

export { pageData, routeDefinitions };
