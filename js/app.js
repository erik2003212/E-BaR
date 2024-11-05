
// Получаем текущий URL
const currentLocation = window.location.href;
const menuItems = document.querySelectorAll('nav a');

// Перебираем ссылки и добавляем активный класс к совпадающей
menuItems.forEach(item => {
    if (item.href === currentLocation) {
        item.classList.add('active');
    }
});

let isEnglish = false;

function toggleLanguage() {
    if (isEnglish) {
        document.getElementById('surname').textContent = "Саргсян";
        document.getElementById('name').textContent = "Эрик";
        document.getElementById('patronym').textContent = "Вахтангович";
        document.getElementById('birth-place').textContent = "г. Москва";
        document.getElementById('issued-by').textContent = "Отделением УФМС по г. Москве";
    } else {
        document.getElementById('surname').textContent = "Sargsyan";
        document.getElementById('name').textContent = "Erik";
        document.getElementById('patronym').textContent = "Vaxtangovich";
        document.getElementById('birth-place').textContent = "Moscow";
        document.getElementById('issued-by').textContent = "Department of UFMS in Moscow";
    }

    isEnglish = !isEnglish;
}

document.getElementById("verify_btn").onclick = function() {
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const z = parseFloat(document.getElementById("z").value);
    const resultField = document.getElementById("result");

    // Проверка, существует ли треугольник
    if (x + y > z && x + z > y && y + z > x) {
        // Проверка, является ли треугольник прямоугольным (по теореме Пифагора)
        const isRightTriangle = (x * x + y * y === z * z) ||
                                (x * x + z * z === y * y) ||
                                (y * y + z * z === x * x);
        check = true;
        if (isRightTriangle) {
            resultField.value = "Существует и прямоугольный";
        } else {
            resultField.value = "Существует";
        }
    } else {
        resultField.value = "Не существует";
        check = false;
    }
};

let check;
document.getElementById("submit_btn").onclick = function() {
    if (check) {
        document.getElementById("triangleForm").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
};

