"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

interface Desire {
  text: string
  id: number
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showMahaDropdown, setShowMahaDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const desires: Desire[] = [
    { text: "I want to heal my heart.", id: 1 },
    { text: "I want to feel radically alive.", id: 2 },
    { text: "I want to express myself", id: 3 },
    { text: "I want to ground and centre myself.", id: 4 },
    { text: "I want to have a clear and positive mind.", id: 5 },
    { text: "I want to regulate my nervous system.", id: 6 },
  ]

  return (
    <nav
      className={`w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-light-sage/95 shadow-md" : "bg-light-sage"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-center items-center px-4 lg:px-6">
        <div className="flex items-center justify-center">
          {/* Logo with decorative elements */}
          <Link href="/" className="flex items-center group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-sun/0 via-sun/30 to-sun/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <img src="/images/menu-logo.png" alt="MAHA Collective" className="h-20 w-auto relative" />
          </Link>

          {/* Desktop Navigation - Now with decorative separators */}
          <div className="hidden lg:flex lg:items-center ml-8">
            <div className="flex items-center space-x-1">
              <Link
                href="/membership"
                className="text-soil hover:text-sun transition-all duration-300 font-libre text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-white/20"
              >
                Early waitlist
              </Link>
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
  )
}
