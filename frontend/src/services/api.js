import axios from "axios";

const getBaseUrl = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:8000/api/projects"
    : // : "https://krylatka-dev.ru"; // Указываем путь к статичному JSON на Beget
      "https://krylatka-dev.ru/backend/api/projects";
};

export const fetchProjects = async () => {
  try {
    const response = await axios.get(getBaseUrl());
    return response.data;
  } catch (err) {
    console.error("Ошибка API:", err);
    return []; // Возвращаем пустой массив при ошибке
  }
};
