import './style.css'

let inputValue = "";


const app = document.querySelector("#app");

const main = document.createElement("div");
main.id = "main";


const mainUl = document.createElement("ul");
mainUl.id = "mainUl";

const mainInput = document.createElement("input");
mainInput.id = "mainInput";
mainInput.value = "0";
mainInput.addEventListener('change', (event) => {
  inputValue = event.target.value;
})
main.append(mainInput);


const zero = () => {
  if(mainInput.value == "0") {
    inputValue = "0";
    mainInput.value = "0";
  } else {
    inputValue = inputValue + "0";
    mainInput.value = inputValue;
  }
}
const one = () => {
  inputValue = inputValue + "1";
  mainInput.value = inputValue;
}
const two = () => {
  inputValue = inputValue + "2";
  mainInput.value = inputValue;
}
const three = () => {
  inputValue = inputValue + "3";
  mainInput.value = inputValue;
}
const four = () => {
  inputValue = inputValue + "4";
  mainInput.value = inputValue;
}
const five = () => {
  inputValue = inputValue + "5";
  mainInput.value = inputValue;
}
const six = () => {
  inputValue = inputValue + "6";
  mainInput.value = inputValue;
}
const seven = () => {
  inputValue = inputValue + "7";
  mainInput.value = inputValue;
}
const eight = () => {
  inputValue = inputValue + "8";
  mainInput.value = inputValue;
}
const nine = () => {
  inputValue = inputValue + "9";
  mainInput.value = inputValue;
}
const point = () => {
  if(!inputValue.includes(".")) {
    if(inputValue != "") {
      inputValue = inputValue + ".";
      mainInput.value = inputValue;
    } else {
      inputValue = inputValue + "0.";
      mainInput.value = inputValue;
    }
  }
}


let initial = 0;
let operation = "";

const sumation = () => {
  initial = parseFloat(inputValue);

  inputValue = "";
  operation = "+";
}

const subtraction = () => {
  initial = parseFloat(inputValue);

  inputValue = "";
  operation = "-";
}

const multiplication = () => {
  initial = parseFloat(inputValue);

  inputValue = "";
  operation = "×";
}

const division = () => {
  initial = parseFloat(inputValue);

  inputValue = "";
  operation = "÷";
}

const getRoot = () => {
  initial = parseFloat(inputValue);

  if(initial >= 0) {
    inputValue = Math.sqrt(initial);
    mainInput.value = inputValue;
  }
}

const power = () => {
  initial = parseFloat(inputValue);

  inputValue = "";
  operation = "^";
}

const remaining = () => {
  initial = parseFloat(inputValue);

  inputValue = "";
  operation = "%";
}

const reverse = () => {
  initial = parseFloat(inputValue);

  inputValue = 1/initial;
  mainInput.value = inputValue;
}

const changeSign = () => {
  inputValue = (parseFloat(inputValue)) * (-1);
  mainInput.value = inputValue;
}

const CE = () => {
  inputValue = "";
  mainInput.value = "0";
}

const C = () => {
  initial = "";
  inputValue = "";
  mainInput.value = "0";
}

const DEL = () => {
  inputValue = inputValue.slice(0, inputValue.length - 1);
  mainInput.value = inputValue;
}

const equal = () => {
  switch(operation) {
    case "+":
      inputValue = initial + parseFloat(inputValue);
      break;
    case "-":
      inputValue = initial - parseFloat(inputValue);
      break;
    case "×":
      inputValue = initial * parseFloat(inputValue);
      break;
    case "÷":
      inputValue = initial / parseFloat(inputValue);
      break;
    case "^":
      inputValue = Math.pow(initial, parseFloat(inputValue));
      break;
    case "%":
      inputValue = initial % parseFloat(inputValue);
      break;
  }
  mainInput.value = inputValue;
}


const buttons = [
  { sym: "%", id: "remaining", func: remaining },
  { sym: "√", id: "root", func: getRoot },
  { sym: "^", id: "power", func: power },
  { sym: "1/x", id: "reverse", func: reverse },
  { sym: "CE", id: "ce", func: CE },
  { sym: "C", id: "c", func: C },
  { sym: "DEL", id: "del", func: DEL },
  { sym: "÷", id: "division", func: division },
  { sym: "7", id: "btn7", func: seven },
  { sym: "8", id: "btn8", func: eight },
  { sym: "9", id: "btn9", func: nine },
  { sym: "×", id: "multiplication", func: multiplication },
  { sym: "4", id: "btn4", func: four },
  { sym: "5", id: "btn5", func: five },
  { sym: "6", id: "btn6", func: six },
  { sym: "-", id: "subtraction", func: subtraction },
  { sym: "1", id: "btn1", func: one },
  { sym: "2", id: "btn2", func: two },
  { sym: "3", id: "btn3", func: three },
  { sym: "+", id: "sumation", func: sumation },
  { sym: "+/-", id: "changeSign", func: changeSign },
  { sym: "0", id: "zero", func: zero },
  { sym: ".", id: "point", func: point },
  { sym: "=", id: "equal", func: equal },
]

buttons.map((button) => {
  const mainLi = document.createElement("li");
  mainLi.id = button?.id;
  const mainLiBtn = document.createElement("button");
  mainLiBtn.innerHTML = button.sym;
  mainLi.append(mainLiBtn);
  mainUl.append(mainLi);

  mainLi.addEventListener('click', button?.func)
})


main.append(mainUl);
app.appendChild(main);