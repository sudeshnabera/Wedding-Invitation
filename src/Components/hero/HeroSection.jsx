import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#fff8ed] text-[#473c32]">
      {/* Subtle background details */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-4 rounded-[28px] border border-[#c9973e]/30 md:inset-7" />
        <div className="absolute -left-24 top-32 h-64 w-64 rounded-full border border-[#c9973e]/15" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full border border-[#c9973e]/15" />

        <span className="absolute left-[8%] top-[15%] animate-float text-2xl text-[#9b1c31]/50">
          ❀
        </span>
        <span className="absolute right-[9%] top-[25%] animate-float-delayed text-3xl text-[#c9973e]/70">
          ✿
        </span>
        <span className="absolute bottom-[15%] left-[12%] animate-float-delayed text-xl text-[#9b1c31]/40">
          ♡
        </span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 md:px-12 lg:px-16">
        <div className="grid w-full items-center gap-12 md:grid-cols-2 md:gap-8">
          {/* LEFT: Invitation story */}
          <div className="order-2 animate-hero-reveal md:order-1">
            <div className="mt-2 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9973e]" />
              <p className="font-bengali text-sm tracking-wide text-[#8b6a42]">
                একটি বাঙালি বিয়ের গল্প
              </p>
              <span className="h-px w-10 bg-[#c9973e]" />
            </div>

            {/* <p className="font-bengali text-base text-[#8c775e]">
              সাদর নিমন্ত্রণ
            </p> */}

            {/* <h1 className="mt-4 font-bengali text-2xl! font-semibold leading-[1.55] text-[#653d34] sm:text-5xl lg:text-6xl">
              অচেনা দুজন,
              <span className="block text-[#9b1c31]">
                আপন হলো
              </span>
              ভালোবাসায়।
            </h1>

            <p className="mt-6 max-w-lg font-bengali text-base leading-8 text-[#665b4e] md:text-lg">
              বাড়ির লোকের পছন্দে শুরু হয়েছিল পরিচয়।
              তারপর একটু একটু করে কথা, হাসি, খুনসুটি...
              আর কখন যে দুজন দুজনের আপন হয়ে উঠলাম,
              তা বুঝতেই পারিনি।
            </p> */}

            {/* Couple names */}

            {/* Couple names — centered */}
            <div className="mt-8 flex w-full flex-col items-center">
              <div className="flex w-fit items-center justify-center gap-3 border-y border-[#c9973e]/50 px-6 py-3 sm:gap-5">
                <span className="font-bengali text-2xl font-semibold text-[#7d1f2d] sm:text-3xl">
                  প্রীতম
                </span>

                <span className="text-2xl text-[#c9973e]">♥</span>

                <span className="font-bengali text-2xl font-semibold text-[#7d1f2d] sm:text-3xl">
                  সুদেষ্ণা
                </span>
              </div>

              {/* Wedding date — centered */}
              <div className="mt-5 flex flex-col items-center gap-2 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9973e]/50 text-xl text-[#9b1c31]">
                  ♡
                </span>

                <div>
                  <p className="font-bengali text-sm text-[#8c775e]">
                    শুভ বিবাহ
                  </p>

                  <p className="font-bengali text-base font-medium text-[#7d1f2d]">
                    ২১শে নভেম্বর, ২০২৬
                  </p>
                </div>
              </div>
            </div>
            {/* A little Bengali humour */}
            <div className="mt-7 max-w-md rounded-xl border-l-2 border-[#c9973e] bg-white/65 px-5 py-4">
              <p className="font-bengali text-sm leading-7 text-[#665b4e]">
                বাড়ির লোক বলেছিল,
                <span className="text-[#7d1f2d]"> “একবার কথা বলে দেখো!”</span>
                <br />
                কে জানত, সেই কথাই একদিন
                <span className="font-semibold text-[#9b1c31]">
                  {" "}
                  সারাজীবনের গল্প
                </span>{" "}
                হয়ে যাবে! 😊
              </p>
            </div>

            {/* Invitation actions */}
            <div className="mt-8 flex w-full flex-col items-center">
              <a
                href="#our-story"
                className="inline-flex items-center gap-2 font-bengali text-sm text-[#7d1f2d] transition hover:text-[#b18b53]"
              >
                আমাদের গল্প পড়ুন
                <span>↓</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Couple illustration */}
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative w-full max-w-[450px] animate-hero-reveal">
              {/* Decorative arch */}
              <div className="absolute inset-x-[7%] bottom-[5%] top-[3%] rounded-t-[48%] rounded-b-[8%] bg-[#eee6d5]" />

              <div className="absolute inset-x-[10%] bottom-[8%] top-[6%] rounded-t-[48%] rounded-b-[8%] border border-[#c9973e]/65" />

              {/* Small invitation seal */}
              <div className="absolute left-0 top-[13%] z-20 -rotate-6 rounded-lg border border-[#c9973e]/60 bg-[#fffdf8] px-4 py-3 shadow-md">
                <p className="font-bengali text-xs text-[#7d1f2d]">দুটি মন</p>
                <p className="mt-1 text-center text-lg text-[#c9973e]">♡</p>
              </div>

              <img
                src="/images/wedding-couple.png"
                alt="প্রীতম ও সুদেষ্ণার বিয়ের সাজে যুগল"
                className="relative z-10 mx-auto max-h-[46vh] w-auto max-w-full object-contain drop-shadow-[0_16px_18px_rgba(70,50,35,0.12)] md:max-h-[68vh]"
              />

              {/* Caption */}
              <div className="relative z-20 mx-auto -mt-2 w-fit rotate-1 border border-[#c9973e]/35 bg-[#fffdf8] px-6 py-3 shadow-md">
                <p className="font-bengali text-base text-[#7d1f2d]">
                  একসাথে পথচলা শুরু ❤️
                </p>
              </div>

              <p className="mt-6 text-center font-bengali text-xs tracking-[0.2em] text-[#9b8b72]">
                ২১ · ১১ · ২০২৬
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
