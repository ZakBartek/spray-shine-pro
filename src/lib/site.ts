export const COMPANY = {
  name: "Mr-Spray",
  tagline: "Profesjonalne malowanie i renowacja dachów",
  phone: "+48 787 931 779",
  phoneHref: "tel:+48787931779",
  address: "Groble 115D, 37-430 Jeżowe",
  regions: ["podkarpackie", "małopolskie", "śląskie"],
} as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  bullets: string[];
  body: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "malowanie-dachow",
    title: "Malowanie dachów",
    short:
      "Kompleksowa renowacja pokrycia dachowego metodą natrysku — czyszczenie, gruntowanie i malowanie farbami wysokiej jakości.",
    intro:
      "Malowanie dachu to najszybszy i najbardziej opłacalny sposób, aby przywrócić budynkowi nowy wygląd i zatrzymać postępującą korozję pokrycia.",
    bullets: [
      "Mycie ciśnieniowe i usunięcie mchów oraz porostów",
      "Gruntowanie podkładem antykorozyjnym",
      "Dwie warstwy farby nawierzchniowej natryskiem",
      "Zabezpieczenie okien, elewacji i otoczenia",
    ],
    body: [
      "Renowację zaczynamy od bezpłatnej oceny stanu pokrycia. Sprawdzamy stopień korozji, mocowania, obróbki blacharskie oraz stan powłoki fabrycznej. Dopiero na tej podstawie dobieramy technologię i system farb.",
      "Cała powierzchnia jest myta agregatem wysokociśnieniowym, odtłuszczana i — tam, gdzie to konieczne — mechanicznie oczyszczana z ognisk rdzy. Następnie nakładamy podkład antykorozyjny i dwie warstwy farby nawierzchniowej metodą natrysku hydrodynamicznego, co daje idealnie równą, gładką powłokę bez smug i śladów pędzla.",
      "Efekt: dach wygląda jak nowy, jest zabezpieczony przed wilgocią, promieniowaniem UV i korozją, a jego żywotność wydłuża się o kilkanaście lat — przy koszcie stanowiącym ułamek ceny wymiany pokrycia.",
    ],
  },
  {
    slug: "malowanie-blachodachowki",
    title: "Malowanie blachodachówki",
    short:
      "Odświeżenie i zabezpieczenie blachodachówki — powrót głębokiego koloru i pełna ochrona powłoki.",
    intro:
      "Blachodachówka po kilkunastu latach traci kolor, matowieje i zaczyna łuszczyć się w miejscach mocowań. Malowanie natryskowe przywraca jej pierwotny wygląd.",
    bullets: [
      "Dobór koloru z palety RAL",
      "Farby dedykowane do powłok poliestrowych",
      "Naprawa ognisk korozji przy wkrętach",
      "Powłoka odporna na UV i warunki atmosferyczne",
    ],
    body: [
      "Blachodachówka jest wrażliwa na uszkodzenia mechaniczne powłoki fabrycznej. Każde zarysowanie czy nieszczelne mocowanie to miejsce, w którym zaczyna się korozja. Nasz proces obejmuje dokładne domycie, wymianę lub dokręcenie uszkodzonych wkrętów oraz punktowe zabezpieczenie ognisk rdzy.",
      "Stosujemy farby przeznaczone do podłoży poliestrowych i cynkowych, o wysokiej elastyczności i odporności na promieniowanie UV. Dzięki natryskowi farba dociera również w profile i zagięcia, gdzie wałek nie ma dostępu.",
      "Klient wybiera kolor z palety RAL — od klasycznej grafitowej i antracytowej po ceglaną czerwień. Efekt widoczny jest już po pierwszym dniu pracy.",
    ],
  },
  {
    slug: "antykorozja",
    title: "Antykorozja",
    short:
      "Profesjonalne zabezpieczenia antykorozyjne konstrukcji stalowych, hal, zbiorników i elementów przemysłowych.",
    intro:
      "Korozja to najdroższy wróg każdej konstrukcji stalowej. Odpowiednio dobrany system powłok zatrzymuje ją na lata.",
    bullets: [
      "Przygotowanie powierzchni wg wymaganego stopnia czystości",
      "Systemy epoksydowe i poliuretanowe",
      "Pomiar grubości powłoki",
      "Dokumentacja fotograficzna prac",
    ],
    body: [
      "Skuteczna antykorozja to w 80% przygotowanie podłoża. Usuwamy luźne powłoki, produkty korozji i zanieczyszczenia, a następnie nakładamy system powłok dobrany do środowiska pracy konstrukcji — od hal magazynowych po obiekty narażone na wilgoć i chemię.",
      "Realizujemy zabezpieczenia konstrukcji stalowych, zbiorników, silosów, estakad, bram, ogrodzeń i elementów maszyn. Pracujemy zarówno w obiekcie klienta, jak i na wysokości metodą dostępu linowego.",
      "Na życzenie prowadzimy dokumentację fotograficzną i pomiary grubości powłoki, co jest szczególnie istotne przy zleceniach dla firm i instytucji.",
    ],
  },
  {
    slug: "prace-wysokosciowe",
    title: "Prace wysokościowe",
    short:
      "Dostęp linowy i praca na wysokości — tam, gdzie rusztowanie jest niemożliwe lub nieopłacalne.",
    intro:
      "Wykwalifikowana ekipa wysokościowa z pełnym zapleczem sprzętowym i przestrzeganiem procedur BHP.",
    bullets: [
      "Malowanie i mycie obiektów wysokich",
      "Montaż i naprawy na wysokości",
      "Usuwanie śniegu i sopli",
      "Bez kosztów rusztowania",
    ],
    body: [
      "Techniki alpinistyczne pozwalają wykonać prace szybciej i taniej niż przy użyciu rusztowań, bez ingerencji w teren wokół budynku. Obsługujemy kominy, silosy, wieże, hale, bloki mieszkalne i obiekty przemysłowe.",
      "Każde zlecenie poprzedza ocena ryzyka i plan prac. Nasi pracownicy posiadają wymagane uprawnienia, badania wysokościowe oraz certyfikowany sprzęt asekuracyjny.",
      "Wykonujemy również prace towarzyszące: mycie elewacji i przeszkleń, uszczelnianie, drobne naprawy blacharskie oraz montaż elementów zabezpieczających.",
    ],
  },
  {
    slug: "fotowoltaika",
    title: "Fotowoltaika",
    short:
      "Montaż instalacji fotowoltaicznych oraz mycie i serwis paneli PV na dachach o każdym nachyleniu.",
    intro:
      "Łączymy kompetencje dekarskie z montażem PV — instalacja jest szczelna, bezpieczna i wydajna.",
    bullets: [
      "Dobór mocy instalacji do zużycia",
      "Montaż na dachach skośnych i płaskich",
      "Mycie i serwis paneli",
      "Bezpieczne przejścia przez pokrycie",
    ],
    body: [
      "Montujemy instalacje fotowoltaiczne z zachowaniem pełnej szczelności pokrycia — to obszar, w którym najczęściej popełniane są błędy skutkujące późniejszymi przeciekami. Jako firma dachowa wiemy, jak poprowadzić mocowania i przepusty.",
      "Zajmujemy się także myciem paneli, które po kilku sezonach potrafią stracić kilkanaście procent wydajności przez kurz, pyłki i osady. Regularne czyszczenie zwraca się w produkcji energii.",
      "Instalację najlepiej łączyć z renowacją dachu — panele montowane na świeżo zabezpieczonym pokryciu nie wymagają demontażu przez kolejne lata.",
    ],
  },
  {
    slug: "malowanie-przemyslowe",
    title: "Malowanie przemysłowe",
    short:
      "Malowanie hal, konstrukcji, posadzek i obiektów wielkopowierzchniowych metodą natrysku.",
    intro:
      "Duże powierzchnie, krótkie terminy, praca bez zatrzymywania zakładu — to nasza specjalność.",
    bullets: [
      "Hale produkcyjne i magazynowe",
      "Konstrukcje stalowe i zbiorniki",
      "Posadzki przemysłowe",
      "Praca również poza godzinami pracy zakładu",
    ],
    body: [
      "Dysponujemy agregatami hydrodynamicznymi o wysokiej wydajności, dzięki czemu jesteśmy w stanie pomalować tysiące metrów kwadratowych w czasie, w jakim tradycyjna ekipa zrobiłaby ułamek tej powierzchni.",
      "Przed rozpoczęciem prac zabezpieczamy maszyny, instalacje i posadzki. Prace możemy prowadzić etapami lub poza godzinami pracy zakładu, aby nie zakłócać produkcji.",
      "Dobieramy systemy malarskie zgodne z przeznaczeniem obiektu: powłoki chemoodporne, ognioochronne, higieniczne do przemysłu spożywczego oraz standardowe systemy ochronne.",
    ],
  },
  {
    slug: "pozostale-uslugi",
    title: "Pozostałe usługi",
    short:
      "Mycie elewacji, kostki brukowej, impregnacja, czyszczenie rynien i konserwacja obiektów.",
    intro:
      "Kompleksowa opieka nad wyglądem i stanem technicznym nieruchomości — nie tylko dachu.",
    bullets: [
      "Mycie i impregnacja elewacji",
      "Czyszczenie kostki brukowej",
      "Czyszczenie i konserwacja rynien",
      "Usuwanie mchów, glonów i porostów",
    ],
    body: [
      "Elewacja i kostka brukowa starzeją się szybciej niż dach — osadzają się na nich glony, mech i zabrudzenia komunikacyjne. Mycie ciśnieniowe z odpowiednio dobraną chemią przywraca im pierwotny wygląd w jeden dzień.",
      "Po umyciu wykonujemy impregnację, która ogranicza ponowne osadzanie się brudu i chroni powierzchnię przed wilgocią oraz mrozem.",
      "Realizujemy również przeglądy i konserwację: czyszczenie rynien, drobne naprawy obróbek, uszczelnianie i zabezpieczanie elementów narażonych na korozję.",
    ],
  },
];

export const REVIEWS = [
  {
    name: "Paweł K.",
    text: "Dach po malowaniu wygląda jak nowy. Ekipa punktualna, wszystko dokładnie zabezpieczone, po pracy porządek. Cena znacznie niższa niż wymiana pokrycia.",
    rating: 5,
  },
  {
    name: "Anna M.",
    text: "Bardzo profesjonalne podejście od pierwszego telefonu. Wycena za darmo, terminy dotrzymane, efekt rewelacyjny. Polecam każdemu.",
    rating: 5,
  },
  {
    name: "Tomasz W.",
    text: "Malowanie blachodachówki na grafit — różnica ogromna. Widać, że panowie znają się na rzeczy i mają dobry sprzęt.",
    rating: 5,
  },
  {
    name: "Marek S.",
    text: "Zlecaliśmy malowanie hali. Praca sprawnie, bez przestojów w produkcji. Solidna firma, będziemy współpracować dalej.",
    rating: 5,
  },
];
