import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ritual from "@/components/Ritual";
import Ingredients from "@/components/Ingredients";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f7f4f2] text-[#202020]">
      <Navbar />
      <Hero />
      <Ritual />
      <Ingredients />
      <CTA />
      <Footer />
    </main>
  );
}