import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import Footer from "@/ui/footer";
import Nav from "@/ui/nav";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechStart Inc.",
  description:
    "TechStart Inc. is a cutting-edge technology startup specializing in artificial intelligence solutions for small to medium-sized businesses. They offer AI-powered customer service chatbots, predictive analytics, and automation tools to streamline business operations and enhance customer experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(plusJakartaSans.className, "min-h-screen flex flex-col")}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
