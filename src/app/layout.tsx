import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/Toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "ConvoSpace",
  description: "A Reddit clone built with Next.js",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialised light",
        inter.className
      )}
    >
      <body className="min-h-screen pt-12 antialiased bg-slate-50">
        {/* @ts-expect-error Server Component */}
        <Navbar />

        {authModal}

        <div className="container h-full pt-12 mx-auto max-w-7xl">
          {children}
        </div>

        <Toaster />
      </body>
    </html>
  );
}
