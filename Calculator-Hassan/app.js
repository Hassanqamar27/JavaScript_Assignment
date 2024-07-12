var userInput = document.getElementById("get");
var result;

function calculator(number) {
  // console.log(input.value)
  result = userInput.value += number;
}
function calculateValue() {
  result = eval(result);
  userInput.value = result;
}
function allClear() {
  userInput.value = "";
}
function del() {
  result = userInput.value.slice(0, -1);
  userInput.value = result;
}
