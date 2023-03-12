const startBtn = document.getElementById("start-btn");
const timer = document.getElementById("timer");    
const question = document.getElementById('question-title');
const answers = document.getElementById('answers');
const choices = document.getElementById('choices');



const totalTime = 30; // in seconds
let timeLeft, 
    questionIndex, 
    score;

const questions = [
    {
        question: `What is JavaScript?:`,
        choices: [
            "A markup language",
            "A programming language",
            "A stalyng language",
            "A database language"
        ],
        answer: 1,
    },
    {
        question: `Wich of the following is NOT a primitive data type in JavaScript?`,
        choices: [
            "Number",
            "String",
            "Boolean",
            "Object"
        ],
        answer: 3,
    },
    {
        question: `What is the purpose of a function in JavaScript?`,
        choices: [ 
            "To store data",
            "To creat objects",
            "To perform action and return values",
            "To style elements on webpage"
        ],
        answer: 2,
    },
    {
        question: `What is an array in JavaScript?`,
        choices: [ 
            "A type of objects stores a collection o values",
            "A function that performs a specific task",
            "A conditional statement that executes code if a certain condition is true",
            "A loop that iterates over a colletion of values"
        ],
        answer: 0,
    },

];

// Add event listener to the start button.
startBtn.addEventListener(`click`, startQuiz);

//Start the game

//function sets an interval that updates the timer every second.
// In other words it is responsible for setting up the timer for the quiz. 
function startQuiz() {
    startBtn.disabled = true; // disable the start button
    timeLeft = totalTime; // set the time left to the total time.
    questionIndex = 0; // set the question index to 0. Which is the index of the fist question in the questions array.
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
    questions[questionIndex].choices.forEach((choices, index) => { // for each option
        const button = document.createElement(`button`); // create a button
        button.innerText = choices; // set the button text to the option
        button.addEventListener(`click`, () => checkAnswer(index)); // add an event listener to the button
        answers.appendChild(button); //adds the button element as a child to the answers element in an HTML document using JavaScript.     
    });
}


//  Check the answer
function checkAnswer(index) { 
    if (index === questions[questionIndex].answer) { // if the answer is correct
        score++;// add 1 to the score.
    } else {
        timeLeft -= 10; //subtract 10 seconds from the time left.
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
    timer.innerText = ``; // clear the timer.
    const finalScore = document.getElementById("final-score").classList.add("hide"); // get the final score element.
    finalScore.innerText = `You scored ${score} out of ${questions.length}!`; // clear the question.
    answers.innerHTML = ``; // clear the answers.
}

// Function that saves the user`s score and intials into local storage
function saveScore () {
    var initials = document.getElementById("initials").value;
    var highscores = JSON.parse(locarStorage.getItem("highscores")) || [];
    highscores.push({initials: initials, score: score});
    localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "highscores.html";
}
