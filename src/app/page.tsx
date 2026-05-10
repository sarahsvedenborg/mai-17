import Image from "next/image";
import Link from "next/link";
import { SONGS } from "@/data/songs";

/** Lite norsk flagg (krysset skjøvet inn mot stangen), ikke vertikal trikolor */
function NorwegianFlagBadge({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 22 16"
      aria-hidden
      focusable="false"
    >
      <rect width="22" height="16" fill="#BA0C2F" rx="1.25" />
      <path fill="#fff" d="M6 0h4v16H6zM0 6h22v4H0z" />
      <path fill="#002664" d="M7 0h2v16H7zM0 7h22v2H0z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative isolate flex min-h-screen min-w-0 flex-col overflow-hidden text-[var(--page-fg)]">
      {/* Festdag: myk «himmel», varme og flagg-farget glød — kun dekor, ikke klikkbar */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        {/* Norsk palett: hvitt → svak rødtonet «kors» → lys blå (flagg, mykt) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white from-[0%] via-[#fff5f5] via-[48%] to-[#e8f1fb] to-[100%] dark:from-[#121820] dark:via-[#1a1522] dark:to-[#0b1628]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_115%_75%_at_72%_12%,rgba(186,12,47,0.16),transparent_52%),radial-gradient(ellipse_100%_65%_at_12%_38%,rgba(0,56,128,0.14),transparent_50%),radial-gradient(ellipse_130%_90%_at_50%_-28%,rgba(255,255,255,0.85),transparent_50%)] dark:bg-[radial-gradient(ellipse_110%_72%_at_70%_14%,rgba(220,70,90,0.22),transparent_52%),radial-gradient(ellipse_95%_60%_at_10%_36%,rgba(55,120,190,0.2),transparent_48%),radial-gradient(ellipse_120%_85%_at_50%_-22%,rgba(40,55,80,0.5),transparent_48%)]" />
        <div className="absolute -right-12 top-6 h-72 w-72 rounded-full bg-[#BA0C2F]/18 blur-[48px] dark:bg-[#e85a6c]/22" />
        <div className="absolute -left-10 top-1/4 h-60 w-60 rounded-full bg-[#002664]/16 blur-[44px] dark:bg-[#4c8ede]/18" />
        <div className="absolute -bottom-20 left-1/2 h-52 w-[min(92vw,26rem)] -translate-x-1/2 rounded-full bg-white/45 blur-[50px] dark:bg-[#1a3360]/28" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#002664]/0 via-white/80 to-[#BA0C2F]/0 opacity-90 dark:via-white/20" />
      </div>

      <main className="relative flex flex-1 flex-col px-4 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-[calc(1.75rem+env(safe-area-inset-top))]">
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

        <ul className="mx-auto mt-10 flex w-full max-w-lg flex-col gap-6">
          {SONGS.map((song) => (
            <li key={song.slug}>
              <Link
                href={`/sang/${song.slug}`}
                className="tap-target group relative flex min-h-[max(11.5rem,42dvh)] w-full items-center justify-between gap-5 overflow-hidden rounded-3xl border-2 border-[var(--card-border)] bg-gradient-to-br from-white via-[#faf7f8] to-[#e8f2fc] px-6 py-7 shadow-md shadow-[#002664]/10 ring-1 ring-[#002664]/10 transition-[transform,box-shadow,background-color] duration-200 active:scale-[0.99] active:bg-[var(--tap-active)] hover:shadow-lg hover:shadow-[#BA0C2F]/15 md:min-h-[7rem] md:gap-6 md:px-7 md:py-5 dark:from-[#1a1f2a] dark:via-[#181c25] dark:to-[#0f2744]/90 dark:shadow-black/35 dark:ring-white/10 dark:hover:shadow-[#4c8ede]/25"
              >
                <span className="min-w-0 flex-1 text-[clamp(1.35rem,5.5vw,1.7rem)] font-semibold leading-snug">
                  {song.title}
                </span>
                <NorwegianFlagBadge className="h-12 w-auto shrink-0 opacity-[0.42] drop-shadow-sm transition-[opacity,transform] duration-200 group-hover:opacity-[0.62] group-hover:scale-[1.03] sm:h-14 dark:opacity-[0.38] dark:group-hover:opacity-[0.55]" />
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="/qr"
              className="tap-target group relative flex min-h-[max(11.5rem,42dvh)] w-full items-center justify-between gap-5 overflow-hidden rounded-3xl border-2 border-[var(--card-border)] bg-gradient-to-br from-white via-[#faf7f8] to-[#e8f2fc] px-6 py-7 shadow-md shadow-[#002664]/10 ring-1 ring-[#002664]/10 transition-[transform,box-shadow,background-color] duration-200 active:scale-[0.99] active:bg-[var(--tap-active)] hover:shadow-lg hover:shadow-[#BA0C2F]/15 md:min-h-[7rem] md:gap-6 md:px-7 md:py-5 dark:from-[#1a1f2a] dark:via-[#181c25] dark:to-[#0f2744]/90 dark:shadow-black/35 dark:ring-white/10 dark:hover:shadow-[#4c8ede]/25"
            >
              <span className="min-w-0 flex-1 text-[clamp(1.35rem,5.5vw,1.7rem)] font-semibold leading-snug">
                QR-kode
              </span>
              <span className="inline-flex shrink-0 overflow-hidden rounded-md bg-white p-0.5 shadow-sm ring-1 ring-black/[0.07] dark:bg-zinc-100 dark:ring-white/12">
                <Image
                  src="/qr-17mai.png"
                  alt=""
                  width={231}
                  height={231}
                  className="h-12 w-12 rounded-sm object-contain opacity-95 transition-[opacity,transform] duration-200 group-hover:opacity-100 group-hover:scale-[1.03] sm:h-14 sm:w-14 dark:opacity-90 dark:group-hover:opacity-100"
                  aria-hidden
                />
              </span>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
