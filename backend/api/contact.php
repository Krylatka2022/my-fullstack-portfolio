<?php
// Разрешаем запросы с твоего фронтенда
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// 1. Создай бота в Telegram через @BotFather и вставь токен:
$token = "ВАШ_ТОКЕН_БОТА"; 
// 2. Узнай свой ID через @userinfobot и вставь сюда:
$chat_id = "ВАШ_CHAT_ID"; 

// Получаем данные из React (JSON)
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

if ($data) {
    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $message = htmlspecialchars($data['message']);

    $text = "🚀 Новое сообщение с портфолио!\n\n"
          . "👤 Имя: $name\n"
          . "📧 Email: $email\n"
          . "📝 Сообщение: $message";

    // Отправка в Telegram
    $url = "https://telegram.org" . urlencode($text);
    file_get_contents($url);

    echo json_encode(["status" => "success", "message" => "Сообщение отправлено!"]);
} else {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Нет данных"]);
}
?>
