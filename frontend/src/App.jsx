import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [projects, setProjects] = useState([]);

  //   // Пробуем достучаться до API
  //   axios
  //     .get("http://127.0.0")
  //     .then((res) => {
  //       console.log("УРА! Данные пришли:", res.data);
  //       setProjects(res.data);
  //     })
  //     .catch((err) => {
  //       console.error("ОШИБКА ТУТ:", err.message);
  //       // Если 127.0.0.1 не сработал, пробуем localhost
  //       axios
  //         .get("http://localhost:8000/api/projects")
  //         .then((res) => setProjects(res.data))
  //         .catch((e) => console.error("Второй адрес тоже мимо", e));
  //     });
  // }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Отправка...");
  //   try {
  //     await axios.post("https://krylatka-dev.ru", formData);
  //     setStatus("✅ Сообщение успешно отправлено!");
  //     setFormData({ name: "", email: "", message: "" });
  //   } catch (error) {
  //     setStatus("❌ Ошибка при отправке. Попробуйте позже.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Отправка...");

    // УНИВЕРСАЛЬНЫЙ АДРЕС:
    const CONTACT_URL =
      window.location.hostname === "localhost"
        ? "http://localhost:8000/api/contact" // Локально для FastAPI
        : "https://krylatka-dev.ru"; // На сервере для PHP

    try {
      // Теперь axios знает, куда именно отправлять
      await axios.post(CONTACT_URL, formData);

      setStatus("✅ Сообщение успешно отправлено!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      setStatus("❌ Ошибка при отправке. Попробуйте позже.");
    }
  };

  useEffect(() => {
    // Автоматически выбираем адрес: если мы на localhost, то 8000, иначе — твой API
    const API_URL =
      window.location.hostname === "localhost"
        ? "http://localhost:8000/api/projects" // Оставляем только тот адрес, который сработал, для локальной версии
        : "https://api.krylatka-dev.ru/api/projects";

    axios
      .get(API_URL)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error("Ошибка подключения к бэкенду:", err);
      });
  }, []);

  return (
    // Меняем фон на темно-серый (slate-900) и текст на белый
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Шапка */}
      <header className="py-20 px-6 text-center bg-gradient-to-b from-slate-800 to-slate-900">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Портфолио Разработчика
        </h1>
        <p className="mt-4 text-slate-400 text-xl max-w-2xl mx-auto">
          Специализируюсь на React-интерфейсах и кастомных решениях на WordPress
          + Python Backend.
        </p>
      </header>

      {/* Сетка проектов */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-10 border-l-4 border-cyan-500 pl-4">
          Мои работы
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all hover:-translate-y-1 shadow-lg"
            >
              {/* Заглушка под картинку (потом вставим скриншоты) */}
              <div className="h-48 bg-slate-700 flex items-center justify-center text-slate-500 group-hover:bg-slate-600 transition-colors">
                <span className="text-sm italic">Screenshot Coming Soon</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-wider font-bold bg-cyan-950 text-cyan-400 px-2 py-1 rounded border border-cyan-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-10 text-center text-slate-500 text-sm border-t border-slate-800">
        © 2024 • Построено на React & FastAPI
        <section className="max-w-2xl mx-auto px-6 py-20 border-t border-slate-800">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Связаться со мной
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Ваше имя"
              required
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Ваш Email"
              required
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              placeholder="Ваше сообщение"
              required
              rows="4"
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-500 py-3 rounded-lg font-bold transition-all shadow-lg shadow-cyan-900/20"
            >
              Отправить сообщение
            </button>
            {status && (
              <p className="text-center text-sm text-cyan-400 mt-2">{status}</p>
            )}
          </form>
        </section>
      </footer>
    </div>
  );
}

export default App;
