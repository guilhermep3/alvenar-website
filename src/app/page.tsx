import { Header } from "@/components/layout/header";
import { About } from "@/components/layout/home/about/about";
import { Hero } from "@/components/layout/home/hero";
import { Services } from "@/components/layout/home/services/services";

export default function Home() {
  return (
    <div className="relative pb-40 border-b border-zinc-600">
      <Header />
      <Hero />
      <About />
      <Services />
    </div>
  );
}
