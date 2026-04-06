import React from "react";
import { motion } from "framer-motion";

export const Hero = ({ isDark }) => (
  <section
    id="about"
    className="min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 pt-24 pb-12 relative overflow-hidden"
  >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="max-w-[1500px] mx-auto w-full"
    >
      {/* ЗАГОЛОВОК: Используем clamp или более гибкие vw для мобилок */}
      <div className="mb-8 md:mb-12">
        <h1
          className={`text-[14vw] sm:text-[11vw] md:text-[7.5vw] font-black leading-[1.05] md:leading-[1.05] tracking-tighter uppercase break-words
          ${isDark ? "text-white" : "text-white-900"}`}
        >
          Daria <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-500 bg-[length:200%_auto] animate-gradient-x italic font-semibold drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] block sm:inline">
            Krylatka
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* КОНТЕНТ */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed border-l-2 border-cyan-500 pl-4 md:pl-6 py-1 md:py-2">
            От <span className="font-bold">главного бухгалтера</span> и{" "}
            <span className="font-bold">директора</span> — к созданию цифровых
            экосистем. Мой код пропитан пониманием{" "}
            <span className="text-cyan-500 italic">бизнес-процессов</span>.
          </p>

          <p
            className={`text-sm sm:text-base md:text-lg leading-relaxed opacity-80 font-light max-w-xl
            ${isDark ? "text-slate-300" : "text-white-600"}`}
          >
            Я прошла путь длиной в 20 лет в управлении, чтобы понять: хаос
            лечится алгоритмами. Я пришла в IT, чтобы объединить фундаментальный
            опыт с мощью
            <span className="text-cyan-500 font-medium"> AI-технологий</span>.
          </p>
        </div>

        {/* CTA ПРИЗЫВ: На мобилках убираем лишний padding-top */}
        <div className="lg:col-span-5 flex flex-col justify-end h-full pt-4 md:pt-10">
          <motion.div
            whileHover={{ x: 10 }}
            className="group flex flex-col gap-6"
          >
            <a
              href="#work"
              className="flex items-center gap-4 md:gap-6 text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] md:tracking-[0.4em] font-black transition-colors hover:text-cyan-500"
            >
              <span className="w-12 md:w-16 h-[2px] bg-cyan-500 group-hover:w-20 md:group-hover:w-28 transition-all duration-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              Смотреть проекты
            </a>

            {/* Скролл-индикатор: скрываем на совсем маленьких экранах, чтобы не занимать место */}
            <div className="hidden sm:flex flex-col gap-2 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
              <span className="text-[10px] uppercase tracking-[0.6em]">
                Листайте вниз
              </span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-[1px] h-12 bg-cyan-500/50 ml-1"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </section>
);
