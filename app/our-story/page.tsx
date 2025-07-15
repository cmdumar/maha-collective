"use client"

import type React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WavyLine from "../../public/curved-line-big.svg"
import SocialMediaSection from "../components/SocialMediaSection"

export default function OurStory() {
  return (
    <div className="flex flex-col min-h-screen bg-sand font-baskervville">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/akasha-mudra.jpeg"
            alt="Alessandra, founder of MAHA Collective"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Content */}
        {/* <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="text-4xl md:text-6xl font-baskervville font-normal text-[#f2ede8] mt-12 tracking-wide">
            ABOUT ME & MAHA
          </h1>
        </div> */}

        <div className="bg-[#b1ad9c] py-1 overflow-hidden w-full absolute left-0 bottom-0">
          <div className="whitespace-nowrap animate-marquee">
            {Array.from({ length: 14 }, (_, i) => (
              <p
                key={i}
                className="text-[#f5f3ed] px-8 font-libre text-sm tracking-wider inline-block"
              >
                ABOUT ME & MAHA
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#b0ad9c] pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2">

        <div className="relative">
            <img
              src="/images/aless-about.jpg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full object-contain "
            />

            {/* ALESSANDRA Vertical Text Overlay */}
            {/* <div className="absolute top-1/2 left-0 -translate-y-[50%] translate-x-[10%] md:-translate-y-[65%] h-full pointer-events-none z-20 flex items-center">
              <span
                className="font-libre text-[4vw] md:text-[5vw] text-sun"
                style={{
                  letterSpacing: "0.05em",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                }}
              >
                ALESSANDRA
              </span>
            </div> */}
          </div>
          {/* Left side - Content */}
          <div className="bg-[#b0ad9c] max-h-screen flex justify-center items-center">
            <div className="max-w-lg">
              <h2 className="text-4xl font-baskervville text-center px-4 text-[#f2ede8] pb-16 tracking-wider">
                Hello my love,
              </h2>

              <div className="space-y-4 text-[#f2ede8] font-libre px-2">
                <p className="text-md leading-8 tracking-wide text-center">
                
I spent years in high-functioning survival mode. Anxious, overachieving, and completely disconnected from myself. On paper, I had it all: world champion in Karate, straight-A student, climbing the corporate ladder. But behind the polished exterior was a woman quietly spiralling — stuck in cycles of burnout, toxic relationships, and a nervous system always on edge. I tried the breathwork classes, journaling, reiki,  emotional detox retreats in Bali, vision boards — but nothing landed. I still felt stuck.

<br/>

Until I stopped trying to fix myself, and started to FEEL myself. I quit my job, flew to India, and immersed myself in the ancient practice of Asana, Kriya, Breathwork, Meditation, Mantra, Yogic Philosophy & SomaticPractises — and everything shifted. 

<br/>

I experienced what I now call my MAHA Awakening. One word: Yoga — not the kind you do for fitness, but the kind that brings you home to who you really are.

<br/>

MAHA Collective was born from that moment — a space where the path from surviving to thriving becomes real, embodied, and alive. 
<br/>
This is more than just a yoga membership.
 It’s a homecoming. To your body. To your truth. To your Self.
 </p>

              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="relative px-28 bg-[#d8d6c7] flex flex-col justify-center h-[45vh]">
        <div className="w-full mx-auto text-center italic leading-10 tracking-wide text-[#ff4d14] text-3xl font-baskervville py-28">
          <h2 className="mb-1">This is the space I wish I had when I was doing all the<br/> “right” things ... but still felt stuck, lonley and tired.</h2>
        </div>
      </section>

      <section className="relative w-full h-screen overflow-hidden bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Right side - Image with ALESSANDRA text overlay */}
          <div className="relative h-full bg-[#b0ad9c]">
            <img
              src="/images/a-note-from-ale.jpeg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-full object-cover py-8 px-8"
            />

            {/* ALESSANDRA Vertical Text Overlay */}
            <div className="absolute top-1/2 right-0 -translate-y-[50%] translate-x-[0%] md:-translate-y-[65%] h-full pointer-events-none z-20 flex items-center">
              <span
                className="font-libre text-[4vw] md:text-[5vw] text-sun"
                style={{
                  letterSpacing: "0.05em",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                }}
              >
                ALESSANDRA
              </span>
            </div>
          </div>

          <div className="bg-[#b0ad9c] max-h-screen flex justify-center items-center">
            <div className="max-w-lg px-4">
              <h2 className="text-2xl font-baskervville text-center px-4 font-bold leading-10 text-sun mb-6 tracking-wider">
                "Far better to live your own path imperfectly, than to live another's perfectly."
                <br/>— Bhagavad Gita
              </h2>

              <div className="space-y-4 text-[#f2ede8] font-libre px-8 mt-12">
                <p className="text-sm md:text-md leading-8 tracking-wide">           
                  I spent years stuck in loops of anxiety, low self-worth, and a nervous system in overdrive. I knew there had to be more. One word...YOGA. It became the path back to myself.
                </p>
                <p className="text-sm md:text-md leading-8 tracking-wide">
                  Now as a modern-day yogi, I honour both ancient rituals and everyday pleasures. My mornings begin with puja and meditation, and some evenings end with a glass of wine. 
                  <br/>It's all sacred.
                </p>
                <p className="text-sm md:text-md leading-8 tracking-wide">
                  Maha Collective was born from this journey. A space where discipline meets delight, and transformation is deeply embodied. Rooted in the Himalayan Yog-Vedantic tradition, it brings together the tools, wisdom, and practices that changed my life, now here to help you be radically alive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[#b0ad9c]">
        <div className="flex justify-center items-start gap-16 my-12">
          <div className="w-64 h-64 flex items-start justify-center">
            <img
              src="/images/maha-collective-logo.png"
              alt="MAHA Collective Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-2xl md:leading-[2.6rem] font-baskervville font-normal text-center text-[#f2ede8] tracking-widest leading-10">
          My teaching is deeply rooted in the Indian <br/>yogic tradition, with RYS certified training<br/> in Hatha Yoga, Pranayama, Kriya, Mantra,<br/> Himalayan Kundalini, Naad (sound), Laya<br/> movements, Yin Yoga, Philosophy, Sacred<br/> Ritual, and ongoing study of The Vedas.
          </h2>
        </div>

        {/* <div className="bg-sun py-1 overflow-hidden w-full absolute left-0 bottom-0">
          <div className="whitespace-nowrap animate-marquee">
            {Array.from({ length: 14 }, (_, i) => (
              <p
                key={i}
                className="text-[#d9d6c7] px-8 font-libre text-sm tracking-wider inline-block"
              >
                JOIN THE COLLECTIVE. LIVE MAHA.
              </p>
            ))}
          </div>
        </div> */}
      </section>

      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#b0ad9c]">
        {/* Content */}
        <div className="relative z-10 px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-baskervville font-normal text-left text-[#f2ede8] tracking-widest leading-[2.8]">
            Maha (मह) in Sanskrit means Great.<br />
            Collective is a community rising together.
          </h2>
        </div>

        <div className="mt-44 flex justify-center">
          <WavyLine />
        </div>


        {/* <div className="bg-[#d9d6c7] py-1 overflow-hidden w-full absolute left-0 bottom-0">
          <div className="whitespace-nowrap animate-marquee">
            {Array.from({ length: 14 }, (_, i) => (
              <p
                key={i}
                className="text-[#381f0f] px-8 font-libre text-sm tracking-wider inline-block"
              >
                OUR MAHA STORY.
              </p>
            ))}
          </div>
        </div> */}
      </section>

      <section className="relative h-screen px-4 bg-[#b0ad9c] flex flex-col justify-center">
        <div className="w-full mx-auto text-center">
          <h2 className="text-5xl font-tan-meringue text-[#ff4d14] mb-1">LIVE MAHA</h2>
          <p className="text-xl text-[#ff4d14] font-libre italic mb-6">/liv 'mä-hä/ verb</p>

          <div className="space-y-2 max-w-xs mx-auto text-left text-white font-libre text-sm md:text-sm leading-relaxed mb-6">
            <p className="text-[#f2ede8]">To live greatly—awake, rooted, and in flow.</p>
            <p className="text-[#f2ede8]">To embody your highest Self, your truest nature.</p>
            <p className="text-[#f2ede8]">To honour sacred balance—between action and surrender,</p>
            <p className="text-[#f2ede8]">strength and softness.</p>
            <p className="text-[#f2ede8]">To move with intention, feel deeply, and connect fully.</p>
            <p className="text-[#f2ede8]">To bring the sacred into the everyday.</p>
          </div>

          
          <div className="mx-auto mt-20">
            <h3 className="text-2xl font-baskervville italic text-center text-[#ff4d14] leading-10">Through powerful yogic practise, we help you live MAHA everyday.</h3>
          </div>

          <div className="py-1 overflow-hidden w-full mt-36">
          <div className="whitespace-nowrap animate-marquee">
            {Array.from({ length: 14 }, (_, i) => (
              <p
                key={i}
                className="text-[#d9d6c7] px-8 font-baskervville italic text-sm tracking-wider inline-block"
              >
                WELCOME TO MAHA COLLECTIVE.
              </p>
            ))}
          </div>
        </div>
        </div>
      </section>
      <SocialMediaSection />
      <Footer />
    </div>
  )
}
