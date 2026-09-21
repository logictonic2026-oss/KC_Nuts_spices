import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import { Tiers, Products, Reviews, ContactCTA } from "../components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />

      <div className="mt-8">
        <Products />
      </div>

      <Tiers />
      
      <Reviews />
      <ContactCTA />
    </main>
  );
}
