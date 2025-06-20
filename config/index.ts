import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Razaqa Albio Kasyfi | Portfolio",
  description: "Welcome to my portfolio.",
  keywords: [
    "portfolio",
    "js",
    "javascript",
    "typescript",
    "html",
    "css",
  ] as Array<string>,
  authors: {
    name: "Razaqa Albio Kasyfi",
    url: "https://github.com/RazakaAlbio",
  },
} as const;
