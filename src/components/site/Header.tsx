import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { COMPANY, SERVICES } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/o-firmie", label: "O firmie" },
  { to: "/uslugi", label: "Usługi" },
  { to: "/realizacje", label: "Realizacje" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-md shadow-lift"
          : "bg-gradient-to-b from-ink/80 to-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-ember text-lg font-bold text-primary-foreground shadow-ember">
            MS
          </span>
          <span className="leading-none">
            <span className="display block text-2xl text-background">MR-SPRAY</span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-steel">
              Malowanie dachów
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold uppercase tracking-wider text-background/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={COMPANY.phoneHref}
            className="text-sm font-bold tracking-wide text-background transition-colors hover:text-primary"
          >
            {COMPANY.phone}
          </a>
          <Link
            to="/kontakt"
            className="rounded-sm bg-ember px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-ember transition-transform hover:-translate-y-0.5"
          >
            Darmowa wycena
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-sm border border-background/25 lg:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-background transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-5 bg-background transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-5 bg-background transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-background/10 bg-ink/98 backdrop-blur-md lg:hidden">
          <div className="container-x flex flex-col gap-1 py-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-semibold uppercase tracking-wide text-background"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-background/10 pt-4">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-steel">Usługi</p>
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to="/uslugi/$slug"
                  params={{ slug: s.slug }}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-background/70"
                >
                  {s.title}
                </Link>
              ))}
            </div>
            <a
              href={COMPANY.phoneHref}
              className="mt-4 rounded-sm bg-ember px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground"
            >
              Zadzwoń: {COMPANY.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
