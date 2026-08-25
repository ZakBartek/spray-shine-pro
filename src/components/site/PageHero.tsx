import type { ReactNode } from "react";
import heroImg from "@/assets/hero-roof.jpg";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-ink pb-16 pt-36">
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
      <div className="container-x relative">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-primary">{eyebrow}</p>
        <h1 className="max-w-4xl text-5xl text-background sm:text-7xl">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lg text-background/70">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
