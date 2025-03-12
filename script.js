document.addEventListener("DOMContentLoaded", function () {
    let message = document.getElementById("message");
    if (message) {
        message.innerText = "Текст змінено за допомогою script.js!";
    }
    console.log("Скрипт виконано успішно.");
});
