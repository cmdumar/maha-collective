"use client"

import type React from "react"
import Script from "next/script"

export default function Home() {
  const openFlodeskForm = () => {
    // Check if Flodesk is loaded
    if (typeof window !== 'undefined' && window.fd) {
      window.fd('form', { formId: '68805c7b6bba96fd80d580f6' });
    } else {
      // If Flodesk isn't loaded yet, wait a bit and try again
      setTimeout(() => {
        if (window.fd) {
          window.fd('form', { formId: '68805c7b6bba96fd80d580f6' });
        } else {
          console.log('Flodesk not loaded yet');
        }
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-libre">
      {/* Flodesk Popup Form Scripts */}
      <Script
        id="flodesk-script-1"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, t, h, s, n) {
              w.FlodeskObject = n;
              var fn = function() {
                (w[n].q = w[n].q || []).push(arguments);
              };
              w[n] = w[n] || fn;
              var f = d.getElementsByTagName(t)[0];
              var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
              var sm = d.createElement(t);
              sm.async = true;
              sm.type = 'module';
              sm.src = h + s + '.mjs' + v;
              f.parentNode.insertBefore(sm, f);
              var sn = d.createElement(t);
              sn.async = true;
              sn.noModule = true;
              sn.src = h + s + '.js' + v;
              f.parentNode.insertBefore(sn, f);
            })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
          `,
        }}
      />
      <Script
        id="flodesk-script-2"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.fd('form', {
              formId: '68805c7b6bba96fd80d580f6'
            });
          `,
        }}
      />

      {/* <Navbar /> */}

      <section className="relative px-4 sm:px-8 md:px-16 lg:px-28 bg-[#d9d6c7] flex flex-col lg:flex-row justify-between items-center min-h-[75vh] py-8 lg:py-0">
        <div className="flex-col w-full lg:w-auto">
          <div className="w-full mx-auto text-left text-[#ff4d14] text-2xl md:text-3xl lg:text-4xl font-baskervville py-8 lg:py-18">
            <h2 className="mb-1">MAHA <i>Collective waitlist.</i></h2>
            <h3 className="mt-2 font-baskervville text-[#fffbf5] italic">
              10x the quality of your life and deepen the intimacy of your relationships in only 30 minutes a day.
            </h3>

            <h3 className="mt-12 font-baskervville text-[#fffbf5 text-[18px] font-light tracking-wide leading-6">
            Learn the 6 month nervous system reset to lower the constant pressure sitting in your body with the MAHA Method infusing Kriya, Breathwork, Meditation & Movement.
            </h3>
          </div>

          <div className="flex justify-start mt-10">
            <button 
              onClick={openFlodeskForm}
              className="bg-transparent border hover:bg-[#ff4d14] hover:text-white border-[#ff4d14] text-[#ff4d14] px-16 py-4 text-sm sm:text-md rounded-md uppercase"
            >
              <p>JOIN OUR WAITLIST</p>
            </button>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <img src="/member-crown.svg" alt="Member Crown" className="w-24 h-24 sm:w-16 sm:h-16" />
        </div>
      </section>

      <section className="relative w-full bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#b0ad9c] min-h-screen flex justify-center self-center items-center order-2 lg:order-1 py-24">
            <div className="px-4 sm:px-8 lg:pl-16 py-12 lg:py-0">
              <h2 className="text-sm font-baskervville text-left text-[#f2ede8] tracking-wider mb-8">
              I see you,
              </h2>
              <div className="text-[#f2ede8] font-libre">
              <p className="font-baskervville text-sm text-left text-[#f2ede8] leading-7 lg:leading-9 tracking-wide mb-6">
                You’re doing everything you think you're supposed to.
              </p>
                <ul className="font-baskervville text-sm text-left font-light list-disc pl-6 lg:pl-8 leading-7 tracking-wider">
                  <li>
                  You dump your thoughts into a journal every night, hoping if you write fast enough, your brain might finally shut up.
                  </li>
                  <li>
                  You force yourself to do morning pages, because some girl on Instagram said it would “clear your head”… but your head still feels like a browser with 37 tabs open.
                  </li>
                  <li>
                  You play a five-minute meditation before bed because TikTok swears it’ll stop the 2am spirals BUT you're still lying there, wide-eyed, calculating how many hours of sleep you might get.
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

              <div className="text-[#f2ede8] font-libre mt-8">
              <p className="font-baskervville text-sm text-left text-[#f2ede8] leading-7 lg:leading-9 tracking-wider">
                Something still feels off.... 
                </p>
                <ul className="font-baskervville text-sm text-left font-light list-disc pl-6 lg:pl-8 leading-7 tracking-wider">
                  <li>
You’re snapping at the people you love, then crying in the bathroom because “wtf is wrong with me?”
                  </li>
                  <li>
                  You’re wide awake at 2am, stuck on that one thing you said, like it ruined everything and now you have to move cities and change your name.
                  </li>
                  <li>
                  You keep achieving; hitting the goals, getting the praise, but your nervous system is too busy scanning for the next failure to actually let you enjoy any of it.</li>
                  <li>
                  You’ve tried the breathwork, the podcasts, the healing girl starter pack, and you’re still stuck in the same loop.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <img
              src="/images/member-aless.jpg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-64 sm:h-80 lg:h-full object-cover"
            />
          </div>

        </div>
      </section>

      <section className="relative px-4 sm:px-8 md:px-16 lg:px-20 bg-[#b0ad9c] flex justify-between items-center min-h-[50vh] py-8 lg:py-0">
        <div className="flex-col w-full">
          <div className="w-full mx-auto text-left text-[#f2ede8] sm:text-xl md:text-xl lg:text-xl font-libre py-8 lg:py-32">
            <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center mb-8 lg:mb-12">
              <h2 className="mb-1">What MAHA will do for you in 6 months:</h2>
              {/* <img src="/membership-heart.svg" alt="Heart Icon" className="w-[40px] h-[60px] sm:w-[60px] sm:h-[100px] mt-4 sm:mt-0 sm:ml-4" /> */}
            </div>
            <ul className="font-baskervville text-sm text-left font-light list-disc pl-6 lg:pl-8 leading-7 tracking-wider">
              <li>
              You will be able to fall asleep the second your head hits the pillow. No 2am spirals, no overthinking that one text, no waking up in a panic because your nervous system is fried.</li>
              <li>
              You will learn to move with a quiet confidence that others can feel. No need to prove anything or perform.</li>
              <li>You will finally feel held, not by a person, but by something bigger. Like the universe has your back, and you can breathe again without waiting for the next shoe to drop.</li>
              <li>You will be able to say what you actually mean in the moment, and don’t rehash it later wondering if you were too blunt or too emotional or too much.</li>
              <li>You will be able to say yes and feel it in your body. Say no and still sleep like a baby. </li>
              <li>You will be able to stop polling five people before making a decision. You ask you. And for the first time in a long time, you actually trust the answer.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-8 md:px-16 lg:px-20 bg-[#d9d6c7] flex justify-between items-center min-h-[50vh] py-8 lg:py-0">
        <div className="flex-col w-full">
          <div className="w-full mx-auto text-left text-[#f2ede8] sm:text-xl md:text-xl lg:text-xl font-libre py-8 lg:py-32">
            <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center mb-8 lg:mb-12">
              <h2 className="mb-1 text-[#ff4d14] text-3xl">MAHA is the <i>reset</i> your body’s been begging for.
              <br/>The kind that doesn’t just quiet the noise, it clears the <i>whole</i> system.
              </h2>
            </div>
            <div className="text-[#ff4d14] font-libre mt-8">
              <p className="font-baskervville text-sm text-left text-[#ff4d14] tracking-wide">
                Rooted in ancient yogic wisdom. Backed by modern neuroscience. 
                <br/>Designed for the women who’s not just chasing success, she’s craving depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="bg-[#b0ad9c] min-h-screen flex flex-col justify-center self-center items-center order-2 lg:order-1 py-24 col-span-1 lg:col-span-2">
            <div className="px-8 sm:px-12 lg:pl-16 py-12 lg:py-0">
              <h2 className="text-xl font-baskervville text-left text-[#fffbf5] mb-2 tracking-wider leading-8">
              A proven daily system of Kriya, Breathwork, Movement & Meditation to help you feel like <i>you</i> again. 
              </h2>
              <h3 className="text-sm font-light text-[#fffbf5] font-baskervville mt-6">
              This isn’t another self-help hack.
              </h3>
              <div className="text-[#fffbf5] font-libre mt-6">
              <p className="font-baskervville text-sm text-left text-[#fffbf5] mb-2 leading-7 lg:leading-9 tracking-wide">
              MAHA 21 has been carefully designed to:
              </p>
                <div className="font-baskervville text-sm text-left font-light leading-8 tracking-wider">
                  <p>
                    Month 1: Release stagnancy & heaviness → ground into steady calm
                  </p>
                  <p>
                  Month 2: Ignite your inner fire → build strength and endurance across mind, body, emotions & energy.
                  </p>
                  <p>
                  Month 3: Restore balance → steady your energy field and quiet the mental noise.
                  </p>
                  <p>
                  Month 4: Clear old stories → create space for new life to flow in.</p>
                  <p>
                  Month 5: Expand your nervous system capacity → hold more joy, love, and life without burning out.</p>
                  <p>Month 6: Align inner and outer worlds → live authentic and free every day.</p>
                </div>
              </div>
            </div>

          <div className="flex justify-start">
            <button 
              onClick={openFlodeskForm}
              className="bg-transparent border hover:text-white border-[#fffbf5] text-[#fffbf5] px-16 py-4 mt-14 text-sm sm:text-md rounded-md uppercase cursor-pointer"
            >
              <p>JOIN OUR WAITLIST</p>
            </button>
          </div>
          </div>

          <div className="relative order-1 lg:order-2 col-span-1">
            <img
              src="/images/membership-maha.jpg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-64 sm:h-80 lg:h-full object-cover"
            />
          </div>
        </div>
      </section>


      <section className="relative w-full min-h-screen overflow-hidden bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
          {/* Right side - Image with ALESSANDRA text overlay */}

          <div className="bg-[#d9d6c7] text-[#ff4d14] min-h-screen py-24 flex justify-center items-center col-span-1 lg:col-span-2 order-2 lg:order-2">
            <div className="max-w-lg px-4 sm:px-8 py-8 lg:py-0">
              <h2 className="text-sm text-[#ff4d14] font-baskervville text-left font-bold leading-8 lg:leading-10 mb-4 tracking-wide">
What is included in the 6 Month MAHA Membership?
</h2>

              <div className="text-[#ff4d14]">
                <ul className="font-baskervville text-sm text-left font-light list-disc pl-6 lg:pl-8  tracking-wide spacing-y-4">
                  <li className="mb-4">
                  <b>MAHA 21:</b> Your daily 30 minute practise of Kriya, Breathwork, Movement & Meditation. Each 21 day journey is themed (Soften, Courage, Sleep) so instead of guessing what you need, you get to meet yourself exactly where you are. </li>
                  <li className="mb-4">
                  <b>RITUAL LIBRARY:</b> Breathwork, kriya, somatics, meditation that shift your state in minutes.
                  </li>
                  <li className="mb-4">
                  <b>SELF PACED MASTERCLASSES:</b> Deep, accessible teachings on Self-worth, Identity, Love, Abundance taught through a yogic lens.
                  </li>
                  <li className="mb-4">
                  <b>MAHA COMMUNITY:</b> A space with real connection with souls who just get it, and you. 
                  </li>
                  <li className="mb-4">
                  <b>MONTHLY LIVE CALLS:</b> Embodied coaching, integration, and community space to anchor your practice.
                  </li>
                  <li className="mb-4">
                  <b>50% OFF ALL EVENTS:</b> Pop-ups, immersions, ceremonies, always get the best pricing, first access.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative h-64 sm:h-80 lg:h-full bg-[#b0ad9c] col-span-1 order-1 lg:order-1">
            <img
              src="/images/kriya-image.webp"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* <section className="relative px-4 sm:px-8 md:px-16 lg:px-28 bg-[#d8d6c7] flex justify-between items-center min-h-[75vh] py-8 lg:py-0">
        <div className="w-full mx-auto text-left text-[#ff4d14] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-baskervville py-8 lg:py-28">
          <h2 className="mb-1">MAHA Collective isn't a luxury — </h2>
          <h3 className="mt-4 lg:mt-8 text-lg sm:text-xl lg:text-2xl italic font-light font-baskervville">
          It is daily hygiene for your nervous system and soul.</h3>
        </div>
      </section> */}

      <section className="relative w-full min-h-screen overflow-hidden bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
          {/* Right side - Image with ALESSANDRA text overlay */}

          <div className="bg-[#b0ad9c] min-h-screen flex justify-center items-center col-span-1 lg:col-span-2 order-2 lg:order-1">
            <div className="max-w-lg">
              <div className="space-y-4 text-[#fffbf5] font-libre mt-4">
                <p className="text-sm font-baskervville text-left text-[#fffbf5] tracking-wide">
                  Waitlist bonuses:
                </p>
                <ul className="font-baskervville text-sm text-left font-light list-disc pl-6 lg:pl-8 tracking-wide leading-7 spacing-y-4">
                  <li>Exclusive first access to the MAHA Method before the public.</li>
                  <li>A personal 1:1 onboarding call with Alessandra (Value $250. Not offered again)</li>
                  <li>$100 OFF pricing</li>
                  <li>Maha Alumni Status (30 spots only)</li>
                </ul>

                <p className="text-sm font-baskervville text-left italic text-[#fffbf5] mb-2 tracking-wide">
                  10X the quality of your life. Join our waitlist today. 
                </p>
              </div>

              <div className="flex justify-center">
              <button 
                onClick={openFlodeskForm}
                className="bg-transparent border hover:text-white border-[#fffbf5] text-[#fffbf5] px-16 py-4 mt-12 text-sm sm:text-md rounded-md uppercase cursor-pointer"
              >
                <p>JOIN OUR WAITLIST</p>
              </button>
            </div>
            </div>
            {/* <div className="w-full px-4 sm:px-8 py-8 lg:py-0">
              <FlodeskInlineForm />
            </div> */}

          </div>

          <div className="relative h-64 sm:h-80 lg:h-full bg-[#b0ad9c] col-span-1 order-1 lg:order-2" style={{ transform: "scale(-1, 1)" }}>
            <img
              src="/images/membership-form.jpg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-full object-cover object-[50%_10%] md:object-[50%_30%]"
            />
          </div>
        </div>
      </section>

      {/* <Footer /> */}

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
    </div>
  )
}
