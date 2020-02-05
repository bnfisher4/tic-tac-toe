/*----- constants -----*/
const PLAYERS = {
        '1': 'X',
        '-1': 'O',
        null: ''
};

const WINNERCOMBO = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*----- app's state (variables) -----*/
let board;
let turn;
let winner;


/*----- cached element references -----*/
const cellEls = document.querySelectorAll('.cell');
const messageEl = document.getElementById('message');
const playmessageEl = document.getElementById('playmessage');


/*----- event listeners -----*/
document.getElementById('game-board').addEventListener('click', handleClick);
document.querySelector('button').addEventListener('click', init);


/*----- functions -----*/
function handleClick(evt) {
    if(playmessageEl.textContent != "") {
        playmessageEl.textContent = ""
    }
    let selectedIndex = evt.target.dataset.index;
    if(winner || board[selectedIndex]) return;

    board[selectedIndex] = turn;
    // toggle the turn
    turn *= -1;
    // check for winner
    winner = checkWinner();
    render();
}


init();

function init() {
    playmessageEl.textContent = "Let's Play";
    // Who starts the game
    turn = 1;
    // We need to reset the game board
    board = [null, null, null, null, null, null, null, null, null];
    // We need to remove the winner
    winner = false;
    render();
}


// we write our logic for determining the winner
// return true if winner or false if no winner
function checkWinner() {
    for (let i = 0; i < WINNERCOMBO.length; i++) {
        if(Math.abs(board[WINNERCOMBO[i][0]] + 
                    board[WINNERCOMBO[i][1]] + 
                    board[WINNERCOMBO[i][2]]) === 3) 
                    return board[WINNERCOMBO[i][0]];
    }
    if(board.includes(null)) return false;
    return 'T';
}


function render() {
    // Draws the game board
    board.forEach(function(element, index) {
        cellEls[index].textContent = PLAYERS[element]
    });
    if(!winner) {
        messageEl.textContent = `${PLAYERS[turn]}'s Turn`
    } else if (winner === 'T') {
        messageEl.textContent = "CAT!"
    } else if (winner) {
        messageEl.textContent = `${PLAYERS[winner]} WINS!`
    };

    // What data do we use to draw the game board?
    // Render transfers the state of the app to the DOM

    console.log('Gameboard: ', board)
}