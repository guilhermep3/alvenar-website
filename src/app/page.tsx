import { Header } from "@/components/layout/header";
import { About } from "@/components/layout/home/about/about";
import { Hero } from "@/components/layout/home/hero";

export default function Home() {
  return (
    <div className="relative pb-96 border-b border-zinc-600">
      <Header/>
      <Hero/>
      <About/>
    </div>
  );
}
