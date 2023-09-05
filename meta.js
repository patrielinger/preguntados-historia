// Define las preguntas y respuestas
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
    // Agrega más preguntas y respuestas aquí
];

let currentQuestionIndex = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const hintText = document.getElementById("hint-text");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    hint.textContent = "Pista: " + currentQuestion.hint;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = option;

        optionElement.addEventListener("click", () => {
            checkAnswer(option, currentQuestion.correctAnswer);
        });

        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption, correctOption) {
    if (selectedOption === correctOption) {
        alert("¡Respuesta correcta!");
    } else {
        alert("Respuesta incorrecta. Inténtalo de nuevo.");
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("¡Fin del juego!");
    }
}

nextButton.addEventListener("click", () => {
    loadQuestion();
});
// ... (Código anterior)

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    hint.textContent = "Pista: " + currentQuestion.hint;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.setAttribute("id", "opcion");
        optionButton.textContent = option;

        optionButton.addEventListener("click", () => {
            checkAnswer(option, currentQuestion.correctAnswer);
        });

        optionsContainer.appendChild(optionButton);
    });
}

// ... (Resto del código)

// Carga la primera pregunta al cargar la página
loadQuestion();
startTimer();








































//timer
// ... (Código anterior)

const timerElement = document.getElementById("timer");
const gameOverElement = document.getElementById("game-over");
const restartButton = document.getElementById("restart-button");

let countdown;
let timeLeft = 15;

function startTimer() {
    countdown = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerElement.textContent = `Tiempo restante: ${timeLeft} segundos`;
        } else {
            clearInterval(countdown);
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    gameOverElement.style.display = "block";
    restartButton.addEventListener("click", () => {
        currentQuestionIndex = 0;
        timeLeft = 15;
        timerElement.textContent = "Tiempo restante: 15 segundos";
        gameOverElement.style.display = "none";
        loadQuestion();
        startTimer();
    });
}

// ... (Resto del código)

// Carga la primera pregunta al cargar la página
loadQuestion();
startTimer();
