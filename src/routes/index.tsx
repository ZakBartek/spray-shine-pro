import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { COMPANY, SERVICES, REVIEWS } from "@/lib/site";
import heroImg from "@/assets/hero-roof.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Malowanie dachów — Mr-Spray | Podkarpacie, Małopolska, Śląsk" },
      {
        name: "description",
        content:
          "Profesjonalne malowanie i renowacja dachów metodą natrysku. Czyszczenie, antykorozja, prace wysokościowe. Bezpłatna wycena — tel. +48 787 931 779.",
      },
      { property: "og:title", content: "Mr-Spray — Odmienimy wygląd Twojego dachu" },
      {
        property: "og:description",
        content:
          "Renowacja dachu zamiast kosztownej wymiany pokrycia. Malowanie natryskowe, antykorozja i prace wysokościowe.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const PROCESS = [
  { n: "01", t: "Inspekcja", d: "Bezpłatne oględziny dachu, ocena stanu powłoki, korozji i mocowań. Pomiar powierzchni i wycena." },
  { n: "02", t: "Czyszczenie i przygotowanie", d: "Mycie ciśnieniowe, usunięcie mchu, glonów i luźnej powłoki, odtłuszczenie i naprawa uszkodzeń." },
  { n: "03", t: "Zabezpieczenie antykorozyjne", d: "Gruntowanie podkładem antykorozyjnym i punktowe zabezpieczenie ognisk rdzy." },
  { n: "04", t: "Malowanie natryskowe", d: "Dwie warstwy farby nawierzchniowej nakładane agregatem hydrodynamicznym — równa powłoka bez smug." },
  { n: "05", t: "Efekt końcowy", d: "Odbiór prac z klientem, uporządkowanie terenu i dach wyglądający jak nowy na kolejne lata." },
];

const BENEFITS = [
  { t: "Do 70% taniej niż wymiana", d: "Renowacja kosztuje ułamek ceny nowego pokrycia, a efekt wizualny jest porównywalny." },
  { t: "2–4 dni zamiast tygodni", d: "Bez demontażu, kontenerów na gruz i odsłaniania więźby. Dom pozostaje zamieszkały." },
  { t: "Kilkanaście lat ochrony", d: "System podkład + dwie warstwy nawierzchniowe chroni blachę przed korozją i promieniowaniem UV." },
  { t: "Wyższa wartość nieruchomości", d: "Zadbany dach to pierwsze, co widzi kupujący. Metamorfoza odmienia całą bryłę budynku." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
        <img
          src={heroImg}
          alt="Pracownik Mr-Spray malujący natryskowo dach z blachodachówki o zachodzie słońca"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

        <div className="container-x relative pt-32 pb-20">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-primary">
              {"\n"}
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="max-w-4xl text-6xl leading-[0.92] text-background sm:text-8xl lg:text-9xl">
              ODMIENIMY WYGLĄD <span className="text-gradient-ember">TWOJEGO DACHU</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-lg text-background/75 sm:text-xl">
              Profesjonalne malowanie natryskowe, czyszczenie i zabezpieczenie antykorozyjne pokryć
              dachowych. Nowy wygląd i kilkanaście lat ochrony — bez kosztownej wymiany dachu.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/kontakt"
                className="rounded-sm bg-ember px-9 py-5 text-center text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-ember transition-transform hover:-translate-y-1"
              >
                Darmowa wycena
              </Link>
              <Link
                to="/realizacje"
                className="rounded-sm border border-background/35 px-9 py-5 text-center text-sm font-bold uppercase tracking-[0.18em] text-background backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
              >
                Zobacz realizacje
              </Link>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t border-background/15 pt-8 sm:grid-cols-4">
              {[
                ["500+", "dachów"],
                ["15 lat", "trwałości powłoki"],
                ["2–4 dni", "realizacji"],
                ["0 zł", "za wycenę"],
              ].map(([a, b]) => (
                <div key={b}>
                  <p className="display text-4xl text-primary">{a}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-background/55">{b}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO / SEO */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Mr-Spray
            </p>
            <h2 className="text-4xl sm:text-6xl">
              Renowacja dachu, która wygląda jak nowe pokrycie
            </h2>
            <div className="mt-7 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Dach jest największą i najbardziej widoczną powierzchnią każdego budynku, a
                jednocześnie tą najbardziej narażoną na warunki atmosferyczne. Deszcz, śnieg, mróz,
                promieniowanie UV i zanieczyszczenia powietrza z roku na rok niszczą fabryczną
                powłokę blachy. Najpierw kolor blaknie i matowieje, potem pojawiają się mchy, glony i
                naloty, a w kolejnym etapie — pierwsze ogniska korozji przy wkrętach, na krawędziach i
                w miejscach zarysowań. Nieodwracalne uszkodzenie pokrycia to tylko kwestia czasu.
              </p>
              <p>
                Większość właścicieli domów w tym momencie zaczyna szukać ofert na wymianę dachu, nie
                zdając sobie sprawy, że w zdecydowanej większości przypadków blacha jest wciąż
                sprawna technicznie — zużyła się jedynie jej powłoka ochronna. Właśnie tutaj wchodzimy
                my. <strong>Mr-Spray</strong> specjalizuje się w profesjonalnej renowacji pokryć
                dachowych metodą natrysku hydrodynamicznego: myjemy, przygotowujemy podłoże,
                zabezpieczamy antykorozyjnie i malujemy dach farbami dedykowanymi do blachy
                powlekanej i ocynkowanej.
              </p>
              <p>
                Efekt jest natychmiastowy i spektakularny. Dach odzyskuje głęboki, jednolity kolor,
                znikają zacieki i naloty, a nowa powłoka tworzy barierę chroniącą blachę przed
                wilgocią i promieniowaniem UV na kolejnych kilkanaście lat. Wszystko to bez
                demontażu pokrycia, bez kontenerów na gruz, bez odsłaniania więźby dachowej i bez
                wyprowadzania się z domu na czas remontu.
              </p>
              <p>
                Pracujemy na terenie województw <strong>podkarpackiego</strong>,{" "}
                <strong>małopolskiego</strong> i <strong>śląskiego</strong>, obsługując zarówno domy
                jednorodzinne, jak i budynki gospodarcze, hale przemysłowe, magazyny i obiekty
                użyteczności publicznej. Każde zlecenie rozpoczynamy od bezpłatnych oględzin i
                konkretnej, pisemnej wyceny — bez ukrytych kosztów i bez zobowiązań.
              </p>
            </div>
          </Reveal>
          <Reveal delay={130}>
            <div className="card-3d hover:card-3d-hover overflow-hidden rounded-sm shadow-lift">
              <img
                src={g1}
                alt="Metamorfoza dachu przed i po malowaniu natryskowym"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
            <div className="mt-6 border-l-2 border-primary bg-secondary p-7">
              <p className="text-lg font-semibold">
                „Nie wymieniaj dachu, dopóki nie zobaczysz, co potrafi dobrze wykonana renowacja.”
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Bezpłatna ocena stanu pokrycia — {COMPANY.phone}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* USŁUGI */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Nasze usługi
            </p>
            <h2 className="max-w-3xl text-4xl text-background sm:text-6xl">
              Kompleksowa ochrona i renowacja powierzchni
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-background/65">
              Dach to nasza specjalność, ale nasze możliwości sięgają znacznie dalej — od
              zabezpieczeń antykorozyjnych konstrukcji stalowych po mycie elewacji i montaż
              fotowoltaiki.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-background/10 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <Link
                  to="/uslugi/$slug"
                  params={{ slug: s.slug }}
                  className="group flex h-full flex-col justify-between bg-ink p-9 transition-colors duration-500 hover:bg-ink-soft"
                >
                  <div>
                    <span className="display text-5xl text-background/15 transition-colors group-hover:text-primary/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-2xl text-background transition-colors group-hover:text-primary">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-background/60">{s.short}</p>
                  </div>
                  <span className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Czytaj więcej →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MALOWANIE VS WYMIANA */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Malowanie zamiast wymiany
            </p>
            <h2 className="text-4xl sm:text-6xl">
              Dlaczego malowanie dachu jest znacznie tańsze niż nowe pokrycie?
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Wymiana pokrycia dachowego to jedna z najdroższych inwestycji remontowych w domu
                jednorodzinnym. Do ceny samej blachy trzeba doliczyć demontaż starego pokrycia,
                utylizację odpadów, wynajem kontenerów, rusztowania, nowe łaty i membranę, obróbki
                blacharskie oraz robociznę dekarską. W praktyce koszt liczy się w dziesiątkach
                tysięcy złotych, a prace trwają tygodniami i są uzależnione od pogody — a każdy dzień
                z odkrytym dachem to realne ryzyko zalania wnętrza.
              </p>
              <p>
                Renowacja natryskowa działa zupełnie inaczej. Wykorzystujemy to, co już masz:
                sprawną konstrukcyjnie blachę, która potrzebuje jedynie nowej powłoki ochronnej.
                Odpada demontaż, odpady, kontenery i większość robocizny. Zostaje precyzyjna praca
                malarska, którą wykonujemy w kilka dni. Dlatego malowanie dachu kosztuje zwykle
                <strong> od 50 do 70% mniej</strong> niż pełna wymiana pokrycia.
              </p>
              <p>
                Ważne jest jednak uczciwe podejście. Malowanie nie ma sensu wszędzie — jeśli blacha
                jest przerdzewiała na wylot, perforowana lub konstrukcja dachu jest uszkodzona,
                powiemy to wprost i odradzimy renowację. Dlatego każde zlecenie zaczynamy od
                rzetelnej inspekcji. Naszym celem jest zadowolony klient i trwały efekt, a nie
                sprzedaż usługi za wszelką cenę.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.t} delay={i * 90}>
                <div className="card-3d hover:card-3d-hover h-full rounded-sm border border-border bg-card p-8">
                  <h3 className="text-2xl text-primary">{b.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCES */}
      <section className="bg-secondary py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Jak pracujemy
            </p>
            <h2 className="text-4xl sm:text-6xl">Pięć etapów od zaniedbanego dachu do metamorfozy</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Powtarzalny, sprawdzony proces. Każdy etap ma znaczenie — pominięcie któregokolwiek
              skraca żywotność powłoki nawet o kilka lat.
            </p>
          </Reveal>

          <ol className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <li className="h-full border-t-2 border-primary bg-card p-7 shadow-lift">
                  <span className="display text-5xl text-primary">{p.n}</span>
                  <h3 className="mt-2 text-xl">{p.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Realizacje
              </p>
              <h2 className="text-4xl sm:text-6xl">Metamorfozy przed i po</h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Zdjęcia z naszych realizacji — dachy jednorodzinne, hale przemysłowe i prace
                wysokościowe. Galeria jest na bieżąco uzupełniana.
              </p>
            </div>
            <Link
              to="/realizacje"
              className="rounded-sm border border-foreground/20 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:border-primary hover:text-primary"
            >
              Wszystkie realizacje
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { img: g1, t: "Blachodachówka — grafit", d: "Dom jednorodzinny, 180 m²" },
              { img: g2, t: "Hala produkcyjna", d: "Mycie i malowanie 2 400 m²" },
              { img: g3, t: "Prace wysokościowe", d: "Antykorozja konstrukcji" },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 100}>
                <figure className="group relative overflow-hidden rounded-sm bg-ink shadow-lift">
                  <img
                    src={p.img}
                    alt={`${p.t} — ${p.d}`}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-7">
                    <h3 className="text-2xl text-background">{p.t}</h3>
                    <p className="text-sm text-background/70">{p.d}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OPINIE */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">Opinie</p>
            <h2 className="text-4xl text-background sm:text-6xl">Zaufali nam właściciele domów i firm</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <blockquote className="flex h-full flex-col justify-between border-l-2 border-primary bg-ink-soft p-7">
                  <p className="text-background/80">„{r.text}”</p>
                  <footer className="mt-6">
                    <span className="text-primary">{"★".repeat(r.rating)}</span>
                    <p className="mt-1 text-sm font-semibold text-background">{r.name}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OBSZAR DZIAŁANIA */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Obszar działania
            </p>
            <h2 className="text-4xl sm:text-6xl">Podkarpackie, małopolskie i śląskie</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Naszą bazą jest miejscowość Jeżowe w powiecie niżańskim, skąd sprawnie docieramy do
                klientów w całym województwie podkarpackim — m.in. w Rzeszowie, Stalowej Woli, Nisku,
                Leżajsku, Tarnobrzegu, Mielcu, Kolbuszowej, Sanoku, Krośnie i Przemyślu.
              </p>
              <p>
                Regularnie realizujemy również zlecenia w Małopolsce — w okolicach Krakowa, Tarnowa,
                Nowego Sącza i Bochni — oraz na Śląsku, w rejonie Katowic, Gliwic, Rybnika i
                Częstochowy. Przy większych kontraktach przemysłowych pracujemy na terenie całego
                kraju.
              </p>
              <p>
                Dojazd na oględziny w obrębie naszego głównego obszaru działania jest bezpłatny.
                Wystarczy jeden telefon, aby ustalić termin i uzyskać rzetelną ocenę stanu dachu.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-3">
              {COMPANY.regions.map((r) => (
                <div
                  key={r}
                  className="card-3d hover:card-3d-hover rounded-sm border border-border bg-card p-7 text-center"
                >
                  <p className="display text-3xl text-primary">woj.</p>
                  <p className="mt-1 text-lg font-semibold capitalize">{r}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-sm bg-ink p-8">
              <h3 className="text-2xl text-background">Siedziba</h3>
              <p className="mt-3 text-background/70">{COMPANY.address}</p>
              <a
                href={COMPANY.phoneHref}
                className="mt-5 inline-block display text-4xl text-primary hover:underline"
              >
                {COMPANY.phone}
              </a>
              <p className="mt-2 text-sm text-background/50">Pon.–Sob. 7:00–19:00</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Darmowa wycena Twojego dachu"
        subtitle="Zadzwoń lub wypełnij krótki formularz. Przyjedziemy, ocenimy stan pokrycia i podamy konkretną cenę — bez zobowiązań."
      />
    </>
  );
}
