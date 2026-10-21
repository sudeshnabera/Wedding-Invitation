import React, { useEffect, useState } from "react";
import "./WeddingCountdown.css";

const getTimeLeft = () => {
  // Change the time to your actual wedding ceremony time if needed.
  const target = new Date("2026-11-21T00:00:00+05:30").getTime();
  const difference = Math.max(0, target - Date.now());

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isComplete: difference === 0,
  };
};

const WeddingCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { value: timeLeft.days, label: "দিন" },
    { value: timeLeft.hours, label: "ঘণ্টা" },
    { value: timeLeft.minutes, label: "মিনিট" },
    { value: timeLeft.seconds, label: "সেকেন্ড" },
  ];

  return (
    <section className="countdown-section" id="countdown">
      <span className="countdown-flower">❋</span>

      <p className="countdown-eyebrow">
       আর মাত্র কিছুদিন… ❤️
      </p>

      <p className="countdown-date">
        ২১শে নভেম্বর, ২০২৬
      </p>

      {timeLeft.isComplete ? (
        <p className="countdown-message">
          আজ আমাদের শুভ বিবাহের দিন! ♡
        </p>
      ) : (
        <div className="countdown-grid">
          {items.map((item) => (
            <div className="countdown-box" key={item.label}>
              <span className="countdown-number">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="countdown-label">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="countdown-bottom">✦ ❋ ✦</div>
    </section>
  );
};

export default WeddingCountdown;