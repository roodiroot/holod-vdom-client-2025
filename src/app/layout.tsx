import type { Metadata } from "next";

import TanstackProvider from "@/providers/TanstackProvider";
import { Metrika } from "@/components/metrika/metrika";
import { beautifulFont } from "./fonts";

import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://holodvdom.su/"),
  title: {
    template: "%s | Продажа и монтаж кондиционеров",
    default: 'Интернет магазин кондиционеров и сплит систем "Холод в Дом"',
  },
  description:
    "Установка кондиционеров и сплит-систем. Профессиональный подбор кондиционеров. Гарантия на установку до пяти лет. Проффессионалы своего дела",

  icons: "../asstets/images/favicon-196.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={beautifulFont.className}>
        <TanstackProvider>{children}</TanstackProvider>
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}
