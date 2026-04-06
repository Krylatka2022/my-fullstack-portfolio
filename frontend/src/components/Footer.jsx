import React from "react";
import { motion } from "framer-motion";
import { Mail, Send, MessageSquare } from "lucide-react";
import { Globe, Code } from "lucide-react"; // Заменили Github на Globe и Code

export const Footer = ({ isDark }) => {
  return (
    <footer
      id="contacts"
      className="relative py-32 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* ЛЕВАЯ ЧАСТЬ: КОНТАКТЫ И ТЕКСТ */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
              Let's <span className="text-cyan-500 italic">Connect</span>
            </h2>
            <p className="text-xl opacity-50 max-w-md leading-relaxed mb-12">
              Готова к новым вызовам и интересным проектам. Напишите мне, и мы
              создадим что-то <span className="text-cyan-400">живое</span>.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:dasha_fr_russia@mail.ru"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="p-3 rounded-full border border-cyan-500/20 bg-cyan-500/5 group-hover:scale-110 group-hover:border-cyan-500 transition-all duration-500">
                  <Mail size={20} className="text-cyan-500" />
                </div>
                <span className="text-sm font-bold tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                  DASHA_FR_RUSSIA@MAIL.RU
                </span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="p-3 rounded-full border border-white/10 bg-white/5 group-hover:scale-110 group-hover:border-cyan-500 transition-all duration-500">
                  {/* <Github
                    size={20}
                    className="group-hover:text-cyan-500 transition-colors"
                  /> */}
                  <Code size={20} />{" "}
                  {/* Используем иконку кода вместо логотипа GitHub */}
                </div>
                <span className="text-sm font-bold tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                  ://github.com
                </span>
              </a>
            </div>
          </div>

          <div className="mt-20 text-[10px] uppercase tracking-[0.5em] opacity-20">
            © 2026 Krylatka Dev • St. Petersburg
          </div>
        </motion.div>

        {/* ПРАВАЯ ЧАСТЬ: ФОРМА С ЭФФЕКТОМ ПЛАВНИКА */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="NAME"
              className={`w-full p-6 text-[10px] font-bold tracking-widest border transition-all duration-700 outline-none
                ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 focus:border-cyan-500/50"
                    : "bg-black/[0.03] border-black/10 focus:border-cyan-500"
                }
                rounded-[2rem_0.5rem_2rem_0.5rem] focus:rounded-[0.5rem_2rem_0.5rem_2rem]`}
            />
            <input
              type="email"
              placeholder="EMAIL"
              className={`w-full p-6 text-[10px] font-bold tracking-widest border transition-all duration-700 outline-none
                ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 focus:border-cyan-500/50"
                    : "bg-black/[0.03] border-black/10 focus:border-cyan-500"
                }
                rounded-[0.5rem_2rem_0.5rem_2rem] focus:rounded-[2rem_0.5rem_2rem_0.5rem]`}
            />
          </div>

          <textarea
            placeholder="YOUR MESSAGE"
            rows="5"
            className={`w-full p-6 text-[10px] font-bold tracking-widest border transition-all duration-700 outline-none resize-none
              ${
                isDark
                  ? "bg-white/[0.03] border-white/10 focus:border-cyan-500/50"
                  : "bg-black/[0.03] border-black/10 focus:border-cyan-500"
              }
              rounded-[2rem_1rem_4rem_1rem] focus:rounded-[1rem_4rem_1rem_4rem]`}
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-6 bg-cyan-500 text-black font-black text-[10px] tracking-[0.5em] uppercase flex items-center justify-center gap-3 rounded-full hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-500"
          >
            Send Message <Send size={14} />
          </motion.button>

          {/* Декоративный элемент "пузырек" за формой */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
        </motion.form>
      </div>
    </footer>
  );
};
