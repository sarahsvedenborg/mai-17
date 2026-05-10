import type { Metadata, Viewport } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const lyrics = Libre_Baskerville({
  variable: "--font-lyrics",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "17. mai — sangtekster",
    template: "%s",
  },
  description:
    "Store, lesbare tekster til nasjonalsang og «Norge i rødt, hvitt og blått» til 17. mai.",
  appleWebApp: {
    capable: true,
    title: "17. mai sanger",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1114" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${lyrics.variable} h-full scroll-smooth`}>
      <body className="min-h-full min-w-0">{children}</body>
    </html>
  );
}
