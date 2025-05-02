import { Header } from "@/components/layout/header";
import { About } from "@/components/layout/home/about/about";
import { Faq } from "@/components/layout/home/faq/faq";
import { Hero } from "@/components/layout/home/hero";
import { Services } from "@/components/layout/home/services/services";
import { Shop } from "@/components/layout/home/shop/shop";
import { Marquee } from "@/components/layout/marquee";
import { BackTop } from "@/components/ui/back-top";

export default function Home() {
  return (
    <div className="relative pb-40 border-b border-zinc-600">
      <Header />
      <Hero />
      <About />
      <Services />
      <Marquee/>
      <Shop/>
      <Faq/>
      <BackTop/>
    </div>
  );
}
