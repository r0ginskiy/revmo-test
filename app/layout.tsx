import type { ReactNode } from "react";
import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin-ext"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={lato.className}>
      <body>{children}</body>
    </html>
  );
}
