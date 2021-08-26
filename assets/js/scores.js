var highScoreEl = document.querySelector('#highscores');
var clearBtn = document.querySelector('#clear');

var newScores = [];
if(localStorage.getItem('scores')){
    newScores = JSON.parse(localStorage.getItem('scores'));
};

var sortedScores = newScores.sort(function(a, b) {
    return parseFloat(b.score) - parseFloat(a.score);
});

for (var i = 0; i < sortedScores.length; i++) {
    var highScore = document.createElement('li');
    var newName = sortedScores[i].initials;
    var newScore = sortedScores[i].score;
    highScore.textContent = newName + ': ' + newScore;
    highScoreEl.appendChild(highScore);
};

clearBtn.addEventListener('click', function () {
    highScoreEl.innerHTML = '';
    localStorage.clear();
});