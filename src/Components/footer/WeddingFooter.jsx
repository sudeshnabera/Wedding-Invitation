
import "./WeddingFooter.css";

const WeddingFooter = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="wedding-footer">
      {/* Decorative top border */}
      {/* <div className="footer-top-border">
        <span className="footer-border-flower">✥</span>
        <span className="footer-border-line" />
        <span className="footer-border-lotus">❋</span>
        <span className="footer-border-line" />
        <span className="footer-border-flower">✥</span>
      </div> */}

      <div className="footer-content">
        {/* Traditional ornament */}
        <div className="footer-ornament">
          <span className="footer-ornament-line" />
          <span className="footer-heart">♥</span>
          <span className="footer-ornament-line" />
        </div>

        <p className="footer-blessing">
          একটি নতুন পথচলা
          {/* <br />
          ভালোবাসায় ভরে উঠুক সারাটি জীবন। */}
        </p>

        {/* <div className="footer-divider">
          <span>✦</span>
          <span className="footer-divider-lotus">❋</span>
          <span>✦</span>
        </div> */}

        <p className="footer-thank-you">
          দুটি মনের মিলনে, দুটি পরিবারের বন্ধনে

          <br />
         শুরু হলো আমাদের জীবনের নতুন অধ্যায়।
        </p>

        <p className="footer-with-love">ভালোবাসা ও আশীর্বাদে</p>

        {/* <h2 className="footer-couple">
          <span>প্রীতম</span>
          <span className="footer-couple-heart">♥</span>
          <span>সুদেষ্ণা</span>
        </h2> */}

        {/* <div className="footer-couple-decoration">
          <span>❧</span>
          <span className="footer-date">
            ২১শে নভেম্বর, ২০২৬
          </span>
          <span>❧</span>
        </div> */}

        <p className="footer-final-message">
          আমাদের এই বিশেষ মুহূর্তের গল্পে
          <br/>
          সঙ্গী হওয়ার জন্য আন্তরিক ধন্যবাদ।
        </p>
        <div className="footer-back-to-top">
           ❀ শুভ পরিণয় ❀
        </div>
         
        {/* <button
          type="button"
          className="footer-back-to-top"
          onClick={handleBackToTop}
        >
          <span className="footer-up-icon">↑</span>
          <span>উপরে ফিরে যান</span>
        </button> */}

        <div className="footer-bottom-flourish">
          <span>❧</span>
          <span>✥</span>
          <span>❧</span>
        </div>
      </div>

      {/* Cream alpana-inspired bottom area */}
      <div className="footer-cream-bottom">
        <div className="footer-bottom-ornament">
          <span>✦</span>
          <span className="footer-bottom-line" />
          <span className="footer-bottom-lotus">❋</span>
          <span className="footer-bottom-line" />
          <span>✦</span>
        </div>

        <p className="footer-copyright">
          Made with <span>♥</span> for Pritam &amp; Sudeshna
        </p>

        <p className="footer-bengali-signature">
          একটি নতুন গল্পের শুভ সূচনা
        </p>
      </div>
    </footer>
  );
};

export default WeddingFooter;
