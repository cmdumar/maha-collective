import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function ThreeColumnGridSection( { sectionVariant }: { sectionVariant: string } ) {
  
  if (sectionVariant === "home") {
  return (
    <div className="bg-[#b0ad9c] min-h-screen relative">
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            <div className="text-center group flex flex-col h-full">
              <h2 className="text-xl md:text-2xl font-libre text-[#f2ede8] mb-8 tracking-wide">
                MAHA 21
              </h2>
              <Link href="/maha-21" className="block">
                <div className="relative mb-8 w-[300px] h-[350px] mx-auto overflow-hidden rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
                    alt="Person meditating on beach"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-white/10"></div>
                </div>
              </Link>
              <div className="flex-grow flex flex-col justify-start space-y-2">
                <p className="text-[#f2ede8] text-sm font-light">
                  Daily guided practices for 21 days.
                </p>
                <p className="text-[#f2ede8] text-sm font-light">
                  Simple. Potent. Life-changing.
                </p>
              </div>
            </div>
            <div className="text-center group flex flex-col h-full">
              <h2 className="text-xl md:text-2xl font-light text-[#f2ede8] mb-8 tracking-wide">
                MAHA MASTERCLASSES
              </h2>
              <Link href="/maha-masterclasses" className="block">
                <div className="relative mb-8 w-[300px] h-[350px] mx-auto overflow-hidden rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center"
                    alt="Peaceful meditation scene"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-white/10"></div>
                </div>
              </Link>
              <div className="flex-grow flex flex-col justify-start space-y-2">
                <p className="text-[#f2ede8] text-sm font-light">
                  Deeper tools and insights exploring themes like
                </p>
                <p className="text-[#f2ede8] text-sm font-light">
                  abundance, clarity, and self-worth - learn at
                </p>
                <p className="text-[#f2ede8] text-sm font-light">
                  your own pace or join us live.
                </p>
              </div>
            </div>
            <div className="text-center group flex flex-col h-full">
              <h2 className="text-xl md:text-2xl font-light text-[#f2ede8] mb-8 tracking-wide">
                MAHA COMMUNITY
              </h2>
              <Link href="/maha-community" className="block">
                <div className="relative mb-8 w-[300px] h-[350px] mx-auto overflow-hidden rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center"
                    alt="Serene beach meditation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-white/10"></div>
                </div>
              </Link>
              <div className="flex-grow flex flex-col justify-start space-y-2">
                <p className="text-[#f2ede8] text-sm font-light">
                  Live experiences to ground, awaken and
                </p>
                <p className="text-[#f2ede8] text-sm font-light">
                  connect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#d9d6c7] py-1 overflow-hidden w-full absolute left-0 bottom-0">
        <div className="whitespace-nowrap animate-marquee">
          {Array.from({ length: 14 }, (_, i) => (
            <p
              key={i}
              className="text-[#381f0f] px-8 font-libre text-sm tracking-wider inline-block"
            >
              LIVE MAHA.
            </p>
          ))}
        </div>
      </div>
    </div>
  );

} else if (sectionVariant === "maha-collective") {
  return (
    <div className="bg-[#b0ad9c] min-h-screen flex items-center justify-center relative">
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Accordion type="single" collapsible className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            <AccordionItem value="item-1">
              <div className="relative mb-8 w-[300px] h-[350px] mx-auto overflow-hidden rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
                  alt="Person meditating on beach"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-white/10"></div>
              </div>
              <AccordionTrigger className="text-[#ff4d14] text-sm font-light text-left px-4">+ A Whole-You Approach.</AccordionTrigger>
              <AccordionContent className="text-[#f2ede8] text-sm text-left font-baskervville leading-7 tracking-wide px-4 max-w-80">
                A practice that meets all of you. You are not just a body or a mind. You are a whole being made of physical, emotional, mental, energetic, and spiritual layers. The MAHA Method honours this wholeness. Each practice is intentionally designed to work across all five layers, weaving together movement, breathwork, kriya, and meditation. Individually, they are powerful tools, together, they become a gateway. A portal for deep healing, inner awakening, and transformation that begins at the cellular level and expands from within.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <div className="relative mb-8 w-[300px] h-[350px] mx-auto overflow-hidden rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center"
                  alt="Peaceful meditation scene"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-white/10"></div>
              </div>
              <AccordionTrigger className="text-[#ff4d14] text-sm font-light text-left px-4">+ Real & Sustainable Transformation</AccordionTrigger>
              <AccordionContent className="text-[#f2ede8] text-sm font-baskervville leading-7 tracking-wide px-4 max-w-80">
                Sustainable change begins when all parts of you come into harmony. The MAHA Method is intentionally crafted to align and awaken all five layers of your being: physical, emotional, mental, energetic, and spiritual. Because true transformation isn't surface-level. It's not a quick fix or fleeting high. It's lasting when every part of you is touched, tended to, and brought into alignment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <div className="relative mb-8 w-[300px] h-[350px] mx-auto overflow-hidden rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center"
                  alt="Serene beach meditation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-white/10"></div>
              </div>
              <AccordionTrigger className="text-[#ff4d14] text-sm font-light text-left px-4">+ Ancient Wisdom. Backed By Science.</AccordionTrigger>
              <AccordionContent className="text-[#f2ede8] text-sm font-baskervville leading-7 tracking-wide px-4 max-w-80">
                The MAHA Method is a unique alchemy of movement, breath, kriya, and meditation, carefully engineered to influence the biochemistry of your body. Research shows that practising in such a way regulates your nervous system, reduces stress hormones, and rewires the brain for greater clarity, resilience, and emotional balance. The MAHA Method activates the parasympathetic system, supports neuroplasticity, and helps release stored tension in the body, making lasting transformation not just possible, but measurable.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
}
