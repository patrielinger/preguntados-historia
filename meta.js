const questions = [

    {

        question: "¿Que estudio Carl Menger antes de ser Ecnomista?",
        options: ["Ingenieria", "Psicologia"],
        correctAnswer: "Derecho",
        hint: "."
    },
    {
        question: "¿En que año Murio Léon Walras?",
        options: ["1920", "1914", "1930"],
        correctAnswer: "1910",
        hint: "."
    },
        {
        question: "¿Cual de estos pensamientos de Carl Walras es correcto?",
        options: ["La inovacion constante impulsa la prosperidad economica", "Una economia equilibrada es mas resiliente", "La riqueza bien distribuida genera crecimiento continuo"],
        correctAnswer: "Un mercado esta en equilibrio cuando los demss tambien",
        hint: "."
    },    {
        question: "¿Que teoria desarrrollo Walras?",
        options: ["Teoria de juegos", "Teoria del caos", "Teoria de la relatividad"],
        correctAnswer: "teoria del equilibrio general",
        hint: "."
    },    {
        question: "¿Que escuela fundo Carl Menger?",
        options: ["Escuela Marxita", "Escuela Keynesiana", "Escuela Clasica"],
        correctAnswer: "Escuela Austriaca",
        hint: "."
    },
   
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

function loadQuestion() {
    clearInterval(timerInterval);
    countdown = 60;
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
        window.location.href = "https://preguntados-economia.netlify.app/";
    }
});

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    loadQuestion();
    resultContainer.style.display = "none";
});

loadQuestion();









function pinga(){
            window.location.href = "https://preguntados-economia.netlify.app/juego.html"; 
        }