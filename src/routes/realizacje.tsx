import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

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
  { img: g1, title: "Dom jednorodzinny — Jeżowe", desc: "Blachodachówka 180 m², kolor RAL 7016", tag: "Przed / po" },
  { img: g2, title: "Hala produkcyjna — Rzeszów", desc: "Mycie i malowanie 2 400 m² blachy trapezowej", tag: "Przemysł" },
  { img: g3, title: "Silos — Stalowa Wola", desc: "Antykorozja i malowanie metodą dostępu linowego", tag: "Wysokościowe" },
  { img: g1, title: "Dach dwuspadowy — Nisko", desc: "Renowacja pokrycia z blachy powlekanej", tag: "Przed / po" },
  { img: g2, title: "Magazyn — Tarnów", desc: "Malowanie natryskowe konstrukcji i ścian", tag: "Przemysł" },
  { img: g3, title: "Komin przemysłowy — Śląsk", desc: "Zabezpieczenie antykorozyjne na wysokości", tag: "Wysokościowe" },
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
