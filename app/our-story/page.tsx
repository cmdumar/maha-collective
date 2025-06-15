"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Mail, ChevronDown } from "lucide-react"

export default function OurStory() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [email, setEmail] = useState("")
  const [showMahaDropdown, setShowMahaDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    // Reset form
    setEmail("")
    // Show success message or toast
    alert("Thank you for signing up to our newsletter!")
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
    <div className="flex flex-col min-h-screen bg-sand font-baskervville">
      {/* Navigation Bar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-light-sage/95 py-2 shadow-md" : "bg-light-sage py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-center items-center px-4 lg:px-6">
          <div className="flex items-center justify-center">
            {/* Logo with decorative elements */}
            <Link href="/" className="flex items-center group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-sun/0 via-sun/10 to-sun/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <img src="/images/menu-logo.png" alt="MAHA Collective" className="h-12 w-auto relative" />
            </Link>

            {/* Desktop Navigation - Now with decorative separators */}
            <div className="hidden lg:flex lg:items-center ml-8">
              <div className="flex items-center space-x-1">
                <Link
                  href="/our-story"
                  className="text-sun hover:text-sun transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-sun/10"
                >
                  Our MAHA Story
                </Link>
                <span className="text-sun/40">•</span>

                {/* MAHA 21 Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setShowMahaDropdown(true)}
                  onMouseLeave={() => setShowMahaDropdown(false)}
                >
                  <button className="text-soil hover:text-sun transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-sun/10 flex items-center">
                    MAHA 21
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </button>

                  {showMahaDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-sun/20 py-2 z-50">
                      {desires.map((desire) => (
                        <Link
                          key={desire.id}
                          href={`/desire/${desire.id}`}
                          className="block px-4 py-3 text-soil hover:text-sun hover:bg-sun/10 transition-colors font-baskervville text-sm"
                        >
                          {desire.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <span className="text-sun/40">•</span>
                <Link
                  href="/maha-collective"
                  className="text-soil hover:text-sun transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-sun/10"
                >
                  The MAHA Method
                </Link>
                <span className="text-sun/40">•</span>
                <Link
                  href="#"
                  className="text-soil hover:text-sun transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-sun/10"
                >
                  MAHA Masterclasses
                </Link>
                <span className="text-sun/40">•</span>
                <Link
                  href="#"
                  className="text-soil hover:text-sun transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-sun/10"
                >
                  MAHA Community
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden absolute right-4">
            <button
              className="p-2 rounded-full bg-sun/10 backdrop-blur-sm border border-sun/20 focus:outline-none focus:ring-2 focus:ring-sun transition-all duration-300 hover:bg-sun/20"
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

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className="hidden w-full lg:hidden mt-4 bg-light-sage/90 backdrop-blur-sm border-t border-b border-sun/20 py-3 animate-in fade-in duration-300"
        >
          <div className="flex flex-col space-y-1 px-2 pt-1 pb-2 items-center">
            <Link
              href="/our-story"
              className="text-sun hover:text-sun transition-colors font-baskervville text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-sun/10 w-48 text-center"
            >
              Our MAHA Story
            </Link>

            {/* Mobile MAHA 21 Section */}
            <div className="w-48">
              <p className="text-soil font-baskervville text-xs tracking-wider uppercase py-2 px-4 text-center border-b border-sun/20">
                MAHA 21
              </p>
              {desires.map((desire) => (
                <Link
                  key={desire.id}
                  href={`/desire/${desire.id}`}
                  className="block text-soil hover:text-sun transition-colors font-baskervville text-xs py-2 px-6 text-center hover:bg-sun/10"
                >
                  {desire.text}
                </Link>
              ))}
            </div>

            <Link
              href="/maha-collective"
              className="text-soil hover:text-sun transition-colors font-baskervville text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-sun/10 w-48 text-center"
            >
              The MAHA Method
            </Link>
            <Link
              href="#"
              className="text-soil hover:text-sun transition-colors font-baskervville text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-sun/10 w-48 text-center"
            >
              MAHA Masterclasses
            </Link>
            <Link
              href="#"
              className="text-soil hover:text-sun transition-colors font-baskervville text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-sun/10 w-48 text-center"
            >
              MAHA Community
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/akasha-mudra.jpeg"
            alt="Alessandra, founder of MAHA Collective"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="text-4xl md:text-6xl font-baskervville font-normal text-white mb-8 tracking-wide">
            Our MAHA Story
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 bg-sand">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-soil/90 font-baskervville text-lg md:text-xl leading-relaxed">
            <div className="bg-light-sage/30 p-8 rounded-lg border-l-2 border-sun/20">
              <p className="mb-4">
                <span className="text-sun font-normal text-2xl">Maha</span> <span className="text-soil/70">(मह)</span> —
                Sanskrit for great. Greatness is your truest nature, your highest Self, your most authentic Self.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-sun/20 to-transparent my-6"></div>
              <p>
                <span className="text-sun font-normal text-2xl">Collective</span> represents community, belonging, and
                unity.
              </p>
            </div>

            <p className="text-xl md:text-2xl text-soil font-normal text-center">
              Maha Collective lights the path of inner transformation, to help you reconnect, evolve and embody your
              highest Self.
            </p>

            <p className="text-center">
              Rooted in ancient yogic wisdom and backed by modern science, we offer daily rituals that are simple,
              accessible, and powerful, that help you live MAHA.
            </p>
          </div>
        </div>
      </section>

      {/* Rotating Banner Section */}
      <section className="py-16 bg-light-sage/30 border-y border-sun/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block bg-sun/10 backdrop-blur-sm rounded-full px-8 py-3 mb-6 border border-sun/20">
              <p className="text-soil/80 font-baskervville text-sm uppercase tracking-wider">
                The founder lives and breathes MAHA…
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-baskervville font-normal text-soil mb-8 animate-pulse-subtle">
              To live MAHA means to live in alignment with your highest self.
            </h2>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-sand">
        <div className="max-w-7xl mx-auto">
          {/* Quote Section */}
          <div className="text-center mb-16">
            <div className="bg-light-sage/30 p-8 md:p-12 rounded-lg border border-sun/10 max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl text-soil/90 font-baskervville italic leading-relaxed mb-4">
                "Far better to live your own path imperfectly, than to live another's perfectly."
              </p>
              <p className="text-right text-soil/70 font-baskervville text-lg">— Bhagavad Gita</p>
            </div>
          </div>

          {/* Founder Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/founder.jpeg"
                  alt="Alessandra, founder of MAHA Collective"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soil/20 via-transparent to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-sun/10 blur-xl"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-sun/10 blur-xl"></div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6 text-soil/90 font-baskervville text-lg leading-relaxed">
              <p>
                I spent years stuck in loops of anxiety, low self-worth, and a nervous system in overdrive. I knew there
                had to be more. One word..Yoga. It became the path back to myself.
              </p>

              <p>
                Now as a modern-day yogi, I honour both ancient rituals and everyday pleasures. My mornings begin with
                puja and meditation, and some evenings end with a glass of wine. It's all sacred.
              </p>

              <p>
                Maha Collective was born from this journey. A space where discipline meets delight, and transformation
                is deeply embodied. Rooted in the Himalayan Yog-Vedantic tradition, it brings together the tools,
                wisdom, and practices that changed my life, now here to help you be radically alive.
              </p>

              <div className="bg-light-sage/30 p-6 rounded-lg border-l-4 border-sun/30">
                <p className="text-soil/80 font-baskervville italic">
                  My teaching is deeply rooted in the Indian yogic tradition, with RYS-certified training in Hatha Yoga,
                  Pranayama, Kriya, Mantra, Himalayan Kundalini, Naad (sound), Laya movements, Yin Yoga, philosophy,
                  sacred ritual, and ongoing study of the Vedas.
                </p>
              </div>

              <div className="mt-8">
                <Button className="bg-sun hover:bg-sun/80 text-white px-8 py-5 text-lg rounded-md font-baskervville tracking-wider transition-all hover:scale-105 shadow-lg">
                  Begin Your Journey
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-light-sage text-soil border-t border-sun/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <img src="/images/new-footer-logo.png" alt="MAHA Collective" className="h-20 w-auto" />
              <p className="mt-2 font-baskervville text-soil text-lg">Join the Collective. Live MAHA.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <Link
                href="/our-story"
                className="text-sun transition-colors font-baskervville text-sm uppercase tracking-wider"
              >
                About
              </Link>
              <Link
                href="#"
                className="hover:text-sun transition-colors font-baskervville text-sm uppercase tracking-wider"
              >
                Programs
              </Link>
              <Link
                href="#"
                className="hover:text-sun transition-colors font-baskervville text-sm uppercase tracking-wider"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="hover:text-sun transition-colors font-baskervville text-sm uppercase tracking-wider"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div className="border-t border-sun/10 pt-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-baskervville font-normal text-soil mb-4 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-sun" />
                  Contact Us
                </h3>
                <p className="text-soil/90 font-baskervville mb-2">
                  <a href="mailto:info@mahacollective.com.au" className="hover:text-sun transition-colors">
                    info@mahacollective.com.au
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-baskervville font-normal text-soil mb-4">Sign up to our newsletter</h3>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="px-4 py-2 rounded-md border border-sun/20 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sun/50 flex-grow"
                  />
                  <Button type="submit" className="bg-sun hover:bg-sun/80 text-white rounded-md font-baskervville">
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
    </div>
  )
}
