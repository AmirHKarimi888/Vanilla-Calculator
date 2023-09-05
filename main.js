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


let initial = 0;
let operation = "";

const plus = () => {
  initial = parseFloat(inputValue);

  inputValue = "";
  operation = "+";
}

const minus = () => {
  initial = parseFloat(inputValue);

  inputValue = "";
  operation = "-";
}

const product = () => {
  initial = parseFloat(inputValue);

  inputValue = "";
  operation = "*";
}

const divide = () => {
  initial = parseFloat(inputValue);

  inputValue = "";
  operation = "/";
}

const equal = () => {
  switch(operation) {
    case "+":
      inputValue = initial + parseFloat(inputValue);
      break;
    case "-":
      inputValue = initial - parseFloat(inputValue);
      break;
    case "*":
      inputValue = initial * parseFloat(inputValue);
      break;
    case "/":
      inputValue = initial / parseFloat(inputValue);
      break;
  }
  mainInput.value = inputValue;
}


const buttons = [
  { sym: "%", func: one },
  { sym: "rad", func: one },
  { sym: "^", func: one },
  { sym: "1/x", func: one },
  { sym: "CE", func: one },
  { sym: "C", func: one },
  { sym: "DEL", func: one },
  { sym: "/", func: divide },
  { sym: "7", id: "btn7", func: seven },
  { sym: "8", id: "btn8", func: eight },
  { sym: "9", id: "btn9", func: nine },
  { sym: "*", func: product },
  { sym: "4", id: "btn4", func: four },
  { sym: "5", id: "btn5", func: five },
  { sym: "6", id: "btn6", func: six },
  { sym: "-", func: minus },
  { sym: "1", id: "btn1", func: one },
  { sym: "2", id: "btn2", func: two },
  { sym: "3", id: "btn3", func: three },
  { sym: "+", id: "plus", func: plus },
  { sym: "+/-", func: one },
  { sym: "0", func: zero },
  { sym: ".", func: one },
  { sym: "=", func: equal },
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