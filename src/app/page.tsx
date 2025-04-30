import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/hero";

export default function Home() {
  return (
    <div className="relative pb-96 border-b border-zinc-600">
      <Header/>
      <Hero/>
    </div>
  );
}
