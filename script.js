const questions = [
    {
        question: "¿Cuál es el personaje principal en 'The Legend of Zelda'?",
        choices: ["Link", "Mario", "Sonic", "Master Chief"],
        correctAnswer: "Link"
    },
    {
        question: "¿Cuál es el nombre del fontanero italiano de Nintendo?",
        choices: ["Luigi", "Bowser", "Yoshi", "Mario"],
        correctAnswer: "Mario"
    },
    {
        question: "¿Cuál es el personaje principal en la saga de 'Gears of War'?",
        choices: ["Marcus Fenix", "Bowser", "Yoshi", "Master Chief"],
        correctAnswer: "Marcus Fenix"
    },
    {
        question: "¿Cuál es el nombre del villano en la serie de videojuegos 'Super Marios Bros.'?",
        choices: ["Sonic", "Bowser", "Squall Leonhart", "Tidus"],
        correctAnswer: "Bowser"
    },
    {
        question: "¿Cuál es el nombre del estudio encargado detras de Minecraft?",
        choices: ["Rockstar Games", "Nintendo", "Mojang Studios", "EA Mobile"],
        correctAnswer: "Mojang Studios"
    },
    {
        question: "¿Cuál es el planeta natal de los Marios en la serie de juegos de Mario?",
        choices: ["Mushroom Kingdom", "Koopa Troopa Land", "Yoshi's Island", "Donut Plains"],
        correctAnswer: "Mushroom Kingdom"
    },
    {
        question: "¿Cuál de estos juegos pertenece al género de Battle Royale?",
        choices: ["The Legend of Zelda", "Fortnite", "Minecraft", "Gears of War"],
        correctAnswer: "Fortnite"
    },
    {
        question: "¿Cuál es el nombre del hermano de Mario?",
        choices: ["Yoshi", "Toad", "Luigi", "Felipe"],
        correctAnswer: "Luigi"
    },
    {
        question: "¿Qué juego de aventuras protagonizado por una arqueóloga ha sido una franquicia exitosa de videojuegos?",
        choices: ["Uncharted", "Minecraft", "Tomb Raider", "Fortnite"],
        correctAnswer: "Tomb Raider"
    },
    {
        question: "¿Cuál es el personaje principal en 'Minecraft'?",
        choices: ["Peter Parker", "Sonic", "Steve", "Mario"],
        correctAnswer: "Steve"
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    const currentQuestionObj = questions[currentQuestion];
    questionElement.textContent = currentQuestionObj.question;

    choicesElement.innerHTML = "";
    currentQuestionObj.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => chooseAnswer(choice);
        choicesElement.appendChild(button);
    });
}

function chooseAnswer(choice) {
    const feedbackElement = document.getElementById("feedback");

    if (choice === questions[currentQuestion].correctAnswer) {
        score++;
        feedbackElement.textContent = "¡Respuesta correcta!";
    } else {
        feedbackElement.textContent = "Respuesta incorrecta.";
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        const quizElement = document.getElementById("quiz");
        quizElement.innerHTML = `<h2>¡Trivia completada!</h2>
            <p>Tu puntuación es: ${score} de ${questions.length}</p>`;
    }
}

function checkAnswer() {
    const choices = document.getElementsByName("choice");
    let selectedChoice = null;
    for (let i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            selectedChoice = choices[i].value;
            break;
        }
    }
    if (selectedChoice === null) {
        alert("Selecciona una respuesta.");
        return;
    }

    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedChoice === correctAnswer) {
        score++;
        alert("¡Respuesta correcta!");
    } else {
        alert("Respuesta incorrecta.");
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        alert(`Trivia completada. Tu puntuación es ${score} de ${questions.length}.`);
    }
}

displayQuestion();
