var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
];
//declared buttons
//var restartBtn = document.querySelector("#restart-btn");
// submitBtn = document.querySelector("#submit");
var currentQuestion = 0;
var score = 0;
var timeElement = document.querySelector("#current-time");
var timer = document.querySelector("#start");
var questionEl = document.getElementById("questions-div");
var container = document.querySelector(".container");
var quizUL = document.createElement('ul');
var penalty = 10;
//time variables
var timerInterval = 0;
var timeLeft = 60;
timer.addEventListener("click", function(){
    if (timeLeft > 1) {
        timerInterval = setInterval(function(){
            timeLeft--;
            timeElement.textContent = timeLeft + " " + " seconds remaining";
    if (timeLeft === 0) {
        timeElement.textContent = "looks like you're out of time";
        clearInterval(timerInterval); 
    }
    }, 1000);
    }
    startQuiz(currentQuestion);
})
function startQuiz(currentQuestion) {
    questionEl.innerHtml = "";
    quizUL.innerHTML = "";
for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[currentQuestion].title;
    var userChoice = questions[currentQuestion].choices;
    questionEl.textContent = userQuestion;
}
userChoice.forEach(function (newItem) {
    var quizList = document.createElement("li");
    quizList.textContent = newItem;
    questionEl.appendChild(quizUL);
    quizUL.appendChild(quizList);
    quizList.addEventListener("click", (compare));
})
}
function compare(event) {
    var element = event.target;
    
if (element.matches("li")) {

    var quizDiv = document.createElement("div");
    quizDiv.setAttribute("id", quizDiv);
if (element.textContent == questions[currentQuestion].answer) {
    score++;
questionEl.textContent = "correct! the answer is " + questions[currentQuestion].answer;
} else {
    timeLeft = timeLeft - penalty;
    questionEl.textContent = "incorrect! the answer is " + questions[currentQuestion].answer;
} 
currentQuestion++;

if (currentQuestion <= questions.length) {
    // All done will append last page with user stats
    allDone();
    createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
} else {
    render(currentQuestion);
}
questionsDiv.appendChild(createDiv);
}
}