<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

if ($data) {
    $to = "dasha_fr_russia@mail.ru";
    $subject = "Новое сообщение с портфолио: " . strip_tags($data['name']);
    
    $message = "👤 Имя: " . strip_tags($data['name']) . "\n";
    $message .= "📧 Email: " . strip_tags($data['email']) . "\n\n";
    $message .= "📝 Сообщение:\n" . strip_tags($data['message']);

    $headers = "From: admin@krylatka-dev.ru\r\n";
    $headers .= "Reply-To: " . strip_tags($data['email']) . "\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Отправка письма
    if(mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Ошибка сервера почты"]);
    }
}
?>

