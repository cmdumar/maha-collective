"use client"

import type React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FlodeskInlineForm from "../components/FlodeskInlineForm"


export default function Home() {

  return (
    <div className="flex flex-col min-h-screen font-libre">
      {/* <Navbar /> */}

      <section className="relative px-28 bg-[#d8d6c7] flex justify-between items-center h-[75vh]">
        <div className="flex-col">
          <div className="w-full mx-auto text-left text-[#ff4d14] text-5xl font-baskervville py-28">
            <h2 className="mb-1">The ‘Not Just Yoga’ Membership.</h2>
            <h3 className="mt-8 text-lg font-light font-baskervville">Be the first to enter the MAHA portal —  and receive exclusive founding member offerings.</h3>
          </div>

          <div className="flex justify-start">
            <button className="bg-transparent border hover:bg-[#ff4d14] hover:text-white border-[#ff4d14] text-[#ff4d14] px-4 py-3 text-md rounded-md uppercase">
              <p>JOIN OUR EARLY ACCESS WAITLIST</p>
            </button>
          </div>
        </div>
        <div>
          <img src="/member-crown.svg" alt="Member Crown" className="w-16 h-16" />
        </div>
      </section>

      <section className="relative w-full bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#b0ad9c] max-h-screen flex justify-center self-center items-center">
            <div className="pl-16">
              <h2 className="text-2xl font-baskervville text-left text-[#f2ede8] mb-2 tracking-wider">
                Hello my love,
              </h2>

              <p className="font-baskervville text-xl text-left text-[#f2ede8] mb-14 leading-9 tracking-wide">
              You’re <i>HIGH</i> achieving, self-<i>AWARE</i> & <i>frankly EXHAUSTED</i> — 
              Does your body is <i>BRACE</i>? Your mind is <i>RACE</i>? And rest feels like a luxury you haven’t <i>EARNED</i>?
              </p>
              <div className="space-y-4 text-[#f2ede8] font-libre">
                <p className="font-baskervville text-xl text-left">
                  Are you tired of...
                </p>
                <ul className="font-baskervville text-xl text-left font-light list-disc pl-8 leading-9 tracking-wider">
                  <li>
                  <i>SNAPPING</i> at your loved ones when when your system’s overloaded.
                  </li>
                  <li>
                  Battling your <i>INNER CRITIC</i> that won’t allow you to fully exhale, even in Savansana. 
                  </li>
                  <li>
                  You’ve created success, but can’t enjoy it — because your nervous system is still wired for SURVIVAL.
                  </li>
                  <li>
                  Lying awake in bed at 2am <i>OVERTHINKING</i> that one conversion at work.
                  </li>
                  <li>
                  Smiling out the outside while quietly <i>CRUMBLING</i> inside.
                  </li>
                  <li>
                  Getting 8 hours of sleep and waking up with a tight chest and ANXIETY. 
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/member-aless.jpg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full object-contain "
            />
          </div>

        </div>
      </section>

      <section className="relative px-20 bg-[#d8d6c7] flex justify-between items-center h-[50vh]">
        <div className="flex-col">
          <div className="w-full mx-auto text-left text-[#ff4d14] text-5xl font-baskervville py-32">
            <div className="flex justify-start items-center mb-12">
              <h2 className="mb-1 italic">MAHA is the missing piece.</h2>
              <img src="/membership-heart.svg" alt="Heart Icon" className="w-[60px] h-[100px] ml-4" />
            </div>
            <h3 className="text-lg font-light font-baskervville">You don’t need more effort.</h3>
            <h3 className="text-lg font-light font-baskervville">You need the <i>right</i> system that meets <i>ALL</i> of you where you are at.</h3>
          </div>
        </div>
      </section>

      <section className="relative w-full h-screen overflow-hidden bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
          {/* Right side - Image with ALESSANDRA text overlay */}
          <div className="relative h-full bg-[#b0ad9c] col-span-1">
            <img
              src="/images/membership-maha.jpg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-[#b0ad9c] max-h-screen flex justify-center items-center col-span-2">
            <div className="max-w-lg px-4">
              <h2 className="text-2xl font-baskervville text-center px-4 font-bold leading-10 text-[#f2ede8] mb-6 tracking-wider">
                What is included in the  ‘Not just Yoga Membership’...
              </h2>

              <div className="space-y-4 text-[#f2ede8] font-libre mt-12">
                <ul className="font-baskervville text-xl text-center font-light list-disc pl-8 leading-9 tracking-wider">
                  <li>
                    21-day THEMED journeys - for every season you’re in
                  </li>
                  <li>
                    Library of RITUALS that calm your nervous system instantly — even on your messiest days
                  </li>
                  <li>
                    MASTERCLASSES that explain why you feel stuck and how to shift it
                  </li>
                  <li>
                    LIVE Calls & In Person Events 
                  </li>
                  <li>
                    A sacred COMMUNITY of souls who just get it — and get you. 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-28 bg-[#d8d6c7] flex justify-between items-center h-[75vh]">
        <div className="w-full mx-auto text-left text-[#ff4d14] text-5xl font-baskervville py-28">
          <h2 className="mb-1">MAHA Collective isn’t a luxury — </h2>
          <h3 className="mt-8 text-2xl italic font-light font-baskervville">
          It is daily hygiene for your nervous system and soul.</h3>
        </div>
      </section>

      <section className="relative w-full h-screen overflow-hidden bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
          {/* Right side - Image with ALESSANDRA text overlay */}

          <div className="bg-[#b0ad9c] max-h-screen flex justify-center items-center col-span-2">
            {/* <div className="max-w-lg px-4">
              <h2 className="text-xl font-baskervville text-left leading-10 text-[#f2ede8] mb-6 tracking-wider">
              My love,  Join our waitlist to receive:
              </h2>


              <div className="space-y-4 text-[#f2ede8] font-libre mt-12">
                <ol className="font-baskervville text-xl text-left italic font-light list-decimal pl-8 leading-9 tracking-wider">
                  <li>
                    Early access to MAHA Memberships
                  </li>
                  <li>
                    Special pricing
                  </li>
                  <li>
                    Exclusive pre-launch offerings
                  </li>
                </ol>
              </div>
            </div> */}
            <FlodeskInlineForm />
          </div>

          <div className="relative h-full bg-[#b0ad9c] col-span-1" style={{ transform: "scale(-1, 1)" }}>
            <img
              src="/images/membership-form.jpg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

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
