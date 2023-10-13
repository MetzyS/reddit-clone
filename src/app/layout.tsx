import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reddit Clone",
  description: "Reddit Clone with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white">{children}</body>
    </html>
  );
}
