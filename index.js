function updateScore(team, points) {
    let scoreElement = document.getElementById(team + "Score");
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + points;
}

function resetScore() {
    let scoreElements = document.getElementsByClassName("score");
    for (let scoreElement of scoreElements) {
        scoreElement.textContent = 0;
    }
}   