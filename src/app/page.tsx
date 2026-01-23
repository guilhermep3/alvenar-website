import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { About } from "@/components/layout/home/about/about";
import { Faq } from "@/components/layout/home/faq/faq";
import { Hero } from "@/components/layout/home/hero";
import { Local } from "@/components/layout/home/local/local";
import { Projects } from "@/components/layout/home/projects/projects";
import { Rating } from "@/components/layout/home/rating/rating";
import { Services } from "@/components/layout/home/services/services";
import { Products } from "@/components/layout/home/shop/products";
import { Marquee } from "@/components/layout/marquee";
import { MobileNav } from "@/components/ui/mobile-nav";
import { BackTop } from "@/components/ui/back-top";
import { DividerSVG } from "@/components/svg/divider";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <MobileNav />
      <Hero />
      <About />
      <Services />
      <div className="relative">
        <DividerSVG top rotate offsetTop />
        <DividerSVG offsetBottom />
        <Marquee />
      </div>
      <Products />
      <Projects />
      <Rating />
      <Faq />
      <Local />
      <Footer />
      <BackTop />
    </div>
  );
}
