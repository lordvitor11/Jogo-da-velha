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
    popup.style.display = "none";
    reset();
}

function changeStatus(ganhador) {
    var placarVelha = document.getElementById("velha");
    var placarX = document.getElementById("x");
    var placarO = document.getElementById("o");
    var popup = document.getElementById("popup");
    var popupText = document.getElementById("popupText")

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

    popup.style.display = "flex";
}

function verify() {
    //  Verificação horizontal 
    if (btn === 1 && btn1 === 1 && btn2 === 1) { changeStatus("x"); }
    else if (btn3 === 1 && btn4 === 1 && btn5 === 1) { changeStatus("x"); }
    else if (btn6 === 1 && btn7 === 1 && btn8 === 1) { changeStatus("x"); }
    else {
        if (btn === 0 && btn1 === 0 && btn2 === 0) { changeStatus("o"); }
        else if (btn3 === 0 && btn4 === 0 && btn5 === 0) { changeStatus("o"); }
        else if (btn6 === 0 && btn7 === 0 && btn8 === 0) { changeStatus("o"); }
    }

    //  Verificação vertical 
    if (btn === 1 && btn3 === 1 && btn6 === 1) { changeStatus("x"); }
    else if (btn1 === 1 && btn4 === 1 && btn7 === 1) { changeStatus("x"); }
    else if (btn2 === 1 && btn5 === 1 && btn8 === 1) { changeStatus("x"); }
    else {
        if (btn === 0 && btn3 === 0 && btn6 === 0) { changeStatus("o"); }
        else if (btn1 === 0 && btn4 === 0 && btn7 === 0) { changeStatus("o"); }
        else if (btn2 === 0 && btn5 === 0 && btn8 === 0) { changeStatus("o"); }
    }

    //  Verificação diagonal
    if (btn === 1 && btn4 === 1 && btn8 === 1) { changeStatus("x"); }
    else if (btn2 === 1 && btn4 === 1 && btn6 === 1) { changeStatus("x"); }
    else {
        if (btn === 0 && btn4 === 0 && btn8 === 0) { changeStatus("o"); }
        else if (btn2 === 0 && btn4 === 0 && btn6 === 0) { changeStatus("o"); }
    }

    if (btn !== null && btn1 !== null && btn2 !== null && btn3 !== null && btn4 !== null && btn5 !== null && btn6 !== null && btn7 !== null && btn8 !== null) {
        changeStatus("velha");
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