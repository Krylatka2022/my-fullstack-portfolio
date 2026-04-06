import React from "react";

/* ОПЫТ РАБОТЫ */

export const Experience = ({ data }) => (
  <section id="experience" className="py-32 border-t border-white/5 pt-44">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="md:col-span-4 sticky top-40 h-fit">
        <h2 className="text-[10px] uppercase tracking-[0.5em] opacity-30">
          Journey
        </h2>
      </div>
      <div className="md:col-span-8 space-y-32">
        {data.map((exp, i) => (
          <div key={i}>
            <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
              <h3 className="text-3xl font-bold uppercase">{exp.company}</h3>
              <span className="font-mono text-xs opacity-30">{exp.year}</span>
            </div>
            <p className="text-cyan-500 uppercase text-[10px] tracking-[0.3em] font-bold mb-6">
              {exp.position}
            </p>
            <p className="text-xl md:text-2xl opacity-60 leading-relaxed max-w-xl">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
