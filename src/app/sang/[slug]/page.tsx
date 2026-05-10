import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSongSlugs, getSongBySlug } from "@/data/songs";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSongSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const song = getSongBySlug(slug);
  if (!song) {
    return { title: "Sang ikke funnet" };
  }
  return {
    title: `${song.title} · 17. mai`,
    description: `Sangtekst til «${song.title}»`,
  };
}

export default async function SongPage({ params }: Props) {
  const { slug } = await params;
  const song = getSongBySlug(slug);
  if (!song) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)]">
      <header className="sticky top-0 z-10 border-b border-[var(--page-border)] bg-[var(--page-bg)]/95 px-4 py-3 backdrop-blur-md [-webkit-backdrop-filter:blur(12px)] supports-[backdrop-filter]:bg-[var(--page-bg)]/80 pb-[calc(0.75rem+env(safe-area-inset-top))] pt-[calc(0.75rem+env(safe-area-inset-top))]">
        <nav className="mx-auto max-w-lg">
          <Link
            href="/"
            className="tap-target inline-flex shrink-0 items-center rounded-lg px-2 py-2 text-base font-semibold text-[var(--accent)] underline-offset-4 hover:underline active:bg-[var(--tap-active)]"
          >
            ← Alle sanger
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-lg px-4 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-6">
        <h1 className="text-[clamp(1.75rem,6vw,2.25rem)] font-bold leading-tight tracking-tight">
          {song.title}
        </h1>
        <p className="mt-2 text-[clamp(0.95rem,3.8vw,1.05rem)] leading-relaxed text-[var(--page-muted)]">
          {song.credit}
        </p>

        <div className="mt-10 space-y-10">
          {song.verses.map((stanza, i) => (
            <section
              key={i}
              className="text-[clamp(1.1875rem,4.75vw,1.375rem)] leading-[1.75] tracking-[0.01em]"
            >
              {stanza.map((line, j) => {
                const isLabel = /^[0-9]+\.$/.test(line.trim());
                if (isLabel && j === 0) {
                  return (
                    <p key={j} className="mb-3 font-semibold tabular-nums">
                      {line.trim()}
                    </p>
                  );
                }
                const isLast = j === stanza.length - 1;
                return (
                  <p key={j} className={isLast ? "" : "mb-2"}>
                    {line}
                  </p>
                );
              })}
            </section>
          ))}
        </div>

        <footer className="mt-14 rounded-xl border border-[var(--page-border)] bg-[var(--source-box)] px-4 py-4">
          <p className="text-[0.9375rem] leading-relaxed text-[var(--page-muted)]">
            Tekst etter kilde:&nbsp;
            <a
              href={song.sourceUrl}
              className="font-medium text-[var(--accent)] underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {song.sourceName}
            </a>
          </p>
        </footer>
      </article>
    </div>
  );
}
