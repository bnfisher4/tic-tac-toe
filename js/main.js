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
let board = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9];
let turn = PLAYERS * -1;
let winner = WINNERCOMBO;


/*----- cached element references -----*/
const cellsEls = document.querySelectorAll('.cell');
const messageEl = getElementById('message');


/*----- event listeners -----*/
document.getElementById('game-board').addEventListener('click', handleClick);


/*----- functions -----*/
function handleClick(evt) {
    console.log('evt.target.dataset.index');
}