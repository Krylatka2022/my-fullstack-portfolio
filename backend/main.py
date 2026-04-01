from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Потом заменим на адрес твоего сайта
    allow_methods=["*"],
    allow_headers=["*"],
)

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
