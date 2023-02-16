const timer = document.getElementById('timer');



//function sets an interval that updates the timer every second.

function startTimer() {
    startTimer.disable =true; // disable the start button
    timeLeft = totalTime;
    questionIndex = 0;
    score = 0;
    displayQuestion();
    startTimer();
}
