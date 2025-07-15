"use client"

export default function SocialMediaSection() {
  return (
    <section className="w-full bg-[#d8d6c7] flex flex-col items-center relative pb-12">
      {/* <h2 className="text-5xl md:text-6xl font-libre text-[#f2ede8] text-center mb-12 tracking-wide" style={{fontFamily: 'serif', fontWeight: 400}}>
        FOLLOW US ON INSTAGRAM & TIKTOK
      </h2> */}
      <div className="bg-[#b1ad9c] py-1 overflow-hidden w-full absolute left-0 top-0">
        <div className="whitespace-nowrap animate-marquee">
          {Array.from({ length: 14 }, (_, i) => (
            <p
              key={i}
              className="text-[#f5f3ed] px-8 font-baskervville text-sm tracking-wider inline-block"
            >
              FOLLOW MAHA COLLECTIVE
            </p>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-8">
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
          <span className="text-2xl md:text-3xl font-libre text-sun text-center" style={{fontFamily: 'serif'}}>@MAHACOLLECTIVE</span>
        </div>
      </div>
    </section>
  )
}
