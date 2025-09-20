
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Destaque from "@/components/feature";
import Profissionais from "@/components/profissionais";
import LocalizacaoContato from "@/components/LocalizacaoContato";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destaque />
      <Profissionais />
      <LocalizacaoContato />
      <Footer />
    </div>
    
  );
}