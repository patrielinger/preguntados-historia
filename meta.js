const questions = [
    {
        question: "¿Quién fue el líder principal en la unificación de Italia?",
        options: ["Víctor Manuel II", "Giuseppe Garibaldi.", "Camillo Cavour."],
        correctAnswer: "Giuseppe Garibaldi.",
        hint: "Luchó por la independencia italiana."
    },
    {
        question: " ¿Qué tratado ayudó a la unificación de Italia?",
        options: ["Tratado de Viena", "Tratado de Versalles.", "Tratado de Turín."],
        correctAnswer: "Tratado de Turín.",
        hint: "Firmado en 1860."
    },
        {
        question: "¿Cuál fue la última región en unirse a Italia?",
        options: ["Roma", "Sicilia.", " Venecia."],
        correctAnswer: " Venecia.",
        hint: "Ubicada en el noreste."
    },    {
        question: "¿Qué movimiento político apoyó la unificación de Italia?",
        options: [" El Risorgimento.", "El Fascismo.", " El Renacimiento"],
        correctAnswer: " El Risorgimento.",
        hint: "Significa resurgimiento en italiano."
    },    {
        question: "¿Cuál fue el primer reino de Italia unificada?",
        options: ["Reino de Nápoles", "Reino de Cerdeña.", "Reino de Sicilia."],
        correctAnswer: "Reino de Cerdeña.",
        hint: "Gobernado por Víctor Manuel II."
    },    {
        question: "¿Qué ciudad se convirtió en la capital de Italia después de la unificación?",
        options: ["Roma.", " Florencia", "Milán."],
        correctAnswer: "Roma.",
        hint: "Sede del Papado."
    },    {
        question: "¿Cuál fue el año clave para la unificación de Italia?",
        options: ["1821", "1901.", "1861."],
        correctAnswer: "1861.",
        hint: " Se proclamó el Reino."
    },    {
        question: "¿Qué papel jugó Camillo Cavour en la unificación de Italia?",
        options: ["Diplomático y estadista.", "General", "filósofo."],
        correctAnswer: "Diplomático y estadista.",
        hint: ""
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
        window.location.href = "https://preguntados-historia.netlify.app/";
    }
});

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    loadQuestion();
    resultContainer.style.display = "none";
});

loadQuestion();









function pinga(){
            window.location.href = "https://preguntados-historia.netlify.app/juego.html"; 
        }