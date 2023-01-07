var player = "./assets/o.png";

var x = 0;
var o = 0;
var velha = 0;

var btn = null;
var btn1 = null;
var btn2 = null;
var btn3 = null;
var btn4 = null;
var btn5 = null;
var btn6 = null;
var btn7 = null;
var btn8 = null;

function changePlayer() {
    if (player === "./assets/x.png") {
        document.getElementById("vez").innerHTML = "X";
        player = "./assets/o.png"
    } else {
        document.getElementById("vez").innerHTML = "O";
        player = "./assets/x.png"
    }
}

function deactivateButton() {
    if (player === "./assets/x.png") {
        return 1;
    } else {
        return 0;
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
    var placarVelha = document.getElementById("velha");
    var placarX = document.getElementById("x");
    var placarO = document.getElementById("o");
    var popup = document.getElementById("popup");
    var popupText = document.getElementById("popupText")
    var blackscreen = document.getElementById("blackscreen")

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

    // popup.style.display = "flex";
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
    
    var buttons = document.getElementsByTagName("button");
    for (c = 0; c < buttons.length; c++) {
        if (buttons[c].textContent !== "OK") {
            buttons[c].disabled = true;
        }
    }
}

function verify() {
    let ganhador = "";
    let buttonList = [JSON.stringify([btn, btn1, btn2]), JSON.stringify([btn3, btn4, btn5]), JSON.stringify([btn6, btn7, btn8]),
                      JSON.stringify([btn, btn3, btn6]), JSON.stringify([btn1, btn4, btn7]), JSON.stringify([btn2, btn5, btn8]),
                      [btn, btn4, btn8], [btn2, btn4, btn6]]

    if (buttonList[0] === "[1,1,1]" || buttonList[1] === "[1,1,1]" || buttonList[2] === "[1,1,1]") { ganhador = "x"; }
    else if (buttonList[3] === "[1,1,1]" || buttonList[4] === "[1,1,1]" || buttonList[5] === "[1,1,1]") {  ganhador = "x"; }
    else if (JSON.stringify(buttonList[6]) === "[1,1,1]" || JSON.stringify(buttonList[7]) === "[1,1,1]") { ganhador = "x"; }
    else if (buttonList[0] === "[0,0,0]" || buttonList[1] === "[0,0,0]" || buttonList[2] === "[0,0,0]") { ganhador = "o"; }
    else if (buttonList[3] === "[0,0,0]" || buttonList[4] === "[0,0,0]" || buttonList[5] === "[0,0,0]") {  ganhador = "o"; }
    else if (JSON.stringify(buttonList[6]) === "[0,0,0]" || JSON.stringify(buttonList[7]) === "[0,0,0]") { ganhador = "o"; }
    else if (btn !== null && btn1 !== null && btn2 !== null && btn3 !== null && btn4 !== null && btn5 !== null && btn6 !== null && btn7 !== null && btn8 !== null) { ganhador = "velha"; }

    if (ganhador != "") {
        let btns = document.getElementsByTagName("button");

        if (ganhador == "x") {
            changeStatus(ganhador);
        } else if (ganhador == "o") {
            changeStatus(ganhador);
        } else {
            changeStatus(ganhador);
        }
    }    
}

function reset() {
    changePlayer();

    btn = null;
    btn1 = null;
    btn2 = null;
    btn3 = null;
    btn4 = null;
    btn5 = null;
    btn6 = null;
    btn7 = null;
    btn8 = null;

    document.getElementById("btn").disabled = false;
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("btn4").disabled = false;
    document.getElementById("btn5").disabled = false;
    document.getElementById("btn6").disabled = false;
    document.getElementById("btn7").disabled = false;
    document.getElementById("btn8").disabled = false;

    var elements = document.getElementsByTagName("button");
    for (c = 0; elements.length; c++) {
        elements[c].style.cssText = "background-color: #7D7ABC;";
    }
}

function btnClick() {
    changePlayer();
    document.getElementById("btn").style.cssText = `background-image: url(${player});`;
    btn = deactivateButton();
    
    document.getElementById("btn").disabled = true;

    setTimeout(function() {
        verify();
    }, 80)

}

function btnClick1() {
    changePlayer();
    document.getElementById("btn1").style.cssText = `background-image: url(${player});`;
    btn1 = deactivateButton();

    document.getElementById("btn1").disabled = true;

    setTimeout(function() {
        verify();
    }, 80)
}

function btnClick2() {
    changePlayer();
    document.getElementById("btn2").style.cssText = `background-image: url(${player});`;
    btn2 = deactivateButton();

    document.getElementById("btn2").disabled = true;

    setTimeout(function() {
        verify();
    }, 80)
}

function btnClick3() {
    changePlayer();
    document.getElementById("btn3").style.cssText = `background-image: url(${player});`;
    btn3 = deactivateButton();

    document.getElementById("btn3").disabled = true;

    setTimeout(function() {
        verify();
    }, 80)
}

function btnClick4() {
    changePlayer();
    document.getElementById("btn4").style.cssText = `background-image: url(${player});`;
    btn4 = deactivateButton();

    document.getElementById("btn4").disabled = true;

    setTimeout(function() {
        verify();
    }, 80)
}

function btnClick5() {
    changePlayer();
    document.getElementById("btn5").style.cssText = `background-image: url(${player});`;
    btn5 = deactivateButton();

    document.getElementById("btn5").disabled = true;

    setTimeout(function() {
        verify();
    }, 80)
}

function btnClick6() {
    changePlayer();
    document.getElementById("btn6").style.cssText = `background-image: url(${player});`;
    btn6 = deactivateButton();

    document.getElementById("btn6").disabled = true;

    setTimeout(function() {
        verify();
    }, 80)
}

function btnClick7() {
    changePlayer();
    document.getElementById("btn7").style.cssText = `background-image: url(${player});`;
    btn7 = deactivateButton();

    document.getElementById("btn7").disabled = true;

    setTimeout(function() {
        verify();
    }, 80)
}

function btnClick8() {
    changePlayer();
    document.getElementById("btn8").style.cssText = `background-image: url(${player});`;
    btn8 = deactivateButton();

    document.getElementById("btn8").disabled = true;

    setTimeout(function() {
        verify();
    }, 80)
}