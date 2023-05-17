
// declaring the variables;

let board = ["", "", "", "", "", "", "", "", ""];
let player_turn = 0;
let wins_player1 = 0;
let wins_player2 = 0;
let rounds_played = 1;
let moves = 0;
let symbols = ["circle", "cross"]
let game_over = false;
let draw = false;

let winning_positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function player_move(position) {

    if (game_over) {
        return;
    }

    moves++
    if (board[position] === "") {

        board[position] = symbols[player_turn];
        game_over = player_win();

        if (!game_over) {
            if (player_turn == 0) {
                player_turn = 1;
            } else {
                player_turn = 0;
            }
        }
    }
    return game_over;
}

function player_win() {

    for (let i in winning_positions) {
        let sequence = winning_positions[i];
        let position1 = sequence[0];
        let position2 = sequence[1];
        let position3 = sequence[2];

        if (board[position1] === board[position2] &&
            board[position1] === board[position3] &&
            board[position1] != 0) {
            return true;
        } else if (moves === 9) {
            draw = true;
            return true;
        }
    }
}

function current_round() {
    if (rounds_played % 2 === 0) {
        player_turn = 1;
    } else {
        player_turn = 0;
    }
}