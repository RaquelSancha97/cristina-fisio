
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cristina Fisio | Fisioterapia y bienestar",
  description:
    "Cristina Fisio. Atención cercana y personalizada para cuidar tu salud y bienestar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
