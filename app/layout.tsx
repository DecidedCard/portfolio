import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "정해준 포트폴리오",
  description: "정해준의 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-kr">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
