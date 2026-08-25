import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import a01 from "@/assets/realizacje/dach-01.jpg.asset.json";
import a02 from "@/assets/realizacje/dach-02.jpg.asset.json";
import a03 from "@/assets/realizacje/dach-03.jpg.asset.json";
import a04 from "@/assets/realizacje/dach-04.jpg.asset.json";
import a05 from "@/assets/realizacje/dach-05.jpg.asset.json";
import a06 from "@/assets/realizacje/dach-06.jpg.asset.json";
import a07 from "@/assets/realizacje/dach-07.jpg.asset.json";
import a08 from "@/assets/realizacje/dach-08.jpg.asset.json";
import a09 from "@/assets/realizacje/dach-09.jpg.asset.json";
import a10 from "@/assets/realizacje/dach-10.jpg.asset.json";
import a11 from "@/assets/realizacje/dach-11.jpg.asset.json";
import a12 from "@/assets/realizacje/dach-12.jpg.asset.json";

export const Route = createFileRoute("/realizacje")({
  head: () => ({
    meta: [
      { title: "Realizacje — malowanie dachów przed i po | Mr-Spray" },
      {
        name: "description",
        content:
          "Galeria realizacji Mr-Spray: metamorfozy dachów przed i po malowaniu, renowacje blachodachówki, hale przemysłowe i prace wysokościowe.",
      },
      { property: "og:title", content: "Realizacje Mr-Spray — przed i po" },
      {
        property: "og:description",
        content: "Zobacz metamorfozy dachów wykonane metodą natrysku hydrodynamicznego.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/realizacje" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/realizacje" }],
  }),
  component: RealizacjePage,
});

const PROJECTS = [
  { img: a01.url, title: "Malowanie dachu — dom jednorodzinny", desc: "Renowacja blachodachówki metodą natrysku", tag: "Przed / po" },
  { img: a02.url, title: "Odnowiony dach spadzisty", desc: "Mycie, gruntowanie i dwie warstwy farby", tag: "Realizacja" },
  { img: a03.url, title: "Dach z blachy trapezowej", desc: "Zabezpieczenie antykorozyjne i malowanie", tag: "Antykorozja" },
  { img: a04.url, title: "Renowacja pokrycia dachowego", desc: "Kompleksowe malowanie natryskowe", tag: "Realizacja" },
  { img: a05.url, title: "Dach domu po malowaniu", desc: "Trwały kolor i ochrona przed korozją", tag: "Przed / po" },
  { img: a06.url, title: "Malowanie dachu budynku gospodarczego", desc: "Mycie ciśnieniowe i malowanie", tag: "Realizacja" },
  { img: a07.url, title: "Dach wielospadowy", desc: "Natrysk hydrodynamiczny, równa powłoka", tag: "Realizacja" },
  { img: a08.url, title: "Blachodachówka po renowacji", desc: "Odświeżenie koloru bez wymiany pokrycia", tag: "Przed / po" },
  { img: a09.url, title: "Malowanie dachu — prace na wysokości", desc: "Bezpieczne prace wysokościowe", tag: "Wysokościowe" },
  { img: a10.url, title: "Dach obiektu użytkowego", desc: "Duża powierzchnia, malowanie natryskowe", tag: "Przemysł" },
  { img: a11.url, title: "Odnowiona połać dachowa", desc: "Czyszczenie, grunt antykorozyjny, farba", tag: "Realizacja" },
  { img: a12.url, title: "Efekt końcowy malowania dachu", desc: "Gotowa realizacja Mr-Spray", tag: "Przed / po" },
];

function RealizacjePage() {
  return (
    <>
      <PageHero
        eyebrow="Realizacje"
        title="EFEKTY, KTÓRE WIDAĆ Z ULICY"
        lead="Poniżej wybrane realizacje. Galeria jest sukcesywnie uzupełniana o zdjęcia z bieżących zleceń."
      />

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={`${p.title}-${i}`} delay={(i % 3) * 100}>
              <figure className="group relative overflow-hidden rounded-sm bg-ink shadow-lift">
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.desc}`}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-block rounded-sm bg-ember px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 text-2xl text-background">{p.title}</h3>
                  <p className="text-sm text-background/70">{p.desc}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Chcesz zobaczyć taki efekt u siebie?"
        subtitle="Umów bezpłatne oględziny — pokażemy próbki kolorów i podamy dokładną cenę."
      />
    </>
  );
}
