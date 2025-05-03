import { Footer } from "@/components/footer";
import { Header } from "@/components/layout/header";
import { About } from "@/components/layout/home/about/about";
import { Faq } from "@/components/layout/home/faq/faq";
import { Hero } from "@/components/layout/home/hero";
import { Projects } from "@/components/layout/home/projects/projects";
import { Rating } from "@/components/layout/home/rating/rating";
import { Services } from "@/components/layout/home/services/services";
import { Products } from "@/components/layout/home/shop/products";
import { Marquee } from "@/components/layout/marquee";
import { MobileNav } from "@/components/mobile-nav";
import { BackTop } from "@/components/ui/back-top";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <MobileNav/>
      <Hero />
      <About />
      <Services />
      <Marquee/>
      <Products/>
      <Projects/>
      <Rating/>
      <Faq/>
      <Footer/>
      <BackTop/>
    </div>
  );
}
