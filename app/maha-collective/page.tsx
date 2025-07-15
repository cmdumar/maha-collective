"use client"

import type React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/image"
import ThreeColumnGridSection from "../components/ThreeColumnGridSection"
import TestimonialsSection from "../components/TestimonialsSection"
import SocialMediaSection from "../components/SocialMediaSection"

export default function MahaMethod() {
  return (
    <div className="flex flex-col min-h-screen bg-sand font-baskervville">
      <Navbar />

      <section className="relative h-screen w-full bg-sand">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/maha-method-min.jpg"
            alt="MAHA Method Background"
            fill
            className="object-cover"
            style={{ objectPosition: "50% 80%" }}
            priority
            quality={100}
          />
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black/30"></div> */}
                </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-start">
          <div className="max-w-4xl mx-auto px-4 text-center mt-24">
            <h1 className="text-4xl md:text-6xl font-baskervville font-normal text-[#f2ede8] mb-6 tracking-wide">
              THE MAHA Method
            </h1>  
          </div>
        </div>

        <div className="bg-[#b0ad9c] py-1 overflow-hidden w-full absolute left-0 bottom-0">
          <div className="whitespace-nowrap animate-marquee">
            {Array.from({ length: 14 }, (_, i) => (
              <p
                key={i}
                className="text-[#d9d6c7] px-8 font-libre text-sm tracking-wider inline-block"
              >
                THE MAHA METHOD.
              </p>
            ))}
              </div>
            </div>
          </section>

      <section className="relative h-screen w-full bg-[#b0ad9c]">
        <div className="max-w-4xl mx-auto px-4 h-full z-10 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Phone with video */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-[250px] h-[500px] bg-black rounded-[2.5rem] shadow-lg border-4 border-[#222] flex items-center justify-center overflow-hidden">
              {/* Speaker notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-2 bg-gray-700 rounded-full opacity-60 z-10" />
              {/* Dummy portrait video */}
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-[2rem]"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
          {/* Text content */}
          <div className="flex-1 flex flex-col items-start justify-center max-w-md">
            <h2 className="text-xl font-tan-meringue font-normal text-[#f2ede8] mb-6 tracking-wide">
              From surviving to thriving....
            </h2>
            <p 
              className="text-lg md:text-lg
              font-baskervville
              font-normal
              text-[#f2ede8]
              mb-6
              tracking-wider
              text-left">
              Tried, tested and trusted by hundreds, the MAHA method guides you from disconnection to deep embodiment, from survival mode into thrive mode.
            </p>
          </div>
        </div>
      </section>

      <ThreeColumnGridSection sectionVariant="maha-collective" />

      <TestimonialsSection />

      <SocialMediaSection />

      <Footer />
    </div>
  )
}
