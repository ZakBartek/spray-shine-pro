import { Link } from "@tanstack/react-router";
import { COMPANY, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-background/70">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <span className="display block text-3xl text-background">MR-SPRAY</span>
          <p className="mt-4 text-sm leading-relaxed">
            Profesjonalne malowanie dachów, renowacja pokryć i zabezpieczenia antykorozyjne.
            Pracujemy na terenie województw podkarpackiego, małopolskiego i śląskiego.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg text-background">Usługi</h3>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/uslugi/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg text-background">Nawigacja</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="transition-colors hover:text-primary">
                Strona główna
              </Link>
            </li>
            <li>
              <Link to="/o-firmie" className="transition-colors hover:text-primary">
                O firmie
              </Link>
            </li>
            <li>
              <Link to="/uslugi" className="transition-colors hover:text-primary">
                Usługi
              </Link>
            </li>
            <li>
              <Link to="/realizacje" className="transition-colors hover:text-primary">
                Realizacje
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="transition-colors hover:text-primary">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg text-background">Kontakt</h3>
          <ul className="space-y-3 text-sm">
            <li>{COMPANY.address}</li>
            <li>
              <a href={COMPANY.phoneHref} className="text-lg font-bold text-background">
                {COMPANY.phone}
              </a>
            </li>
            <li>Pon.–Sob. 7:00–19:00</li>
          </ul>
          <Link
            to="/kontakt"
            className="mt-6 inline-block rounded-sm bg-ember px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground"
          >
            Darmowa wycena
          </Link>
        </div>
      </div>

      <div className="border-t border-background/10 py-6">
        <p className="container-x text-xs text-background/40">
          © {new Date().getFullYear()} Mr-Spray — {COMPANY.address}. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
