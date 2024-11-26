import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const eudoxusSans = localFont({
  src: [
    {
      path: "./fonts/EudoxusSans-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/EudoxusSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/EudoxusSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/EudoxusSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/EudoxusSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/EudoxusSans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-eudoxus-sans",
  display: "swap"
});



export const metadata: Metadata = {
  title: "Ben Humphrey",
  description: "Bennett Humphrey Web Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          as="image"
          href="/profile.webp"
        />
      </Head>
      <body
        className={`${eudoxusSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
