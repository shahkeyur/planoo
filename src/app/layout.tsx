import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Providers } from "@/components/Providers";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Planno",
    default: "PLanno",
  },
};

export default async function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Providers session={session}>
          <Navbar />
          {modal}
          <main className="min-h-screen container mx-auto">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
