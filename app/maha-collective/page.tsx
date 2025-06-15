"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Mail, ChevronDown } from "lucide-react"

export default function MahaMethod() {
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
                  className="text-soil hover:text-sun transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-sun/10"
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
                  className="text-sun hover:text-sun transition-all duration-300 font-baskervville text-xs tracking-wider uppercase px-3 py-2 rounded-md hover:bg-sun/10"
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
              className="text-soil hover:text-sun transition-colors font-baskervville text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-sun/10 w-48 text-center"
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
              className="text-sun hover:text-sun transition-colors font-baskervville text-xs tracking-wider uppercase py-2 px-4 rounded-md hover:bg-sun/10 w-48 text-center"
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

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-20">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-light-sage/20 to-transparent opacity-30"></div>
          <div className="absolute -top-20 right-0 w-64 h-64 rounded-full bg-sun/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-sun/3 blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          {/* Title Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-baskervville font-normal text-sun mb-6 tracking-wide">
              THE MAHA Method
            </h1>
            <p className="text-xl md:text-2xl text-soil/80 font-baskervville italic">
              Ancient Wisdom. Backed by Science. Designed for Modern Life.
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-sun/40 to-transparent mx-auto mt-8"></div>
          </div>

          {/* Introduction Section */}
          <section className="mb-20">
            <div className="space-y-8 text-soil/90 font-baskervville text-lg leading-relaxed">
              <p className="text-xl">
                The MAHA Method is at the heart of everything we do at Maha Collective. It's how we help you shift from
                surviving to truly thriving.
              </p>

              <p>
                Rooted in ancient yogic philosophy and supported by modern science, the MAHA Method is a complete and
                integrated system for real, lasting transformation: physically, mentally, emotionally, and spiritually.
              </p>

              <div className="bg-light-sage/30 p-8 rounded-lg border-l-2 border-sun/20 mt-12">
                <h3 className="text-2xl font-baskervville font-normal text-soil mb-6">
                  The MAHA Method works because:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Not one-size-fits-all.</strong> The practice meets you exactly where you are physically,
                      mentally, and emotionally.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Gets to the root</strong> – clears energy blocks and limiting beliefs from the inside out.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Rewires your brain</strong> – builds new neural pathways for clarity, focus, and
                      resilience.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Balances your energy</strong> – regulates your nervous system and restores vitality.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Works quickly</strong> – whole-self approach delivers real, visible shifts in just 21
                      days.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Creates sustainable transformation</strong>, lasting change in how you think, feel, and
                      live.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Evolves with you.</strong> The deeper you go, the more the practice reveals.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5 Koshas Section */}
          <section className="mb-20">
            <div className="relative mb-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-sun/10 to-sun/0 rounded-lg blur-xl opacity-30"></div>
              <h2 className="relative text-3xl md:text-4xl font-baskervville font-normal text-sun mb-4">
                A Whole-You Approach: The 5 Koshas
              </h2>
            </div>

            <div className="space-y-8 text-soil/90 font-baskervville text-lg leading-relaxed">
              <p>
                In yoga, it's understood that you're more than just a body or a mind, you're made of five interconnected
                layers, known as the Koshas.
              </p>

              <p>
                The MAHA Method works by aligning and integrating all five layers—so you feel clearer, lighter, more
                alive, and connected on every level.
              </p>

              {/* Kosha 1 */}
              <div className="mt-12 bg-light-sage/20 p-8 rounded-lg border-l-4 border-sun/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-sun/20 flex items-center justify-center mr-4">
                    <span className="text-sun font-normal">1</span>
                  </div>
                  <h3 className="text-2xl font-baskervville font-normal text-soil">
                    Annamaya Kosha – The Physical Body
                  </h3>
                </div>
                <p className="mb-4">
                  This is the body we nourish, move, and cleanse. This is where we start—through movement (asana),
                  breathwork (pranayama), and kriya practices that build strength, release tension, and restore balance.
                </p>
                <p className="text-sun italic">When the body is in balance, the inner work can begin.</p>
              </div>

              {/* Kosha 2 */}
              <div className="bg-light-sage/30 p-8 rounded-lg border-l-4 border-sun/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-sun/20 flex items-center justify-center mr-4">
                    <span className="text-sun font-normal">2</span>
                  </div>
                  <h3 className="text-2xl font-baskervville font-normal text-soil">
                    Pranamaya Kosha – The Energy Body
                  </h3>
                </div>
                <p className="mb-4">
                  The subtle energy field that gives you life—your prana, or life force. Using breathwork, mudra
                  (energetic seals), kriya, meditation and mantra, we unblock stuck energy and boost vitality so your
                  system can flow freely.
                </p>
                <p className="text-sun italic">When energy flows, transformation accelerates.</p>
              </div>

              {/* Kosha 3 */}
              <div className="bg-light-sage/20 p-8 rounded-lg border-l-4 border-sun/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-sun/20 flex items-center justify-center mr-4">
                    <span className="text-sun font-normal">3</span>
                  </div>
                  <h3 className="text-2xl font-baskervville font-normal text-soil">
                    Manomaya Kosha – The Mental & Emotional Body
                  </h3>
                </div>
                <p className="mb-4">
                  This is where your thoughts, emotions, and inner stories live. Through meditation, mantra, journaling,
                  and conscious connection, we clear mental clutter, release emotional baggage, and shift limiting
                  beliefs.
                </p>
                <p className="text-sun italic">When the mind is clear, the heart opens.</p>
              </div>

              {/* Kosha 4 */}
              <div className="bg-light-sage/30 p-8 rounded-lg border-l-4 border-sun/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-sun/20 flex items-center justify-center mr-4">
                    <span className="text-sun font-normal">4</span>
                  </div>
                  <h3 className="text-2xl font-baskervville font-normal text-soil">
                    Vijnanamaya Kosha – The Wisdom Body
                  </h3>
                </div>
                <p className="mb-4">
                  Your inner compass. This layer holds your intuition, insight, and deeper knowing—but it also includes
                  the intellect, which must be aligned with truth.
                </p>
                <p className="mb-4">
                  Through satsang (teachings that correct the intellect), self-inquiry, and meditation, we guide you to
                  access this deeper wisdom and make aligned choices.
                </p>
                <p className="text-sun italic">When you trust your inner guidance, your path becomes clear.</p>
              </div>

              {/* Kosha 5 */}
              <div className="bg-light-sage/20 p-8 rounded-lg border-l-4 border-sun/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-sun/20 flex items-center justify-center mr-4">
                    <span className="text-sun font-normal">5</span>
                  </div>
                  <h3 className="text-2xl font-baskervville font-normal text-soil">
                    Anandamaya Kosha – The Bliss Body
                  </h3>
                </div>
                <p className="mb-4">
                  Your essence—joy, peace, love, and connection. This is where you access heart intelligence and begin
                  living from the heart, not the head. As each layer is purified, you return to your natural state of
                  unity with life and deep inner fulfilment.
                </p>
                <p className="text-sun italic">When all layers align, you return to wholeness.</p>
              </div>
            </div>
          </section>

          {/* The Science Behind the MAHA Method Section */}
          <section className="mb-20 mt-16">
            <div className="relative mb-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-sun/10 to-sun/0 rounded-lg blur-xl opacity-30"></div>
              <h2 className="relative text-3xl md:text-4xl font-baskervville font-normal text-sun mb-4">
                The Science Behind the MAHA Method
              </h2>
            </div>

            <div className="space-y-6 text-soil/90 font-baskervville text-lg leading-relaxed">
              <p>
                The MAHA Method is deeply spiritual but it's also evidence-based. Here's how science supports what yogis
                have known for centuries:
              </p>

              {/* Stress Reduction & Emotional Balance */}
              <div className="mt-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-1 bg-sun/30 mr-4"></div>
                  <h3 className="text-2xl font-baskervville font-normal text-soil">
                    Stress Reduction & Emotional Balance
                  </h3>
                </div>
                <div className="bg-light-sage/20 p-6 rounded-lg">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Lowers cortisol and reduces systemic stress</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Activates the parasympathetic nervous system (rest-and-digest)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Regulates the vagus nerve, promoting calm and connection</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Neuroplasticity & Brain Optimisation */}
              <div className="mt-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-1 bg-sun/30 mr-4"></div>
                  <h3 className="text-2xl font-baskervville font-normal text-soil">
                    Neuroplasticity & Brain Optimisation
                  </h3>
                </div>
                <div className="bg-light-sage/30 p-6 rounded-lg">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        Kriya, meditation, and breathwork increase neuroplasticity, allowing the brain to form new,
                        evolutionary pathways
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        Increases grey matter in areas linked to memory, self-awareness, and emotional regulation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Strengthens the prefrontal cortex (clarity, decision-making)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Reduces activity in the amygdala (fear and stress response)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hormonal & Biochemical Shifts */}
              <div className="mt-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-1 bg-sun/30 mr-4"></div>
                  <h3 className="text-2xl font-baskervville font-normal text-soil">Hormonal & Biochemical Shifts</h3>
                </div>
                <div className="bg-light-sage/20 p-6 rounded-lg">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Boosts hormones like oxytocin (bonding), GABA (calm), and melatonin (sleep)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-sun rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Supports a balanced endocrine system for improved mood, immunity, and vitality</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center mt-16">
            <div className="bg-light-sage/30 p-8 md:p-12 rounded-lg border-t border-b border-sun/10 mb-10">
              <p className="text-xl md:text-2xl text-soil/90 font-baskervville leading-relaxed">
                Experience the transformative power of the MAHA Method in our 21-day programs.
              </p>
            </div>
            <Button className="bg-sun hover:bg-sun/80 text-white px-8 py-5 text-lg rounded-md font-baskervville tracking-wider transition-all hover:scale-105 shadow-lg">
              Explore Our Programs
            </Button>
          </section>
        </div>
      </main>

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
