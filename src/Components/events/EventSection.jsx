// import "./Event.css";

// const events = [
//   {
//     number: "০১",
//     english: "THE BLESSINGS",
//     title: "শুভ আশীর্বাদ",
//     image: "/images/event-ashirbad.png",
//     symbol: "❀",
//     description: "বড়দের আশীর্বাদে শুরু হোক আমাদের নতুন জীবনের প্রথম অধ্যায়।",
//     date: "২০শে নভেম্বর, ২০২৬",
//     time: "সকাল ১০:০০টা",
//     venue: "বাড়ির ঠিকানা, কলকাতা",
//   },
//   {
//     number: "০২",
//     english: "THE CELEBRATION",
//     title: "গায়ে হলুদ",
//     image: "/images/event-holud.png",
//     symbol: "✿",
//     description: "হলুদের রঙে, হাসির ছোঁয়ায় জমে উঠুক আনন্দের আয়োজন!",
//     date: "২০শে নভেম্বর, ২০২৬",
//     time: "বিকাল ৪:০০টা",
//     venue: "বাড়ির ঠিকানা, কলকাতা",
//   },
//   {
//     number: "০৩",
//     english: "THE WEDDING",
//     title: "শুভ বিবাহ",
//     image: "/images/event-wedding.png",
//     symbol: "♥",
//     description: "সবার ভালোবাসা ও আশীর্বাদ নিয়ে শুরু হবে একসাথে পথচলা।",
//     date: "২১শে নভেম্বর, ২০২৬",
//     time: "শুভ লগ্নের সময় যোগ করুন",
//     venue: "বিবাহ মণ্ডপ, কলকাতা",
//   },
// ];

// function EventCard({ event }) {
//   return (
//     <article className="event-card">
//       <div className="event-card-inner">
//         {/* <span className="event-number">{event.number}</span> */}

//         <div className="event-icon">{event.symbol}</div>

//         <h3>{event.title}</h3>

//         <div className="event-divider" />

//         <p className="event-description">{event.description}</p>
//       </div>
//     </article>
//   );
// }

// export const EventSection = () => {
//   return (
//     <section id="wedding-events" className="wedding-events">
//       <div className="events-inner">
//         <header className="events-header">
//           {/* <span className="events-eyebrow">
//             ✦ OUR WEDDING CELEBRATIONS ✦
//           </span> */}

//           <h5>আমাদের আনন্দের আয়োজন</h5>

//           {/* <p>তিনটি মুহূর্ত, এক জীবনের শুরু...</p> */}

//           <div className="events-heading-divider" aria-hidden="true">
//             <span />
//             <b>❀</b>
//             <span />
//           </div>
//         </header>

//         <div className="events-grid">
//           {events.map((event, index) => (
//             <div
//               className="event-item"
//               key={event.number}
//               style={{ "--event-index": index }}
//             >
//               <EventCard event={event} />
//             </div>
//           ))}
//         </div>

//         <footer className="events-footer">
//           <div className="events-footer-divider" aria-hidden="true">
//             <span />
//             ❀
//             <span />
//           </div>

//           <p>
//             আপনাদের উপস্থিতি ও আশীর্বাদে
//             <br />
//             আমাদের আনন্দ পূর্ণতা পাবে।
//           </p>

//         </footer>
//       </div>
//     </section>
//   );
// }

// import "./Event.css";

// const events = [
//   {
//     number: "০১",
//     title: "শুভ আশীর্বাদ",
//     symbol: "🪔",
//     caption: "শুভ সূচনার মুহূর্ত",
//   },
//   {
//     number: "০২",
//     title: "গায়ে হলুদ",
//     symbol: "🌼",
//     caption: "হলুদে রাঙানো আনন্দ",
//   },
//   {
//     number: "০৩",
//     title: "শুভ বিবাহ",
//     symbol: "💍",
//     caption: "একসাথে সারাজীবন",
//   },
//   {
//     number: "০৪",
//     title: "বৌভাত",
//     symbol: "🌸",
//     caption: "নতুন জীবনের নতুন আনন্দ",
//   },
// ];

// function EventCard({ event }) {
//   return (
//     <article className="wedding-event-card">
//       {/* <div className="wedding-event-number">{event.number}</div> */}

//       {/* <div className="wedding-event-symbol" aria-hidden="true">
//         {event.symbol}
//       </div> */}

//       <h5>{event.title}</h5>

//       <div className="wedding-event-divider" aria-hidden="true">
//         <span />
//         <b>❀</b>
//         <span />
//       </div>

//       <p>{event.caption}</p>

//       <div className="wedding-event-flourish" aria-hidden="true">
//         ❧ <span>♥</span> ❧
//       </div>
//     </article>
//   );
// }

// export const EventSection = () => {
//   return (
//     <section className="wedding-events" id="wedding-events">
//       <div className="wedding-events-content">
//         <header className="wedding-events-header">
//           <div className="wedding-events-ornament" aria-hidden="true">
//             ❧
//           </div>

//           <h2>আমাদের আনন্দের আয়োজন</h2>

//           {/* <p>তিনটি মুহূর্ত, এক জীবনের শুরু...</p> */}

//           <div className="wedding-events-divider" aria-hidden="true">
//             <span />
//             <b>❀</b>
//             <span />
//           </div>
//         </header>

//         <div className="wedding-events-grid">
//           {events.map((event) => (
//             <EventCard key={event.number} event={event} />
//           ))}
//         </div>

//         <footer className="wedding-events-footer">
//           <div className="wedding-events-divider" aria-hidden="true">
//             <span />
//             <b>❀</b>
//             <span />
//           </div>

//           <p>
//             আপনাদের উপস্থিতি ও আশীর্বাদে
//             <br />
//             আমাদের আনন্দ পূর্ণতা পাবে।
//           </p>
//         </footer>
//       </div>
//     </section>
//   );
// };




import "./WeddingEvents.css";

const events = [
  {
    number: "০১",
    title: "শুভ আশীর্বাদ",
    caption: "শুভ সূচনার মুহূর্ত",
    symbol: "🪔",
  },
  {
    number: "০২",
    title: "গায়ে হলুদ",
    caption: "হলুদে রাঙানো আনন্দ",
    symbol: "🌼",
  },
  {
    number: "০৩",
    title: "শুভ বিবাহ",
    caption: "একসাথে সারাজীবন",
    symbol: "💍",
  },
  {
    number: "০৪",
    title: "বৌভাত",
    caption: "নতুন জীবনের আনন্দ",
    symbol: "🌸",
  },
];

export const EventSection = () => {
  return (
    <section className="wedding-events" id="wedding-events">
      <div className="wedding-events-content">
        <header className="wedding-events-header">
          <h2>আমাদের আনন্দের আয়োজন</h2>
           <p>আপনাদের আশীর্বাদে পূর্ণ হোক আমাদের আনন্দ।</p>
          {/* <p>চারটি মুহূর্ত, এক জীবনের শুরু...</p> */}
          <span className="events-flower">❀</span>
        </header>

        <div className="mini-timeline">
          <div className="timeline-track" />

          {events.map((event, index) => (
            <article
              key={event.number}
              className={`timeline-event event-${index + 1}`}
            >
              <div className="timeline-card">
                {/* <span className="timeline-number">
                  {event.number}
                </span> */}

                <h3>{event.title}</h3>

                <div className="timeline-divider">
                  <span />
                  ❀
                  <span />
                </div>

                <p>{event.caption}</p>

                {/* <span className="timeline-symbol">
                  {event.symbol}
                </span> */}
              </div>

              <span className="timeline-dot" />
            </article>
          ))}
        </div>

    
      </div>
    </section>
  );
}

