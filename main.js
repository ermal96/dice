var scores, raundScore, activePlayer, dice, winingGame, input;

init();
 
document.getElementById('add_points').addEventListener('click', function(){
    
        addPoints();
    
    
})

document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlay) {
        dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        console.log(dice);

        if (dice === 1) {

            nextPlayer();

        } else {
            roundScore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }

    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlay) {
        scores[activePlayer] = scores[activePlayer] + roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
       
        
        if (scores[activePlayer] >= winingGame) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').src = 'smile.png';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('#current-' + activePlayer).textContent = 0;
            gamePlay = false;

        } else {
            nextPlayer();
        }
    }
});



document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlay = true;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.dice').src = 'smile.png';
}


function nextPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0;
    }

    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


}

function addPoints(){
    input = document.querySelector('.finalScore').value;
    var txt=/^[a-zA-Z]+$/;
    if(input.match(txt) || input === ''){
        winingGame  = 30;
        document.getElementById('error_msg').textContent = 'Please Add a Number'
        document.getElementById('error_msg').style.display = 'block';
        gamePlay = false;

    }
    else if(input){
   winingGame = input; 
   console.log(input);
   document.getElementById('error_msg').style.display = 'none';
   document.querySelector('.finalScore').value = '';
   gamePlay = true;
}
}