"use client"

import React, { useState, useEffect, useRef } from "react";
import testimonialData from "@/lib/testimonials.json";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonials = testimonialData.general_testimonials;
  const displayCount = 3;
  const total = testimonials.length;
  const rowRef = useRef<HTMLDivElement>(null);

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? total - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Calculate the correct translateX value
  const getTranslateX = () => {
    // If less than displayCount, don't slide
    if (total <= displayCount) return 0;
    // If at the end, wrap around
    if (currentIndex + displayCount > total) {
      // Show the last 'displayCount' items
      return ((total - displayCount) * 100) / displayCount;
    }
    return (currentIndex * 100) / displayCount;
  };

  return (
    <section className="relative bg-[#d8d6c7] min-h-screen py-20 px-8 overflow-hidden">
      {/* Main heading */}
      <h2 className="text-[#ff4d14] text-3xl md:text-5xl font-tan-meringue text-center mb-20">
        Don't take our word for it...
      </h2>

      {/* Testimonials Grid */}
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-[#ff4d14] z-10 text-4xl hover:scale-110 transition-transform"
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <div className="relative w-full">
          <div
            ref={rowRef}
            className="flex transition-transform duration-600 ease-in"
            style={{
              width: `${(total * 100) / displayCount}%`,
              transform: `translateX(-${getTranslateX()}%)`,
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-[#f2ede9] border border-[#b1ad9c] rounded-lg p-12 flex flex-col items-center justify-center min-h-[400px] w-full mx-2"
                style={{ flex: `0 0 ${100 / total}%`, maxWidth: `${100 / displayCount}%` }}
              >
                <p className="text-[#2d1f12] text-xl mb-8">{testimonial.text}</p>
                <p className="text-[#ff4d14] text-2xl font-baskervville">
                  {testimonial.author || "Anonymous"}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-[#ff4d14] z-10 text-4xl hover:scale-110 transition-transform"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>

      {/* Join the Collective Button */}
      <div className="flex justify-center mt-20">
        <button className="bg-[#f2ede9] text-[#ff4d14] px-12 py-1 text-lg rounded-md uppercase tracking-wider">
          JOIN THE COLLECTIVE
        </button>
      </div>

      {/* Heart Icon */}
      <div className="absolute bottom-8 right-8">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 88.3333C50 88.3333 83.3333 66.6667 83.3333 41.6667C83.3333 20 66.6667 16.6667 50 33.3333C33.3333 16.6667 16.6667 20 16.6667 41.6667C16.6667 66.6667 50 88.3333 50 88.3333Z"
            fill="#ff4d14" stroke="#ff4d14" strokeWidth="2" />
        </svg>
      </div>
      <style jsx>{`
        .duration-600 {
          transition-duration: 600ms;
        }
      `}</style>
    </section>
  );
}
