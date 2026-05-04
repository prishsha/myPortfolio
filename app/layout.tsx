import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prisha Vadhavkar — Portfolio",
  description: "Full Stack Developer portfolio — built in VS Code, shipped to the web.",
  openGraph: {
    title: "Prisha Vadhavkar — Portfolio",
    description: "Full Stack Developer portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
