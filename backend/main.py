from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Список разрешенных адресов
origins = [
    "http://localhost:5173",    # Твой React (Vite) локально
    "http://127.0.0.1:5173",
    "https://krylatka-dev.ru",   # Твой основной сайт
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,       # Разрешаем адреса из списка выше
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/contact")
async def receive_contact(data: dict):
    # Пока просто выводим в консоль VS Code, что пришло сообщение
    print(f"--- НОВОЕ СООБЩЕНИЕ ---")
    print(f"От: {data.get('name')}")
    print(f"Email: {data.get('email')}")
    print(f"Текст: {data.get('message')}")
    
    # Сюда позже вставим логику для почты или MAX
    return {"status": "success", "message": "Received locally"}


@app.get("/api/projects")
async def get_projects():
    return [
        {
            "id": 1,
            "title": "Корпоративный сайт на WordPress",
            "tech": ["PHP", "WordPress", "SCSS"],
            "description": "Разработка уникальной темы с кастомными полями (ACF) и оптимизацией скорости."
        },
        {
            "id": 2,
            "title": "Kinopoisk API Client",
            "tech": ["React", "Redux", "API"],
            "description": "Поиск фильмов с детальной информацией, реализованный на чистом React."
        },
        {
            "id": 3,
            "title": "React Pizza Store",
            "tech": ["React", "TS", "Tailwind"],
            "description": "Полноценный магазин с корзиной, фильтрацией и сортировкой товаров."
        }
    ]
# Запуск локально
# cd backend

# # Создать виртуальное окружение - пропустить (если уже есть)
# python -m venv venv

# активация - точно нужна 
# .\venv\Scripts\activate

# Установи зависимости
# pip install fastapi uvicorn - пропустить (если уже есть)

# # Запуск сервера
# uvicorn main:app --reload