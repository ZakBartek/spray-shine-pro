import { useState, type FormEvent } from "react";
import { SERVICES } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (name.length < 2 || phone.replace(/\D/g, "").length < 9) {
      setError("Podaj imię oraz poprawny numer telefonu.");
      return;
    }
    setError(null);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-sm border border-primary/30 bg-card p-10 text-center shadow-lift">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-ember text-2xl text-primary-foreground">
          ✓
        </div>
        <h3 className="text-3xl">Dziękujemy za zgłoszenie</h3>
        <p className="mt-3 text-muted-foreground">
          Odezwiemy się najszybciej jak to możliwe — zwykle jeszcze tego samego dnia roboczego.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-sm border border-border bg-card p-8 shadow-lift sm:p-10"
    >
      <h2 className="text-3xl">Zamów bezpłatną wycenę</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Wypełnij formularz — oddzwonimy i umówimy bezpłatne oględziny dachu.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Imię i nazwisko *" name="name" placeholder="Jan Kowalski" />
        <Field label="Telefon *" name="phone" type="tel" placeholder="+48 600 000 000" />
        <Field label="E-mail" name="email" type="email" placeholder="jan@example.com" />
        <Field label="Miejscowość" name="city" placeholder="Rzeszów" />

        <label className="sm:col-span-2 block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
            Zakres usługi
          </span>
          <select
            name="service"
            className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          >
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Inne">Inne / nie wiem</option>
          </select>
        </label>

        <label className="sm:col-span-2 block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
            Opis / powierzchnia dachu
          </span>
          <textarea
            name="message"
            rows={4}
            placeholder="Np. dach z blachodachówki ok. 150 m², stan średni, kolor grafit."
            className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
        </label>
      </div>

      {error && <p className="mt-4 text-sm font-semibold text-destructive">{error}</p>}

      <button
        type="submit"
        className="mt-7 w-full rounded-sm bg-ember px-8 py-5 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-ember transition-transform hover:-translate-y-0.5"
      >
        Wyślij zapytanie
      </button>
      <p className="mt-4 text-xs text-muted-foreground">
        Wysyłając formularz wyrażasz zgodę na kontakt w sprawie wyceny. Nie wysyłamy spamu.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
    </label>
  );
}
