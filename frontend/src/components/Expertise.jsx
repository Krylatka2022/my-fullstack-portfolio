import React from "react";

/* НАВЫКИ */

export const Expertise = () => {
  const skills = [
    { title: "Frontend", items: "React / JS ES6+ / HTML5 / SCSS" },
    { title: "CMS & Backend", items: "WordPress / PHP / Node.js / SQL" },
    { title: "AI Tools", items: "ChatGPT SDK / Python / AI Bots" },
    { title: "Design", items: "Figma / Photoshop / CorelDRAW" },
  ];

  return (
    <section id="skills" className="py-32 border-y border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {skills.map((s, i) => (
          <div key={i}>
            <h5 className="text-[10px] uppercase tracking-[0.3em] opacity-30 mb-6">
              {s.title}
            </h5>
            <p className="text-sm font-bold uppercase leading-loose">
              {s.items}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
