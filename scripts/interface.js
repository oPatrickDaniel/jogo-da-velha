
document.addEventListener('DOMContentLoaded', () => {
    // adiciona eventos de click no tabuleiro;
    let squares = document.querySelectorAll('.square');
    let reset_button = document.getElementById('reset_button');
    squares.forEach((square) => {
        square.addEventListener('click', player_click);
    })
    reset_button.addEventListener('click', reset_game);
})

function player_click(event) {
    // função do evento click (linha: )
    let square = event.target;
    let position = square.id;

    if (player_move(position)) {
        setTimeout(() => {
            print_player_winner();
        }, 10);
    }
    update_board(position);
}

function reset_game() {
    // reinicia os dados do tabuleiro;
    board = ["", "", "", "", "", "", "", "", ""];
    game_over = false;
    draw = false;
    moves = 0;

    // limpa os dados do tabuleiro;
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.innerHTML = '';
    })

    // remove o botão de jogar novamente;
    button_play_again()

    // indica o novo player da rodada;
    update_player_turn()
}

function update_player_turn() {
    // atualiza o jogador da rodada;
    let player_move = document.querySelectorAll('.player_move');

    if (!player_win()) {
        player_move.forEach((move) => {
            move.classList.toggle("background_yellow")
        })
    }
}

function update_board(position) {
    // atualiza os símbolos no tabuleiro;
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = '<img src="./images/' + symbol + '.png" alt="' + symbol + '">';
    update_player_turn();
}

function button_play_again() {
    // adiciona ou remove a botão de jogar novamente
    let button_reset = document.getElementById('reset_button');
    button_reset.classList.toggle('display_none');
}

function print_player_winner() {
    //  imprime qual jogador ganhou a partida;
    let score = document.getElementById('score');

    if (!draw) {
        console.log("empate")
        if (player_turn === 0) {
            wins_player1++;
        } else {
            wins_player2++;
        }
    }

    score.innerText = wins_player1 + ' X ' + wins_player2;
    // escolhe quem começa jogando a proxima rodada;
    rounds_played++
    current_round()
    // libera o botão de jogar novamente;
    button_play_again()
}



