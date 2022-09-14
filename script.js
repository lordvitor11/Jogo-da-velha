var player = "./assets/o.png";

var btn;
var btn1;
var btn2;
var btn3;
var btn4;
var btn5;
var btn6;
var btn7;
var btn8;

function changePlayer() {
    if (player === "./assets/x.png") {
        player = "./assets/o.png"
    } else {
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

function verify() {
    //  Verificação horizontal 
    if (btn === 1 && btn1 === 1 && btn2 === 1) { reset(); }
    else if (btn3 === 1 && btn4 === 1 && btn5 === 1) { reset(); }
    else if (btn6 === 1 && btn7 === 1 && btn8 === 1) { reset(); }
    else {
        if (btn === 0 && btn1 === 0 && btn2 === 0) { reset(); }
        else if (btn3 === 0 && btn4 === 0 && btn5 === 0) { reset(); }
        else if (btn6 === 0 && btn7 === 0 && btn8 === 0) { reset(); }
    }

    //  Verificação vertical 
    if (btn === 1 && btn3 === 1 && btn6 === 1) { reset(); }
    else if (btn1 === 1 && btn4 === 1 && btn7 === 1) { reset(); }
    else if (btn2 === 1 && btn5 === 1 && btn8 === 1) { reset(); }
    else {
        if (btn === 0 && btn3 === 0 && btn6 === 0) { reset(); }
        else if (btn1 === 0 && btn4 === 0 && btn7 === 0) { reset(); }
        else if (btn2 === 0 && btn5 === 0 && btn8 === 0) { reset(); }
    }

    //  Verificação diagonal
    if (btn === 1 && btn4 === 1 && btn8 === 1) { reset(); }
    else if (btn2 === 1 && btn4 === 1 && btn6 === 1) { reset(); }
    else {
        if (btn === 0 && btn4 === 0 && btn8 === 0) { reset(); }
        else if (btn2 === 0 && btn4 === 0 && btn6 === 0) { reset(); }
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

    var elements = document.getElementsByTagName("button");
    for (c = 0; elements.length; c++) {
        elements[c].style.cssText = "background-color: #7D7ABC;";
    }
}

function btnClick() {
    changePlayer();
    document.getElementById("btn").style.cssText = `background-image: url(${player});` + "background-repeat: no-repeat;" + "background-position: center;" + "background-size: cover;";
    btn = deactivateButton();
    
    setTimeout(function() {
        verify();
    }, 80)
}

function btnClick1() {
    changePlayer();
    document.getElementById("btn1").style.cssText = `background-image: url(${player});` + "background-repeat: no-repeat;" + "background-position: center;" + "background-size: cover;"; 
    btn1 = deactivateButton();

    setTimeout(function() {
        verify();
    }, 80)
}

function btnClick2() {
    changePlayer();
    document.getElementById("btn2").style.cssText = `background-image: url(${player});` + "background-repeat: no-repeat;" + "background-position: center;" + "background-size: cover;"; 
    btn2 = deactivateButton();

    setTimeout(function() {
        verify();
    }, 80)
}

function btnClick3() {
    changePlayer();
    document.getElementById("btn3").style.cssText = `background-image: url(${player});` + "background-repeat: no-repeat;" + "background-position: center;" + "background-size: cover;"; 
    btn3 = deactivateButton();

    setTimeout(function() {
        verify();
    }, 80)
}

function btnClick4() {
    changePlayer();
    document.getElementById("btn4").style.cssText = `background-image: url(${player});` + "background-repeat: no-repeat;" + "background-position: center;" + "background-size: cover;"; 
    btn4 = deactivateButton();

    setTimeout(function() {
        verify();
    }, 80)
}

function btnClick5() {
    changePlayer();
    document.getElementById("btn5").style.cssText = `background-image: url(${player});` + "background-repeat: no-repeat;" + "background-position: center;" + "background-size: cover;"; 
    btn5 = deactivateButton();

    setTimeout(function() {
        verify();
    }, 80)
}

function btnClick6() {
    changePlayer();
    document.getElementById("btn6").style.cssText = `background-image: url(${player});` + "background-repeat: no-repeat;" + "background-position: center;" + "background-size: cover;"; 
    btn6 = deactivateButton();

    setTimeout(function() {
        verify();
    }, 80)
}

function btnClick7() {
    changePlayer();
    document.getElementById("btn7").style.cssText = `background-image: url(${player});` + "background-repeat: no-repeat;" + "background-position: center;" + "background-size: cover;"; 
    btn7 = deactivateButton();

    setTimeout(function() {
        verify();
    }, 80)
}

function btnClick8() {
    changePlayer();
    document.getElementById("btn8").style.cssText = `background-image: url(${player});` + "background-repeat: no-repeat;" + "background-position: center;" + "background-size: cover;"; 
    btn8 = deactivateButton();

    setTimeout(function() {
        verify();
    }, 80)
}