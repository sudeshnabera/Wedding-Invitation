
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
      <div className="family-ornament">❧ ── ♥ ── ❧</div>

      <h2 className="text-3xl sm:text-5xl font-atma! font-bold text-goldLight tracking-wide drop-shadow-md mb-2">
        দুই পরিবারের পক্ষ থেকে
      </h2>

      <p className="family-subtitle">আমাদের প্রিয়</p>

      <h3 className="family-couple">
        প্রীতম <span>♥</span> সুদেষ্ণা
      </h3>

      <p className="family-description">
        -এর শুভ বিবাহ অনুষ্ঠানে আপনাদের সপরিবারে উপস্থিতি
        আমাদের আনন্দকে পূর্ণতা দেবে।
      </p>

      <p className="family-invite-label">সাদর আমন্ত্রণ</p>

      <div className="family-cards">
        {families.map((family) => (
          <article className="family-card" key={family.id}>
            <span className="family-flower">❀</span>

            <h4 className="family-card-title">
              {family.title}
            </h4>

            <div className="family-members">
              {family.members.map((member) => (
                <div className="family-member" key={member.relation}>
                  <span className="family-relation">
                    {member.relation} :
                  </span>

                  <span className="family-member-name">
                    {member.name}
                  </span>
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
