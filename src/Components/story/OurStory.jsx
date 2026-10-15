import "./OurStory.css";

const stories = [
  {
    number: "01",
    title: "দুই পরিবারের দেখা",
    image: "/images/story_family.png",
    caption: "সম্বন্ধের শুরুটা হয়েছিল দুই পরিবারের হাত ধরে।",
  },
  {
    number: "02",
    title: "একটা Friend Request",
    image: "/images/story_chat.png",
    caption: "একটা Request, তারপর একটু একটু কথা! 💌",
  },
  {
    number: "03",
    title: "কথা থেকে ভালো লাগা",
    image: "/images/story_feeling.png",
    caption: "চ্যাটের গল্প এবার সামনাসামনি। ❤️",
  },
  {
    number: "04",
    title: "প্রথম দেখা",
    image: "/images/story_meeting.png",
    caption: "চ্যাটের গল্প এবার সামনাসামনি। ❤️",
  },
  
  {
    number: "05",
    title: "দুই পরিবারের সম্মতি",
    image: "/images/story_approve.png",
    caption: "অবশেষে সবার 'হ্যাঁ'! ❤️",
  },
  {
    number: "06",
    title: "অবশেষে পরিণয়",
    image: "/images/story_porinay.png",
    caption: "দুই পরিবারের সম্মতিতে একসাথে পথচলা। 💍",
  },
];

export default function OurStory() {
  return (
    <section id="our-story" className="our-story">
      <div className="story-inner">
        <header className="story-header">
          <span className="story-label">♥ OUR STORY ♥</span>
          <h2>আমাদের গল্প</h2>
          <p>সম্বন্ধ থেকে শুরু, ভালোবাসায় পূর্ণতা...</p>
        </header>

        <div className="story-grid">
          {stories.map((story, index) => (
            <article
              key={story.number}
              className="story-card"
              style={{ "--i": index }}
            >
              {/* <span className="story-number">{story.number}</span> */}
              <div className="story-title">
                <h3>{story.title}</h3>
              </div>
              <div className="story-image">
                <img src={story.image} alt={story.title} />
                <span className="floating-heart heart-one">♥</span>
                <span className="floating-heart heart-two">♥</span>
              </div>
              <div className="story-title text-[##91755d]!">
                <p className="">{story.caption}</p>
              </div>
              
            </article>
          ))}
        </div>

        <footer className="story-footer">
          <p>একটা ছোট্ট সম্বন্ধ, সারাজীবনের বন্ধন...</p>
          
        </footer>
      </div>
    </section>
  );
}
