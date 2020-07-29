var startBtn = document.querySelector('#start-btn');
var questionElem = document.querySelector('#question');
var timeElem = document.querySelector('#timer');

var SECOND = 1000

var questions = [
    {
        questionText: "Inside which HTML element do we put the JavaScript?",
        answers: [js,javascript,scripting,script],
        correctIndex : script
    },

    {
        questionText: "Where is the correct place to insert a JavaScript?",
        answers: [1,2,3,4],
        correctIndex : 2
    },
    
    {
        questionText: "Where is the correct place to insert a JavaScript?",
        answers: [1,2,3,4],
        correctIndex : 3
    },

    {
        questionText: "Where is the correct place to insert a JavaScript?",
        answers: [1,2,3,4],
        correctIndex : 4
    }


]

var answers 

function startQuiz() {
    timerElem.textContent = timeRemaining;
    var timerInterval = setInterval(() => {
        timeRemaining--;
        timerElem.textContent = timeRemaining

        if (timeRemaining ===0) {
            clearInterval(timerInterval);
            stopQuiz();
        }
    }, SECOND);
    showNextQuestion();  
}