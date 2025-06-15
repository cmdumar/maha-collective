"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ChevronDown, Mail } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [email, setEmail] = useState("")
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const [showMahaDropdown, setShowMahaDropdown] = useState(false)
  const [openMahaDropdown, setOpenMahaDropdown] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToPath = () => {
    const pathSection = document.getElementById("path-section")
    if (pathSection) {
      pathSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    // Reset form
    setEmail("")
    // Show success message or toast
    alert("Thank you for signing up to our newsletter!")
  }

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  const desires = [
    { text: "I want to heal my heart.", id: 1 },
    { text: "I want to feel radically alive.", id: 2 },
    { text: "I want to express myself", id: 3 },
    { text: "I want to ground and centre myself.", id: 4 },
    { text: "I want to have a clear and positive mind.", id: 5 },
    { text: "I want to regulate my nervous system.", id: 6 },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#d9d6c7] font-libre">
      {/* Header with Navigation */}
      <header className="relative min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <nav
          className={`w-full z-50 transition-all duration-500 ${
            isScrolled ? "bg-light-sage/95 py-2 shadow-md" : "bg-light-sage py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto flex justify-center items-center px-4 lg:px-6">
            <div className="flex items-center justify-center">
              {/* Logo with decorative elements */}
              <Link href="/" className="flex items-center group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-sun/0 via-sun/30 to-sun/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <img src="/images/menu-logo.png" alt="MAHA Collective" className="h-32 w-auto relative" />
              </Link>

              {/* Desktop Navigation - Now with decorative separators */}
              <div className="hidden lg:flex lg:items-center ml-8">
                <div className="flex items-center space-x-1">
                  <Link
                    href="/our-story"
                    className="text-soil hover:text-sun transition-all duration-300 font-libre text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-white/20"
                  >
                    Our MAHA Story
                  </Link>

                  <span className="text-sun/40">•</span>
                  <Link
                    href="/maha-collective"
                    className="text-soil hover:text-sun transition-all duration-300 font-libre text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-white/20"
                  >
                    The MAHA Method
                  </Link>

                  <span className="text-sun/40">•</span>

                  {/* MAHA 21 Dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={() => setShowMahaDropdown(true)}
                    onMouseLeave={() => setShowMahaDropdown(false)}
                  >
                    <button className="text-soil hover:text-sun transition-all duration-300 font-libre text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-white/20 flex items-center">
                      MAHA 21
                      <ChevronDown className="w-3 h-3 ml-1" />
                    </button>

                    {showMahaDropdown && (
                      <div className="absolute top-full left-0 mt-0 w-80 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-sun/20 py-2 z-50">
                        {desires.map((desire) => (
                          <Link
                            key={desire.id}
                            href={`/desire/${desire.id}`}
                            className="block px-4 py-3 text-soil hover:text-sun hover:bg-sun/10 transition-colors font-libre text-sm"
                          >
                            {desire.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <span className="text-sun/40">•</span>
                  <Link
                    href="#"
                    className="text-soil hover:text-sun transition-all duration-300 font-libre text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-white/20"
                  >
                    MAHA Masterclasses
                  </Link>
                  <span className="text-sun/40">•</span>
                  <Link
                    href="#"
                    className="text-soil hover:text-sun transition-all duration-300 font-libre text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-white/20"
                  >
                    MAHA Community
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button - Positioned to the right with enhanced styling */}
            <div className="lg:hidden absolute right-4">
              <button
                className="p-2 rounded-full bg-white/30 backdrop-blur-sm border border-sun/20 focus:outline-none focus:ring-2 focus:ring-sun transition-all duration-300 hover:bg-white/50"
                onClick={() => {
                  const menu = document.getElementById("mobile-menu")
                  if (menu) {
                    menu.classList.toggle("hidden")
                  }
                }}
              >
                <svg className="h-5 w-5 text-soil" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Enhanced styling */}
          <div
            id="mobile-menu"
            className="hidden w-full lg:hidden mt-4 bg-light-sage/90 backdrop-blur-sm border-t border-b border-sun/20 py-3 animate-in fade-in duration-300"
          >
            <div className="flex flex-col space-y-1 px-2 pt-1 pb-2 items-center">
              <Link
                href="/our-story"
                className="text-soil hover:text-sun transition-colors font-libre text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-white/20 w-48 text-center"
              >
                Our MAHA Story
              </Link>

              {/* Mobile MAHA 21 Section */}
              <div className="w-48">
                <p className="text-soil font-libre text-xs tracking-wider uppercase py-2 px-4 text-center border-b border-sun/20">
                  MAHA 21
                </p>
                {desires.map((desire) => (
                  <Link
                    key={desire.id}
                    href={`/desire/${desire.id}`}
                    className="block text-soil hover:text-sun transition-colors font-libre text-xs py-2 px-6 text-center hover:bg-white/20"
                  >
                    {desire.text}
                  </Link>
                ))}
              </div>

              <Link
                href="/maha-collective"
                className="text-soil hover:text-sun transition-colors font-libre text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-white/20 w-48 text-center"
              >
                The MAHA Method
              </Link>
              <Link
                href="#"
                className="text-soil hover:text-sun transition-colors font-libre text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-white/20 w-48 text-center"
              >
                MAHA Masterclasses
              </Link>
              <Link
                href="#"
                className="text-soil hover:text-sun transition-colors font-libre text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-white/20 w-48 text-center"
              >
                MAHA Community
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative flex-grow flex flex-col items-center justify-center bg-sand pt-20">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-sun/5 to-sun/5"></div>

          {/* Floating elements for visual interest */}
          <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-light-sage/10 animate-float"></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-16 h-16 rounded-full bg-sun/10 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Hero Text */}
          <div className="relative z-10 text-center mt-24 px-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-libre font-normal text-sun mb-6">Welcome to MAHA Collective.</h1>
            <p className="text-2xl md:text-3xl text-soil max-w-2xl mx-auto font-libre">
              A journey back to your inherit Greatness.
            </p>
          </div>

          {/* Scroll Down Indicator */}
          <div className="scroll-indicator" onClick={scrollToPath}>
            <span className="scroll-indicator-text text-soil">scroll down</span>
            <ChevronDown className="scroll-indicator-arrow text-sun animate-bounce-slow" />
          </div>

          <div className="bg-[#b0ad9c] py-1 overflow-hidden w-full absolute left-0 bottom-0">
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
      </div>
        </div>
      </header>

      {/* LIVE MAHA Definition Section */}
      <section className="relative h-screen px-4 bg-[#b0ad9c] flex flex-col justify-center">
        <div className="w-full mx-auto text-center">
          {/* Title */}
          <h2 className="text-5xl font-tan-meringue text-[#ff4d14] mb-1">LIVE MAHA</h2>
          <p className="text-xl text-[#ff4d14] font-libre italic mb-6">/liv 'mä-hä/ verb</p>

          {/* Definition Lines */}
          <div className="space-y-2 max-w-xs mx-auto text-left text-white font-libre text-sm md:text-sm leading-relaxed mb-6">
            <p className="text-[#f2ede8]">To live greatly—awake, rooted, and in flow.</p>
            <p className="text-[#f2ede8]">To embody your highest Self, your truest nature.</p>
            <p className="text-[#f2ede8]">To honour sacred balance—between action and surrender,</p>
            <p className="text-[#f2ede8]">strength and softness.</p>
            <p className="text-[#f2ede8]">To move with intention, feel deeply, and connect fully.</p>
            <p className="text-[#f2ede8]">To bring the sacred into the everyday.</p>
          </div>

          {/* Conclusion */}
          <div className="mx-auto mt-20">
            <p className="text-[#f2ede8] font-libre font-bold text-lg leading-relaxed">
              Through powerful yogic practices & daily rituals,
              we illuminate the path within—
              <br />
              so you can live MAHA, every day.
            </p>
          </div>
        </div>

        {/* Bottom Banner
        <div className="bg-sun py-2 overflow-hidden w-full absolute left-0 bottom-0">
          <div className="whitespace-nowrap">
            <p className="text-[#d9d6c7] font-libre text-md tracking-wider animate-marquee inline-block">
              LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE
              MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA.
            </p>
          </div>
        </div> */}
      </section>

{/*
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="text-center group">
                    <h2 className="text-2xl lg:text-3xl font-light text-stone-600 mb-8 tracking-wide">MAHA 21</h2>
                    <div className="relative mb-8 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <Image
                            width={400}
                            height={300}
                            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center" 
                            alt="Person meditating on beach" 
                            className="w-full h-64 lg:h-80 object-cover"
                        />
                        <div className="gradient-overlay absolute inset-0"></div>
                    </div>
                    
                    <div className="space-y-2">
                        <p className="text-stone-600 text-lg font-light">Daily guided practices for 21 days.</p>
                        <p className="text-stone-600 text-lg font-light">Simple. Potent. Life-changing.</p>
                    </div>
                </div>

                <div className="text-center group">
                    <h2 className="text-2xl lg:text-3xl font-light text-stone-600 mb-8 tracking-wide">MAHA MASTERCLASSES</h2>
                    
                    <div className="relative mb-8 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <Image
                            width={400}
                            height={300}
                            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center" 
                            alt="Peaceful meditation scene" 
                            className="w-full h-64 lg:h-80 object-cover"
                        />
                        <div className="gradient-overlay absolute inset-0"></div>
                    </div>
                    
                    <div className="space-y-2">
                        <p className="text-stone-600 text-lg font-light">Deeper tools and insights exploring themes like</p>
                        <p className="text-stone-600 text-lg font-light">abundance, clarity, and self-worth - learn at</p>
                        <p className="text-stone-600 text-lg font-light">your own pace or join us live.</p>
                    </div>
                </div>

                <div className="text-center group">
                    <h2 className="text-2xl lg:text-3xl font-light text-stone-600 mb-8 tracking-wide">MAHA COMMUNITY</h2>
                    
                    <div className="relative mb-8 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <Image
                            width={400}
                            height={300}
                            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center" 
                            alt="Serene beach meditation" 
                            className="w-full h-64 lg:h-80 object-cover"
                        />
                        <div className="gradient-overlay absolute inset-0"></div>
                    </div>
                    
                    <div className="space-y-2">
                        <p className="text-stone-600 text-lg font-light">Live experiences to ground, awaken and</p>
                        <p className="text-stone-600 text-lg font-light">connect.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-sun py-2 overflow-hidden w-full absolute left-0 bottom-0">
          <div className="whitespace-nowrap">
            <p className="text-[#d9d6c7] font-libre text-md tracking-wider animate-marquee inline-block">
              LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE
              MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA. LIVE MAHA.
            </p>
          </div>
        </div>
    </section> */}


<div className="bg-[#b0ad9c] min-h-screen relative">
      {/* Main Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Three Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            
            {/* MAHA 21 */}
            <div className="text-center group flex flex-col h-full">
              <h2 className="text-xl md:text-2xl font-libre text-[#f2ede8] mb-8 tracking-wide">
                MAHA 21
              </h2>
              
              {/* Image Card - Fixed Height */}
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

              {/* Description - Flex grow to fill remaining space */}
              <div className="flex-grow flex flex-col justify-start space-y-2">
                <p className="text-[#f2ede8] text-sm font-light">
                  Daily guided practices for 21 days.
                </p>
                <p className="text-[#f2ede8] text-sm font-light">
                  Simple. Potent. Life-changing.
                </p>
              </div>
            </div>

            {/* MAHA MASTERCLASSES */}
            <div className="text-center group flex flex-col h-full">
              <h2 className="text-xl md:text-2xl font-light text-[#f2ede8] mb-8 tracking-wide">
                MAHA MASTERCLASSES
              </h2>
              
              {/* Image Card - Fixed Height */}
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
              
              {/* Description - Flex grow to fill remaining space */}
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

            {/* MAHA COMMUNITY */}
            <div className="text-center group flex flex-col h-full">
              <h2 className="text-xl md:text-2xl font-light text-[#f2ede8] mb-8 tracking-wide">
                MAHA COMMUNITY
              </h2>
              {/* Image Card - Fixed Height */}
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
              
              {/* Description - Flex grow to fill remaining space */}
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

        {/* Bottom Banner */}
      
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


    {/* The Maha Method Section - NEW DESIGN */}
    <section className="relative h-screen w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left side - Image with MAHA Method text overlay */}
          <div className="relative h-screen flex items-center justify-center">
            <img
              src="/images/movement.jpeg"
              alt="Woman in yoga backbend pose"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center" }}
            />
            {/* MAHA Method Vertical Text Overlay */}
            <div className="absolute left-12 top-0 h-full flex items-center pointer-events-none z-20">
              <span
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
              </span>
            </div>
          </div>

          <div className="bg-[#b0ad9c] flex flex-col justify-between min-h-screen px-8 md:px-16 py-12">
            <div className="flex justify-between items-start mb-8 mt-4">
              <div className="mt-4">
                <p className="text-lg md:text-lg text-[#f2ede8] font-libre leading-relaxed tracking-wider mb-2">
                    Ancient Wisdom.
                    </p>
                  <p className="text-lg md:text-lg text-[#f2ede8] font-libre leading-relaxed tracking-wider mb-2">
                    Backed by Science.
                  </p>
                  <p className="text-lg md:text-lg text-[#f2ede8] font-libre leading-relaxed tracking-wider mb-0">
                    Designed for Modern Life.
                  </p>
              </div>
              <div className="rounded-lg w-[150px] h-[150px] flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/maha-collective-logo.png"
                  alt="MAHA Collective Logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Main content */}
            <div className="flex flex-col items-center justify-center flex-1">
              <p className="text-base md:text-lg text-[#f2ede8] font-libre font-light leading-[1.96] tracking-widest text-left mb-12 max-w-sm">
                The MAHA Method is our secret sauce.
                It is the cornerstone of all MAHA practises,
                and is the path from SURVIVING to{" "}
                THRIVING.
              </p>

              {/* Three key points as dropdowns */}
              <div className="space-y-8 w-full flex flex-col justify-center items-center">
                {/* Dropdown 1 */}
                <div>
                  <button
                    className="flex items-center justify-center w-full text-left group"
                    onClick={() => setOpenMahaDropdown(openMahaDropdown === 1 ? null : 1)}
                  >
                    <span className="flex items-center">
                      <span className="text-[#d9d6c7] text-md mr-4 font-bold">+</span>
                      <span className="text-md text-[#d9d6c7] font-libre font-semibold">
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
                      <span className="text-md text-[#d9d6c7] mr-4 font-bold">+</span>
                      <span className="text-md text-[#d9d6c7] font-libre font-semibold">
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
                      <span className="text-md text-[#d9d6c7] mr-4 font-bold">+</span>
                      <span className="text-md text-[#d9d6c7] font-libre font-semibold">
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
            </div>
          </div>
        </div>
        {/* Bottom Banner */}
        {/* <div className="bg-[#b0ad9c] py-2 overflow-hidden w-full absolute left-0 bottom-0">
          <div className="whitespace-nowrap">
            <p className="text-[#d9d6c7] font-libre text-md tracking-wider animate-marquee inline-block">
              BACKED BY SCIENCE. DESIGNED FOR MODERN LIFE ANCIENT WISDOM. BACKED BY SCIENCE. DESIGNED FOR MODERN LIFE
              ANCIENT WISDOM. BACKED BY SCIENCE. DESIGNED FOR MODERN LIFE ANCIENT WISDOM. BACKED BY SCIENCE. DESIGNED
              FOR MODERN LIFE ANCIENT WISDOM. BACKED BY SCIENCE. DESIGNED FOR MODERN LIFE ANCIENT WISDOM.
            </p>
          </div>
        </div> */}
      </section>

    {/* <section className="bg-stone-300 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center">
                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
                    <span className="text-stone-700 text-lg lg:text-xl font-light tracking-wider">LIVE MAHA.</span>
                    <span className="text-stone-700 text-lg lg:text-xl font-light tracking-wider">LIVE MAHA.</span>
                    <span className="text-stone-700 text-lg lg:text-xl font-light tracking-wider">LIVE MAHA.</span>
                    <span className="text-stone-700 text-lg lg:text-xl font-light tracking-wider">LIVE MAHA.</span>
                    <span className="text-stone-700 text-lg lg:text-xl font-light tracking-wider">LIVE MAHA.</span>
                    <span className="text-stone-700 text-lg lg:text-xl font-light tracking-wider">LIVE MAHA.</span>
                    <span className="text-stone-700 text-lg lg:text-xl font-light tracking-wider">LIVE MAHA.</span>
                </div>
            </div>
        </div>
    </section> */}

      {/* MAHA 21 Path Section */}
      {/* <section id="path-section" className="relative min-h-screen w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full">
          
          <div className="relative col-span-1 h-[33vh] md:h-auto min-h-[33vh] md:min-h-0">
            <img
              src="/images/maha-21-path.jpeg"
              alt="Woman in white outfit performing celebratory yoga pose on beach"
              className="w-full h-full object-cover min-h-screen md:min-h-0"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[45%] pointer-events-none z-10">
              <span
                className="font-libre text-[#ff4d14]"
                style={{
                  fontSize: "5vw",
                  letterSpacing: "0.1em",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  whiteSpace: "nowrap",
                }}
              >
                MAHA 21
              </span>
            </div>
          </div>
          <div className="col-span-1 bg-[#d9d6c7] flex flex-col justify-center items-center min-h-screen px-4 md:px-0">
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
              <div className="mb-12 mt-8 md:mt-0 text-center">
                <h3 className="text-3xl md:text-3xl font-tan-meringue font-normal text-[#381f0f] mb-4 leading-wide">
                  Your launchpad for evolution.
                </h3>
                <h3 className="text-3xl md:text-3xl font-tan-meringue font-normal text-[#381f0f] leading-wide">
                  Choose your path.
                </h3>
              </div>

              <div className="w-full flex flex-col divide-y divide-[#b0ad9c] bg-transparent">
                {desires.map((desire) => (
                  <Link
                    key={desire.id}
                    href={`/desire/${desire.id}`}
                    className="py-6 md:py-4 px-2 md:px-8 mx-12 flex items-center justify-center hover:bg-[#e6e3d3] transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    <span className="text-sm md:text-md text-[#523c2d] font-libre text-center tracking-wider">
                      {desire.text}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
        {/* Bottom Banner */}
        {/* <div className="bg-[#b0ad9c] py-1 overflow-hidden w-full absolute left-0 bottom-0"> */}
          {/* <div className="whitespace-nowrap">
            <p className="text-[#d9d6c7] font-libre text-sm tracking-wider animate-marquee inline-block">
              21 DAYS - MAHA 21 - 25 MINUTES X 21 DAYS - MAHA 21 - 25 MINUTES X 21 DAYS - MAHA 21 - 25 MINUTES X 21 DAYS
              - MAHA 21 - 25 MINUTES X 21 DAYS - MAHA 21 - 25 MINUTES X 21 DAYS - MAHA 21 - 25 MINUTES X 21 DAYS
            </p>
          </div> */}

        {/* <div className="whitespace-nowrap animate-marquee">
          {Array.from({ length: 14 }, (_, i) => (
            <p
              key={i}
              className="text-[#d9d6c7] px-8 font-libre text-sm tracking-wider inline-block"
            >
              MAHA 21 - 25 MINUTES X 21 DAYS
            </p>
          ))}
        </div>
        </div> */}

      {/* What is MAHA 21 Section - NEW DESIGN */}
      {/* <section className="relative h-screen w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
          
          <div className="relative bg-[#b0ad9c] flex flex-col gap-16 md:gap-12 sm:gap-4 px-2 md:px-6 py-8">
            
            <div className="max-w-xl mb-6">
              <h2 className="text-3xl md:text-3xl font-tan-meringue leading-tight text-[#f2ede8]">
                A guided 21-day journey
                <br />
                to your highest Self...
              </h2>
            </div>

            <div className="max-w-xl mb-6">
              <div className="space-y-2 text-[#f2ede8] font-libre">
                <p className="text-2xl md:text-2xl sm:text-lg">
                  One practice.
                </p>
                <p className="text-2xl md:text-2xl sm:text-lg">
                  25 minutes a day.
                </p>
                <p className="text-2xl md:text-2xl sm:text-lg">
                  For 21 days.
                </p>
                <p className="text-base md:text-lg font-thin opacity-80">
                  A powerful blend of Kriya, Breathwork, Movement, and Meditation. You'll attune to a new frequency—
                  <br />
                  clearing blocks, rewiring your system, and embodying the change you're ready to create.
                </p>
              </div>
            </div>

            <div className="max-w-xl mx-auto text-center">
              <p className="mb-1 text-md font-thin text-[#f2ede8] tracking-widest">Not sure where to begin?</p>
              <p className="text-lg text-[#f2ede8] tracking-widest mb-6">Take the quiz and find your path.</p>
              <Link href="#">
                <button className="bg-[#ff4d14] hover:bg-[#ff4d14]/90 text-white px-6 py-6 rounded-full font-libre tracking-wider transition-all text-mg shadow-md">
                  QUIZ NOW
                </button>
              </Link>
            </div>
          </div>
          <div className="relative h-full">
            <img
              src="/images/maha-21-radically-alive.jpeg"
              alt="Woman in white outfit performing yoga pose on beach"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>
        </div>
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 h-full w-16 pointer-events-none">
          <img src="/images/curved-line.png" alt="Curved divider" className="h-full w-full" />
        </div>
        <div className="bg-[#ff4d14] py-2 overflow-hidden w-full absolute left-0 bottom-0">
          <div className="whitespace-nowrap">
            <p className="text-[#d9d6c7] font-libre text-md tracking-wider animate-marquee inline-block">
              21 DAYS - MAHA 21 - 25 MINUTES X 21 DAYS - MAHA 21 - 25 MINUTES X 21 DAYS - MAHA 21 - 25 MINUTES X 21 DAYS
              - MAHA 21 - 25 MINUTES X 21 DAYS - MAHA 21 - 25 MINUTES X 21 DAYS - MAHA 21 - 25 MINUTES X 21 DAYS
            </p>
          </div>
        </div>
      </section> */}

      {/* A Note from the Founder Section - NEW DESIGN */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left side - Content */}
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

          {/* Right side - Image with ALESSANDRA text overlay */}
          <div className="relative h-full">
            <img
              src="/images/a-note-from-ale.jpeg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-full object-cover"
            />

            {/* ALESSANDRA Vertical Text Overlay */}
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
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-[#d9d6c7] h-screen">
        {/* Top Banner */}
        {/* <div className="bg-[#ff4d14] py-2 overflow-hidden mb-16">
          <div className="whitespace-nowrap">
            <p className="text-white font-libre text-md tracking-wider animate-marquee inline-block">
              TESTIMONIALS. TESTIMONIALS. TESTIMONIALS. TESTIMONIALS. TESTIMONIALS. TESTIMONIALS. TESTIMONIALS.
              TESTIMONIALS. TESTIMONIALS. TESTIMONIALS. TESTIMONIALS. TESTIMONIALS. TESTIMONIALS. TESTIMONIALS.
              TESTIMONIALS. TESTIMONIALS.
            </p>
          </div>
        </div> */}

      <div className="bg-[#ff4d14] py-1 overflow-hidden w-full">
        <div className="whitespace-nowrap animate-marquee">
          {Array.from({ length: 14 }, (_, i) => (
            <p
              key={i}
              className="text-[#d9d6c7] px-8 font-libre text-sm tracking-wider inline-block"
            >
              TESTIMONIALS.
            </p>
          ))}
        </div>
      </div>
        {/* Main Content */}
        <div className="h-screen mx-auto px-4 mt-12">
          {/* Two Orange Logos Above Carousel */}
          <div className="flex justify-center items-center gap-16 mb-12">
            <div className="w-64 h-64 flex items-center justify-center">
              <img
                src="/images/maha-collective-logo.png"
                alt="MAHA Collective Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="flex justify-center w-full">
            <div className="rounded-full px-12 py-8 min-h-content flex items-center justify-center w-full max-w-4xl">
              <div className="text-center w-full">
                <div className="testimonial-carousel">
                  <div className="testimonial-item active">
                    <p className="text-[#381f0f] font-libre text-lg leading-relaxed mb-4">
                      "Low key it will change your life"
                    </p>
                    <p className="text-[#381f0f] font-libre font-bold">- Amber</p>
                  </div>
                  <div className="testimonial-item">
                    <p className="text-[#381f0f] font-libre text-lg leading-relaxed mb-4">
                      "What a profound experience. The maha way of living allows you to come home to your true self,
                      your authentic self. The visualisation of seeing myself and saying 'thank you i love you' felt
                      like a warm hug."
                    </p>
                    <p className="text-[#381f0f] font-libre font-bold">- Emma</p>
                  </div>
                  <div className="testimonial-item">
                    <p className="text-[#381f0f] font-libre text-lg leading-relaxed mb-4">
                      "The whole experience, the MAHA Method, it just worked, my experience was way better than I could
                      have imagined. I love what MAHA Collective stands for."
                    </p>
                    <p className="text-[#381f0f] font-libre font-bold">- Paul</p>
                  </div>
                  <div className="testimonial-item">
                    <p className="text-[#381f0f] font-libre text-lg leading-relaxed mb-4">
                      "Alessandra has a presence about her… Her energy has the ability to transform."
                    </p>
                    <p className="text-[#381f0f] font-libre font-bold">- Diane</p>
                  </div>
                  <div className="testimonial-item">
                    <p className="text-[#381f0f] font-libre text-lg leading-relaxed mb-4">
                      "I loved the progression from start to finish. Alessandra's voice and presence made me feel so
                      safe. I was able to reach a place so deep within and I will be forever grateful to you for that."
                    </p>
                    <p className="text-[#381f0f] font-libre font-bold">- Joanna</p>
                  </div>
                  <div className="testimonial-item">
                    <p className="text-[#381f0f] font-libre text-lg leading-relaxed mb-4">
                      "Everyone needs to try the MAHA Method, it enlivens your day and your mind. What a way to live
                      with the MAHA Method - Thank you!"
                    </p>
                    <p className="text-[#381f0f] font-libre font-bold">- Imogen</p>
                  </div>
                  <div className="testimonial-item">
                    <p className="text-[#381f0f] font-libre text-lg leading-relaxed mb-4">
                      "I felt Alessandra's guidance and love throughout the process, she gave me strength to reach new
                      levels within myself, unlock emotions and breathe. I feel this experience has unlocked a deeper
                      sense of being a purpose in me. Thank you"
                    </p>
                    <p className="text-[#381f0f] font-libre font-bold">- Kate</p>
                  </div>
                </div>
                {/* Navigation Dots */}
                <div className="flex justify-center items-center gap-2 mt-6">
                  {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                    <button
                      key={index}
                      className="testimonial-dot w-2 h-2 rounded-full bg-[#2d1f12]/30 transition-all duration-300 hover:bg-[#2d1f12]/50"
                      onClick={() => {
                        const testimonials = document.querySelectorAll('.testimonial-item');
                        const dots = document.querySelectorAll('.testimonial-dot');
                        testimonials.forEach(item => item.classList.remove('active'));
                        dots.forEach(dot => dot.classList.remove('bg-[#2d1f12]/50'));
                        testimonials[index].classList.add('active');
                        dots[index].classList.add('bg-[#2d1f12]/50');
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Inspirational Section */}
      {/* <section className="relative min-h-screen overflow-hidden">
        
        <div className="absolute inset-0">
          <img
            src="/images/about-ales-min.jpeg"
            alt="Woman celebrating on beach with arms raised"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="absolute inset-0 flex justify-center translate-y-[10%] pointer-events-none z-10">
          <h2 className="text-5xl md:text-7xl font-libre font-bold text-[#d9d6c7] text-center leading-tight">
            The Maha Method
          </h2>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-sun py-4 overflow-hidden">
          <div className="whitespace-nowrap">
            <p className="text-white font-libre text-lg md:text-xl tracking-wider animate-marquee inline-block">
              METHOD. THE MAHA METHOD. THE MAHA METHOD. THE MAHA METHOD. THE MAHA METHOD. THE MAHA METHOD. THE MAHA
              METHOD. THE MAHA METHOD. THE MAHA METHOD. THE MAHA METHOD. THE MAHA METHOD. THE MAHA METHOD. THE MAHA
              METHOD. THE MAHA METHOD.
            </p>
          </div>
        </div>
      </section> */}

      {/* Social Media Section - Instagram & TikTok */}
      <section className="h-screen w-full bg-[#b0ad9c] py-12 px-0 flex flex-col items-center relative">
        <h2 className="text-5xl md:text-6xl font-libre text-[#f2ede8] text-center mb-12 tracking-wide" style={{fontFamily: 'serif', fontWeight: 400}}>
          FOLLOW US ON INSTAGRAM & TIKTOK
        </h2>
        <div className="w-full flex flex-col items-center mt-12">
          <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-0">
            <div className="flex-1 min-w-[180px] max-w-[350px] aspect-[4/5] bg-[#d9d6c7] flex items-center justify-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Post 1" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-[180px] max-w-[350px] aspect-[4/5] bg-[#d9d6c7] flex items-center justify-center overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Post 2" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-[180px] max-w-[350px] aspect-[4/5] bg-[#d9d6c7] flex items-center justify-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Post 3" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-[180px] max-w-[350px] aspect-[4/5] bg-[#d9d6c7] flex items-center justify-center overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Post 4" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-[180px] max-w-[350px] aspect-[4/5] bg-[#d9d6c7] flex items-center justify-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Post 1" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full flex flex-col items-center mt-12">
            <span className="text-2xl md:text-3xl font-libre text-[#f2ede8] text-center" style={{fontFamily: 'serif'}}>@MAHACOLLECTIVE</span>
          </div>
        </div>
        <div className="bg-[#d9d6c7] py-1 overflow-hidden w-full absolute left-0 bottom-0">
          <div className="whitespace-nowrap animate-marquee">
            {Array.from({ length: 14 }, (_, i) => (
              <p
                key={i}
                className="text-[#381f0f] px-8 font-libre text-sm tracking-wider inline-block"
              >
                JOIN THE COLLECTIVE. LIVE MAHA.
              </p>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-light-sage text-soil border-t border-sun/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <img src="/images/new-footer-logo.png" alt="MAHA Collective" className="h-32 w-auto" />
              <p className="mt-2 font-libre text-soil text-lg">Join the Collective. Live MAHA.</p>
            </div>
          </div>

          <div className="border-t border-sun/10 pt-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-libre font-normal text-soil mb-4 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-sun" />
                  Contact Us
                </h3>
                <p className="text-soil/90 font-libre mb-2">
                  <a href="mailto:info@mahacollective.com.au" className="hover:text-sun transition-colors">
                    info@mahacollective.com.au
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-libre font-normal text-soil mb-4">Sign up to our newsletter</h3>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="px-4 py-2 rounded-md border border-sun/20 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sun/50 flex-grow"
                  />
                  <Button type="submit" className="bg-sun hover:bg-sun/80 text-white rounded-md font-libre">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-sm">
            <p>© {new Date().getFullYear()} MAHA Collective. All rights reserved.</p>
          </div>
        </div>
      </footer>
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
