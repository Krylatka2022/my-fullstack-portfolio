# Fullstack Portfolio: React + FastAPI

Моё персональное портфолио, построенное на современном стеке технологий. Проект объединяет динамичный Frontend на React и быстрый Backend на Python.

## 🚀 Стек технологий

- **Frontend**: React (Vite), Tailwind CSS, Axios.
- **Backend**: Python, FastAPI, Uvicorn.
- **Деплой**: GitHub Actions, Beget (VPS/Python Hosting).
- **Домен**: [krylatka-dev.ru](https://krylatka-dev.ru)

## 🛠 Структура проекта

- `/frontend` — Клиентская часть. Использует Tailwind для адаптивной верстки и Axios для получения данных из API.
- `/backend` — Серверная часть. FastAPI обеспечивает высокую скорость работы и автоматическую документацию API.

## 💻 Как запустить локально

1. **Клонировать репозиторий:**
   ```bash
   git clone https://github.com
   ```
2. **Запуск Backend:**

```bash
 cd backend
 python -m venv venv
 source venv/bin/activate # Или .\venv\Scripts\activate для Windows
 pip install -r requirements.txt
 uvicorn main:app --reload
```

3. **Запуск Frontend:**

```bash
  cd frontend
  npm install
  npm run dev
```

## 📬 Контакты

**GitHub**: Krylatka2022

**Сайт**: https://krylatka-dev.ru
