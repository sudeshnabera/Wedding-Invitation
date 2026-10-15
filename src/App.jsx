import { useState } from "react";
import Home from "./Components/Home";
import "./app.css";

const App = () => {
  const [showHome, setShowHome] = useState(false);

  const handleEnter = () => {
    setShowHome(true);
  };

  if (showHome) {
    return <Home />;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff8ed]">

      {/* Background Decorations */}
      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#e7b85c]/10 blur-[100px]" />

        <div className="absolute left-5 top-10 text-3xl opacity-50 animate-float">
          🌸
        </div>

        <div className="absolute right-8 top-20 text-3xl opacity-50 animate-float-slow">
          🌼
        </div>

        <div className="absolute bottom-20 left-8 text-3xl opacity-40 animate-float-slow">
          🌺
        </div>

        <div className="absolute bottom-10 right-8 text-3xl opacity-40 animate-float">
          🌸
        </div>

      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-8">

        <div className="w-full max-w-5xl! text-center">

          {/* Blessing */}
          <p className="animate-fade-down font-bengali text-sm tracking-[0.3em] text-[#9b1c31]">
            শ্রী শ্রী গণেশায় নমঃ
          </p>

          {/* Heading */}
          <h1
            className="
              mt-4
              animate-fade-up
              font-bengali
              text-2xl!
              font-semibold
              leading-tight
              text-[#7d1f2d]
              md:text-4xl
            "
          >
            আমাদের বিবাহের নিমন্ত্রণ
          </h1>

          {/* Divider */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[#c9973e]/60" />

            <span className="text-xl text-[#c9973e]">
              ❈
            </span>

            <span className="h-px w-16 bg-[#c9973e]/60" />
          </div>

          {/* Couple */}
          <div
            className="
              relative
              mx-auto
              mt-8
              w-full
              max-w-[620px]
              animate-couple
            "
          >

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[360px]
                w-[360px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#c9973e]/10
                blur-2xl
                md:h-[480px]
                md:w-[480px]
              "
            />

            <img
              src="/images/wedding-couple.png"
              alt="Pritam and Sudeshna"
              className="
                relative
                z-10
                mx-auto
                h-auto
                ms:max-h-[420px]
                max-h-[500px]
                w-auto
                max-w-full
                object-contain
                drop-shadow-[0_20px_25px_rgba(125,31,45,0.15)]
              "
            />

          </div>

          {/* Names */}
          <div className="relative z-20 mt-2 animate-fade-up">

            <h2
              className="
                font-bengali
                text-3xl
                font-semibold
                text-[#7d1f2d]
                md:text-4xl
              "
            >
              প্রীতম
              <span className="mx-3 text-[#c9973e]">
                ♥
              </span>
              সুদেষ্ণা
            </h2>

            {/* English Date */}
            <p className="mt-3 font-bengali text-base text-[#6b4a3a]">
              ২১শে নভেম্বর, ২০২৬
            </p>

            {/* Bengali Calendar Date */}
            <p className="mt-1 font-bengali text-sm text-[#9b1c31]">
              ৪ঠা অগ্রহায়ণ, ১৪৩৩
            </p>

          </div>

          {/* Enter Button */}
          <button
            onClick={handleEnter}
            className="
              mt-4
              rounded-full
              border
              border-[#c9973e]
              bg-[#7d1f2d]
              px-9
              py-3
              font-bengali
              text-base
              text-white
              shadow-lg
              shadow-[#7d1f2d]/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#641724]
              hover:shadow-xl
              active:scale-95
            "
          >
            ✨ নিমন্ত্রণ গ্রহণ করুন ✨
          </button>

          {/* Bottom Text */}
          <p className="mt-6! font-bengali text-xs tracking-widest text-[#9b1c31]/70">
            আপনাদের সস্নেহ উপস্থিতি আমাদের একান্ত কাম্য
          </p>

        </div>

      </div>

    </main>
  );
};

export default App;