let player = "./assets/o.png";
let x = 0;
let o = 0;
let velha = 0;

let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function changePlayer() {
    if (player === "./assets/x.png") {
        document.getElementById("vez").innerHTML = "X";
        player = "./assets/o.png"
    } else {
        document.getElementById("vez").innerHTML = "O";
        player = "./assets/x.png"
    }
}

function okButton() {
    if (popup.classList.contains("hide-popup")) {
        popup.classList.remove("hide-popup");
    } else {
        popup.classList.remove("show-popup");    
    }

    if (blackscreen.classList.contains("hide-blackscreen")) {
        blackscreen.classList.remove("hide-blackscreen");
        blackscreen.style.display = flex;
    } else {
        blackscreen.classList.remove("show-blackscreen");    
        setTimeout(() => {
            blackscreen.style.display = none;
        }, 499)
    }

    blackscreen.classList.add("init");
    popup.classList.add("init");

    reset();
}

function changeStatus(ganhador) {
    let placarVelha = document.getElementById("velha");
    let placarX = document.getElementById("x");
    let placarO = document.getElementById("o");
    let popup = document.getElementById("popup");
    let popupText = document.getElementById("popupText");
    let blackscreen = document.getElementById("blackscreen");
    let buttons = document.getElementsByTagName("button");

    if (ganhador === "x") {
        placarX.innerHTML = `${x += 1}`;
        popupText.innerHTML = "X venceu!";
    } else if (ganhador === "o") {
        placarO.innerHTML = `${o += 1}`;
        popupText.innerHTML = "O venceu!";
    } else {
        placarVelha.innerHTML = `${velha += 1}`;
        popupText.innerHTML = "Deu velha!";
    }

    if (popup.classList.contains("init")) {
        popup.classList.remove("init");
        popup.classList.add("show-popup");
    } else if (popup.classList.contains("hide-popup")) {
        popup.classList.remove("hide-popup");
        popup.classList.add("show-popup");
    } else {
        popup.classList.remove("show-popup");
        popup.classList.add("hide-popup");
    }

    if (blackscreen.classList.contains("init")) {
        blackscreen.classList.remove("init");
        blackscreen.classList.add("show-blackscreen");
        blackscreen.style.display = block;
    } else if (blackscreen.classList.contains("hide-blackscreen")) {
        blackscreen.classList.remove("hide-blackscreen");
        blackscreen.classList.add("show-blackscreen");
        blackscreen.style.display = block;
    } else {
        blackscreen.classList.remove("show-blackscreen");
        blackscreen.classList.add("hide-blackscreen");
        setTimeout(() => {
            blackscreen.style.display = none;
        }, 499)
    }
    
    for (c = 0; c < buttons.length; c++) {
        if (buttons[c].textContent !== "OK") {
            buttons[c].disabled = true;
        }
    }
}

function verify(player) {
    let count = 0;
    
    // LINHAS
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] != null) {
            return true;
        }
    }

    // COLUNAS
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === board[1][j] && board[1][j] === board[2][j] && board[0][j] != null) {
            return true;
        }
    }

    // DIAGONAIS
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }

    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }

    board.forEach(element => {
        element.forEach(item => {
            if (item == null) {
                count++;
            }
        });
    });

    if (count == 0) {
        return false;
    }

    return null;  
}

function reset() {
    changePlayer();

    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    allButtons = document.querySelectorAll("button.main");

    allButtons.forEach(element => {
        element.disabled = false;
        element.style.cssText = "background-color: #7D7ABC;";

    });
}

function btnClick(btn) {
    let button = document.querySelector(`#btn${btn}`);
    let vencedor = "";
    changePlayer();
    button.style.cssText = `background-image: url(${player})`;
    let _player = player === "./assets/x.png" ? 0 : 1;

    if (btn <= 2) {
        board[0][btn] = _player;
    } else if (btn > 2 && btn <= 5) {
        board[1][btn - 3] = _player;
    } else if (btn > 5) {
        board[2][btn - 6] = _player;
    }

    button.disabled = true;

    setTimeout(function() {
        vencedor = verify(_player);
        if (_player == 0 && vencedor == true) {
            changeStatus("x");
        } else if (_player == 1 && vencedor == true) {
            changeStatus("o");
        } else if (vencedor == false) {
            changeStatus("Deu empate");
        }
    }, 80);
}