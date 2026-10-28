var questions = [
    {
        question: "Which operator is used for exponentiation?",
        options: ["+", "*", "**", "/"],
        answer: "**"
    },
    {
        question: "What is the output of 2 ** 3?",
        options: ["5", "6", "8", "9"],
        answer: "8"
    },
    {
        question: "Which keyword was used to declare a variable in our hoisting example?",
        options: ["var", "function", "return", "typeof"],
        answer: "var"
    },
    {
        question: "What is a default parameter used for?",
        options: [
            "To create an array",
            "To give a parameter a default value",
            "To stop a function",
            "To repeat a loop"
        ],
        answer: "To give a parameter a default value"
    },
    {
        question: "Which parameter collects remaining arguments into an array?",
        options: ["Spread", "Default", "Rest", "Optional"],
        answer: "Rest"
    },
    {
        question: "Which operator spreads array elements?",
        options: ["...", "**", "===", "&&"],
        answer: "..."
    },
    {
        question: "Which operator is used in optional chaining?",
        options: ["?.", "??=", "**", "=>"],
        answer: "?."
    },
    {
        question: "What does optional chaining help us do?",
        options: [
            "Multiply numbers",
            "Access a property safely when a value may be null or undefined",
            "Create a loop",
            "Declare a function"
        ],
        answer: "Access a property safely when a value may be null or undefined"
    },
    {
        question: "What does a default parameter provide when an argument is omitted?",
        options: [
            "A random value",
            "An error every time",
            "A predefined value",
            "An empty array every time"
        ],
        answer: "A predefined value"
    },
    {
        question: "What is the result of 3 ** 2?",
        options: ["6", "9", "5", "8"],
        answer: "9"
    }
];

var currentQuestion = 0;
var score = 0;
var selectedAnswer = false;

function showQuestion() {
    selectedAnswer = false;

    document.getElementById("result").innerHTML = "";
    document.getElementById("next-btn").disabled = true;

    document.getElementById("question-number").innerHTML =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    document.getElementById("score").innerHTML = "Score: " + score;

    document.getElementById("progress-bar").style.width =
        (currentQuestion / questions.length * 100) + "%";

    document.getElementById("question").innerHTML =
        questions[currentQuestion].question;

    var optionsHTML = "";

    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
        optionsHTML +=
            '<button class="option-btn" onclick="checkAnswer(this)">' +
            questions[currentQuestion].options[i] +
            '</button>';
    }

    document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(button) {
    if (selectedAnswer) {
        return;
    }

    selectedAnswer = true;

    var answer = questions[currentQuestion].answer;
    var buttons = document.getElementsByClassName("option-btn");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;

        if (buttons[i].innerHTML === answer) {
            buttons[i].classList.add("correct");
        }
    }

    if (button.innerHTML === answer) {
        score++;
        document.getElementById("result").innerHTML = "Correct answer!";
        button.classList.add("correct");
    } else {
        document.getElementById("result").innerHTML = "Wrong answer! Try the next one.";
        button.classList.add("wrong");
    }

    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question-number").innerHTML = "Quiz Completed!";
    document.getElementById("score").innerHTML = "Final Score: " + score + "/" + questions.length;

    document.getElementById("progress-bar").style.width = "100%";

    document.getElementById("question").innerHTML =
        "You scored " + score + " out of " + questions.length + "!";

    document.getElementById("options").innerHTML = "";

    document.getElementById("result").innerHTML =
        score >= 7 ? "Good job! Keep learning." : "Keep practicing. You can do better!";

    document.getElementById("next-btn").innerHTML = "Restart Quiz";
    document.getElementById("next-btn").disabled = false;
    document.getElementById("next-btn").onclick = restartQuiz;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;

    document.getElementById("next-btn").innerHTML = "Next Question";
    document.getElementById("next-btn").onclick = nextQuestion;

    showQuestion();
}

document.getElementById("next-btn").onclick = nextQuestion;

showQuestion();
