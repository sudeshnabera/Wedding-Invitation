

import { MapPin, Heart, Navigation } from 'lucide-react';
import "./WeddingVenue.css";

export default function WeddingVenue() {
  const events = [
    {
      type: "বিবাহ",
      title: "নিজ নিবাস",
      location: "বনমালী নগর (সাপুর), শ্যামপুর, হাওড়া",
      tagline: "শুভলগ্নে নতুন জীবনের সূচনা",
      buttonText: "ম্যাপে পথ দেখুন",
      buttonIcon: <Navigation className="w-4 h-4 mr-2 text-white" />,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=22.340946%2C88.029602",
      isPrimaryButton: true,
      accentColor: "border-amber-200 hover:border-amber-400",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200"
    },
    {
      type: "বৌভাত",
      title: "শিবালয় ম্যারেজ হল",
      location: "বেলপুকুর, শ্যামপুর, হাওড়া",
      tagline: "আপনাদের সান্নিধ্যে আনন্দের এক নতুন অধ্যায়",
      buttonText: "ম্যাপে পথ দেখুন",
      buttonIcon: <Navigation className="w-4 h-4 mr-2 text-white" />,
      mapUrl: "https://www.google.com/maps?vet=10CAAQoqAOahcKEwjwqIm3qNiXAxUAAAAAHQAAAAAQFQ..i&rlz=1C1ONGR_enIN1228IN1228&sca_esv=58546a1a377bc36f&udm&fvr=1&pvq=Cg0vZy8xMXgyMTJuMTFwIhwKFnNoaXZhbGF5IG1hcnJpYWdlIGhhbGwQAhgD&lqi=Cj5zaGl2YWxheSBtYXJyaWFnZSBoYWxsLCBiZWxwdWt1ciwgc2h5YW1wdXIsIGhvd3JhaCB3ZXN0IGJlbmdhbEi1iKiRiLyAgAhaURAAEAEQAhgAGAEYAhgEGAUYBhgHIjtzaGl2YWxheSBtYXJyaWFnZSBoYWxsIGJlbHB1a3VyIHNoeWFtcHVyIGhvd3JhaCB3ZXN0IGJlbmdhbJIBDnBhcmtpbmdfZ2FyYWdl&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3a0293f99520f5a5:0xb282c13a27061eb1",
      isPrimaryButton: true,
      accentColor: "border-rose-200 hover:border-rose-400",
      badgeColor: "bg-rose-50 text-rose-800 border-rose-200"
    }
  ];

  return (
    <section className="bg-[#fffaf2]! py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-center venu-header">
        {/* Header Section */}
        <h2>
          কোথায় দেখা হবে?
        </h2>
        <p>
          আমাদের বিশেষ দিনে আপনাদের জন্য অপেক্ষায় রইলাম।
        </p>

        {/* Decorative Divider */}
        <div className="flex items-[#D4AF37] items-center justify-center my-6 gap-3">
          <div className="h-[1px] w-12 bg-amber-300"></div>
          <span className="text-amber-600 text-sm">✦</span>
          <div className="h-[1px] w-12 bg-amber-300"></div>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {events.map((event, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border ${event.accentColor} flex flex-col justify-between relative overflow-hidden`}
            >
              {/* Subtle Decorative Arch Border inside */}
              <div className="absolute inset-2 border border-dashed border-amber-100 rounded-xl pointer-events-none" />

              <div>
                {/* Event Type Badge */}
                <div className="inline-block mb-4">
                  <span className={`px-4 py-1 rounded-full text-sm font-semibold border ${event.badgeColor}`}>
                    --: {event.type} :--
                  </span>
                </div>

                {/* Venue Name */}
                <h3 className="text-2xl font-bold text-[#7d1f2d]! mb-2">
                  {event.title}
                </h3>

                {/* Location */}
                <div className="flex items-center justify-center text-gray-600 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1 text-amber-600 shrink-0" />
                  <span>{event.location}</span>
                </div>

                {/* Tagline / Note */}
                <p className="text-gray-500 text-sm italic mb-6">
                  "{event.tagline}"
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-2 z-10">
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center py-3 px-6 rounded-xl font-medium transition-colors duration-200 text-sm ${
                    event.isPrimaryButton
                      ? "bg-[#6B1D2F] text-white hover:bg-[#521422] shadow-sm"
                      : "bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100"
                  }`}
                >
                  {event.buttonIcon}
                  {event.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="mt-12! text-sm sm:text-base text-gray-600 font-medium">
          আপনাদের উপস্থিতিই আমাদের আনন্দকে পূর্ণতা দেবে।
        </p>
      </div>
    </section>
  );
}