import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Ritual from "@/components/Ritual";
import Ingredients from "@/components/Ingredients";

export default function Home() {
  return (
    <main className="bg-[#f7f4f2] text-[#202020]">
      <Navbar />
      <Hero />
      <Ritual />
      <Ingredients />
    </main>
  );
}