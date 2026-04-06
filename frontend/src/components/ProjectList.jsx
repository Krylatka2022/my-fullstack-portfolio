import React from "react";
import { motion } from "framer-motion";

export const ProjectList = ({ projects, isDark }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
      <h2 className="text-[10px] uppercase tracking-[0.5em] mb-16 opacity-30">
        Selected Projects
      </h2>

      {/* Адаптивная сетка: 1 колонка везде, 2 на планшетах, 3 на десктопе */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group flex flex-col h-full cursor-none relative"
          >
            {/* ВЕРХНЯЯ ЧАСТЬ (ВИЗУАЛ) */}
            <div
              className={`relative aspect-[16/10] transition-all duration-1000 border border-b-0 overflow-hidden
                ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 group-hover:border-cyan-500/50"
                    : "bg-black/[0.03] border-black/10 shadow-sm"
                }
                /* Начальное скругление: левый верх и правый низ */
                rounded-[3rem_1rem_0_0] 
                /* Морфинг при наведении: меняем акценты на углах */
                group-hover:rounded-[1rem_3rem_0_0] 
              `}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-20 text-[9px] uppercase tracking-[0.6em] text-center px-4 font-bold">
                Screenshot Coming Soon
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* НИЖНЯЯ ЧАСТЬ (КОНТЕНТ) */}
            <div
              className={`flex-grow p-8 border transition-all duration-1000 flex flex-col
                ${
                  isDark
                    ? "bg-[#121212]/40 border-white/10 group-hover:border-cyan-500/50"
                    : "bg-white border-black/10 shadow-md group-hover:shadow-cyan-500/10"
                }
                /* Зеркальное скругление для низа */
                rounded-[0_0_3rem_1rem] 
                group-hover:rounded-[0_0_1rem_3rem]
              `}
            >
              <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-cyan-500 transition-colors duration-500">
                {p.title}
              </h3>

              <p className="text-sm opacity-50 leading-relaxed mb-8 line-clamp-3 font-medium">
                {p.desc ||
                  "Разработка интерфейса с использованием современных стеков технологий и оптимизацией производительности."}
              </p>

              {/* ТЕГИ ТЕХНОЛОГИЙ */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {(typeof p.tech === "string"
                  ? p.tech.split(" / ")
                  : p.tech || []
                ).map((tag, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md border 
                      transition-all duration-500
                      ${
                        isDark
                          ? "border-cyan-500/30 text-cyan-400 bg-cyan-500/5 group-hover:bg-cyan-500/10 group-hover:border-cyan-500"
                          : "border-cyan-600/20 text-cyan-700 bg-cyan-50/50 group-hover:border-cyan-600"
                      }
                    `}
                  >
                    {tag.trim()}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* ИНДИКАТОР КЕЙСА (маленький номер сверху) */}
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-cyan-500 text-black flex items-center justify-center text-[10px] font-black opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-12 group-hover:rotate-0">
              0{i + 1}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
