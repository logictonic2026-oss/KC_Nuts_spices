import Split from "../components/Split";
import { Combos } from "../components/sections";
import { GIFTING, BRAND } from "../data/content";

export default function Gifting() {
  return (
    <main className="pt-20">
      <div className="px-6 py-12 md:py-20 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-black mb-4">Corporate Gifting</h1>
        <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg">
          Premium presentation and bespoke assortments for your clients and teams.
        </p>
      </div>

      <Split
        id="gifting"
        tag={GIFTING.tag}
        title={GIFTING.title}
        paragraphs={[GIFTING.body]}
        points={GIFTING.points}
        image="https://picsum.photos/seed/kc-gifting/700/880"
        imageAlt="Premium corporate gifting box from KC Nuts and Spices"
        imageSide="left"
        cta={{ label: "Corporate Gifting Enquiry", href: BRAND.whatsapp, primary: true }}
      />

      <Combos />
    </main>
  );
}
