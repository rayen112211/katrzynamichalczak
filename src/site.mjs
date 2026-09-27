import {
  articles,
  awards,
  biography,
  books,
  bookCopy,
  childrenCopy,
  guides,
  mediaGroups,
  portraits,
  workshops
} from "./content.mjs";

const routeDefinitions = [
  { key: "home", pl: { path: "/", label: "Strona główna" }, en: { path: "/en/", label: "Home" }, es: { path: "/es/", label: "Inicio" } },
  { key: "about", pl: { path: "/o-mnie/", label: "O mnie" }, en: { path: "/en/about/", label: "About me" }, es: { path: "/es/sobre-mi/", label: "Sobre mí" } },
  { key: "books", pl: { path: "/ksiazki/", label: "Książki" }, en: { path: "/en/books/", label: "Books" }, es: { path: "/es/libros/", label: "Libros" } },
  { key: "poetry", hidden: true, pl: { path: "/ksiazki/poezja/", label: "Poezja" }, en: { path: "/en/books/poetry/", label: "Poetry" }, es: { path: "/es/libros/poesia/", label: "Poesía" } },
  { key: "prose", hidden: true, pl: { path: "/ksiazki/proza/", label: "Proza" }, en: { path: "/en/books/prose/", label: "Prose" }, es: { path: "/es/libros/prosa/", label: "Prosa" } },
  { key: "autofiction", hidden: true, pl: { path: "/ksiazki/auto-non-fiction/", label: "Auto-non-fiction" }, en: { path: "/en/books/auto-non-fiction/", label: "Auto-non-fiction" }, es: { path: "/es/libros/auto-non-fiction/", label: "Auto-non-fiction" } },
  { key: "articles", pl: { path: "/artykuly/", label: "Artykuły" }, en: { path: "/en/articles/", label: "Articles" }, es: { path: "/es/articulos/", label: "Artículos" } },
  { key: "children", pl: { path: "/dla-dzieci/", label: "Dla dzieci" }, en: { path: "/en/for-children/", label: "For children" }, es: { path: "/es/para-ninas/", label: "Para niñas" } },
  { key: "workshops", pl: { path: "/warsztaty/", label: "Warsztaty" }, en: { path: "/en/workshops/", label: "Workshops" }, es: { path: "/es/talleres/", label: "Talleres" } },
  { key: "media", pl: { path: "/media/", label: "Media o moich książkach" }, en: { path: "/en/media/", label: "Books in the media" }, es: { path: "/es/medios/", label: "Medios" } },
  { key: "contact", pl: { path: "/kontakt/", label: "Zaproś mnie" }, en: { path: "/en/work-with-me/", label: "Invite me" }, es: { path: "/es/colaboraciones/", label: "Invítame" } }
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
    tagline: "To brzegi kształtują bieg rzeki.",
    punchline: "Nigdy nie wyrzeknę się krzaków.",
    heroLink: "Poznaj mnie",
    homeCtaBooks: "Zobacz książki",
    homeCtaInvite: "Zaproś mnie",
    heroSide: "poezja / proza / opowiadania",
    marquee: "poezja · proza · opowiadania · warsztaty · literatura dla dzieci · ",
    aboutKicker: "O mnie",
    aboutTitle: "Z perspektywy krzaków.",
    quote: "Z każdą kolejną książką pisanie staje się dla mnie coraz ważniejsze.",
    awardsKicker: "Nagrody i nominacje",
    awardsTitle: "Pięć ważnych<br>momentów",
    portraitLabel: "Portret Katarzyny Klau Michalczak",
    photoWords: "poezja<br>proza<br>opowiadania",
    selectedKicker: "Książki",
    selectedTitle: "Wybrane tytuły",
    timelineTitle: "Książki i wyróżnienia",
    timelineNote: "Wybrane daty",
    invitationTitle: "Zaproszenia",
    invitationText: "Spotkania autorskie · warsztaty pisania · panele · rozmowy",
    allBooks: "Wszystkie książki",
    deeperKicker: "Dalej",
    deeperTitle: "Wejdź głębiej",
    bibliography: "Bibliografia",
    booksTitle: "Książki",
    bookCategories: [{ id: "poezja", key: "poetry", route: "poetry", label: "Poezja" }, { id: "proza", key: "prose", route: "prose", label: "Proza" }, { id: "auto-non-fiction", key: "autofiction", route: "autofiction", label: "Auto-non-fiction" }],
    allBooksLabel: "Wszystkie książki",
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
    mediaNote: "",
    contactTitle: "Porozmawiajmy",
    contactInvite: "Zaproszenia i współpraca",
    contactNote: "Spotkania autorskie · warsztaty pisania · panele · rozmowy",
    contactIntro: "Zapraszam do kontaktu w sprawie spotkań autorskich, warsztatów pisania, paneli i rozmów.",
    homeBio: "Interesuje mnie to, co dla innych bywa mało znaczące i pomijane. Dlatego piszę o sprawach ważnych z perspektywy, która nie jest oczywista: w wierszach, opowiadaniach, powieści i auto-non-fiction. Wydałam osiem książek, nominowanych m.in. do Nagrody Literackiej Gdynia i Nagrody Poetyckiej KOS. Jestem doktorką socjologii i członkinią Unii Literackiej.",
    bookQuote: "„Ta historia świeci jasno, chociaż przychodzi z ciemności” – Marcin Zegadło, Księgozbiry",
    publisherLink: "Strona wydawcy",
    inviteIntro: "Kocham ludzi i rozmowy o literaturze, które schodzą z głównej ścieżki. Przyjeżdżam do bibliotek, na festiwale, do domów kultury i miejsc działających poza głównym nurtem.",
    eventMeetings: "Rozmowy wokół moich książek: poezji, prozy i auto-non-fiction. Mogę czytać fragmenty i opowiadać o tym, jak powstawały. Zawsze chętnie odpowiadam na pytania publiczności, które często przeradzają się w wielogodzinną rozmowę czy to na spotkaniu, czy już po nim.",
    eventTalks: "Tematy: ADHD u dorosłych kobiet, macierzyństwo wobec dziecka w spektrum autyzmu, relacje poza normą, feminizm, pisanie o własnym życiu.",
    whereBeen: "Festiwal Literacki Sopot 2024 · Wschowa · Gniezno · Milanówek · Galeria Zachęta w Warszawie",
    practical: "Mieszkam pod Warszawą w Milanówku, a zimną część roku spędzam w Andaluzji. Mogę brać udział w spotkaniach po polsku, angielsku i hiszpańsku.",
    replyTime: "Napisz, czego szukasz: rodzaj wydarzenia, termin i miejsce. Odpowiem w ciągu 2 dni.",
    journalismIntro: "W publicystyce też zaglądam pod podszewkę. Pisałam dla „Przekroju”, Gazeta.pl i „Kosmosu dla Dziewczynek” o tym, co zwykle zostaje na marginesie: o molestowaniu w gastronomii, o życiu z chorobą afektywną dwubiegunową, o kobietach po czterdziestce, o tym, co przychodzi po przejściu na emeryturę.",
    childIntro: "W latach 2021–2026 byłam redaktorką i autorką pisma „Kosmos dla Dziewczynek”. Pisałam dla czytelniczek w wieku 6–14 lat o sprawach, o których dorośli często boją się z dziećmi rozmawiać.",
    childSeries: "W cyklu „Nazwij TO” pisałam wspierającym, dostosowanym do wieku językiem o doświadczeniach dziewczynek: anoreksji, depresji, rozwodzie rodziców i różnych formach nadużyć. Za każdym razem zależało mi, by czytelniczka przeżyła coś ważnego, coś zrozumiała, a zarazem nie poczuła się przytłoczona. Jak mi donoszą dziewczynki: cel został osiągnięty, te artykuły, ilustrowane świetnie przez Kasię Piątek, wiele dla nich znaczą.",
    name: "Imię i nazwisko",
    institution: "Instytucja",
    eventType: "Rodzaj wydarzenia",
    date: "Data",
    place: "Miejsce",
    message: "Wiadomość",
    sendRequest: "Przygotuj wiadomość",
    emailSubject: "Zaproszenie do współpracy",
    originalTitle: "Tytuł oryginalny",
    photography: "Pozostałe zdjęcia: Justyna Lazizi i archiwum prywatne. Autorstwo portretu głównego do potwierdzenia.",
    instagram: "Instagram"
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
    tagline: "It is the banks that shape the course of the river.",
    punchline: "I will never give up the bushes.",
    heroLink: "About me",
    homeCtaBooks: "See the books",
    homeCtaInvite: "Invite me",
    heroSide: "poetry / prose / short stories",
    marquee: "poetry · prose · short stories · workshops · writing for children · ",
    aboutKicker: "About",
    aboutTitle: "From the point of view of the bushes.",
    quote: "With every new book, writing becomes more important to me.",
    awardsKicker: "Awards and nominations",
    awardsTitle: "Five defining<br>moments",
    portraitLabel: "Portrait of Katarzyna Klau Michalczak",
    photoWords: "poetry<br>prose<br>short stories",
    selectedKicker: "Books",
    selectedTitle: "Selected titles",
    timelineTitle: "Books and awards",
    timelineNote: "Selected dates",
    invitationTitle: "Invitations",
    invitationText: "Author meetings · writing workshops · panels · talks",
    allBooks: "All books",
    deeperKicker: "Explore",
    deeperTitle: "Discover more",
    bibliography: "Bibliography",
    booksTitle: "Books",
    bookCategories: [{ id: "poezja", key: "poetry", route: "poetry", label: "Poetry" }, { id: "proza", key: "prose", route: "prose", label: "Prose" }, { id: "auto-non-fiction", key: "autofiction", route: "autofiction", label: "Auto-non-fiction" }],
    allBooksLabel: "All books",
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
    contactTitle: "Let’s talk",
    contactInvite: "Invitations and collaboration",
    contactNote: "Author meetings · writing workshops · panels · talks",
    contactIntro: "Please get in touch about author meetings, writing workshops, panels and talks.",
    homeBio: "I am drawn to what others find slight or beside the point. That is why I write about important things from an angle that is not obvious: in poems, short stories, a novel and auto-non-fiction. I have published eight books, shortlisted among others for the Gdynia Literary Prize and the KOS Poetry Prize. I hold a PhD in sociology and belong to Unia Literacka, the Polish writers’ union.",
    bookQuote: "“This story shines brightly, although it comes out of the dark.” — Marcin Zegadło, Księgozbiry",
    publisherLink: "Publisher page",
    inviteIntro: "I love people and conversations about literature that wander off the main path. I travel to libraries, festivals, cultural centres and places that work outside the mainstream.",
    eventMeetings: "Conversations around my books: poetry, prose and auto-non-fiction. I can read excerpts and talk about how the books came about. I always enjoy questions from the audience, which often turn into hours of conversation, either during the event or long after it.",
    eventTalks: "Topics: ADHD in adult women, mothering a child on the autism spectrum, relationships outside the norm, feminism, writing about your own life.",
    whereBeen: "Sopot Literary Festival 2024 · Wschowa · Gniezno · Milanówek · Zachęta Gallery in Warsaw",
    practical: "I live in Milanówek near Warsaw and spend the cold half of the year in Andalusia. I can take part in events in Polish, English and Spanish.",
    replyTime: "Tell me what you are looking for: the kind of event, the date and the place. I reply within two days.",
    journalismIntro: "In my journalism I also look under the lining. I have written for “Przekrój”, Gazeta.pl and “Kosmos dla Dziewczynek” about what usually stays in the margin: harassment in the restaurant trade, living with bipolar disorder, women in their forties, and what comes after retirement.",
    childIntro: "Between 2021 and 2026 I was an editor and writer at the magazine “Kosmos dla Dziewczynek”. I wrote for readers aged 6 to 14 about things adults are often afraid to discuss with children.",
    childSeries: "In the “Nazwij TO” series I wrote in supportive, age-appropriate language about experiences girls go through: anorexia, depression, their parents’ divorce and different forms of abuse. Each time it mattered to me that a reader would live through something important and understand something, without feeling overwhelmed. From what the girls tell me, it worked: those pieces, beautifully illustrated by Kasia Piątek, mean a great deal to them.",
    name: "Name",
    institution: "Institution",
    eventType: "Type of event",
    date: "Date",
    place: "Place",
    message: "Message",
    sendRequest: "Prepare email",
    emailSubject: "Invitation to collaborate",
    originalTitle: "Original title",
    photography: "Other photographs: Justyna Lazizi and private archive. Photographer credit for the main portrait is still to be confirmed.",
    instagram: "Instagram"
  }
};

copy.es = {
  ...copy.en,
  locale: "es_ES", skip: "Saltar al contenido", homeLabel: "Katarzyna Klau Michalczak — inicio", mainNav: "Navegación principal", footerNav: "Navegación del pie", language: "Idioma del sitio", menu: "Menú", role: "Poeta · escritora", tagline: "Son las orillas las que dan forma al curso del río.", punchline: "Nunca renunciaré a los matorrales.", heroLink: "Sobre mí", homeCtaBooks: "Conoce los libros", homeCtaInvite: "Invítame", heroSide: "poesía / prosa / relatos", marquee: "poesía · prosa · relatos · talleres · escritura para niñas · ", aboutKicker: "Sobre mí", aboutTitle: "Desde la perspectiva de los matorrales.", quote: "Con cada nuevo libro la escritura se vuelve más importante para mí.", awardsKicker: "Premios y nominaciones", awardsTitle: "Cinco momentos<br>importantes", portraitLabel: "Retrato de Katarzyna Klau Michalczak", photoWords: "poesía<br>prosa<br>relatos", selectedKicker: "Libros", selectedTitle: "Algunos títulos", timelineTitle: "Libros, premios, residencias", timelineNote: "Fechas seleccionadas", invitationTitle: "Invitaciones", invitationText: "Encuentros · talleres de escritura · mesas redondas · charlas", allBooks: "Todos los libros", deeperKicker: "Explora", deeperTitle: "Descubre más", bibliography: "Bibliografía", booksTitle: "Libros", bookCategories: [{id:"poesia",key:"poetry",route:"poetry",label:"Poesía"},{id:"proza",key:"prose",route:"prose",label:"Prosa"},{id:"auto-non-fiction",key:"autofiction",route:"autofiction",label:"Auto-non-fiction"}], allBooksLabel: "Todos los libros", booksNote: "Poesía · relatos · prosa", mediaForBook: "En los medios", publisherLink: "Página de la editorial", upcoming: "En preparación", upcomingNote: "Próxima publicación", texts: "Textos", articlesTitle: "Artículos", articlesNote: "Przekrój · Gazeta.pl · Kosmos dla Dziewczynek", childrenKicker: "Para niñas", childrenTitle: "Nazwij TO", guides: "Guías", mainAuthor: "autora principal", writing: "Escritura", workshopsTitle: "Talleres", workshopsNote: "En grupo e individuales", places: "Lugares", scope: "Formas de trabajo", mediaKicker: "Entrevistas · reseñas · vídeo", mediaTitle: "Medios sobre mis libros", mediaNote: "Los materiales enlazados están publicados en polaco.", contactTitle: "Hablemos", contactInvite: "Colaboraciones", contactNote: "Encuentros · talleres · mesas redondas · charlas", contactIntro: "Escríbeme para encuentros literarios, talleres de escritura, mesas redondas y charlas.", homeBio: "Me interesa lo que para otras personas resulta menor o prescindible. Por eso escribo sobre asuntos importantes desde una perspectiva que no es la evidente: en poemas, relatos, novela y auto-non-fiction. He publicado ocho libros, finalistas entre otros del Premio Literario Gdynia y del Premio de Poesía KOS. Soy doctora en sociología y miembro de Unia Literacka, la unión de escritoras y escritores de Polonia.", bookQuote: "“Esta historia brilla con luz clara, aunque venga de la oscuridad.” — Marcin Zegadło, Księgozbiry", inviteIntro: "Amo a la gente y las conversaciones sobre literatura que se salen del camino principal. Viajo a bibliotecas, festivales, centros culturales y espacios que trabajan fuera de la corriente principal.", eventMeetings: "Conversaciones en torno a mis libros: poesía, prosa y auto-non-fiction. Puedo leer fragmentos y contar cómo nacieron. Siempre respondo con gusto a las preguntas del público, que a menudo se convierten en horas de conversación, durante el encuentro o después.", eventTalks: "Temas: TDAH en mujeres adultas, la maternidad frente a un hijo en el espectro autista, las relaciones fuera de la norma, feminismo, escribir sobre la propia vida.", whereBeen: "Festival Literario de Sopot 2024 · Wschowa · Gniezno · Milanówek · Galería Zachęta de Varsovia", practical: "Vivo en Milanówek, cerca de Varsovia, y paso la mitad fría del año en Andalucía. Puedo participar en encuentros en polaco, inglés y español.", replyTime: "Escríbeme contando qué buscas: tipo de evento, fecha y lugar. Respondo en un plazo de dos días.", journalismIntro: "En el periodismo también miro debajo del forro. He escrito para “Przekrój”, Gazeta.pl y “Kosmos dla Dziewczynek” sobre lo que suele quedarse al margen: el acoso en la hostelería, la vida con trastorno bipolar, las mujeres de cuarenta años y lo que llega después de la jubilación.", childIntro: "Entre 2021 y 2026 fui editora y autora de la revista “Kosmos dla Dziewczynek”. Escribí para lectoras de 6 a 14 años sobre asuntos de los que las personas adultas a menudo tienen miedo de hablar con las niñas.", childSeries: "En la serie “Nazwij TO” escribí, con un lenguaje acogedor y adaptado a su edad, sobre experiencias de las niñas: anorexia, depresión, el divorcio de sus madres y padres y distintas formas de abuso. Cada vez me importaba que la lectora viviera algo importante y entendiera algo, sin sentirse abrumada. Según me cuentan las niñas, el objetivo se cumplió: esos artículos, magníficamente ilustrados por Kasia Piątek, significan mucho para ellas.", name: "Nombre", institution: "Institución", eventType: "Tipo de evento", date: "Fecha", place: "Lugar", message: "Mensaje", sendRequest: "Preparar correo", emailSubject: "Invitación a colaborar", originalTitle: "Título original", photography: "Fotografías: Tomasz Nalewajk, Justyna Lazizi y archivo privado.", instagram: "Instagram"
};
copy.es.photography = "Otras fotografías: Justyna Lazizi y archivo privado. Falta confirmar el crédito del retrato principal.";

export const authorProfiles = [
  "https://www.instagram.com/katarzyna.klau.michalczak/",
  "https://www.wydawnictwoliterackie.pl/autor/1305/katarzyna-michalczak",
  "https://wydawnictwocyranka.pl/pl/producer/Katarzyna-Michalczak/15"
];

const pageData = {
  pl: {
    home: { title: "Katarzyna Klau Michalczak — poetka i pisarka", description: "Katarzyna Klau Michalczak (Katarzyna Michalczak): poetka i pisarka, autorka „Zwiezdy” i „Synu, jesteś kotem”. Spotkania autorskie, warsztaty, panele." },
    about: { title: "O mnie — Katarzyna Michalczak", description: "Poetka, pisarka, doktorka socjologii. Osiem książek, nominacje do Nagrody Literackiej Gdynia i Nagrody KOS." },
    books: { title: "Książki — Katarzyna Klau Michalczak", description: "Poezja, opowiadania i proza Katarzyny Klau Michalczak — od „Pamięci przyjęć” po „Zwiezdę”." },
    poetry: { title: "Poezja — Katarzyna Michalczak", description: "Tomy wierszy Katarzyny Michalczak: „Pamięć przyjęć”, „Tysiąc saun”, „śń”." },
    prose: { title: "Proza — Katarzyna Michalczak", description: "Powieść „Zwiezda” i opowiadania Katarzyny Michalczak: „Klub snów”, „Mam na imię nie mam”." },
    autofiction: { title: "Auto-non-fiction — Katarzyna Michalczak", description: "„Synu, jesteś kotem” i „Gdzie zgłosić dzikie zwierzę”: książki o macierzyństwie w spektrum autyzmu i o ADHD." },
    articles: { title: "Artykuły — Katarzyna Klau Michalczak", description: "Publicystyka Katarzyny Michalczak w „Przekroju”, Gazeta.pl i „Kosmosie dla Dziewczynek”." },
    children: { title: "Dla dzieci — Katarzyna Klau Michalczak", description: "Teksty dla dziewczynek: cykl „Nazwij TO” i przewodniki Fundacji Kosmos dla Dziewczynek." },
    workshops: { title: "Warsztaty — Katarzyna Klau Michalczak", description: "Warsztaty pisania i indywidualna praca nad tekstem z Katarzyną Klau Michalczak." },
    media: { title: "Media o moich książkach — Katarzyna Klau Michalczak", description: "Recenzje, wywiady i audycje o książkach Katarzyny Michalczak. Materiały dla prasy." },
    contact: { title: "Zaproś mnie — Katarzyna Michalczak", description: "Zaproś Katarzynę Michalczak na spotkanie autorskie, warsztaty pisania lub panel." }
  },
  en: {
    home: { title: "Katarzyna Klau Michalczak — poet and writer", description: "Katarzyna Klau Michalczak (Katarzyna Michalczak): Polish poet and writer, author of “Zwiezda” and “Synu, jesteś kotem”. Author meetings, workshops, panels." },
    about: { title: "About me — Katarzyna Michalczak", description: "Poet, writer, PhD in sociology. Eight books, shortlisted for the Gdynia Literary Prize and the KOS Poetry Prize." },
    books: { title: "Books — Katarzyna Klau Michalczak", description: "Poetry, short stories and prose by Katarzyna Klau Michalczak, from Pamięć przyjęć to Zwiezda." },
    poetry: { title: "Poetry — Katarzyna Michalczak", description: "Poetry collections by Katarzyna Michalczak: Pamięć przyjęć, Tysiąc saun, śń." },
    prose: { title: "Prose — Katarzyna Michalczak", description: "The novel Zwiezda and short stories by Katarzyna Michalczak: Klub snów, Mam na imię nie mam." },
    autofiction: { title: "Auto-non-fiction — Katarzyna Michalczak", description: "Synu, jesteś kotem and Gdzie zgłosić dzikie zwierzę: books on mothering a child on the autism spectrum and ADHD." },
    articles: { title: "Articles — Katarzyna Klau Michalczak", description: "Journalism by Katarzyna Michalczak in “Przekrój”, Gazeta.pl and “Kosmos dla Dziewczynek”." },
    children: { title: "For children — Katarzyna Klau Michalczak", description: "Writing for girls: the “Nazwij TO” series and guides by the Kosmos dla Dziewczynek Foundation." },
    workshops: { title: "Workshops — Katarzyna Klau Michalczak", description: "Writing workshops and one-to-one text development with Katarzyna Klau Michalczak." },
    media: { title: "Books in the media — Katarzyna Klau Michalczak", description: "Reviews, interviews and broadcasts about the books of Katarzyna Michalczak. Press materials." },
    contact: { title: "Work with me — Katarzyna Michalczak", description: "Contact Katarzyna Michalczak about author meetings, writing workshops, panels and talks." }
  },
  es: {
    home: { title: "Katarzyna Klau Michalczak — poeta y escritora", description: "Katarzyna Klau Michalczak (Katarzyna Michalczak): poeta y escritora polaca, autora de ‘Zwiezda’ y ‘Synu, jesteś kotem’. Encuentros, talleres y mesas redondas." },
    about: { title: "Sobre mí — Katarzyna Michalczak", description: "Poeta, escritora, doctora en sociología. Ocho libros, finalista del Premio Literario Gdynia y del Premio de Poesía KOS." },
    books: { title: "Libros — Katarzyna Klau Michalczak", description: "Poemarios de Katarzyna Michalczak: ‘Pamięć przyjęć’, ‘Tysiąc saun’, ‘śń’." },
    poetry: { title: "Poesía — Katarzyna Michalczak", description: "Poemarios de Katarzyna Michalczak: ‘Pamięć przyjęć’, ‘Tysiąc saun’, ‘śń’." },
    prose: { title: "Prosa — Katarzyna Michalczak", description: "La novela ‘Zwiezda’ y los relatos de Katarzyna Michalczak: ‘Klub snów’, ‘Mam na imię nie mam’." },
    autofiction: { title: "Auto-non-fiction — Katarzyna Michalczak", description: "‘Synu, jesteś kotem’ y ‘Gdzie zgłosić dzikie zwierzę’: libros sobre maternidad y TDAH." },
    articles: { title: "Artículos — Katarzyna Michalczak", description: "Periodismo de Katarzyna Michalczak en ‘Przekrój’, Gazeta.pl y ‘Kosmos dla Dziewczynek’." },
    children: { title: "Para niñas — Katarzyna Michalczak", description: "Textos para niñas: la serie ‘Nazwij TO’ y las guías de la Fundación Kosmos dla Dziewczynek." },
    workshops: { title: "Talleres — Katarzyna Michalczak", description: "Talleres de escritura y trabajo individual sobre textos con Katarzyna Michalczak." },
    media: { title: "Medios — Katarzyna Michalczak", description: "Reseñas, entrevistas y programas sobre los libros de Katarzyna Michalczak. Materiales para prensa." },
    contact: { title: "Colaboraciones — Katarzyna Michalczak", description: "Invita a Katarzyna Michalczak a un encuentro literario, un taller de escritura o una mesa redonda." }
  }
};

const esc = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const toId = (value) => String(value)
  .replace(/[łŁ]/g, "l")
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
    <img src="${portrait.src}" alt="${esc(portrait.alt[locale] || portrait.alt.en)}" width="${portrait.width}" height="${portrait.height}" ${priority} decoding="async">
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
  const spanishRoute = routeFor(key, "es");
  const canonical = siteUrl ? absoluteUrl(siteUrl, currentRoute.path) : "";
  const socialImage = siteUrl ? `${siteUrl}/images/portrait-katarzyna-new.jpg` : "";
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
  <link rel="alternate" hreflang="es" href="${absoluteUrl(siteUrl, spanishRoute.path)}">
  <link rel="alternate" hreflang="x-default" href="${absoluteUrl(siteUrl, polishRoute.path)}">
  <meta property="og:locale" content="${copy[locale].locale}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Katarzyna Klau Michalczak">
  <meta property="og:title" content="${esc(meta.title)}">
  <meta property="og:description" content="${esc(meta.description)}">
  ${canonical ? `<meta property="og:url" content="${canonical}">` : ""}
  ${socialImage ? `<meta property="og:image" content="${socialImage}"><meta property="og:image:alt" content="${esc(portraits[0].alt[locale] || portraits[0].alt.en)}">` : ""}
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
    <span aria-hidden="true">/</span>
    <a href="${routeFor(key, "es").path}" lang="es"${locale === "es" ? ` aria-current="page"` : ""}>ES</a>
  </div>`;
}

function header(key, locale) {
  const strings = copy[locale];
  const activePath = routeFor(key, locale).path;
  const nav = routeDefinitions.filter((route) => !route.hidden && route.key !== "workshops").map((route) => route.key === "books"
    ? `<details class="book-nav"${["books", "poetry", "prose", "autofiction"].includes(key) ? " open" : ""}><summary>${route[locale].label}</summary><div class="book-subnav"><a href="${route[locale].path}">${strings.allBooksLabel}</a>${strings.bookCategories.map((category) => `<a href="${routeFor(category.route, locale).path}">${category.label}</a>`).join("")}</div></details>`
    : `<a class="${route.key === "contact" ? "nav-cta" : ""}" href="${route[locale].path}"${route[locale].path === activePath ? ` aria-current="page"` : ""}>${route[locale].label}</a>`).join("");
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
    <p class="footer-role">${strings.role}</p>
    <nav aria-label="${strings.footerNav}">${routeDefinitions.filter((route) => !route.hidden && route.key !== "workshops").map((route) => `<a href="${route[locale].path}">${route[locale].label}</a>`).join("")}</nav>
    <div class="footer-contacts"><a class="footer-email" data-contact-email="6b617369612e6d696368616c637a616b40676d61696c2e636f6d" href="${routeFor("contact", locale).path}">${locale === "pl" ? "Napisz" : locale === "en" ? "Email" : "Correo"}</a><a href="https://www.instagram.com/katarzyna.klau.michalczak/" rel="me">${strings.instagram}</a></div>
    <p class="footer-photography">${strings.photography}</p>
    <p class="footer-meta">© ${new Date().getFullYear()} Katarzyna Klau Michalczak</p>
  </footer>
  <script src="/main.js" defer></script>
</body>
</html>`;
}

function layout(key, locale, content, schema, siteUrl) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Katarzyna Klau Michalczak",
    alternateName: "Katarzyna Michalczak",
    sameAs: authorProfiles,
    url: siteUrl || undefined
  };
  return `${head(key, locale, siteUrl)}
<script type="application/ld+json">${JSON.stringify(person).replaceAll("<", "\\u003c")}</script>
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
      ${routeDefinitions.filter((route) => !route.hidden && route.key !== "home" && route.key !== "workshops").map((route, index) => `<a class="route-card reveal" href="${route[locale].path}"><span>0${index + 1}</span><strong>${route[locale].label}</strong>${arrow}</a>`).join("")}
    </div>
  </section>`;
}

function homePage(locale, siteUrl) {
  const strings = copy[locale];
  const featured = [...books].filter((book) => !book.upcoming).reverse();
  const homeQuotes = [
    { quote: strings.bookQuote, attribution: "Marcin Zegadło · Księgozbiry", lang: locale },
    { quote: "Mówi się, że macierzyństwo przemienia. Michalczak pokazuje, że nie gasi ciemnego światła niepokoju i jasnego – tęsknoty. Można urodzić dziecko – i „porodzić gwiazdę tańczącą”. Choć niepewne nad nami niebo.", attribution: "Eliza Kącka", lang: "pl" },
    { quote: "To najbardziej wiarygodne studium relacji międzyludzkich, jakie spotkałam w literaturze.", attribution: "Dorota Kotas", lang: "pl" }
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Katarzyna Klau Michalczak",
    birthPlace: { "@type": "Place", name: "Miechów" },
    jobTitle: locale === "pl" ? ["poetka", "pisarka"] : locale === "es" ? ["poeta", "escritora"] : ["poet", "writer"],
    memberOf: { "@type": "Organization", name: "Unia Literacka" },
    alumniOf: { "@type": "Organization", name: "ISNS UW" },
    award: awards.map((award) => `${award.year}: ${award.text[locale]}`),
    image: siteUrl ? `${siteUrl}/images/portrait-katarzyna-new.jpg` : undefined,
    sameAs: authorProfiles
  };
  const content = `<section class="hero content-shell">
      <div class="hero-copy reveal">
        <p class="eyebrow">${strings.role}</p>
        <h1><span>Katarzyna</span><span class="hero-klau">Klau</span><span>Michalczak</span></h1>
        <p class="hero-tagline">${strings.tagline}</p><p class="hero-punchline">${strings.punchline}</p>
        <div class="hero-actions"><a class="hero-button hero-button-primary" href="${routeFor("books", locale).path}">${strings.homeCtaBooks} ${arrow}</a><a class="hero-button" href="${routeFor("contact", locale).path}">${strings.homeCtaInvite} ${arrow}</a></div>
      </div>
      <div class="hero-visual reveal">
        <span class="hero-disc" aria-hidden="true"></span>
        ${imageFigure(portraits[0], "hero-photo", locale)}
      </div>
      <p class="hero-side" aria-hidden="true">${strings.heroSide}</p>
    </section>
    ${marquee(locale)}
    <section class="selected-books" aria-labelledby="selected-title">
      <div class="content-shell section-heading reveal"><p class="eyebrow">${strings.selectedKicker}</p><h2 id="selected-title">${strings.selectedTitle}</h2><a class="text-link" href="${routeFor("books", locale).path}">${strings.allBooks} ${arrow}</a></div>
      <div class="book-ribbon content-shell" role="region" aria-roledescription="carousel" aria-label="${locale === "pl" ? "Książki, od najnowszej" : locale === "en" ? "Books, newest first" : "Libros, de más reciente a más antiguo"}">
        ${featured.map((book) => `<a class="mini-book reveal" href="${routeFor(book.category, locale).path}#${toId(book.title)}"><div class="mini-book-art"><img src="${book.image}" alt="${locale === "pl" ? "Okładka książki" : locale === "en" ? "Book cover" : "Portada del libro"} „${esc(book.title)}”" width="${book.width}" height="${book.height}" loading="lazy" decoding="async"></div><p><strong>${esc(book.title)}</strong><span class="mini-book-genre">${strings.bookCategories.find((category) => category.key === book.category).label}</span>${book.year ? `<span class="mini-book-year">${book.year}</span>` : ""}</p></a>`).join("")}
      </div>
    </section>
    <section class="home-quotes content-shell" aria-label="${locale === "pl" ? "Cytaty o książkach" : locale === "en" ? "Quotes about the books" : "Citas sobre los libros"}">
      <div class="quote-track" data-quote-track>${homeQuotes.map((item, index) => `<figure class="quote-card${index === 0 ? " is-active" : ""}" data-quote-card${index === 0 ? "" : " hidden"} lang="${item.lang}"><blockquote>${esc(item.quote)}</blockquote><figcaption>${esc(item.attribution)}</figcaption></figure>`).join("")}</div>
      <div class="quote-controls" hidden><button type="button" data-quote-prev aria-label="${locale === "pl" ? "Poprzedni cytat" : locale === "en" ? "Previous quote" : "Cita anterior"}">←</button><span data-quote-count>01 / 03</span><button type="button" data-quote-next aria-label="${locale === "pl" ? "Następny cytat" : locale === "en" ? "Next quote" : "Cita siguiente"}">→</button></div>
    </section>
    <section class="about content-shell" id="about" aria-labelledby="about-title">
      <div class="about-title reveal"><p class="eyebrow">${strings.aboutKicker}</p><h2 id="about-title">${strings.aboutTitle}</h2></div>
      <div class="about-copy reveal"><p>${esc(strings.homeBio)}</p><a class="text-link" href="${routeFor("about", locale).path}">${strings.heroLink} ${arrow}</a></div>
      ${imageFigure(portraits[2], "about-photo reveal", locale)}
    </section>
    <section class="home-timeline content-shell" aria-labelledby="timeline-title">
      <div class="section-heading reveal"><p class="eyebrow">${strings.timelineNote}</p><h2 id="timeline-title">${strings.timelineTitle}</h2></div>
      <ol>${[
        ...awards.filter((award) => award.year !== "2020" && award.year !== "2021").map((award) => ({ year: award.year, text: award.text[locale] })),
        { year: "2017", text: locale === "pl" ? "Rezydencja Can Serrat, gdzie powstaje większość „Klubu snów”" : locale === "en" ? "Can Serrat residency, where most of “Klub snów” was written" : "Residencia Can Serrat, donde escribió la mayor parte de “Klub snów”" },
        { year: "2019", text: "„Klub snów” · " + (locale === "pl" ? "opowiadania" : locale === "en" ? "short stories" : "relatos") },
        { year: "2020", text: locale === "pl" ? "„Tysiąc saun” · nominacja „Klubu snów” do Nagrody Literackiej Gdynia" : locale === "en" ? "“Tysiąc saun”; “Klub snów” shortlisted for the Gdynia Literary Prize" : "“Tysiąc saun”; “Klub snów”, finalista del Premio Literario Gdynia" },
        { year: "2021", text: locale === "pl" ? "„Mam na imię nie mam” · nominacja „Tysiąca saun” do Nagrody KOS" : locale === "en" ? "“Mam na imię nie mam”; “Tysiąc saun” shortlisted for the KOS Poetry Prize" : "“Mam na imię nie mam”; “Tysiąc saun”, finalista del Premio de Poesía KOS" },
        { year: "2022", text: locale === "pl" ? "Rezydencja Wyszehradzka w Pradze · pierwsza wersja „Zwiezdy”" : locale === "en" ? "Visegrad Literary Residency in Prague · first version of “Zwiezda”" : "Residencia Literaria de Visegrado en Praga · primera versión de “Zwiezda”" },
        { year: "2023", text: "„Synu, jesteś kotem” · „śń”" },
        { year: "2024", text: "„Gdzie zgłosić dzikie zwierzę”" },
        { year: "2025", text: locale === "pl" ? "„Zwiezda” · powieść" : locale === "en" ? "“Zwiezda” · a novel" : "“Zwiezda” · novela" },
        { year: "2027", text: locale === "pl" ? "„Ćwierćświatek” · powieść mozaikowa" : locale === "en" ? "“Ćwierćświatek” · a mosaic novel" : "“Ćwierćświatek” · novela mosaico" }
      ].sort((first, second) => first.year.localeCompare(second.year)).map((event) => `<li class="timeline-item reveal"><time datetime="${event.year}">${event.year}</time><p>${esc(event.text)}</p></li>`).join("")}</ol>
    </section>
    <section class="home-upcoming content-shell reveal"><p class="eyebrow">${strings.upcoming}</p><h2>${books.find((book) => book.upcoming).title}</h2><p>${books.find((book) => book.upcoming).year} · ${esc(books.find((book) => book.upcoming).details[locale])}</p><p>${esc(bookCopy["Ćwierćświatek"].description[locale])}</p></section>
    <section class="invitation-teaser content-shell reveal"><div><p class="eyebrow">${strings.invitationTitle}</p><h2>${strings.invitationText}</h2></div><a class="hero-button hero-button-primary" href="${routeFor("contact", locale).path}">${strings.homeCtaInvite} ${arrow}</a></section>
    <section class="home-instagram content-shell"><p class="eyebrow">Instagram</p><p>${locale === "pl" ? "Trochę mojego życia, rysunki i literackie fascynacje znajdziesz na Instagramie:" : locale === "en" ? "A little of my life, my drawings and my literary obsessions live on Instagram:" : "Un poco de mi vida, mis dibujos y mis fascinaciones literarias están en Instagram:"}</p><a class="text-link" href="https://www.instagram.com/katarzyna.klau.michalczak/" rel="me">@katarzyna.klau.michalczak ${arrow}</a></section>
    ${routeCards(locale)}`;
  return layout("home", locale, content, schema, siteUrl);
}

function aboutPage(locale, siteUrl) {
  const strings = copy[locale];
  const schema = { "@context": "https://schema.org", "@type": "Person", name: "Katarzyna Klau Michalczak", alternateName: "Katarzyna Michalczak", sameAs: authorProfiles, description: biography[locale].join(" ") };
  const bio = `<section class="about-full content-shell"><div>${biography[locale].map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}</div>${imageFigure(portraits[4], "about-full-photo reveal", locale)}</section>`;
  const list = `<section class="about-awards content-shell"><p class="eyebrow">${strings.awardsKicker}</p><ol>${awards.map((award) => `<li class="timeline-item"><time datetime="${award.year}">${award.year}</time><p>${esc(award.text[locale])}</p></li>`).join("")}</ol></section>`;
  return layout("about", locale, `${pageIntro(strings.aboutKicker, strings.aboutTitle)}${bio}${list}`, schema, siteUrl);
}

function booksPage(locale, siteUrl, categoryFilter = null) {
  const strings = copy[locale];
  const publishedBooks = books.filter((book) => !book.upcoming && (!categoryFilter || book.category === categoryFilter));
  const upcomingBook = books.find((book) => book.upcoming);
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: books.filter((book) => !categoryFilter || book.category === categoryFilter).map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@type": "Book", name: book.title, ...(book.year ? { datePublished: book.year } : {}), author: { "@type": "Person", name: "Katarzyna Klau Michalczak" } }
    }))
  };
    const bookCategorySections = strings.bookCategories.filter((category) => !categoryFilter || category.key === categoryFilter).map((category) => {
    const categoryBooks = publishedBooks.filter((book) => book.category === category.key);
    const intro = category.key === "poetry" ? locale === "pl" ? "Debiutowałam tomem wierszy i do wierszy wciąż wracam. Poezja to podstawa, na której zbudowany jest mój świat." : locale === "en" ? "I made my debut with a book of poems and I keep coming back to poems. Poetry is the ground my whole world is built on." : "Debuté con un libro de poemas y a los poemas vuelvo siempre. La poesía es la base sobre la que está construido mi mundo." : category.key === "prose" ? locale === "pl" ? "W prozie przyglądam się życiom kobiet i dziewczynek, które później również stają się kobietami, relacjom między ludźmi i szczelinom, gdzie normy się kruszą." : locale === "en" ? "In prose I look closely at the lives of women and of girls who later become women too, at relationships between people, and at the cracks where norms give way." : "En la prosa observo las vidas de mujeres y de niñas que también llegan a ser mujeres, las relaciones entre personas y las grietas por donde las normas se resquebrajan." : locale === "pl" ? "Auto-non-fiction to dla mnie literatura, nie poradnik. Piszę o własnym życiu, ale widzę w nim przede wszystkim materiał na tekst. Literatura ocala w dosłownym sensie: pozwala wyjść ze swojego życia, rzucić jego obraz na ścianę i się w nim przejrzeć." : locale === "en" ? "Auto-non-fiction is literature to me, not self-help. I write about my own life, but what I mainly see in it is material for a text. Literature saves in the literal sense: it lets you step outside your life, throw its image on the wall and look at yourself in it." : "El auto-non-fiction es para mí literatura, no un manual de autoayuda. Escribo sobre mi propia vida, pero veo en ella sobre todo material para un texto. La literatura salva en sentido literal: permite salir de la propia vida, proyectar su imagen en la pared y mirarse en ella.";
    return `<section class="book-category" id="${category.id}" aria-labelledby="category-${category.id}"><h2 id="category-${category.id}">${category.label}</h2><p class="category-intro">${esc(intro)}</p>${categoryBooks.map((book, index) => `<article class="book-card book-theme-${(index % 5) + 1} reveal" id="${toId(book.title)}">
      <div class="book-number">${String(index + 1).padStart(2, "0")}</div>
      <div class="book-cover"><img src="${book.image}" alt="${locale === "pl" ? "Okładka książki" : locale === "en" ? "Book cover" : "Portada del libro"} „${esc(book.title)}”" width="${book.width}" height="${book.height}" ${index < 2 ? `fetchpriority="high"` : `loading="lazy"`} decoding="async"></div>
      <div class="book-info">${book.year ? `<p class="eyebrow">${book.year}</p>` : ""}<h3>${esc(book.title)}</h3><p>${esc(book.details[locale] || book.details.en)}</p>${bookCopy[book.title]?.description?.[locale] ? `<p>${esc(bookCopy[book.title].description[locale])}</p>` : ""}${book.title === "Klub snów" ? `<p class="book-award">${locale === "pl" ? "Nominacja do Nagrody Literackiej Gdynia 2020" : locale === "en" ? "Shortlisted for the Gdynia Literary Prize, 2020" : "Finalista del Premio Literario Gdynia, 2020"}</p>` : ""}${book.title === "Tysiąc saun" ? `<p class="book-award">${locale === "pl" ? "Nominacja do Nagrody Poetyckiej im. Kazimierza Hoffmana „KOS” 2021" : locale === "en" ? "Shortlisted for the Kazimierz Hoffman KOS Poetry Prize, 2021" : "Finalista del Premio de Poesía Kazimierz Hoffman “KOS”, 2021"}</p>` : ""}${bookCopy[book.title]?.quotes?.map((quote) => `<blockquote class="book-quote"${quote.author === "Joanna Mueller" ? ` lang="pl"` : ""}>${esc(quote.text[locale])}${quote.author ? `<cite>— ${esc(quote.author)}${quote.source ? ` · ${esc(quote.source)}` : ""}</cite>` : ""}</blockquote>`).join("") || ""}${bookCopy[book.title]?.publisher ? `<a class="book-media-link" href="${bookCopy[book.title].publisher}" target="_blank" rel="noopener noreferrer">${strings.publisherLink} ${arrow}</a>` : ""}${book.mediaId ? `<a class="book-media-link" href="${routeFor("media", locale).path}#${book.mediaId}">${strings.mediaForBook} ${arrow}</a>` : ""}</div>
    </article>`).join("")}</section>`;
  }).join("");
  const upcoming = `<section class="upcoming-book content-shell reveal" aria-labelledby="upcoming-title">
    <div><p class="eyebrow">${strings.upcoming}</p><p>${strings.upcomingNote}</p></div>
    <time datetime="${upcomingBook.year}">${upcomingBook.year}</time>
    <div><h2 id="upcoming-title">${upcomingBook.title}</h2><p>${upcomingBook.details[locale]}</p><p>${esc(bookCopy[upcomingBook.title].description[locale])}</p></div>
  </section>`;
  const categoryHeading = categoryFilter ? strings.bookCategories.find((category) => category.key === categoryFilter).label : strings.booksTitle;
  return layout(categoryFilter || "books", locale, `${pageIntro(strings.bibliography, categoryHeading, categoryFilter ? "" : strings.booksNote)}${marquee(locale)}<section class="book-list content-shell">${bookCategorySections}</section>${categoryFilter ? "" : upcoming}`, schema, siteUrl);
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
    <span class="article-title">${esc(article.title[locale] || article.title.pl)}${locale === "en" ? `<small class="original-title">${strings.originalTitle}: ${esc(article.title.pl)}</small>` : ""}</span>
    <span class="article-publication">${esc(article.publication)}</span>
    <span class="article-arrow">${arrow}<span class="sr-only">${strings.openNew}</span></span>
  </a>`).join("");
  return layout("articles", locale, `${pageIntro(strings.texts, strings.articlesTitle, strings.journalismIntro)}<section class="article-list content-shell">${list}</section>`, schema, siteUrl);
}

function childrenPage(locale, siteUrl) {
  const strings = copy[locale];
  const content = `${pageIntro(strings.childrenKicker, strings.childrenTitle, "Kosmos dla Dziewczynek")}
    <section class="children-lead content-shell">
      <div class="children-orbit reveal" aria-hidden="true"><span>6–14</span><i></i></div>
      <div class="children-copy"><article class="children-card reveal"><p>${esc(strings.childIntro)}</p></article><article class="children-card reveal"><h2>${locale === "pl" ? "Cykl „Nazwij TO”" : locale === "en" ? "The “Nazwij TO” series" : "La serie “Nazwij TO”"}</h2><p>${esc(strings.childSeries)}</p></article></div>
    </section>
    <section class="guides content-shell reveal" aria-label="${strings.guides}">
      <p class="eyebrow">${strings.guides} · ${strings.mainAuthor}</p>
      ${guides.map((guide) => `<div><p>${guide.year}</p><h2 lang="pl">${guide.title}</h2><a href="${guide.url}" target="_blank" rel="noopener noreferrer">${locale === "pl" ? "Zobacz w sklepie Fundacji Kosmos dla Dziewczynek" : locale === "en" ? "View at the Kosmos dla Dziewczynek Foundation shop" : "Ver en la tienda de la Fundación Kosmos dla Dziewczynek"} ${arrow}</a></div>`).join("")}
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
  const unassigned = mediaGroups.find((group) => group.title === "Dobry Tytuł");
  const otherTitle = locale === "pl" ? "Wystąpienia" : locale === "en" ? "Appearances" : "Participaciones";
  const otherAppearances = unassigned ? `<section class="media-group content-shell" id="wystapienia" aria-labelledby="media-${locale}-appearances"><div class="media-group-title reveal"><p class="eyebrow">${String(mediaGroups.filter((group) => group.title !== "Dobry Tytuł").length + 1).padStart(2, "0")}</p><h2 id="media-${locale}-appearances">${otherTitle}</h2></div><div class="media-items">${unassigned.items.map((item) => `<a class="media-item reveal" href="${item.url}" target="_blank" rel="noopener noreferrer"><span class="media-kind">${esc(item.kind[locale] || item.kind.pl)}</span><div><p class="media-source">${esc(item.source)}</p><h3${locale === "es" ? ` lang="pl"` : ""}>${esc(locale === "es" ? item.title.pl : item.title[locale] || item.title.pl)}</h3>${locale === "en" ? `<small class="original-title">${strings.originalTitle}: ${esc(item.title.pl)}</small>` : ""}</div>${arrow}<span class="sr-only">${strings.openNew}</span></a>`).join("")}</div></section>` : "";
  const groups = mediaGroups.filter((group) => group.title !== "Dobry Tytuł").map((group, groupIndex) => {
    const groupId = toId(group.title);
    const reviews = (bookCopy[group.title]?.quotes || []).map((quote) => `<blockquote class="media-quote"${quote.author === "Joanna Mueller" || locale !== "pl" ? ` lang="pl"` : ""}>${esc(quote.text[locale])}<cite>— ${esc(quote.author)}${quote.source ? ` · ${esc(quote.source)}` : ""}</cite></blockquote>`).join("");
    return `<section class="media-group content-shell" id="${groupId}" aria-labelledby="media-${locale}-${groupIndex}">
      <div class="media-group-title reveal"><p class="eyebrow">${String(groupIndex + 1).padStart(2, "0")}</p><h2 id="media-${locale}-${groupIndex}">${esc(group.title)}</h2></div>
      <div class="media-items">${reviews}${group.items.map((item) => {
        const description = item.description ? `<p>${esc(item.description[locale] || item.description.en || item.description.pl)}</p>` : "";
        const original = locale === "en" ? `<small class="original-title">${strings.originalTitle}: ${esc(item.title.pl)}</small>` : "";
        const itemTitle = locale === "es" ? item.title.pl : item.title[locale] || item.title.pl;
        const itemKind = locale === "es" ? ({ wywiad: "entrevista", recenzja: "reseña", wideo: "vídeo", podcast: "podcast", radio: "radio", program: "programa" }[item.kind.pl] || item.kind.pl) : item.kind[locale] || item.kind.pl;
        const body = `<span class="media-kind">${esc(itemKind)}</span><div><p class="media-source">${esc(item.source)}</p><h3${locale === "es" ? ` lang="pl"` : ""}>${esc(itemTitle)}</h3>${original}${description}</div>${arrow}`;
        return `<a class="media-item reveal" href="${item.url}" target="_blank" rel="noopener noreferrer">${body}<span class="sr-only">${strings.openNew}</span></a>`;
      }).join("")}</div>
    </section>`;
  }).join("");
  const pressTitle = locale === "pl" ? "Dla prasy" : locale === "en" ? "For the press" : "Para prensa";
  const shortBio = locale === "pl"
    ? "Katarzyna Klau Michalczak (ur. 1981) jest poetką i pisarką, doktorką socjologii. Wydała osiem książek: tomy wierszy, zbiory opowiadań, powieść „Zwiezda” (2025) i auto-non-fiction, w tym „Synu, jesteś kotem”. Była nominowana do Nagrody Literackiej Gdynia i Nagrody Poetyckiej KOS. Jest członkinią Unii Literackiej."
    : locale === "en"
      ? "Katarzyna Klau Michalczak (born 1981) is a Polish poet and writer with a PhD in sociology. She has published eight books: poetry collections, volumes of short stories, the novel “Zwiezda” (2025) and auto-non-fiction, including “Synu, jesteś kotem”. She has been shortlisted for the Gdynia Literary Prize and the KOS Poetry Prize, and is a member of Unia Literacka, the Polish writers’ union."
      : "Katarzyna Klau Michalczak (n. 1981) es una poeta y escritora polaca, doctora en sociología. Ha publicado ocho libros: poemarios, libros de relatos, la novela “Zwiezda” (2025) y auto-non-fiction, entre ellos “Synu, jesteś kotem”. Ha sido finalista del Premio Literario Gdynia y del Premio de Poesía KOS. Es miembro de Unia Literacka, la unión de escritoras y escritores de Polonia.";
  const photoLabel = locale === "pl" ? "Zdjęcie do pobrania" : locale === "en" ? "Download portrait" : "Descargar retrato";
  const photoCredits = locale === "pl" ? ["Zdjęcie: Justyna Lazizi", "Zdjęcie: archiwum prywatne"] : locale === "en" ? ["Photo: Justyna Lazizi", "Photo: private archive"] : ["Foto: Justyna Lazizi", "Foto: archivo privado"];
  const pressPhotos = [portraits[2], portraits[4]].map((portrait, index) => `<figure class="press-photo"><a href="${portrait.src}" download="${index === 0 ? "katarzyna-michalczak-justyna-lazizi.jpg" : "katarzyna-michalczak-private-archive.jpg"}"><img src="${portrait.src}" alt="${esc(portrait.alt[locale] || portrait.alt.en)}" width="${portrait.width}" height="${portrait.height}" loading="lazy" decoding="async"><span>${photoLabel} ${arrow}</span></a><figcaption>${photoCredits[index]}</figcaption></figure>`).join("");
  const pressContact = locale === "pl" ? "Kontakt dla mediów" : locale === "en" ? "Press contact" : "Contacto de prensa";
  const encodedEmail = "6b617369612e6d696368616c637a616b40676d61696c2e636f6d";
  const press = `<section class="press-kit content-shell"><p class="eyebrow">${pressTitle}</p><h2>${pressTitle}</h2><p>${esc(shortBio)}</p><a class="text-link" href="${routeFor("about", locale).path}">${locale === "pl" ? "Pełne bio: O mnie" : locale === "en" ? "Full bio: About me" : "Biografía completa: Sobre mí"} ${arrow}</a><div class="press-photos" aria-label="${photoLabel}">${pressPhotos}</div><p class="press-contact"><span>${pressContact}:</span> <a data-contact-email="${encodedEmail}" href="${routeFor("contact", locale).path}">${locale === "pl" ? "Napisz" : locale === "en" ? "Email" : "Correo"}</a></p></section>`;
  const mediaIntro = locale === "pl" ? "Rozmowy, recenzje i audycje o moich książkach. Dziennikarką lub organizatorką? Na dole strony znajdziesz bio." : locale === "en" ? "Interviews, reviews and broadcasts about my books. If you are a journalist or an organiser, you will find a bio at the bottom of this page." : "Entrevistas, reseñas y programas sobre mis libros. Si eres periodista u organizas eventos, al final de la página encontrarás una biografía.";
  return layout("media", locale, `${pageIntro(strings.mediaKicker, strings.mediaTitle, mediaIntro)}${groups}${otherAppearances}${press}`, null, siteUrl);
}

function contactPage(locale, siteUrl) {
  const strings = copy[locale];
  const schema = { "@context": "https://schema.org", "@type": "ContactPage", name: pageData[locale].contact.title, about: { "@type": "Person", name: "Katarzyna Klau Michalczak", alternateName: "Katarzyna Michalczak", sameAs: authorProfiles } };
  const sectionTitles = locale === "pl" ? ["Spotkania autorskie", "Warsztaty pisania", "Prelekcje i panele", "Gdzie byłam", "Praktycznie"] : locale === "en" ? ["Author meetings", "Writing workshops", "Talks and panels", "Where I have been", "Practical"] : ["Encuentros con lectoras y lectores", "Talleres de escritura", "Charlas y mesas redondas", "Dónde he estado", "Información práctica"];
  const places = locale === "pl" ? ["Rezydencje: Can Serrat (2017), Wyszehradzkie Rezydencje Literackie, Praga (2022)", "Warsztaty: Fundacja Ad Hoc, OK Brwinów, Grupa Światy", "Obozy feministyczne z Ulicą Siostrzaną", "Festiwal Literacki Sopot 2024: spotkanie wraz z Elizą Kącką wokół książek o relacji z dzieckiem, którego sposób widzenia świata wymyka się oczekiwaniom", "Spotkania wokół moich książek w latach 2023–2026: Wschowa, Gniezno, Milanówek, Galeria Zachęta w Warszawie"] : locale === "en" ? ["Residencies: Can Serrat (2017), Visegrad Literary Residency, Prague (2022)", "Workshops: Fundacja Ad Hoc, OK Brwinów, Grupa Światy", "Feminist camps with Ulica Siostrzana", "Sopot Literary Festival 2024: an event with Eliza Kącka on books about a relationship with a child whose way of seeing the world escapes expectations", "Events around my books, 2023 to 2026: Wschowa, Gniezno, Milanówek, Zachęta Gallery in Warsaw"] : ["Residencias: Can Serrat (2017), Residencia Literaria de Visegrado, Praga (2022)", "Talleres: Fundacja Ad Hoc, OK Brwinów, Grupa Światy", "Campamentos feministas con Ulica Siostrzana", "Festival Literario de Sopot 2024: encuentro junto a Eliza Kącka en torno a libros sobre la relación con un hijo cuya manera de ver el mundo escapa a las expectativas", "Encuentros en torno a mis libros entre 2023 y 2026: Wschowa, Gniezno, Milanówek, Galería Zachęta de Varsovia"];
  const content = `${pageIntro(strings.contactInvite, strings.contactTitle, strings.inviteIntro)}
    <section class="work-with-me content-shell">
      <article><p class="eyebrow">${sectionTitles[0]}</p><p>${esc(strings.eventMeetings)}</p></article>
      <article><p class="eyebrow">${sectionTitles[1]}</p><p>${esc(workshops[locale]?.intro || workshops.en.intro)}</p><ul>${(workshops[locale]?.services || workshops.en.services).map((service) => `<li>${esc(service)}</li>`).join("")}</ul></article>
      <article><p class="eyebrow">${sectionTitles[2]}</p><p>${esc(strings.eventTalks)}</p></article>
      <article><p class="eyebrow">${sectionTitles[3]}</p><ul>${places.map((place) => `<li>${esc(place)}</li>`).join("")}</ul></article>
      <article><p class="eyebrow">${sectionTitles[4]}</p><p>${esc(strings.practical)}</p></article>
    </section>
    <section class="contact-layout content-shell">
      <div class="contact-copy"><p>${esc(strings.replyTime)}</p><a class="contact-email" data-contact-email="6b617369612e6d696368616c637a616b40676d61696c2e636f6d" href="${routeFor("contact", locale).path}">${locale === "pl" ? "Adres e-mail" : locale === "en" ? "Email address" : "Correo electrónico"}</a><a class="text-link" href="${routeFor("media", locale).path}">${locale === "pl" ? "Materiały dla prasy" : locale === "en" ? "Press materials" : "Materiales de prensa"} ${arrow}</a></div>
      <form class="contact-form" data-contact-form>
        <label>${strings.name}<input name="name" autocomplete="name" required></label>
        <label>${strings.institution}<input name="institution" autocomplete="organization"></label>
        <label>${strings.eventType}<select name="event" required><option value="" selected disabled>${locale === "pl" ? "Wybierz" : locale === "en" ? "Choose" : "Elige"}</option><option>${sectionTitles[0]}</option><option>${sectionTitles[1]}</option><option>${locale === "pl" ? "Panel" : locale === "en" ? "Panel" : "Mesa redonda"}</option><option>${sectionTitles[2]}</option></select></label>
        <label>${strings.date}<input name="date" type="date"></label>
        <label>${strings.place}<input name="place" autocomplete="address-level2"></label>
        <label>${strings.message}<textarea name="message" rows="5" required></textarea></label>
        <button class="contact-submit" type="submit">${strings.sendRequest} ${arrow}</button>
      </form>
    </section>`;
  return layout("contact", locale, content, schema, siteUrl);
}

const pageRenderers = {
  home: homePage,
  about: aboutPage,
  books: booksPage,
  poetry: (locale, siteUrl) => booksPage(locale, siteUrl, "poetry"),
  prose: (locale, siteUrl) => booksPage(locale, siteUrl, "prose"),
  autofiction: (locale, siteUrl) => booksPage(locale, siteUrl, "autofiction"),
  articles: articlesPage,
  children: childrenPage,
  workshops: workshopsPage,
  media: mediaPage,
  contact: contactPage
};

function outputPath(routePath) {
  return routePath === "/" ? "index.html" : `${routePath.replace(/^\//, "")}index.html`;
}

export const allRoutes = routeDefinitions.flatMap((route) => [route.pl.path, route.en.path, route.es.path]);

export function renderPages(siteUrl = "") {
  const pages = new Map();
  for (const locale of ["pl", "en", "es"]) {
    for (const route of routeDefinitions) {
      pages.set(outputPath(route[locale].path), pageRenderers[route.key](locale, siteUrl));
    }
  }
  return pages;
}

export { pageData, routeDefinitions };
