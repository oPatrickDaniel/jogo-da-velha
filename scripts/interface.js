
document.addEventListener('DOMContentLoaded', () => {
    // adiciona evento click em todos os quadrados do jogo;
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('click', player_click);
    })
    // adiciona evento click no botão de reset;
    let reset_button = document.getElementById('reset_button');
    reset_button.addEventListener('click', reset_game);
})

function player_click(event) {
    // indica onde o player clicou;
    let square = event.target;
    let position = square.id;

    if (player_move(position)) {
        setTimeout(() => {
            //acionado quando o joga acaba;
            print_player_winner();
        }, 10);
    }
    update_board(position);
}

function update_board(position) {
    // atualiza os símbolos no tabuleiro;
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = '<img src="./images/' + symbol + '.png" alt="' + symbol + '">';
    update_player_turn();
}

function update_player_turn() {
    // atualiza o jogador da rodada;
    let player_move = document.querySelectorAll('.player_move');

    player_move.forEach((move) => {
        move.classList.remove('background_yellow');
    })
    player_move[player_turn].classList.add('background_yellow');
}

function print_player_winner() {
    //  imprime qual jogador ganhou a partida;
    let score = document.getElementById('score');
    if (player_turn === 0) {
        wins_player1++;
        score.innerText = wins_player1 + ' X ' + wins_player2;
    } else {
        wins_player2++;
        score.innerText = wins_player1 + ' X ' + wins_player2;
    }
    // libera o botão de jogar novamente;
    let button_reset = document.getElementById('reset_button');
    button_reset.classList.remove('display_none');
}

function reset_game() {
    // reinicia os dados do tabuleiro;
    board = ["", "", "", "", "", "", "", "", ""];
    game_over = false;

    // limpa os dados do tabuleiro;
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        ;
        square.innerHTML = '';
    })

    // remove novamente o botão de reiniciar jogo;
    let button_reset = document.getElementById('reset_button');
    button_reset.classList.add('display_none');
}

