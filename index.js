let clickSound = new Audio('./sounds/clicksound.wav');
let successSound = new Audio('./sounds/success.mp3');
let clearSound = new Audio('./sounds/clear.mp3');
function appendToDisplay(input) {
   $('#screen').val( $('#screen').val() + input);
    playSound(clickSound);
}

function clearDisplay() {
    $('#screen').val('');
    playSound(clearSound);
  }
function backspace() {
    $('#screen').val($('#screen').val().slice(0, -1));
    playSound(clickSound);
}

function playSound(audio) {
    audio.cloneNode().play();
  }
function calculate() {
     let value = $('#screen').val();
     let result = eval(value);
     $('#screen').val(result);
     playSound(successSound);
}

$(document).on("keydown", function (event) {
    switch (event.key) {
        case "Enter":
            calculate();
            break;
        case "Backspace":
            backspace();
            break;
        case "Delete":
            clearDisplay();
            break;
        case "1":
            appendToDisplay('1');
        break;
        case "2":
            appendToDisplay('2');
        break;
        case "3":
            appendToDisplay('3');
        break;
        case "4":
            appendToDisplay('4');
        break;
        case "5":
            appendToDisplay('5');
        break;
        case "6":
            appendToDisplay('6');
        break;
        case "7":
            appendToDisplay('7');
        break;
        case "8":
            appendToDisplay('8');
        break;
        case "9":
            appendToDisplay('9');
        break;
        case "+":
            appendToDisplay('+');
        break;
        case "-":
            appendToDisplay('-');
        break;
        case "*":
            appendToDisplay('*');
        break;
        case "/":
            appendToDisplay('/');
        break;
        case ".":
            appendToDisplay('.');
        break;
        case "0":
            appendToDisplay('0');
        break;

    }
});