"use client"
import Link from "next/link"
import type React from "react"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Mail, ChevronDown } from "lucide-react"

export default function DesirePage({ params }: { params: { id: string } }) {
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

  const id = Number.parseInt(params.id)
  const desire = desires[id - 1] || desires[0]

  // Special content for "I want to heal my heart" (id: 1)
  if (id === 1) {
    return (
      <div className="flex flex-col min-h-screen bg-sand font-baskervville">
        {/* Header with Navigation */}
        <header className="relative min-h-screen flex flex-col">
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-sun/0 via-sun/30 to-sun/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <img src="/images/menu-logo.png" alt="MAHA Collective" className="h-12 w-auto relative" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:items-center ml-8">
                  <div className="flex items-center space-x-1">
                    <Link
                      href="/our-story"
                      className="text-soil hover:text-sun transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-white/20"
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
                      <button className="text-soil hover:text-sun transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-white/20 flex items-center">
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
                      className="text-soil hover:text-sun transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-white/20"
                    >
                      The MAHA Method
                    </Link>
                    <span className="text-sun/40">•</span>
                    <Link
                      href="#"
                      className="text-soil hover:text-sun transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-white/20"
                    >
                      MAHA Masterclasses
                    </Link>
                    <span className="text-sun/40">•</span>
                    <Link
                      href="#"
                      className="text-soil hover:text-sun transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-white/20"
                    >
                      MAHA Community
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
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

            {/* Mobile Navigation */}
            <div
              id="mobile-menu"
              className="hidden w-full lg:hidden mt-4 bg-light-sage/90 backdrop-blur-sm border-t border-b border-sun/20 py-3 animate-in fade-in duration-300"
            >
              <div className="flex flex-col space-y-1 px-2 pt-1 pb-2 items-center">
                <Link
                  href="/our-story"
                  className="text-soil hover:text-sun transition-colors font-baskervville text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-white/20 w-48 text-center"
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
                      className="block text-soil hover:text-sun transition-colors font-baskervville text-xs py-2 px-6 text-center hover:bg-white/20"
                    >
                      {desire.text}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/maha-collective"
                  className="text-soil hover:text-sun transition-colors font-baskervville text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-white/20 w-48 text-center"
                >
                  The MAHA Method
                </Link>
                <Link
                  href="#"
                  className="text-soil hover:text-sun transition-colors font-baskervville text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-white/20 w-48 text-center"
                >
                  MAHA Masterclasses
                </Link>
                <Link
                  href="#"
                  className="text-soil hover:text-sun transition-colors font-baskervville text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-white/20 w-48 text-center"
                >
                  MAHA Community
                </Link>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="relative flex-grow flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/maha-21-heart.jpeg"
                alt="Woman with arms raised forming heart shape on beach"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
              <h1 className="text-4xl md:text-6xl font-baskervville font-normal text-white mb-8 tracking-wide">
                I want to heal my heart
              </h1>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <section className="py-20 px-4 bg-sand">
          <div className="max-w-4xl mx-auto">
            {/* Centered intro text */}
            <div className="text-center mb-16">
              <p className="text-xl md:text-2xl text-soil/80 font-baskervville mb-6">Something in you is whispering:</p>
              <p className="text-2xl md:text-3xl text-soil font-baskervville italic leading-relaxed mb-12">
                "I'm ready to heal my heart. I'm ready to feel fully, freely, and deeper than I ever have before."
              </p>
            </div>

            {/* Main description */}
            <div className="bg-light-sage/30 p-8 rounded-lg border-l-2 border-sun/20 mb-16">
              <p className="text-lg text-soil/90 font-baskervville leading-relaxed mb-6">
                A 25 minute daily practice for 21 days crafted to attune your entire being to the frequency of love.
                Breath, movement, kriya, and meditation work together to soften the armour & walls you have surrounding
                your heart and come home to the heart that never stopped loving, it just had walls up to protect. Open
                it wider to yourself, to others, to life.
              </p>

              <h3 className="text-2xl font-baskervville font-normal text-soil mb-6">This 21‑day journey helps you:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-soil/90 font-baskervville">
                    Shift from fear to love, from seeking to receiving
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-soil/90 font-baskervville">Let go of the past</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-soil/90 font-baskervville">Reclaim emotional freedom</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-soil/90 font-baskervville">Open your heart & invite more love in</span>
                </li>
              </ul>
            </div>

            {/* What's Included Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-baskervville font-normal text-sun mb-8 text-center">
                What's included in MAHA 21 – I Want to Heal My Heart:
              </h2>
              <p className="text-center text-lg text-soil/80 font-baskervville mb-12">
                Everything you need to stay inspired and supported for 21 days—and beyond.
              </p>

              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex gap-6 bg-white/50 p-6 rounded-xl border border-sun/10">
                  <div className="w-12 h-12 rounded-full bg-sun/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sun font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-baskervville font-normal text-soil mb-3">Welcome Video:</h3>
                    <p className="text-soil/90 font-baskervville">
                      A heartfelt introduction with best practices, intention setting, and tips for creating a sacred
                      space.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-6 bg-light-sage/20 p-6 rounded-xl border border-sun/10">
                  <div className="w-12 h-12 rounded-full bg-sun/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sun font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-baskervville font-normal text-soil mb-3">Initiation:</h3>
                    <p className="text-soil/90 font-baskervville">
                      Step-by-step initiation into each element to ensure you feel confident and understand the WHY
                      behind each element of the practise.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-6 bg-white/50 p-6 rounded-xl border border-sun/10">
                  <div className="w-12 h-12 rounded-full bg-sun/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sun font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-baskervville font-normal text-soil mb-3">Daily Guided Practice:</h3>
                    <p className="text-soil/90 font-baskervville">
                      New weekly recordings with gentle, supportive guidance to keep you present and consistent .. no
                      overthinking required.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex gap-6 bg-light-sage/20 p-6 rounded-xl border border-sun/10">
                  <div className="w-12 h-12 rounded-full bg-sun/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sun font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-baskervville font-normal text-soil mb-3">Open Community Forum:</h3>
                    <p className="text-soil/90 font-baskervville">
                      A safe space to share reflections, ask questions, and connect, you're a part of this conscious
                      collective.
                    </p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="flex gap-6 bg-white/50 p-6 rounded-xl border border-sun/10">
                  <div className="w-12 h-12 rounded-full bg-sun/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sun font-bold text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-baskervville font-normal text-soil mb-3">Private E-Journal:</h3>
                    <p className="text-soil/90 font-baskervville">
                      A personal journal on your account to note down your daily thoughts, inner & outer shifts
                      throughout your journey. You can reflect back on your journal at any time.
                    </p>
                  </div>
                </div>

                {/* Item 6 */}
                <div className="flex gap-6 bg-light-sage/20 p-6 rounded-xl border border-sun/10">
                  <div className="w-12 h-12 rounded-full bg-sun/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sun font-bold text-lg">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-baskervville font-normal text-soil mb-3">Daily Encouragement:</h3>
                    <p className="text-soil/90 font-baskervville">
                      Inspiration and motivation to support you along the way. Because who doesn't love an inspirational
                      quote or two or three….
                    </p>
                  </div>
                </div>

                {/* Item 7 */}
                <div className="flex gap-6 bg-white/50 p-6 rounded-xl border border-sun/10">
                  <div className="w-12 h-12 rounded-full bg-sun/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sun font-bold text-lg">7</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-baskervville font-normal text-soil mb-3">Lifetime Access:</h3>
                    <p className="text-soil/90 font-baskervville">
                      Come back to this program at any point in time for reset, realignment, or to deepen your practice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Button className="bg-sun hover:bg-sun/80 text-white px-8 py-6 text-lg rounded-md font-baskervville uppercase tracking-wider transition-all hover:scale-105 shadow-lg">
                Begin Your Heart Healing Journey
              </Button>
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
                  className="hover:text-sun transition-colors font-baskervville text-sm uppercase tracking-wider"
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

  // Default content for other desire pages
  return (
    <div className="flex flex-col min-h-screen bg-sea-beige font-baskervville">
      {/* Header with Navigation */}
      <header className="relative h-[60vh] flex flex-col bg-[#d9e3ea]">
        {/* Navigation Bar */}
        <nav
          className={`fixed w-full z-50 transition-all duration-500 ${
            isScrolled
              ? "bg-[#d9e3ea]/95 py-2 shadow-md"
              : "bg-gradient-to-r from-maha-orange/10 via-transparent to-maha-orange/10 py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto flex justify-center items-center px-4 lg:px-6">
            <div className="flex items-center justify-center">
              {/* Logo with decorative elements */}
              <Link href="/" className="flex items-center group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-sun/0 via-sun/30 to-sun/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <img src="/images/menu-logo.png" alt="MAHA Collective" className="h-12 w-auto relative" />
              </Link>

              {/* Desktop Navigation - Now with decorative separators */}
              <div className="hidden lg:flex lg:items-center ml-8">
                <div className="flex items-center space-x-1">
                  <Link
                    href="/our-story"
                    className={`${isScrolled ? "text-maha-dark" : "text-maha-dark"} hover:text-maha-orange transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-white/20`}
                  >
                    Our MAHA Story
                  </Link>
                  <span className={`${isScrolled ? "text-maha-orange/40" : "text-maha-orange/60"}`}>•</span>

                  {/* MAHA 21 Dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={() => setShowMahaDropdown(true)}
                    onMouseLeave={() => setShowMahaDropdown(false)}
                  >
                    <button
                      className={`${isScrolled ? "text-maha-dark" : "text-maha-dark"} hover:text-maha-orange transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-white/20 flex items-center`}
                    >
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

                  <span className={`${isScrolled ? "text-maha-orange/40" : "text-maha-orange/60"}`}>•</span>
                  <Link
                    href="/maha-collective"
                    className={`${isScrolled ? "text-maha-dark" : "text-maha-dark"} hover:text-maha-orange transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-white/20`}
                  >
                    The MAHA Method
                  </Link>
                  <span className={`${isScrolled ? "text-maha-orange/40" : "text-maha-orange/60"}`}>•</span>
                  <Link
                    href="#"
                    className={`${isScrolled ? "text-maha-dark" : "text-maha-dark"} hover:text-maha-orange transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-white/20`}
                  >
                    MAHA Masterclasses
                  </Link>
                  <span className={`${isScrolled ? "text-maha-orange/40" : "text-maha-orange/60"}`}>•</span>
                  <Link
                    href="#"
                    className={`${isScrolled ? "text-maha-dark" : "text-maha-dark"} hover:text-maha-orange transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-white/20`}
                  >
                    MAHA Community
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button - Positioned to the right with enhanced styling */}
            <div className="lg:hidden absolute right-4">
              <button
                className="p-2 rounded-full bg-white/30 backdrop-blur-sm border border-maha-orange/20 focus:outline-none focus:ring-2 focus:ring-maha-orange transition-all duration-300 hover:bg-white/50"
                onClick={() => {
                  const menu = document.getElementById("mobile-menu")
                  if (menu) {
                    menu.classList.toggle("hidden")
                  }
                }}
              >
                <svg className="h-5 w-5 text-maha-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Enhanced styling */}
          <div
            id="mobile-menu"
            className="hidden w-full lg:hidden mt-4 bg-white/80 backdrop-blur-sm border-t border-b border-maha-orange/20 py-3 animate-in fade-in duration-300"
          >
            <div className="flex flex-col space-y-1 px-2 pt-1 pb-2 items-center">
              <Link
                href="/our-story"
                className="text-maha-dark hover:text-maha-orange transition-colors font-baskervville text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-white/60 w-48 text-center"
              >
                Our MAHA Story
              </Link>

              {/* Mobile MAHA 21 Section */}
              <div className="w-48">
                <p className="text-maha-dark font-baskervville text-xs tracking-wider uppercase py-2 px-4 text-center border-b border-maha-orange/20">
                  MAHA 21
                </p>
                {desires.map((desire) => (
                  <Link
                    key={desire.id}
                    href={`/desire/${desire.id}`}
                    className="block text-maha-dark hover:text-maha-orange transition-colors font-baskervville text-xs py-2 px-6 text-center hover:bg-white/60"
                  >
                    {desire.text}
                  </Link>
                ))}
              </div>

              <Link
                href="/maha-collective"
                className="text-maha-dark hover:text-maha-orange transition-colors font-baskervville text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-white/60 w-48 text-center"
              >
                The MAHA Method
              </Link>
              <Link
                href="#"
                className="text-maha-dark hover:text-maha-orange transition-colors font-baskervville text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-white/60 w-48 text-center"
              >
                MAHA Masterclasses
              </Link>
              <Link
                href="#"
                className="text-maha-dark hover:text-maha-orange transition-colors font-baskervville text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-white/60 w-48 text-center"
              >
                MAHA Community
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative flex-grow flex items-center justify-center bg-[#d9e3ea]">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-maha-orange/5 to-maha-rust/5"></div>

          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-baskervville font-normal text-maha-dark mb-6 uppercase tracking-wide">
              {desire.text}
            </h1>
          </div>
        </div>
      </header>

      {/* 21 Day Sadhana Section */}
      <section className="py-12 px-4 flex-grow bg-gradient-to-b from-maha-blue/20 to-maha-cream">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-xl border-t-4 border-maha-orange">
            <h2 className="text-3xl md:text-4xl font-baskervville font-normal text-maha-dark mb-8 uppercase tracking-wide">
              What's Included in <span className="text-maha-rust">21 Day Sadhana:</span>
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="h-16 w-16 rounded-full bg-maha-orange flex items-center justify-center flex-shrink-0 shadow-lg animate-pulse-subtle">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-baskervville font-normal text-maha-dark mb-2">
                    Daily 25-Minute Practice
                  </h3>
                  <p className="text-maha-dark">A potent combination of:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-maha-dark">
                    <li>Breath of Fire to awaken internal heat and vitality</li>
                    <li>Prana Shakti (3 Variations) to build energy, endurance, and resilience</li>
                    <li>Prana Apana Kriya to calm, center, and deeply ground you</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="h-16 w-16 rounded-full bg-maha-rust flex items-center justify-center flex-shrink-0 shadow-lg animate-pulse-subtle"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-baskervville font-normal text-maha-dark mb-2">Guided Meditation</h3>
                  <p className="text-maha-dark">Cultivate inner stillness and connection to the earth's energy</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="h-16 w-16 rounded-full bg-maha-tan flex items-center justify-center flex-shrink-0 shadow-lg animate-pulse-subtle"
                  style={{ animationDelay: "2s" }}
                >
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-baskervville font-normal text-maha-dark mb-2">
                    Additional Supporting Practice
                  </h3>
                  <p className="text-maha-dark">
                    Designed to deepen your grounding, balance your nervous system, and integrate the energy shifts from
                    your sadhana.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-maha-orange hover:bg-maha-rust text-white px-8 py-6 text-lg rounded-md font-baskervville uppercase tracking-wider transition-all hover:scale-105 shadow-lg">
                Begin Your Transformation
              </Button>
            </div>
          </div>

          <div className="mt-12 bg-maha-blue/30 rounded-lg p-8 shadow-lg text-maha-dark border-l-4 border-maha-rust">
            <h3 className="text-2xl font-baskervville font-normal mb-4 uppercase tracking-wide">
              How This Program Helps You <span className="text-maha-rust">{desire.text.replace("I want to ", "")}</span>
            </h3>
            <p className="mb-4 font-baskervville text-lg">
              Our carefully designed 21-Day Sadhana addresses your specific desire through targeted practices that work
              with your body's natural energy systems.
            </p>
            <p className="font-baskervville text-lg">
              Through consistent practice, you'll experience profound shifts in your physical, mental, and emotional
              wellbeing, helping you manifest your desire to {desire.text.toLowerCase().replace("i want to ", "")}
            </p>
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
                className="hover:text-sun transition-colors font-baskervville text-sm uppercase tracking-wider"
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
