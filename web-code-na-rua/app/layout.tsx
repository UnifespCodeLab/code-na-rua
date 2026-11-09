import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MotoLab",
  description: "Pesquisa feita com quem vive o corre",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
