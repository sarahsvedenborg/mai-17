import Link from "next/link";
import { SONGS } from "@/data/songs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--page-bg)] text-[var(--page-fg)]">
      <main className="flex flex-1 flex-col px-4 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-[calc(1.5rem+env(safe-area-inset-top))]">
        <header className="mx-auto max-w-lg text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            17. mai
          </p>
          <h1 className="mt-2 text-[clamp(1.75rem,7vw,2.5rem)] font-bold leading-tight">
            Sangtekster
          </h1>
          <p className="mt-3 text-[clamp(1rem,4vw,1.125rem)] leading-relaxed text-[var(--page-muted)]">
            Trykk på en sang for stor, tydelig tekst du kan scrolle i mens dere
            synger — også i sterkt lys.
          </p>
        </header>

        <ul className="mx-auto mt-10 flex w-full max-w-lg flex-col gap-4">
          {SONGS.map((song) => (
            <li key={song.slug}>
              <Link
                href={`/sang/${song.slug}`}
                className="tap-target flex min-h-[4.75rem] flex-col justify-center rounded-2xl border-2 border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-4 shadow-sm transition-colors active:bg-[var(--tap-active)]"
              >
                <span className="text-[clamp(1.2rem,4.8vw,1.45rem)] font-semibold leading-snug">
                  {song.title}
                </span>
                <span className="mt-1 line-clamp-2 text-[0.9375rem] text-[var(--page-muted)]">
                  {song.credit}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
