const numberBtns = document.querySelectorAll("[data-Number]"); //selector für bestimmte strings
const operationBtns = document.querySelectorAll("[data-Operator]");
const equalsBtn = document.querySelector("#equals");
const deleteBtn = document.querySelector("#delete");
const resetBtn = document.querySelector("#reset");
const display = document.querySelector("#display");

let currentInput = ""; //leere Zeichenkette für aktuellen Benutzerwert
let operator = ""; //zum Speichern des ausgewählten Operators
let firstOperand = ""; // zum Speichern des ersten Operanden

resetBtn.addEventListener("click", resetAll);
deleteBtn.addEventListener("click", deleteNumber);
equalsBtn.addEventListener("click", calcResult);

//mit for() die liste der buttons mit dem attribut/string data-Number durchlaufen
//jeder button erhält einen eventListener, der die function addNumber aufruft, wenn ein button geklickt wird
for (let i = 0; i < numberBtns.length; i++) {
  const btn = numberBtns[i];
  btn.addEventListener("click", function () {
    addNumber(btn.innerText);
  });
}

for (let i = 0; i < operationBtns.length; i++) {
  const btn = operationBtns[i];
  btn.addEventListener("click", function () {
    setOperator(btn.innerText);
  });
}

//wird aufgerufen, wenn einer der numberBtns geklickt wird
//fügt die angeklickte zahl dem currentInput hinzu und aktualisiert den text entsprechend
function addNumber(clickedNumber) {
  currentInput += clickedNumber;
  display.innerText = currentInput;
}

//methode slice(0, -1) wird auf die Zeichenkette currentInput angewendet
//=> es wird eine Zeichenkette von Index 0 bis zum vorletzten Index erstellt, so wird das letzte Zeichen der Zeichenkette entfernt
//=> Ergebnis wird in der Variable currentInput gespeichert
function deleteNumber() {
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput;
}

//wird aufgerufen, wenn resetBtn geklickt wird
//setzt den inhalt von currentInput und den text im display zurück
function resetAll() {
  currentInput = "";
  display.innerText = "";
}

function setOperator(selectedOperator) {
  //ist Operator ausgewählt => Berechnung durchführen
  if (operator !== "") {
    calcResult();
  }
  firstOperand = currentInput; //aktuellen Input als den ersten Operanden speichern
  operator = selectedOperator; //ausgewählten Operator setzen
  currentInput = ""; //aktuellen Input für die Eingabe des zweiten Operanden setzen
  display.innerText = firstOperand + " " + operator; //aktualisieren des Displays
}

function calcResult() {
  if (operator !== "" && firstOperand !== "" && currentInput !== "") {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(currentInput);

    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "÷":
        if (num2 != 0) {
          result = num1 / num2;
        } else {
          alert("Eine Division durch 0 ist nicht erlaubt!");
          resetAll();
          return;
        }
        break;
      default:
        return;
    }

    console.log("num1:", num1);
    console.log("num2:", num2);
    console.log("result:", result);

    displayResult(result); //Ergebnis anzeigen
    //Variablen für zukünftige Berechnungen zurücksetzen
    firstOperand = result.toString();
    currentInput = "";
    operator = "";
  }
}

function displayResult(result) {
  display.innerText = result;
}
