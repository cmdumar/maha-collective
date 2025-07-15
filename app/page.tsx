"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SocialMediaSection from "./components/SocialMediaSection"
// import ThreeColumnGridSection from "./components/ThreeColumnGridSection"
import TestimonialsSection from "./components/TestimonialsSection"

export default function Home() {
  const [openMahaDropdown, setOpenMahaDropdown] = useState<number | null>(null)
  const [openIWantToDropdown, setOpenIWantToDropdown] = useState<boolean>(false)

  const scrollToPath = () => {
    const pathSection = document.getElementById("path-section")
    if (pathSection) {
      pathSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen font-libre">
      <Navbar />

      {/* Hero Content */}
      <header className="relative min-h-screen flex flex-col">
        <div className="relative flex-grow flex flex-col items-center justify-center pt-20">
          {/* <div className="absolute inset-0 z-0 bg-gradient-to-b from-sun/5 to-sun/5"></div> */}

          {/* Floating elements for visual interest */}
          {/* <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-light-sage/10 animate-float"></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-16 h-16 rounded-full bg-sun/10 animate-float"
            style={{ animationDelay: "2s" }}
          ></div> */}

  <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          >
            <source src="https://videos.pexels.com/video-files/2098988/2098988-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-[#b0ad9c]/50"></div> */}
        </div>

          {/* Hero Text */}
          <div className="relative z-10 text-center mt-24 px-4 mb-16">
            <h1 className="text-2xl md:text-2xl font-baskervville italic text-white mb-6">By Alessandra</h1>
            <h1 className="text-4xl md:text-5xl font-baskervville font-normal text-white mb-6">Welcome to<br/> MAHA Collective</h1>
          </div>

          {/* Scroll Down Indicator */}
          {/* <div className="scroll-indicator" onClick={scrollToPath}>
            <span className="scroll-indicator-text text-soil">scroll down</span>
            <ChevronDown className="scroll-indicator-arrow text-sun animate-bounce-slow" />
          </div> */}

          {/* <div className="bg-[#b0ad9c] py-1 overflow-hidden w-full absolute left-0 bottom-0">
        <div className="whitespace-nowrap animate-marquee">
          {Array.from({ length: 14 }, (_, i) => (
            <p
              key={i}
              className="text-[#d9d6c7] px-8 font-libre text-sm tracking-wider inline-block"
            >
              WELCOME TO MAHA COLLECTIVE.
            </p>
          ))}
        </div>
      </div> */}
        </div>
      </header>

      <section className="relative px-28 bg-[#d8d6c7] flex flex-col justify-center h-[75vh]">
        <div className="w-full mx-auto text-left text-[#ff4d14] text-5xl font-baskervville py-28">
          <h2 className="mb-1">We don't do 'wellness.'</h2>
          <h2 className="mb-1 mt-4">We do wholeness.</h2> 
        </div>

        <div className="flex justify-end">
          <button className="bg-transparent border border-[#ff4d14] text-[#ff4d14] px-2 py-4 text-md rounded-md uppercase">
            <p>The 'Not Just Yoga' Membership</p>
          </button>
        </div>
      </section>

      {/* LIVE MAHA Definition Section */}
      {/* <section className="relative h-screen px-4 bg-[#b0ad9c] flex flex-col justify-start">
        <div className="w-full mx-auto text-center relative pt-24">
          
          <h2 className="text-5xl font-tan-meringue text-[#f2ede8] mb-1">We don't do 'wellness.'</h2>
          <h2 className="text-5xl font-tan-meringue text-[#f2ede8] mb-1 mt-4">We do wholeness.</h2>

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
        </div> */}

          {/* Definition Lines */}
          {/* <div className="space-y-2 max-w-xs mx-auto text-left text-white font-libre text-sm md:text-sm leading-relaxed mb-6">
            <p className="text-[#f2ede8]">To live greatly—awake, rooted, and in flow.</p>
            <p className="text-[#f2ede8]">To embody your highest Self, your truest nature.</p>
            <p className="text-[#f2ede8]">To honour sacred balance—between action and surrender,</p>
            <p className="text-[#f2ede8]">strength and softness.</p>
            <p className="text-[#f2ede8]">To move with intention, feel deeply, and connect fully.</p>
            <p className="text-[#f2ede8]">To bring the sacred into the everyday.</p>
          </div> */}

          {/* Conclusion */}
          {/* <div className="mx-auto mt-20">
            <p className="text-[#f2ede8] font-libre font-bold text-lg leading-relaxed">
              Through powerful yogic practices & daily rituals,
              we illuminate the path within—
              <br />
              so you can live MAHA, every day.
            </p>
          </div> */}
        {/* </div>
      </section> */}

      {/* LIVE MAHA Definition Section */}

      {/* Three Column Grid Section */}
      {/* <ThreeColumnGridSection sectionVariant="home" /> */}

      <section className="relative h-screen bg-[#b0ad9c] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#b0ad9c] max-h-screen flex justify-center items-center">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-5xl font-baskervville italic px-4 text-center text-[#f2ede8] mb-6 tracking-wider">
              Choose your path.
            </h2>

            {/* I want to dropdown */}
            <div className="px-8 pt-8">
              <button
                className="flex items-center justify-center w-full text-left group mb-4"
                onClick={() => setOpenIWantToDropdown(!openIWantToDropdown)}
              >
                <span className="text-3xl md:text-4xl text-[#f2ede8] font-baskervville text-center tracking-wide">
                  I want to
                </span>
                <span className={`text-[#f2ede8] text-xl font-bold transition-transform duration-300 ml-12 ${
                  openIWantToDropdown ? 'rotate-45' : 'rotate-0'
                }`}>
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIWantToDropdown ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-4 text-[#f2ede8] text-center font-baskervville">
                    <a 
                      href="/maha-collective" 
                      className="block text-lg leading-8 tracking-wide hover:text-[#ff4d14] transition-colors duration-300 cursor-pointer"
                    >
                      Feel more love.
                    </a>

                    <a 
                      href="/our-story" 
                      className="block text-lg leading-8 tracking-wide hover:text-[#ff4d14] transition-colors duration-300 cursor-pointer"
                    >
                      Feel clear & free.
                    </a>

                    <a 
                      href="/desire" 
                      className="block text-lg leading-8 tracking-wide hover:text-[#ff4d14] transition-colors duration-300 cursor-pointer"
                    >
                      Feel radically alive.
                    </a>

                    <a 
                      href="#testimonials" 
                      className="block text-lg leading-8 tracking-wide hover:text-[#ff4d14] transition-colors duration-300 cursor-pointer"
                    >
                      Feel grounded.
                    </a>

                    <a 
                      href="#contact" 
                      className="block text-lg leading-8 tracking-wide hover:text-[#ff4d14] transition-colors duration-300 cursor-pointer"
                    >
                      Nourish my nervous system.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-screen flex items-center justify-center">
          <img
            src="/images/movement.jpeg"
            alt="Woman in yoga backbend pose"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center" }}
          />
          {/* MAHA Method Vertical Text Overlay */}
          {/* <div className="absolute left-12 top-0 h-full flex items-center pointer-events-none z-20"> */}
            {/* <span
              className="font-libre text-[#ff4d14]"
              style={{
                fontSize: "5vw",
                letterSpacing: "0.05em",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                whiteSpace: "nowrap",
                lineHeight: 1,
                marginLeft: "0.2em",
              }}
            >
              MAHA Method
            </span> */}
          {/* </div> */}
        </div>
      </div>
      </section>

      {/* The Maha Method Section */}
    <section className="relative h-screen w-full bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-screen flex items-end justify-center">
            <img
              src="/images/movement.jpeg"
              alt="Woman in yoga backbend pose"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center" }}
            />
            {/* MAHA Method Vertical Text Overlay */}
            <div className="absolute bottom-14 h-full flex items-end justify-center pointer-events-none z-20">
              <span
                className="font-baskervville text-[#f5f5f5]"
                style={{
                  fontSize: "3.5vw",
                  // letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                  lineHeight: 1.2,
                  marginLeft: "0.2em",
                }}
              >
                How I went from<br/> survivng<br/> to thriving...
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between min-h-screen px-8 md:px-16 py-12">
            {/* <div className="flex flex-col justify-between items-center mb-8 mt-4"> */}
              {/* <div className="mt-4">
                <p className="text-lg md:text-lg text-[#f2ede8] font-libre leading-relaxed tracking-wider mb-2">
                    Ancient Wisdom.
                    </p>
                  <p className="text-lg md:text-lg text-[#f2ede8] font-libre leading-relaxed tracking-wider mb-2">
                    Backed by Science.
                  </p>
                  <p className="text-lg md:text-lg text-[#f2ede8] font-libre leading-relaxed tracking-wider mb-0">
                    Designed for Modern Life.
                  </p>
              </div> */}
              {/* <div className="rounded-lg w-[150px] h-[150px] flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/maha-collective-logo.png"
                  alt="MAHA Collective Logo"
                  className="h-full w-full object-contain"
                />
              </div> */}
            {/* </div> */}

            {/* Main content */}
            <div className="flex flex-col items-center justify-center flex-1">
              <h2 className="text-3xl md:text-5xl mb-12 font-baskervville italic px-4 text-center text-[#f5f5f5] tracking-wider">
                The MAHA Method
              </h2>
              {/* <p className="text-base md:text-lg text-[#f2ede8] font-baskervville font-light leading-[3rem] tracking-[0.15em] text-left mb-12 max-w-sm">
                The MAHA Method is our secret sauce.
                It is the cornerstone of all MAHA practises,
                and is the path from SURVIVING to{" "}
                THRIVING.
              </p> */}

              {/* Three key points as dropdowns */}
              <div className="space-y-8 w-full flex flex-col justify-center items-center">
                {/* Dropdown 1 */}
                <div>
                  <button
                    className="flex items-center justify-center w-full text-left group"
                    onClick={() => setOpenMahaDropdown(openMahaDropdown === 1 ? null : 1)}
                  >
                    <span className="flex items-center">
                      <span className="text-[#f5f5f5] text-xl mr-4">+</span>
                      <span className="text-xl text-[#f5f5f5] font-baskervville">
                        Integrated Practise.
                      </span>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      openMahaDropdown === 1 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mt-4 pl-10 text-[#3a2c1a] text-base text-md font-libre">
                        A complete and integrated path, weaving together movement, breathwork, kriya, meditation, mantra
                        and wisdom. The MAHA Method is designed to awaken your highest Self and create transformation
                        from the inside out.
                      </div>
                    </div>
                  </div>
                </div>
                {/* Dropdown 2 */}
                <div>
                  <button
                    className="flex items-center justify-center w-full text-left group"
                    onClick={() => setOpenMahaDropdown(openMahaDropdown === 2 ? null : 2)}
                  >
                    <span className="flex items-center">
                      <span className="text-xl text-[#f5f5f5] mr-4">+</span>
                      <span className="text-xl text-[#f5f5f5] font-baskervville">
                        A Whole You Approach.
                      </span>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      openMahaDropdown === 2 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mt-4 pl-10 text-[#3a2c1a] text-base text-md font-libre">
                        You are a whole being made of five interconnected layers. The MAHA Method honours all of you.
                        Each practice is intentionally designed to influence your physical, mental, emotional,
                        energetic, and spiritual body. It brings together asana, mantra, kriya, breathwork, and somatic
                        movement… each a key, but together a gateway.
                      </div>
                    </div>
                  </div>
                </div>
                {/* Dropdown 3 */}
                <div>
                  <button
                    className="flex items-center justify-center w-full text-left group"
                    onClick={() => setOpenMahaDropdown(openMahaDropdown === 3 ? null : 3)}
                  >
                    <span className="flex items-center">
                      <span className="text-xl text-[#f5f5f5] mr-4">+</span>
                      <span className="text-xl text-[#f5f5f5] font-baskervville">
                        Ancient Wisdom. Backed By Science.
                      </span>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      openMahaDropdown === 3 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mt-4 pl-10 text-[#3a2c1a] text-base font-libre">
                        The MAHA Method is a unique alchemy of movement, breath, kriya, and meditation, carefully
                        engineered to influence the biochemistry of your body. Research shows that practising in such a
                        way regulates your nervous system, reduces stress hormones, and rewires the brain for greater
                        clarity, resilience, and emotional balance. The MAHA Method activates the parasympathetic
                        system, supports neuroplasticity, and helps release stored tension in the body, making lasting
                        transformation not just possible, but measurable.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="bg-[#f2ede9] px-9 py-2 text-md mt-16 rounded-md text-[#b1ad9c] uppercase shadow-md">
                <p>Learn more</p>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* A Note from the Founder Section */}
      {/* <section className="relative h-screen w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          
          <div className="bg-[#b0ad9c] max-h-screen flex justify-center items-center">
            <div className="max-w-lg">
              <h2 className="text-2xl font-tan-meringue px-4 font-bold text-[#f2ede8] mb-6 tracking-wider">
                WITH LOVE FROM...
              </h2>

              <div className="space-y-4 text-[#f2ede8] font-libre px-8">
                <p className="text-md leading-8 tracking-wide">
                  I'm a modern yogi, devoted to living and sharing the teachings that helped me go from SURVIVING to
                  THRIVING.
                </p>

                <p className="text-md leading-8 tracking-wide">
                  Each MAHA 21 series was created from my own journey, parts of myself I needed to heal, embody, or
                  bring into alignment.
                </p>

                <p className="text-md leading-8 tracking-wide">
                  Now, MAHA 21 exists for you, to evolve and embody your highest Self everyday. Xo
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <img
              src="/images/a-note-from-ale.jpeg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-1/2 left-0 -translate-y-[50%] -translate-x-[50%] md:-translate-y-[65%] h-full pointer-events-none z-20 flex items-center">
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
        </div>
      </section> */}

      {/* Testimonials Section */}
      <TestimonialsSection />

      <SocialMediaSection />
      <Footer />

      <style jsx>{`
  @font-face {
    font-family: 'Tan Meringue';
    src: url('/fonts/TAN MERINGUE.ttf') format('truetype'),
         url('/fonts/TAN MERINGUE.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  .testimonial-carousel {
    position: relative;
    min-height: 150px;
  }
  
  .testimonial-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  
  .testimonial-item.active {
    opacity: 1;
  }
`}</style>

      <script
        dangerouslySetInnerHTML={{
          __html: `
    document.addEventListener('DOMContentLoaded', function() {
      const testimonials = document.querySelectorAll('.testimonial-item');
      const dots = document.querySelectorAll('.testimonial-dot');
      let currentIndex = 0;
      
      function showNextTestimonial() {
        testimonials[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('bg-[#2d1f12]/50');
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('bg-[#2d1f12]/50');
      }
      
      // Change testimonial every 4 seconds
      setInterval(showNextTestimonial, 4000);
    });
  `,
        }}
      />
    </div>
  )
}
