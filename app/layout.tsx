import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DFS Demo App",
  description: "A simple DFS-style player pick demo app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-blue-50 text-black">{children}</body>
    </html>
  );
}
