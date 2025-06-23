import type { Metadata, Viewport } from "next";
import { Inter, Cedarville_Cursive } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("@/components/main/star-background").then(mod => ({ default: mod.StarsCanvas })), { ssr: false });
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const cedarvilleCursive = Cedarville_Cursive({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cedarville-cursive"
});

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className,
          cedarvilleCursive.variable
        )}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
