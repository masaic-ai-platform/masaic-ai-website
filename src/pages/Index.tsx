import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Integration from "@/components/Integration";
import Security from "@/components/Security";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";
import PromotionalBanner from "@/components/PromotionalBanner";

const Index = () => {
  useEffect(() => {
    document.title = "Masaic AI Platform - Self-Hosted AI Platform";
  }, []);

  return (
    <div className="min-h-screen">
      <PromotionalBanner />
      <Navbar />
      <main style={{ paddingTop: "calc(64px + var(--banner-height, 0px))" }}>
        <Hero />
        <Features />
        <Integration />
        <Security />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
