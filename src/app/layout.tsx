import type { Metadata } from "next";
import { Source_Sans_3, Open_Sans } from "next/font/google";
import { BaseLayout } from "@/app/_components";
import "./globals.scss";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});


const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Deskangle - Branding and Design Agency",
  description: "A user design and creative branding agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
