
import "./WeddingTransition.css";

export default function WeddingTransition() {
  return (
    <section className="wedding-transition">
      {/* <div className="transition-decoration">
        ❧ <span>✦</span> ❧
      </div> */}

      <p className="transition-eyebrow">
        একটা ছোট্ট ঘোষণা
      </p>

      <h2>গল্প থেকে এবার অনুষ্ঠানে!</h2>

      <p className="transition-description">
        প্রস্তুত তো? আমাদের আনন্দে সামিল হওয়ার
        <br className="hidden sm:block" />
        পালা এবার আপনাদের!
      </p>

      <div className="transition-bottom">
  <img
    src="/images/panpata.png"
    alt="Panpata decoration"
    className="transition-decoration transition-panpata"
  />

  <div className="transition-center">
    <span>❀</span>
    <span className="transition-arrow">↓</span>
    <span>❀</span>
  </div>

  <img
    src="/images/palki.png"
    alt="Palki decoration"
    className="transition-decoration transition-palki"
  />
</div>
    </section>
  );
}
