//  Массив с вопросами, вариантами и правильными ответами
let questions = [
    {
        question: "После какого класса вы хотите уйти?",
        options: ["9 класс", "11 класс"],
        correctAnswer: ["9 класс", "11 класс"],
        cost: [0, 1]
    },
    {
        question: "Какое вы выбрали направление?",
        options: ["Физ-мат", "Хим-био", "Гуманитарное", "Архитектурное"],
        correctAnswer: ["Физ-мат", "Хим-био", "Гуманитарное", "Архитектурное"],
        cost: [10, 20, 30, 40]
    },
    {
        question: "В какой город вы хотите поступить?",
        options: ["Тюмень", "Санкт-Петербург", "Москва"],
        correctAnswer: ["Тюмень", "Санкт-Петербург", "Москва"],
        cost: [100, 200, 300]
    }
]


let answers = [
    // 9 класс
    {
        answer: [`колледж1: <br> 3112 `,
            `колледж2: <br> 31224`], //физ мат тюмень
        filter: 110
    },
    {
        answer: [`колледж1: <br> lldss`,
            `колледж2: <br> 3211`], //хим био тюмень
        filter: 120
    },
    {
        answer: [`колледж1: <br> `,
            `колледж2: <br>643`], //гум тюмень
        filter: 130
    },
    {
        answer: [`колледж1: <br> 432`,
            `колледж2: <br>2121`], //архитектура тюмень
        filter: 140
    },
    {
        answer: [`колледж1: <br>3223 `,
            `колледж2: <br>53453`], // физ мат СПБ 
        filter: 210
    },
    {
        answer: [`колледж1: <br> 4532`,
            `колледж2: <br>4631`], //хим био СПБ
        filter: 220
    },
    {
        answer: [`колледж1: <br> `,
            `колледж2: <br>021`], //гум СПБ
        filter: 230
    },
    {
        answer: [`колледж1: <br> 09829301`,
            `колледж2: <br>4981`], //Архитектура СПБ
        filter: 240
    },
    {
        answer: [`колледж1: <br> 0941`,
            `колледж2: <br> -9123`], // физ мат Москва 
        filter: 310
    },
    {
        answer: [`колледж1: <br> `,
            `колледж2: <br>4352`], //хим био Москва
        filter: 320
    },
    {
        answer: [`колледж1: <br>56221 `,
            `колледж2: <br>55283042`], //гум Москва
        filter: 330
    },
    {
        answer: [`колледж1: <br> 41351 `,
            `колледж2: <br>541411`], //Архитектура Москва
        filter: 340
    },
    // 11 класс
    {
        answer1: [`ТЮМГУ: <br> "Техническая физика" <br> бюджет: <br> проходной балл - 199 <br> мест - 25 <br>  платное: <br> проходной балл - 118 <br> мест - 5 <br> стоимость - 226370 <br>`,
            `ТИУ: <br> "Автоматизация технических процессов и произдводств" <br> бюджет: <br> проходной балл - 229 <br> мест - 50 <br>  платное: <br> проходной балл - 157 <br> мест - 10 <br> стоимость - 213000 <br>`], //физ мат тюмень
        filter: 111
    },
    {
        answer1: [`ТЮМГУ: <br>авапцыа`,
            `ТИУ: <br> ывпып `], //хим био тюмень
        filter: 121
    },
    {
        answer1: [`ТЮМГУ:пыпы`,
            `ТИУ: <br> ыппы`], //гум тюмень
        filter: 131
    },
    {
        answer1: [`ТЮМГУ:пывпы `,
            `ТИУ: <br> паыпып`], //архитектура тюмень
        filter: 141
    },
    {
        answer1: [`СПБГУ: пывпы`,
            `СПБУ: <br> пытыы`], // физ мат СПБ 
        filter: 211
    },
    {
        answer1: [`СПБГУ:пиымымиви`,
            `СПБУ: <br>пфпфы `], //хим био СПБ
        filter: 221
    },
    {
        answer1: [`СПБГУ:дрдпдк`,
            `СПБУ: <br> хщзолмаыв`], //гум СПБ
        filter: 231
    },
    {
        answer1: [`СПБГУ:дтолжфаы`,
            `СПБУ: <br> хтщшолфмыв`], //Архитектура СПБ
        filter: 241
    },
    {
        answer1: [`МГУ:дтолжф`,
            `МИУ: <br> шолидфы `], // физ мат Моква
        filter: 311
    },
    {
        answer1: [`МГУ: дотлфы`,
            `МИУ: <br> дтолжаф`], //хим био Москва
        filter: 321
    },
    {
        answer1: [`МГУ: оафы`,
            `МИУ: <br> длафЖ`], //гум Москва
        filter: 331
    },
    {
        answer1: [`МГУ: олай`,
            `МИУ: <br> йцзлэоэуй`], //Архитектура Москва
        filter: 341
    },
]

//let uncorrectQuestions = [];
let currentQuestion = 0 // Текущий вопрос
let correctAnswers = 0 // Кол-во правильных ответов
let questionElement = document.getElementById("question"); // Получить блок для размещения вопросами
let optionsElements = document.getElementById("options"); // Получить блок для размещения кнопок
let resultElement = document.getElementById("result"); // Получить блок для отображения результата

// функция для отображения текущего вопроса и вариантов ответов
function displayQuestion() {
    // Размещаем вопрос на стрранице
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question} `;
    optionsElements.innerHTML = " ";// Отчищаем содержимое блока optionsElements

    // Получить массив ответов
    let optionsArray = questions[currentQuestion].options;

    // Создать кнопки с вариантами ответов и привязать к ним функцию перехода к следуйщему опросу
    optionsArray.forEach((option) => {
        let button = document.createElement("button");
        optionsElements.append(button);
        button.textContent = option;
    });

    // Добавляем обработчик события на блок с кнопками
    optionsElements.addEventListener("click", (e) => {
        // Записать в переменную элемент на который кликнули 
        let target = e.target;
        // Вызвать функцию перехода к следуйщему вопросу и передать ей  текстовое содержимое кнопки по которой кликнули
        nextQuestion(target.textContent);
    }, { once: true });
}
// Функция перехода к следуйщему вопросу
function nextQuestion(answere) {
    let count = 0;
    if (answere === questions[currentQuestion].correctAnswer[1]) {
        count += questions[currentQuestion].cost[1];
    } else if (answere === questions[currentQuestion].correctAnswer[2]) {
        count += questions[currentQuestion].cost[2];
    } else if (answere === questions[currentQuestion].correctAnswer[3]) {
        count += questions[currentQuestion].cost[3];
    } else if (answere === questions[currentQuestion].correctAnswer[4]) {
        count += questions[currentQuestion].cost[4];

    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion(); // Отобразить следуйщий вопрос
    } else {
        displayResult(); // отобразить результаты теста
    }



}

let currentResult = 0

function resultNext() {
    for (let i = 0; i < answers.length; i++) {
        if (count === answers[i].filter) {
            currentResult = 0
        } else if (count === answers[i].filter) {
            currentResult = 1
        } else if (count === answers[i].filter) {
            currentResult = 2
        } else if (count === answers[i].filter) {
            currentResult = 3
        } else if (count === answers[i].filter) {
            currentResult = 4
        } else if (count === answers[i].filter) {
            currentResult = 5
        } else if (count === answers[i].filter) {
            currentResult = 6
        } else if (count === answers[i].filter) {
            currentResult = 7
        } else if (count === answers[i].filter) {
            currentResult = 8
        } else if (count === answers[i].filter) {
            currentResult = 9
        } else if (count === answers[i].filter) {
            currentResult = 10
        } else if (count === answers[i].filter) {
            currentResult = 11
        } else if (count === answers[i].filter) {
            currentResult = 12
        } else if (count === answers[i].filter) {
            currentResult = 13
        } else if (count === answers[i].filter) {
            currentResult = 14
        } else if (count === answers[i].filter) {
            currentResult = 15
        } else if (count === answers[i].filter) {
            currentResult = 16
        } else if (count === answers[i].filter) {
            currentResult = 17
        } else if (count === answers[i].filter) {
            currentResult = 18
        } else if (count === answers[i].filter) {
            currentResult = 19
        } else if (count === answers[i].filter) {
            currentResult = 20
        } else if (count === answers[i].filter) {
            currentResult = 21
        } else if (count === answers[i].filter) {
            currentResult = 22
        } else if (count === answers[i].filter) {
            currentResult = 23
        }
    }

}




function next() {
    let opt = "Следуйщий"
    let btn1 = document.createElement("button"); // Создаем кнопку
    resultElement.append(btn1);
    btn1.textContent = opt;
    btn1.addEventListener("click", () => {
        resultElement.innerHTML = "";
        resultElement.innerHTML = `${answers[currentResult].answer}`;
        next();
    });
}





// Функция отображения результата теста
function displayResult() {
    questionElement.style.display = "none"; // Выключить видимость блока вопросов
    optionsElements.style.display = "none"; // Выключить видимость блока ответов
    resultElement.innerHTML = answers[currentResult].answer;
    next();
}


displayQuestion();
