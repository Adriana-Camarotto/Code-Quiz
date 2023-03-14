window.onload = function () {
    //Get the score from local storage or initialize as an empty array
    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

    //Get the highscores list element
    var highscoresList = document.getElementById("highscores");

    //create a list item for each score and add it to the list
    for (let i = 0; i < highScores.length; i++) {
        //Create a new li elemente
        let liEl = document.createElement("li");
        //set the text of the li element to the current highscore and user initials
        liEl.textContent = highScores[i].initials + "-" + highScores[i].score;
        //Appends the li element to the ol element
        highscoresList.append(liEl);
    }

    //add a click event listener for the clear button
    document.getElementById("clear").addEventListener("click", function() {
        //Remove the scores from local storage
        localStorage.removeItem("highscores");
        //Remove all scores from the list
        highscoresList.innerHTML = "";
    });
}

