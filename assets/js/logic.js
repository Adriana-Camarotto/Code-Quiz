const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const timer = document.getElementById("timer");    
const question = document.getElementById('question-title');
const answers = document.getElementById('answers');
const choices = document.getElementById('choices');
const finalScore = document.getElementById('final-score');
const questionScreen = document.getElementById('questions');
const submitBtn = document.getElementById('submit-btn');
const initialsEl = document.getElementById('initials');
var correctSound = new Audio("assets/sfx/correct.wav");
var incorrectSound = new Audio("assets/sfx/incorrect.wav");

const totalTime = 30; // in seconds
let timeLeft, 
    questionIndex, 
    score;



// Add event listener to the start button.
startBtn.addEventListener(`click`, startQuiz);

//Start the game

//function sets an interval that updates the timer every second.
// In other words it is responsible for setting up the timer for the quiz. 
function startQuiz() {

    startScreen.classList.add("hide");
    timeLeft = totalTime; // set the time left to the total time.
    questionIndex = 0; // set the question index to 0. Which is the index of the first question in the questions array.
    score = 0; // set the score to 0.
    displayQuestion(); //call the function to display the first question.
    startTimer(); //call the function again to start the timer.
}

// start the timer
function startTimer() {
    let countdown = setInterval(() => {
        timer.innerText = `${timeLeft--} seconds`;
    if (timeLeft < 0) {
        clearInterval(countdown);
        endQuiz();
     }
  }, 1000);
}


// Display the question
function displayQuestion() { // Show the question
    question.innerText = questions[questionIndex].question; // display the question
    answers.innerHTML = ``; // empty the answers
    questions[questionIndex].choices.forEach((choice, index) => { // for each option
        const button = document.createElement(`button`); // create a button
        button.innerText = choice; // set the button text to the option
        button.addEventListener(`click`, () => checkAnswer(index)); // add an event listener to the button
        answers.appendChild(button); //adds the button element as a child to the answers element in an HTML document using JavaScript.     
    });
}


//  Check the answer
function checkAnswer(index) { 
    if (index === questions[questionIndex].answer) { // if the answer is correct
        correctSound.play();
        document.getElementById("feedback").innerHTML = "Correct!";
        score++;// add 1 to the score.
    } else {
        timeLeft -= 10; //subtract 10 seconds from the time left.
        incorrectSound.play();
        document.getElementById("feedback").innerHTML = "Wrong!";
    }
    questionIndex++; // increment the question index.
    if (questionIndex === questions.length) { // if the question index is equal to the length of the questions array.
        endQuiz(); // call the function to end the quiz.
    } else { // if the question index is not equal to the length of the questions array.
        displayQuestion(); // call the function again to display the next question.
    }
}

// End the game
function endQuiz() {
    questionScreen.classList.add("hide");
    endScreen.classList.remove("hide");
    timer.innerText = ``; // clear the timer.
    finalScore.innerText = `${score} out of ${questions.length}!`; // clear the question.
    //add event listener to save button
    answers.innerHTML = ``; // clear the answers.
        
    // Submit the the intials and scores
    //Get the submit button element

}
//Add an event listener to the submit button the scores and initials
 submitBtn.addEventListener('click', function() {
     const initials = initialsEl.value.toUpperCase();
  
     if (initials) {
         var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
         highScores.push({initials: initials, score: score});
         localStorage.setItem("highscores", JSON.stringify(highScores));
         window.location.href = "highscores.html";
     }
 });     


