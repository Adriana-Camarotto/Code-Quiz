const timer = document.getElementById('timer');
const questionTitle = document.getElementById('question-title');
const choices = document.getElementById('choices');
const totalTime = 60; // in seconds



//function sets an interval that updates the timer every second.
// In other words it is responsible for setting up the timer for the quiz. 
function startTimer() {
    startTimer.disable =true; // disable the start button
    timeLeft = totalTime; // set the time left to the total time.
    questionTitleIndex = 0; // set the question index to 0. Which is the index of the fist question in the questions array.
    score = 0; // set the score to 0.
    displayQuestion(); //call the function to display the first question.
    startTimer(); //call the function again to start the timer.
}

function endQ🇺iz() {
    timer.innerText = ``; // clear the timer.
    questionTitle.innerText = ``; // clear the question.
    choices.innerHTML = ``; // clear the answers.
}