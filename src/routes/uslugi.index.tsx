import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/uslugi/")({
  head: () => ({
    meta: [
      { title: "Usługi — malowanie dachów, antykorozja, PV | Mr-Spray" },
      {
        name: "description",
        content:
          "Malowanie dachów i blachodachówki, antykorozja, prace wysokościowe, fotowoltaika, malowanie przemysłowe oraz mycie elewacji i kostki. Sprawdź pełną ofertę Mr-Spray.",
      },
      { property: "og:title", content: "Usługi Mr-Spray" },
      {
        property: "og:description",
        content: "Pełna oferta renowacji dachów i zabezpieczeń antykorozyjnych.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/uslugi" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/uslugi" }],
  }),
  component: UslugiIndex,
});

function UslugiIndex() {
  return (
    <>
      <PageHero
        eyebrow="Usługi"
        title="PEŁNY ZAKRES PRAC MALARSKICH I WYSOKOŚCIOWYCH"
        lead="Od renowacji dachu jednorodzinnego po zabezpieczenie antykorozyjne hali przemysłowej."
      />

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <Link
                to="/uslugi/$slug"
                params={{ slug: s.slug }}
                className="group flex h-full flex-col justify-between rounded-sm border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-lift"
              >
                <div>
                  <span className="display text-5xl text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-2xl transition-colors group-hover:text-primary">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                </div>
                <span className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Dowiedz się więcej →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
