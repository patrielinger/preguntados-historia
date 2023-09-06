const questions = [

    {

        question: "¿Qué fue el taylorismo y quién fue su creador?",
        options: ["Mejora de la eficiencia", "Teoria economica de Smith", "Movimiento artistico del siglo XIX"],
        correctAnswer: "Mejora de la eficiencia",
        hint: "."
    },
    {
        question: "¿Cuál era el objetivo principal del taylorismo en la organización del trabajo?",
        options: ["Reduccion de productos y costos", "Mejora de condiciones laborales", "Aumento de salarios"],
        correctAnswer: "Aumento de salarios",
        hint: "."
    },
        {
        question: "¿En qué consistía la cadena de montaje y qué fábrica la implementó?",
        options: ["Mejora de condiciones laborales", "Tecnica agricola del siglo XIX", "Ensamblaje en linea continua"],
        correctAnswer: "Ensamblaje en linea continua",
        hint: "."
    },    {
        question: "¿Cuáles fueron algunos de los nuevos tipos de energía utilizados en la Segunda Revolución Industrial?",
        options: ["Energia solar", "Energia hidraulica", " energia nuclear"],
        correctAnswer: "Energia hidraulica",
        hint: "."
    },    {
        question: "¿Cómo afectaron el uso del petróleo y la electricidad a la vida cotidiana y a la industria?",
        options: ["Mayor comodidad y eficiencia", "aumento de contaminacion ambiental", "reduccion del consumo de energia"],
        correctAnswer: "Mayor comodidad y eficiencia",
        hint: "."
    },    {
        question: "¿Qué inventos importantes se desarrollaron durante esta etapa de la revolución?",
        options: [ "maquina de vapor mejorada","telefono y fonografo", "Computadora e internet"],
        correctAnswer: "telefono y fonografo",
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