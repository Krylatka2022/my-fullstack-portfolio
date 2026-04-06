import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

export const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Кто я", id: "about" },
    { name: "Опыт", id: "experience" },
    { name: "Навыки", id: "skills" },
    { name: "Портфолио", id: "work" },
    { name: "Контакты", id: "contacts" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] transition-all duration-500">
      {/* ЭФФЕКТ ТУМАНА (Backdrop) */}
      <div
        className={`absolute inset-0 h-[120%] -z-10 backdrop-blur-2xl 
        ${
          isDark
            ? "bg-[#0c0c0c]/70 [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
            : "bg-[#f8f8f7]/70 [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
        }`}
      />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-6 md:py-10 flex justify-between items-center">
        {/* ЛОГОТИП */}
        <div className="flex items-center gap-4 group cursor-pointer z-[110]">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center p-2 border-2 rounded-xl
            ${
              isDark
                ? "bg-cyan-500/10 border-cyan-400/30"
                : "bg-cyan-500/5 border-cyan-600/20"
            }`}
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <div className="hidden sm:flex flex-col">
            <span className="text-[12px] md:text-sm uppercase tracking-[0.3em] font-black">
              Krylatka.dev
            </span>
            <span className="text-[9px] uppercase text-cyan-500 font-bold">
              Active Motion
            </span>
          </div>
        </div>

        {/* DESKTOP NAV (Крупные буквы + подчеркивание) */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative text-sm uppercase tracking-[0.2em] font-black group py-2
                ${isDark ? "text-white" : "text-slate-900"}`}
            >
              {link.name}
              {/* Анимированная линия подчеркивания */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            </a>
          ))}
        </div>

        {/* ПРАВАЯ ЧАСТЬ (Theme Toggle + Burger) */}
        <div className="flex items-center gap-4 z-[110]">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-3 md:p-4 rounded-xl border-2 transition-all
              ${
                isDark
                  ? "border-cyan-400/30 bg-cyan-400/10"
                  : "border-orange-400/30 bg-orange-400/10"
              }`}
          >
            {isDark ? (
              <Sun size={22} className="text-cyan-400" />
            ) : (
              <Moon size={22} className="text-orange-500" />
            )}
          </button>

          {/* BURGER BUTTON (Только для мобильных) */}
          <button
            className="lg:hidden p-3 text-cyan-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Fullscreen Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed inset-0 z-[100] lg:hidden flex flex-col items-center justify-center gap-8
              ${isDark ? "bg-[#0c0c0c]" : "bg-[#f8f8f7]"}`}
          >
            {navLinks.map((link) => (
              <motion.a
                whileTap={{ scale: 0.9 }}
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`text-2xl uppercase tracking-[0.3em] font-black
                  ${isDark ? "text-white" : "text-slate-900"}`}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
