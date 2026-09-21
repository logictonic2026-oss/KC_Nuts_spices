import Split from "../components/Split";
import { Pillars } from "../components/sections";
import { STORY, PREDICTIVE, BRAND } from "../data/content";

export default function About() {
  return (
    <main className="pt-20">
      <div className="px-6 py-12 md:py-20 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-black mb-4">Our Story</h1>
        <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg">
          {BRAND.promise}
        </p>
      </div>

      <Split
        id="story"
        tag={STORY.tag}
        title={STORY.title}
        paragraphs={STORY.paragraphs}
        points={STORY.points}
        image="https://picsum.photos/seed/kc-brand-hosur/700/880"
        imageAlt="Premium KC Nuts and Spices product arrangement with stand-up kraft pouches"
        imageSide="left"
        badge={{ num: BRAND.est, txt: "Est." }}
      />

      <Pillars />

      <Split
        tag={PREDICTIVE.tag}
        title={PREDICTIVE.title}
        paragraphs={PREDICTIVE.paragraphs}
        points={PREDICTIVE.points}
        image="https://picsum.photos/seed/kc-precision-reorder/700/880"
        imageAlt="KC Nuts and Spices pantry products arranged for repeat use and kitchen convenience"
        imageSide="right"
      />
    </main>
  );
}
