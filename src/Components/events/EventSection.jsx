

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
};
