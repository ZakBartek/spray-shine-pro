import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Mr-Spray | Darmowa wycena malowania dachu" },
      {
        name: "description",
        content:
          "Skontaktuj się z Mr-Spray: tel. +48 787 931 779, Groble 115D, 37-430 Jeżowe. Bezpłatna wycena malowania dachu na Podkarpaciu, w Małopolsce i na Śląsku.",
      },
      { property: "og:title", content: "Kontakt — Mr-Spray | Darmowa wycena" },
      {
        property: "og:description",
        content: "Zadzwoń +48 787 931 779 lub wypełnij formularz — bezpłatna wycena malowania dachu.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/kontakt" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="POROZMAWIAJMY O TWOIM DACHU"
        lead="Bezpłatna wycena, bez zobowiązań. Przyjeżdżamy, oceniamy stan pokrycia i podajemy konkretną cenę."
      />

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl">Dane kontaktowe</h2>
            <div className="mt-8 space-y-6">
              <InfoBlock label="Telefon">
                <a
                  href={COMPANY.phoneHref}
                  className="text-3xl font-bold text-primary hover:underline"
                >
                  {COMPANY.phone}
                </a>
              </InfoBlock>
              <InfoBlock label="Adres">
                <p className="text-lg">{COMPANY.address}</p>
              </InfoBlock>
              <InfoBlock label="Godziny pracy">
                <p className="text-lg">Poniedziałek – Sobota, 7:00 – 19:00</p>
              </InfoBlock>
              <InfoBlock label="Obszar działania">
                <p className="text-lg">
                  Podkarpackie, małopolskie, śląskie — oraz cała Polska przy większych zleceniach.
                </p>
              </InfoBlock>
            </div>

            <div className="mt-10 overflow-hidden rounded-sm border border-border">
              <iframe
                title="Mapa — Mr-Spray, Groble 115D, Jeżowe"
                src="https://www.openstreetmap.org/export/embed.html?bbox=22.02%2C50.33%2C22.14%2C50.42&layer=mapnik"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-primary pl-5">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">{label}</p>
      <div className="mt-1">{children}</div>
    </div>
  );
}
