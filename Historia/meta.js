const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Londres", "Roma", "París"],
        correctAnswer: "París",
        hint: "Es conocida como 'La Ciudad del Amor'."
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        options: ["Océano Atlántico", "Océano Índico", "Océano Pacífico"],
        correctAnswer: "Océano Pacífico",
        hint: "Cubre más del 30% de la superficie terrestre."
    },
   
];

let currentQuestionIndex = 0;
let countdown = 10; 
let timerInterval;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const hintText = document.getElementById("hint-text");
const timerText = document.getElementById("timer");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

function loadQuestion() {
    clearInterval(timerInterval);
    countdown = 10;
    timerText.textContent = countdown;

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    hintText.textContent = "Pista: " + currentQuestion.hint;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
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
    optionElements.forEach((optionElement, index) => {
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
        alert("¡Fin del juego!");
    }
});

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    loadQuestion();
    resultContainer.style.display = "none";
});

loadQuestion();
