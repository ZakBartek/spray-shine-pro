import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import gallery3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/o-firmie")({
  head: () => ({
    meta: [
      { title: "O firmie Mr-Spray — doświadczenie w renowacji dachów" },
      {
        name: "description",
        content:
          "Mr-Spray to ekipa specjalizująca się w malowaniu natryskowym dachów, antykorozji i pracach wysokościowych. Nowoczesny sprzęt, sprawdzone farby, konkretne terminy.",
      },
      { property: "og:title", content: "O firmie Mr-Spray" },
      {
        property: "og:description",
        content: "Doświadczenie, specjalistyczny sprzęt i technologia natrysku hydrodynamicznego.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/o-firmie" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/o-firmie" }],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    title: "Jakość bez kompromisów",
    text: "Nie skracamy etapów. Mycie, gruntowanie i dwie warstwy nawierzchniowe — zawsze według technologii producenta farby.",
  },
  {
    title: "Nowoczesny sprzęt",
    text: "Agregaty hydrodynamiczne, myjki wysokociśnieniowe, sprzęt dostępu linowego i pełne zabezpieczenie BHP.",
  },
  {
    title: "Terminowość",
    text: "Ustalony termin to zobowiązanie. Typowy dach jednorodzinny zamykamy w 2–4 dni robocze.",
  },
  {
    title: "Porządek po pracy",
    text: "Zabezpieczamy elewację, okna, kostkę i roślinność. Po zakończeniu prac teren zostaje uporządkowany.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="O firmie"
        title="LUDZIE, SPRZĘT I TECHNOLOGIA"
        lead="Mr-Spray to firma z Podkarpacia, która wyspecjalizowała się w jednym: przywracaniu dachom wyglądu i trwałości metodą natrysku."
      />

      <section className="py-20 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl">Specjalizacja zamiast „robimy wszystko”</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Wiele firm budowlanych traktuje malowanie dachu jako usługę dodatkową. My zbudowaliśmy
                wokół niej całą działalność. Dzięki temu znamy zachowanie każdego typu pokrycia — od
                blachy trapezowej i blachodachówki, przez dachówkę cementową, po eternit i pokrycia
                przemysłowe.
              </p>
              <p>
                Pracujemy wyłącznie sprawdzonymi systemami farb, dobieranymi do rodzaju podłoża i
                warunków, w jakich pracuje dach. Nie stosujemy tanich zamienników — powłoka ma
                wytrzymać kilkanaście lat, a nie jeden sezon.
              </p>
              <p>
                Obsługujemy klientów indywidualnych, wspólnoty, gospodarstwa rolne oraz zakłady
                przemysłowe na terenie województw podkarpackiego, małopolskiego i śląskiego. Przy
                większych kontraktach realizujemy prace w całej Polsce.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={gallery3}
              alt="Pracownik Mr-Spray podczas prac wysokościowych na konstrukcji przemysłowej"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full rounded-sm object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <h2 className="max-w-2xl text-4xl text-background sm:text-5xl">
              Cztery zasady, których się trzymamy
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="h-full border-l-2 border-primary bg-ink-soft p-8">
                  <h3 className="text-2xl text-background">{v.title}</h3>
                  <p className="mt-3 text-background/65">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
