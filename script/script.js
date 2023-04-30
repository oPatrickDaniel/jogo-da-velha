let vez_player1 = true;

function velha(teste) {
    let sec = document.getElementsByClassName("sections");

    if (sec[0].value === sec[1].value === sec[2].value && sec[0]) {

        console.log("player " + sec[0].value + " ganhou")

    } else if (sec[3].value == sec[4].value == sec[5].value) {

        console.log("player " + sec[3].value + " ganhou")

    } else if (sec[6].value == sec[7].value == sec[8].value) {

        console.log("player " + sec[6].value + " ganhou")

    } else if (sec[0].value == sec[3].value == sec[6].value) {

        console.log("player " + sec[0].value + " ganhou")

    } else if (sec[1].value == sec[4].value == sec[7].value) {

        console.log("player " + sec[0].value + " ganhou")

    } else if (sec[2].value == sec[5].value == sec[8].value) {

        console.log("player " + sec[0].value + " ganhou")

    } else if (sec[0].value == sec[4].value == sec[8].value) {

        console.log("player " + sec[0].value + " ganhou")

    } else if (sec[2].value == sec[4].value == sec[6].value) {

        console.log("player " + sec[0].value + " ganhou")

    } else {

        console.log("deu velha")
    }
    console.log(teste)
}

function quadrado_clicado(section) {

    vez_player1 = !vez_player1;

    if (vez_player1 && section.value === undefined) {
        section.innerText = "player 1";
        section.value = 1;
    } else if (!vez_player1 && section.value === undefined) {
        section.innerText = "player 2";
        section.value = 2;
    } else {
        console.log("este quadrado ja foi preenchido");
    }
    velha(section.value)
}