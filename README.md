# Katarzyna Klau Michalczak

Oficjalna strona autorska Katarzyny Klau Michalczak w językach polskim, angielskim i hiszpańskim. Szybka, statyczna witryna z polską wersją główną, zbudowana bez zależności uruchomieniowych.

## Uruchomienie

Wymagany jest Node.js 20 lub nowszy.

```bash
npm run build
npm run check
npm run check:links
npm run check:live
npm run dev
```

Podgląd lokalny działa pod adresem `http://127.0.0.1:4173`. Kontrole linków wymagają połączenia z internetem. `check:live` sprawdza opublikowane strony, wewnętrzne odnośniki i sekcje, pliki, przekierowania oraz adresy SEO; `QA_BASE` pozwala wskazać inny adres produkcyjny.

### Kontrola w przeglądarce

Przy uruchomionym podglądzie `npm run check:browser` sprawdza wszystkie 30 stron w siedmiu rozmiarach ekranu (320–2560 px, także poziomo), ucięty tekst, zdjęcia, układ bio, menu, cytaty i ograniczenie animacji. `npm run check:safari` sprawdza zdjęcie główne w silniku WebKit i Chrome na ekranie komputera i telefonu, we wszystkich trzech językach. Zapisuje zrzuty w ignorowanym katalogu `worktmp/`. Testy wymagają przeglądarek i pakietu Playwright dostępnego lokalnie; `PLAYWRIGHT_MODULE` może wskazywać katalog istniejącej instalacji. Playwright nie jest zależnością strony ani produkcyjnego buildu. `QA_BASE` pozwala sprawdzić opublikowaną stronę zamiast podglądu, a `QA_CHANNEL` wybrać zainstalowany kanał Chrome.

## Publikacja

Vercel buduje wszystkie 30 stron i uruchamia kontrolę przed publikacją. Każda strona korzysta z tego samego nagłówka, stopki i wersjonowanych plików CSS/JS. Stare adresy warsztatów przekierowują na stronę zaproszeń w odpowiednim języku.

Docelowy adres to `https://www.katarzynaklaumichalczak.pl`. Domena bez `www` oraz dawny adres podglądu Vercel przekierowują na nią w ustawieniach domen projektu, zachowując ścieżkę. Produkcyjny `SITE_URL` ma wartość `https://www.katarzynaklaumichalczak.pl`; to również domyślny adres w kodzie. Każdy build zawiera canonicale, Open Graph i Twitter/X z obrazem 1200×630, hreflang PL/EN/ES oraz sitemapę. Po zmianie zmiennej środowiskowej należy ponownie wdrożyć produkcję.

Źródła grafiki podglądu i ikony są w `assets/social-preview.svg` oraz `public/favicon.svg`. Obrazy PNG w trzech wersjach językowych, Apple touch icon, plik ICO i wersjonowana ikona Safari `favicon-k.svg` zostały wygenerowane z tych źródeł przez `scripts/generate-brand-assets.cjs` z Playwright i Chrome.

## Kontakt

Adres e-mail jest widoczny i działa bez JavaScript. Formularz przygotowuje wiadomość do sprawdzenia, skopiowania lub otwarcia w aplikacji pocztowej; nie wysyła jej automatycznie. Gdy przeglądarka odmawia dostępu do schowka, zaznacza tekst do ręcznego kopiowania. Treści formularza nie są zapisywane ani przesyłane na serwer.

## Materiały oczekujące

Zgodnie z wiadomością autorki z 21 października 2026: daty materiałów TVP, Newsweek, Wysokie Obcasy i ADHDziewczyny; ewentualny link do recenzji Marcina Zegadły poza Facebookiem; rok i tytuł książki związanej z nagrodą Złoty Środek. Przycisk wydawcy przy „Klubie snów” jest ukryty do potwierdzenia działającej strony produktu.

## Treści i zdjęcia

Treści, zdjęcia i okładki pochodzą z materiałów przekazanych przez Katarzynę. Zapowiedziany film nie jest wyświetlany do czasu dostarczenia gotowego materiału. Nie uzupełniaj danych o książkach, mediach ani kontaktach bez potwierdzonego źródła.
