let firstNumber = document.querySelector("#input1");
let secondNumber = document.querySelector("#input2");
let button3 = document.querySelector("#button3");
let answerParagraph = document.querySelector("#answer")
firstNumber.focus();

function showResult(){
answerParagraph.innerText = "O resultado é " + (firstNumber.value * secondNumber.value);
}

button3.onclick = showResult;