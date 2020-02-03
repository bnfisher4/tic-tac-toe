/*----- constants -----*/
const colors = {
    null: 'empty',
    const players = {
        '1': 'blue',
        '-1': 'green',
    }
};

const winnerCombo = {
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [7, 5, 3],
    [1, 5, 9]
};

/*----- app's state (variables) -----*/
let board = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9];
let turn = players * -1;
let winner = winnerCombo;


/*----- cached element references -----*/
const cells = document.querySelectorAll('cell');



/*----- event listeners -----*/


/*----- functions -----*/
