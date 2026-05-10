import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QR-kode · 17. mai",
  description:
    "Scanne QR-koden for å åpne sangtekstene til 17. mai på telefonen.",
};

export default function QrPage() {
  return (
    <div className="min-h-screen min-w-0 bg-[var(--page-bg)] text-[var(--page-fg)]">
      <header className="sticky top-0 z-10 border-b border-[var(--page-border)] bg-[var(--page-bg)]/95 px-4 py-3 backdrop-blur-md [-webkit-backdrop-filter:blur(12px)] supports-[backdrop-filter]:bg-[var(--page-bg)]/80 pb-[calc(0.75rem+env(safe-area-inset-top))] pt-[calc(0.75rem+env(safe-area-inset-top))]">
        <nav className="mx-auto w-full min-w-0 max-w-lg">
          <Link
            href="/"
            className="tap-target inline-flex max-w-full items-center rounded-lg px-2 py-2 text-base font-semibold break-words text-[var(--accent)] underline-offset-4 hover:underline active:bg-[var(--tap-active)]"
          >
            ← Alle sanger
          </Link>
        </nav>
      </header>

      <main className="mx-auto w-full min-w-0 max-w-[80rem] px-2 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-6 sm:px-4">
        <h1 className="text-balance text-center text-2xl font-bold leading-tight sm:text-3xl">
          Del sangtekstene
        </h1>
        <p className="mx-auto mt-3 max-w-md px-2 text-center text-base leading-relaxed text-[var(--page-muted)]">
          La andre scanne koden for å lese sangtekstene på egen mobil.
        </p>

        <div className="relative mt-8 flex justify-center sm:mt-10">
          <div className="w-full max-w-[50vw] rounded-2xl border border-[var(--page-border)] bg-[var(--card-bg)] p-2 shadow-md sm:p-4 dark:bg-[var(--card-bg)]">
            <Image
              src="/qr-17mai.png"
              alt="QR-kode til sangtekstene"
              width={231}
              height={231}
              className="mx-auto h-auto w-full max-w-full"
              sizes="50vw"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
