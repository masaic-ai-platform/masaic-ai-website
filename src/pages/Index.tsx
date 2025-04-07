import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Integration from "@/components/Integration";
import Security from "@/components/Security";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "OpenResponses - Self-Hosted AI Platform";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
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
