import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/page/landing/Navbar";
import { useCallback, useEffect } from "react";
// define of page sections
import Link from "next/link";
import TitleSection from "@/components/page/landing/TitleSection";
import TileButtonSection from "@/components/page/landing/TitleButtonSection";
import EcoSystemSection from "@/components/page/landing/EcoSystemSection";
import SupportSection from "@/components/page/landing/SupportSection";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { useRouter } from "next/router";
import PresaleSection from "@/components/page/landing/PresaleSection";

// Landing Page
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //    // Prefetch the dashboard page
  //    router.prefetch('/dashboard')
  // }, []);

  return (
    <>
      <Head>
        <title>Venom</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main>
        <Navbar />
        <TitleSection />
        <TileButtonSection />
        <EcoSystemSection />
        <PresaleSection />
        <SupportSection />
        <ScrollToTop />
      </main>
    </>
  );
}
