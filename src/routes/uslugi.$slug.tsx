import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/uslugi/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Usługa niedostępna — Mr-Spray" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const title = `${service.title} — Mr-Spray`;
    return {
      meta: [
        { title },
        { name: "description", content: service.short },
        { property: "og:title", content: title },
        { property: "og:description", content: service.short },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/uslugi/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/uslugi/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.short,
            areaServed: ["Podkarpackie", "Małopolskie", "Śląskie"],
            provider: { "@type": "LocalBusiness", name: "Mr-Spray", telephone: "+48787931779" },
          }),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Usługa" title={service.title.toUpperCase()} lead={service.intro} />

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              {service.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-sm border border-border bg-card p-8 shadow-lift">
              <h2 className="text-2xl">Zakres prac</h2>
              <ul className="mt-5 space-y-3">
                {service.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm">
                    <span className="mt-1 h-2 w-2 shrink-0 bg-ember" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/kontakt"
                className="mt-8 block rounded-sm bg-ember px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-ember"
              >
                Darmowa wycena
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl">Zobacz również</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/uslugi/$slug"
                params={{ slug: s.slug }}
                className="group rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
              >
                <h3 className="text-xl transition-colors group-hover:text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
