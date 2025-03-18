const questions = [
    {
        question: "¿Qué estudio Carl Menger antes de ser Economista?",
        options: ["Ingeniería", "Psicología", "Metodología", "Derecho"],
        correctAnswer: "Derecho",
        hint: "."
    },
    {
        question: "¿En qué año murió Léon Walras?",
        options: ["1920", "1914", "1930", "1910"],
        correctAnswer: "1910",
        hint: "."
    },
    {
        question: "¿Cuál de estos pensamientos de Carl Walras es correcto?",
        options: [
            "La innovación constante impulsa la prosperidad económica",
            "Una economía equilibrada es más resiliente",
            "La riqueza bien distribuida genera crecimiento continuo",
            "Un mercado está en equilibrio cuando los demás también"
        ],
        correctAnswer: "Un mercado está en equilibrio cuando los demás también",
        hint: "."
    },
    {
        question: "¿Qué teoría desarrolló Walras?",
        options: ["Teoría de juegos", "Teoría del caos", "Teoría de la relatividad", "Teoría del equilibrio general"],
        correctAnswer: "Teoría del equilibrio general",
        hint: "."
    },
    {
        question: "¿Qué escuela fundó Carl Menger?",
        options: ["Escuela Marxista", "Escuela Keynesiana", "Escuela Clásica", "Escuela Austríaca"],
        correctAnswer: "Escuela Austríaca",
        hint: "."
    }
];

let currentQuestionIndex = 0;
let countdown = 60;
let timerInterval;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const hintText = document.getElementById("hint-text");
const timerText = document.getElementById("timer");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

// Función para mezclar un array aleatoriamente (algoritmo Fisher-Yates)
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
    clearInterval(timerInterval);
    countdown = 60;
    timerText.textContent = countdown;

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    hintText.textContent = "Pista: " + currentQuestion.hint;

    optionsContainer.innerHTML = "";
    
    // Mezclar opciones antes de mostrarlas
    const shuffledOptions = shuffleArray([...currentQuestion.options]);

    shuffledOptions.forEach((option) => {
        const optionElement = document.createElement("button");
        optionElement.classList.add("option");
        optionElement.textContent = option;

        optionElement.addEventListener("click", () => {
            checkAnswer(option, currentQuestion.correctAnswer);
        });

        optionsContainer.appendChild(optionElement);
    });

    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    countdown--;
    timerText.textContent = countdown;
    if (countdown === 0) {
        clearInterval(timerInterval);
        showResult("Tiempo agotado", false);
    }
}

function checkAnswer(selectedOption, correctOption) {
    clearInterval(timerInterval);

    const optionElements = document.querySelectorAll(".option");
    optionElements.forEach((optionElement) => {
        optionElement.disabled = true; 
        if (optionElement.textContent === correctOption) {
            optionElement.style.backgroundColor = "#16FF00";
        } else {
            optionElement.style.backgroundColor = "#FE0000"; 
        }
    });

    if (selectedOption === correctOption) {
        showResult("¡Respuesta correcta!", true);
    } else {
        showResult("Respuesta incorrecta", false);
    }
}

function showResult(message, isCorrect) {
    resultText.textContent = message;

    if (isCorrect) {
        nextButton.style.display = "block";
        restartButton.style.display = "none";
    } else {
        nextButton.style.display = "none";
        restartButton.style.display = "block";
    }

    resultContainer.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        resultContainer.style.display = "none";
    } else {
        window.location.href = "https://preguntados-economia.netlify.app/";
    }
});

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    loadQuestion();
    resultContainer.style.display = "none";
});

loadQuestion();

function pinga() {
    window.location.href = "https://preguntados-economia.netlify.app/juego.html"; 
}