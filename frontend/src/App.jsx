// import "./App.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [projects, setProjects] = useState([]);

//   //   // Пробуем достучаться до API
//   //   axios
//   //     .get("http://127.0.0")
//   //     .then((res) => {
//   //       console.log("УРА! Данные пришли:", res.data);
//   //       setProjects(res.data);
//   //     })
//   //     .catch((err) => {
//   //       console.error("ОШИБКА ТУТ:", err.message);
//   //       // Если 127.0.0.1 не сработал, пробуем localhost
//   //       axios
//   //         .get("http://localhost:8000/api/projects")
//   //         .then((res) => setProjects(res.data))
//   //         .catch((e) => console.error("Второй адрес тоже мимо", e));
//   //     });
//   // }, []);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Отправка...");

//     // УНИВЕРСАЛЬНЫЙ АДРЕС:
//     const CONTACT_URL =
//       window.location.hostname === "localhost"
//         ? "http://localhost:8000/api/contact" // Локально для FastAPI
//         : "https://krylatka-dev.ru"; // На сервере для PHP

//     try {
//       // Теперь axios знает, куда именно отправлять
//       await axios.post(CONTACT_URL, formData);

//       setStatus("✅ Сообщение успешно отправлено!");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error("Ошибка при отправке:", error);
//       setStatus("❌ Ошибка при отправке. Попробуйте позже.");
//     }
//   };

//   useEffect(() => {
//     // Автоматически выбираем адрес: если мы на localhost, то 8000, иначе — твой API
//     const API_URL =
//       window.location.hostname === "localhost"
//         ? "http://localhost:8000/api/projects" // Оставляем только тот адрес, который сработал, для локальной версии
//         : "https://api.krylatka-dev.ru/api/projects";

//     axios
//       .get(API_URL)
//       .then((res) => {
//         setProjects(res.data);
//       })
//       .catch((err) => {
//         console.error("Ошибка подключения к бэкенду:", err);
//       });
//   }, []);

//   return (
//     // Меняем фон на темно-серый (slate-900) и текст на белый
//     <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
//       {/* Шапка */}
//       <header className="py-20 px-6 text-center bg-gradient-to-b from-slate-800 to-slate-900">
//         <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
//           Портфолио Разработчика
//         </h1>
//         <p className="mt-4 text-slate-400 text-xl max-w-2xl mx-auto">
//           Специализируюсь на React-интерфейсах и кастомных решениях на WordPress
//           + Python Backend.
//         </p>
//       </header>

//       <footer className="py-10 text-center text-slate-500 text-sm border-t border-slate-800">
//         © 2024 • Построено на React & FastAPI
//         <section className="max-w-2xl mx-auto px-6 py-20 border-t border-slate-800">
//           <h2 className="text-3xl font-bold mb-8 text-center">
//             Связаться со мной
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               placeholder="Ваше имя"
//               required
//               className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//             />
//             <input
//               type="email"
//               placeholder="Ваш Email"
//               required
//               className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//             />
//             <textarea
//               placeholder="Ваше сообщение"
//               required
//               rows="4"
//               className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
//               value={formData.message}
//               onChange={(e) =>
//                 setFormData({ ...formData, message: e.target.value })
//               }
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-cyan-600 hover:bg-cyan-500 py-3 rounded-lg font-bold transition-all shadow-lg shadow-cyan-900/20"
//             >
//               Отправить сообщение
//             </button>
//             {status && (
//               <p className="text-center text-sm text-cyan-400 mt-2">{status}</p>
//             )}
//           </form>
//         </section>
//       </footer>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   useMotionValue,
// } from "framer-motion";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Отправка...");
//     const CONTACT_URL =
//       window.location.hostname === "localhost"
//         ? "http://localhost:8000/api/contact"
//         : "https://krylatka-dev.ru";
//     try {
//       await axios.post(CONTACT_URL, formData);
//       setStatus("✅ Сообщение отправлено!");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       setStatus("❌ Ошибка отправки");
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-slate-900 text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 lg:cursor-none">

//       {/* ABOUT / SKILLS */}
//       <section id="about" className="py-40 px-6 md:px-10 bg-slate-800/20">
//         <div className="max-w-[1920px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
//           <div className="order-2 lg:order-1">
//             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12">
//               Core Stack
//             </h2>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//               {[
//                 "React",
//                 "Next.js",
//                 "FastAPI",
//                 "PostgreSQL",
//                 "Tailwind",
//                 "Docker",
//                 "WordPress",
//                 "Framer Motion",
//                 "Git",
//               ].map((skill, i) => (
//                 <motion.div
//                   key={skill}
//                   whileHover={{ scale: 1.05 }}
//                   className="p-6 border border-slate-700 bg-slate-800/50 rounded-sm flex items-center justify-center text-center"
//                 >
//                   <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
//                     {skill}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//           <div className="order-1 lg:order-2">
//             <p className="text-2xl md:text-4xl text-slate-300 leading-snug font-medium italic">
//               "Моя цель — превратить сложные задачи в простые и эстетичные
//               интерфейсы."
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <footer
//         id="contact"
//         className="bg-slate-100 text-slate-900 py-40 px-6 md:px-10"
//       >
//         <div className="max-w-[1920px] mx-auto grid lg:grid-cols-2 gap-32">
//           <div>
//             <h2 className="text-7xl md:text-[10vw] font-black tracking-tighter uppercase leading-[0.8] mb-12">
//               Let's <br /> Build.
//             </h2>
//             <p className="text-xl md:text-2xl text-slate-500 max-w-sm leading-relaxed font-medium">
//               Готовы запустить проект? Пишите, я всегда на связи.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-12">
//             <div className="group border-b-2 border-slate-300 focus-within:border-cyan-500 transition-colors py-4">
//               <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 required
//                 className="w-full bg-transparent text-2xl md:text-4xl outline-none font-bold"
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//               />
//             </div>
//             <div className="group border-b-2 border-slate-300 focus-within:border-cyan-500 transition-colors py-4">
//               <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 required
//                 className="w-full bg-transparent text-2xl md:text-4xl outline-none font-bold"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//               />
//             </div>
//             <div className="group border-b-2 border-slate-300 focus-within:border-cyan-500 transition-colors py-4">
//               <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2">
//                 Message
//               </label>
//               <textarea
//                 rows="2"
//                 required
//                 className="w-full bg-transparent text-2xl md:text-4xl outline-none font-bold resize-none"
//                 value={formData.message}
//                 onChange={(e) =>
//                   setFormData({ ...formData, message: e.target.value })
//                 }
//               />
//             </div>
//             <button
//               type="submit"
//               className="flex items-center gap-6 text-3xl md:text-5xl font-black uppercase tracking-tighter hover:text-cyan-600 transition-colors group"
//             >
//               Send Message{" "}
//               <span className="group-hover:translate-x-4 transition-transform">
//                 →
//               </span>
//             </button>
//             {status && (
//               <p className="font-bold text-cyan-600 uppercase tracking-widest">
//                 {status}
//               </p>
//             )}
//           </form>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   useMotionValue,
// } from "framer-motion";

// --- ОСНОВНОЙ ПРИЛОЖЕНИЕ ---

//   // Данные из твоего резюме
//   const skills = [
//     {
//       name: "React.js",
//       desc: "Разработка интерфейсов, хуки, анимации (Framer Motion).",
//     },
//     {
//       name: "Python / FastAPI",
//       desc: "Создание бэкенда, асинхронная обработка данных.",
//     },
//     {
//       name: "JavaScript / ООП",
//       desc: "Глубокое знание JS, работа с классами и Webpack.",
//     },
//     {
//       name: "БЭМ / Стилизация",
//       desc: "Nested БЭМ, адаптивная верстка (320px-1280px), Tailwind.",
//     },
//     {
//       name: "IT Управление",
//       desc: "Администрирование IT-отдела, операционное управление.",
//     },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Отправка...");
//     const CONTACT_URL =
//       window.location.hostname === "localhost"
//         ? "http://localhost:8000/api/contact"
//         : "https://krylatka-dev.ru";
//     try {
//       await axios.post(CONTACT_URL, formData);
//       setStatus("✅ Сообщение отправлено!");
//       setFormData({ name: "", email: "", message: "" });
//     } catch {
//       setStatus("❌ Ошибка отправки");
//     }
//   };

//   return (
//     <div
//       className={`w-full min-h-screen transition-colors duration-500 overflow-x-hidden ${
//         isDark ? "bg-slate-900 text-slate-100" : "bg-white text-slate-900"
//       } selection:bg-cyan-500/30 lg:cursor-none`}
//     >
//
//       {/* Укрупненная навигация */}
//       <nav
//         className={`fixed top-0 w-full z-40 border-b backdrop-blur-xl px-10 py-10 transition-colors ${
//           isDark
//             ? "border-slate-800 bg-slate-900/80"
//             : "border-slate-200 bg-white/80"
//         }`}
//       >
//         <div className="max-w-[1920px] mx-auto flex justify-between items-center uppercase font-black tracking-tighter text-4xl md:text-5xl">
//           <span>
//             KRYLATKA<span className="text-cyan-500">.</span>DEV
//           </span>
//           <div className="flex items-center gap-16">
//             <div className="hidden lg:flex gap-12 text-sm tracking-[0.3em] font-bold opacity-60">
//               <a
//                 href="#about"
//                 className="hover:text-cyan-500 transition-colors"
//               >
//                 Стек
//               </a>
//               <a href="#work" className="hover:text-cyan-500 transition-colors">
//                 Работы
//               </a>
//               <a
//                 href="#contact"
//                 className="hover:text-cyan-500 transition-colors"
//               >
//                 Контакты
//               </a>
//             </div>
//             <button
//               onClick={() => setIsDark(!isDark)}
//               className={`w-14 h-14 rounded-full border flex items-center justify-center text-2xl shadow-lg transition-all ${
//                 isDark
//                   ? "bg-slate-800 border-slate-700"
//                   : "bg-slate-100 border-slate-300"
//               }`}
//             >
//               {isDark ? "☀️" : "🌙"}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <header className="min-h-screen flex flex-col justify-center px-10 max-w-[1920px] mx-auto pt-40 pb-20">
//         <ParallaxSection offset={-150}>
//           <h1 className="text-[12vw] font-black leading-[0.8] tracking-tighter uppercase mb-16">
//             Fullstack <br />{" "}
//             <span className="text-cyan-500 italic">Developer</span>
//           </h1>
//         <div className="grid lg:grid-cols-2 gap-20 items-end">
//           <p className="text-2xl md:text-4xl leading-snug font-light opacity-80">
//             Дарья Крушельницкая. Сочетаю точность{" "}
//             <span className="font-bold underline decoration-cyan-500">
//               Python
//             </span>{" "}
//             с эстетикой{" "}
//             <span className="font-bold underline decoration-cyan-500">
//               React
//             </span>
//             .
//           </p>
//           <div className="text-right text-xs uppercase tracking-[0.4em] font-bold opacity-40">
//             Based in Saint-Petersburg • 25 Years of Experience
//           </div>
//         </div>
//       </header>

//       {/* SECTION: STEK (ПО-НОВОМУ) */}
//       <section
//         id="about"
//         className={`py-40 px-10 border-y ${
//           isDark
//             ? "bg-slate-800/20 border-slate-800"
//             : "bg-slate-50 border-slate-200"
//         }`}
//       >
//         <div className="max-w-[1920px] mx-auto">
//           <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-24">
//             Мой Стек
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//             {skills.map((skill) => (
//               <div
//                 key={skill.name}
//                 className={`p-10 border rounded-2xl transition-all hover:border-cyan-500 group ${
//                   isDark
//                     ? "bg-slate-800/40 border-slate-700"
//                     : "bg-white border-slate-200 shadow-sm"
//                 }`}
//               >
//                 <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter group-hover:text-cyan-500">
//                   {skill.name}
//                 </h3>
//                 <p className="text-lg opacity-60 leading-relaxed">
//                   {skill.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SECTION: EXPERIENCE (ИЗ РЕЗЮМЕ) */}
//       <section className="py-40 px-10 max-w-[1920px] mx-auto">
//         <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-24 text-right">
//           Опыт
//         </h2>
//         <div className="space-y-12">
//           {experience.map((item) => (
//             <div
//               key={item.place}
//               className="flex flex-col md:flex-row justify-between border-b border-current pb-12 opacity-80 hover:opacity-100 transition-opacity"
//             >
//               <span className="text-xl font-mono text-cyan-500 mb-4">
//                 {item.date}
//               </span>
//               <div className="md:w-1/2">
//                 <h3 className="text-4xl font-black uppercase tracking-tighter mb-2">
//                   {item.place}
//                 </h3>
//                 <p className="text-xl uppercase tracking-widest font-bold opacity-60">
//                   {item.role}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//         </div>
//       </main>

//       {/* FOOTER & CONTACT */}
//       <footer
//         id="contact"
//         className={`py-40 px-10 transition-colors ${
//           isDark ? "bg-white text-slate-900" : "bg-slate-900 text-white"
//         }`}
//       >
//         <div className="max-w-[1920px] mx-auto grid lg:grid-cols-2 gap-32">
//           <div>
//             <h2 className="text-7xl md:text-[12vw] font-black uppercase leading-[0.8] tracking-tighter mb-12">
//               Let's <br /> Talk.
//             </h2>
//             <p className="text-2xl font-bold uppercase tracking-widest opacity-60 underline decoration-cyan-500">
//               Dasha_fr_Russia@mail.ru
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-16">
//             <input
//               type="text"
//               placeholder="ВАШЕ ИМЯ"
//               required
//               className="w-full bg-transparent border-b-4 border-current py-6 text-3xl md:text-5xl font-black outline-none placeholder:opacity-20 focus:border-cyan-500 transition-colors"
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//             />
//             <input
//               type="email"
//               placeholder="ВАШ EMAIL"
//               required
//               className="w-full bg-transparent border-b-4 border-current py-6 text-3xl md:text-5xl font-black outline-none placeholder:opacity-20 focus:border-cyan-500 transition-colors"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//             />
//             <button
//               type="submit"
//               className="text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-cyan-500 transition-colors"
//             >
//               ОТПРАВИТЬ →
//             </button>
//             {status && (
//               <p className="text-xl font-bold uppercase tracking-widest italic">
//                 {status}
//               </p>
//             )}
//           </form>
//         </div>
//       </footer>
//     </div>
//   );
// }

//       {/* УКРУПНЕННАЯ НАВИГАЦИЯ */}
//       <nav className="fixed top-0 w-full z-[100] px-10 py-10">
//         <div className="max-w-[1400px] mx-auto flex justify-between items-baseline">
//           <motion.span
//             initial={{ y: -20 }}
//             animate={{ y: 0 }}
//             className="text-4xl font-black tracking-tighter"
//           >
//             KRYLATKA<span className="text-cyan-500 italic">.</span>
//           </motion.span>
//           <div className="flex items-center gap-16">
//             <div className="hidden md:flex gap-12 text-[10px] uppercase font-bold tracking-[0.4em] opacity-40">
//               <a href="#work" className="hover:opacity-100 transition-opacity">
//                 Portfolio
//               </a>
//               <a href="#about" className="hover:opacity-100 transition-opacity">
//                 Experience
//               </a>
//             </div>
//             <button
//               onClick={() => setIsDark(!isDark)}
//               className={`w-14 h-14 rounded-full border transition-all flex items-center justify-center text-xl shadow-2xl ${
//                 isDark
//                   ? "bg-white/5 border-white/10"
//                   : "bg-black/5 border-black/10"
//               }`}
//             >
//               {isDark ? "🌙" : "☀️"}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* HERO — ВОЗДУШНЫЙ И НЕЖНЫЙ */}
//       <header className="relative min-h-screen flex flex-col justify-center px-10 max-w-[1400px] mx-auto pt-20">
//         <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />

//         <Parallax speed={-0.2}>
//           <h1 className="text-[10vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase mb-10">
//             Daria <br />{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 italic">
//               Krushelnitskaya
//             </span>
//           </h1>
//         </Parallax>

//         <div className="max-w-2xl">
//           <p className="text-2xl md:text-4xl font-light leading-snug opacity-70 mb-10">
//             27 лет в инженерии и управлении качеством. Создаю{" "}
//             <span className="font-bold underline decoration-cyan-500">
//               утонченный код
//             </span>{" "}
//             на React & Python.
//           </p>
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest border-b-2 border-cyan-500 pb-2 hover:gap-8 transition-all"
//           >
//             Обсудить проект <span>→</span>
//           </a>
//         </div>
//       </header>

import "./index.css";
import React, { useState, useEffect } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero"; // Обо мне
import { Experience } from "./components/Experience"; // Опыт работы
import { Expertise } from "./components/Expertise"; // Навыки
import { Footer } from "./components/Footer";
import { ProjectList } from "./components/ProjectList"; // Секция Портфолио
import { BackgroundFish } from "./components/BackgroundFish"; // Моя большая рыбка
import { fetchProjects } from "./services/api";

const experienceData = [
  {
    year: "2023 — 2025",
    company: 'ООО "Омоторс"',
    position: "Веб-разработчик",
    desc: "Полный цикл на WordPress. Сложные фильтры авто, AJAX-логика, интеграция с Telegram.",
  },
  {
    year: "2022 — 2023",
    company: "Я.Практикум",
    position: "Frontend Developer (Edu)",
    desc: "Проекты: Mesto, Russian Travel. Стек: React, API, Webpack, адаптивная верстка.",
  },
  {
    year: "2019 — 2022",
    company: "АРАНТ",
    position: "Операционный директор",
    desc: "Автоматизация отчетности, администрирование IT-отдела и процессов компании.",
  },
];

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  return (
    <div
      className={`min-h-screen selection:bg-cyan-500/30 transition-colors duration-1000 ${
        isDark ? "bg-[#0c0c0c] text-slate-100" : "bg-[#f8f8f7] text-slate-900"
      }`}
    >
      <CustomCursor isDark={isDark} />
      <BackgroundFish isDark={isDark} />
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <main className="relative z-10 px-8 max-w-[1600px] mx-auto pt-32">
        <Hero />
        <Experience data={experienceData} />
        <Expertise />
        <ProjectList projects={projects} isDark={isDark} />

        <Footer />
      </main>
    </div>
  );
}
