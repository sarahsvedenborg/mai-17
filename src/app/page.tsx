import Link from "next/link";
import { SONGS } from "@/data/songs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#fffaf4] from-0% via-[var(--page-bg)] via-45% to-[var(--page-bg)] text-[var(--page-fg)] dark:from-[#161a20] dark:via-[var(--page-bg)]">
      <main className="flex flex-1 flex-col px-4 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-[calc(1.75rem+env(safe-area-inset-top))]">
        <header className="mx-auto max-w-lg text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Grunnlovsdagen
          </p>
          <h1 className="mt-3 text-balance text-[clamp(2rem,8vw,2.75rem)] font-bold leading-[1.12] tracking-tight">
            Hurra for Norge{" "}
            <span
              className="whitespace-nowrap"
              role="img"
              aria-label="Norges flagg"
            >
              🇳🇴
            </span>
          </h1>
          <p className="mt-5 text-[clamp(1.0625rem,4.2vw,1.1875rem)] font-medium leading-relaxed text-[var(--page-fg)]">
            Gratulerer med dagen! Ha en strålende feiring    ☀️&nbsp;🍦
          </p>
        </header>

        <ul className="mx-auto mt-10 flex w-full max-w-lg flex-col gap-5">
          {SONGS.map((song) => (
            <li key={song.slug}>
              <Link
                href={`/sang/${song.slug}`}
                className="tap-target flex min-h-[max(10rem,32dvh)] w-full items-center rounded-3xl border-2 border-[var(--card-border)] bg-[var(--card-bg)] px-6 py-6 shadow-sm transition-colors active:bg-[var(--tap-active)] md:min-h-[6.75rem] md:py-5"
              >
                <span className="text-[clamp(1.35rem,5.5vw,1.7rem)] font-semibold leading-snug">
                  {song.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
