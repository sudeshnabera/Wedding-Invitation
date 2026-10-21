// import React from "react";
// import "./WeddingVenue.css";

// const venues = [
//   {
//     number: "০১",
//     title: "--: বিবাহ :--",
//     name: "নিজ নিবাস",
//     address: "বেলপুকুর, শ্যামপুর, হাওড়া",
//     note: "শুভলগ্নে নতুন জীবনের সূচনা",
//     mapUrl: null,
//   },
//   {
//     number: "০২",
//     title: "--: বৌভাত :--",
//     name: "ABCD Marriage Hall",
//     address: "বেলপুকুর, শ্যামপুর, হাওড়া",
//     note: "আপনাদের সান্নিধ্যে আনন্দের এক নতুন অধ্যায়",
//     mapUrl:
//       "https://www.google.com/maps/search/?api=1&query=ABCD+Marriage+Hall+Belpukur+Shyampur+Howrah+West+Bengal",
//   },
// ];

// const WeddingVenue = () => {
//   return (
//     <section className="venue-section" id="venue">
//       <h3 className="venue-eyebrow">
//         কোথায় দেখা হবে?
//       </h3>

//       <p className="venue-title">আমাদের বিশেষ দিনে আপনাদের জন্য অপেক্ষায় রইলাম।</p>

//       <div className="venue-divider">
//         <span>✦</span>
//       </div>

//       <div className="venue-grid">
//         {venues.map((venue) => (
//           <article className="venue-card" key={venue.number}>
//             {/* <span className="venue-number">
//               {venue.number}
//             </span> */}

//             <div className="venue-icon">
//               {venue.mapUrl ? "⌖" : "⌂"}
//             </div>

//             <p className="venue-label">{venue.title}</p>

//             <h3>{venue.name}</h3>

//             <p className="venue-address">
//               {venue.address}
//             </p>

//             <p className="venue-note">{venue.note}</p>

//             {venue.mapUrl ? (
//               <a
//                 href={venue.mapUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="venue-map-button"
//               >
//                 <span>↗</span> ম্যাপে পথ দেখুন
//               </a>
//             ) : (
//               <span className="venue-home-note">
//                 আপনজনের ভালোবাসায়
//               </span>
//             )}
//           </article>
//         ))}
//       </div>

//       <p className="venue-footer">
//         আপনাদের উপস্থিতিই আমাদের আনন্দকে পূর্ণতা দেবে।
//       </p>
//     </section>
//   );
// };

// export default WeddingVenue;


import React from 'react';
import { MapPin, Heart, Navigation } from 'lucide-react';

export default function WeddingVenue() {
  const events = [
    {
      type: "বিবাহ",
      title: "নিজ নিবাস",
      location: "বেলপুকুর, শ্যামপুর, হাওড়া",
      tagline: "শুভলগ্নে নতুন জীবনের সূচনা",
      buttonText: "ম্যাপে পথ দেখুন",
      buttonIcon: <Navigation className="w-4 h-4 mr-2 text-white" />,
      mapUrl: "https://www.google.com/maps/@22.340946,88.029602,15z?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D",
      isPrimaryButton: true,
      accentColor: "border-amber-200 hover:border-amber-400",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200"
    },
    {
      type: "বৌভাত",
      title: "ABCD Marriage Hall",
      location: "বেলপুকুর, শ্যামপুর, হাওড়া",
      tagline: "আপনাদের সান্নিধ্যে আনন্দের এক নতুন অধ্যায়",
      buttonText: "ম্যাপে পথ দেখুন",
      buttonIcon: <Navigation className="w-4 h-4 mr-2 text-white" />,
      mapUrl: "https://maps.google.com",
      isPrimaryButton: true,
      accentColor: "border-rose-200 hover:border-rose-400",
      badgeColor: "bg-rose-50 text-rose-800 border-rose-200"
    }
  ];

  return (
    <section className="bg-[#fffaf2]! py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <span className="text-[#7d1f2d] text-lg sm:text-xl font-bold tracking-wide">
          কোথায় দেখা হবে?
        </span>
        <h2 className="mt-3! text-2xl sm:text-3xl lg:text-4xl font-bold text-[#695343]! leading-tight">
          আমাদের বিশেষ দিনে আপনাদের জন্য অপেক্ষায় রইলাম।
        </h2>

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