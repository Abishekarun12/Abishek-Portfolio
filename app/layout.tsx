import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Space_Mono, Syne } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abishek Arunachalam — Full-Stack Developer",
  description:
    "Full-Stack Developer building production-grade systems with Laravel, FastAPI and Next.js — Backend, Cloud & AI Systems.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable}`}>
      {/* The theme toggle adds/removes `light-mode` on body at runtime */}
      <body className="dark-mode" suppressHydrationWarning>
        {children}
        {/* Microsoft Clarity tracking */}
        <Script id="clarity" strategy="afterInteractive">
          {`(function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
          })(window, document, "clarity", "script", "nbxn4w4wf6");`}
        </Script>
      </body>
    </html>
  );
}
