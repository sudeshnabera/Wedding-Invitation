import React from "react";
import "./FamilyInvitation.css";

const families = [
  {
    id: 1,
    title: "সুদেষ্ণার পরিবার",
    members: [
      { relation: "পিতা", name: "গৌরাঙ্গ বেরা" },
      { relation: "মাতা", name: "শেফালী বেরা" },
      { relation: "ভ্রাতা", name: "স্পন্দন বেরা" },
    ],
  },
  {
    id: 2,
    title: "প্রীতমের পরিবার",
    members: [
      { relation: "পিতা", name: "প্রভাস চন্দ্র সামন্ত" },
      { relation: "মাতা", name: "গীতা সামন্ত" },
    ],
  },
];

const FamilyInvitation = () => {
  return (
    <section className="family-invitation">
      <h2 className="text-xl! sm:text-xl! font-atma! font-bold! text-[#7d1f2d]! tracking-wide! drop-shadow-md! mb-2">
        দুই পরিবারের পক্ষ থেকে
      </h2>

      <p className="family-description">
        আমাদের জীবনের এই বিশেষ দিনে আপনাদের উপস্থিতি ও প্রীতিময় আগমন একান্ত কাম্য।
      </p>

      <p className="family-invite-label">সাদর আমন্ত্রণ</p>
      {/* <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-10">
        <div className="">
          <img src="/images/topor_mukut.png"  className="h-15 w-full" />
        </div>
      </div> */}
       <div className="family-mukut">
    <img
      src="/images/topor_mukut.png"
      alt="Bengali wedding topor mukut"
    />
  </div>
      <div className="family-cards">
        {families.map((family) => (
          <article className="family-card" key={family.id}>
            <span className="family-flower">❀</span>

            <h4 className="family-card-title">{family.title}</h4>

            <div className="family-members">
              {family.members.map((member) => (
                <div className="family-member" key={member.relation}>
                  <span className="family-relation">{member.relation} :</span>

                  <span className="family-member-name">{member.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="family-footer">
        আপনাদের আশীর্বাদ ও উপস্থিতি আমাদের একান্ত কাম্য।
      </p>
    </section>
  );
};

export default FamilyInvitation;
