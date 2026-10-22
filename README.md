# Katarzyna Klau Michalczak

Oficjalna strona autorska Katarzyny Klau Michalczak w językach polskim, angielskim i hiszpańskim. Szybka, statyczna witryna z polską wersją główną, zbudowana bez zależności uruchomieniowych.

## Uruchomienie

Wymagany jest Node.js 20 lub nowszy.

```bash
npm run build
npm run check
npm run check:links
npm run dev
```

Podgląd lokalny działa pod adresem `http://127.0.0.1:4173`. Kontrola linków wymaga połączenia z internetem.

## Publikacja

Vercel buduje wszystkie 30 stron i uruchamia kontrolę przed publikacją. Każda strona korzysta z tego samego nagłówka, stopki i wersjonowanych plików CSS/JS. Stare adresy warsztatów przekierowują na stronę zaproszeń w odpowiednim języku.

Adres SEO pochodzi kolejno z `SITE_URL`, `VERCEL_PROJECT_PRODUCTION_URL` lub obecnego `https://katrzynamichalczak.vercel.app`. Każdy build zawiera canonicale, Open Graph, hreflang PL/EN/ES oraz sitemapę. Po potwierdzeniu docelowej domeny należy podłączyć ją w Vercel, ustawić `SITE_URL` na jej origin, przebudować stronę i skonfigurować przekierowanie starej domeny z zachowaniem ścieżek. Nie ustawiaj niepotwierdzonej domeny.

## Kontakt

Adres e-mail jest widoczny i działa bez JavaScript. Formularz przygotowuje wiadomość do sprawdzenia, skopiowania lub otwarcia w aplikacji pocztowej; nie wysyła jej automatycznie. Gdy przeglądarka odmawia dostępu do schowka, zaznacza tekst do ręcznego kopiowania. Treści formularza nie są zapisywane ani przesyłane na serwer.

## Materiały oczekujące

Zgodnie z wiadomością autorki z 21 października 2026: docelowa domena; daty materiałów TVP, Newsweek, Wysokie Obcasy i ADHDziewczyny; ewentualny link do recenzji Marcina Zegadły poza Facebookiem; rok i tytuł książki związanej z nagrodą Złoty Środek. Przycisk wydawcy przy „Klubie snów” jest ukryty do potwierdzenia działającej strony produktu.

## Treści i zdjęcia

Treści, zdjęcia i okładki pochodzą z materiałów przekazanych przez Katarzynę. Zapowiedziany film nie jest wyświetlany do czasu dostarczenia gotowego materiału. Nie uzupełniaj danych o książkach, mediach ani kontaktach bez potwierdzonego źródła.
