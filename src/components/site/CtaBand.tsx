import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "Gotowy na nowy dach bez wymiany pokrycia?",
  subtitle = "Bezpłatna wycena i ocena stanu dachu. Zadzwoń lub zostaw kontakt — oddzwaniamy tego samego dnia.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-20">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-ember opacity-25 blur-3xl" />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl text-background sm:text-6xl">{title}</h2>
          <p className="mt-5 text-lg text-background/70">{subtitle}</p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={COMPANY.phoneHref}
              className="rounded-sm bg-ember px-8 py-5 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-ember transition-transform hover:-translate-y-1"
            >
              Zadzwoń: {COMPANY.phone}
            </a>
            <Link
              to="/kontakt"
              className="rounded-sm border border-background/30 px-8 py-5 text-sm font-bold uppercase tracking-[0.18em] text-background transition-colors hover:border-primary hover:text-primary"
            >
              Darmowa wycena
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
