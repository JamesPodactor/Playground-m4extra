var operandoa = () => parseInt(document.getElementById("my-input1").value);
var operando = () => parseInt(document.getElementById("my-result").innerText);

var suma = () => operandoa() + operando();
var showSum = () => document.getElementById("my-result").innerText = suma();
document.getElementById("sumButton").addEventListener("click", showSum);


var resta = () => operando() - operandoa();
var showSubtract = () => document.getElementById("my-result").innerText = resta();
document.getElementById("subtractButton").addEventListener("click", showSubtract);


var multiplicacion = () => operandoa() * operando();
var showMultiplication = () => document.getElementById("my-result").innerText = multiplicacion();
document.getElementById("multiplyButton").addEventListener("click", showMultiplication);


var division = () => operando() / operandoa();
var showDivision = () => document.getElementById("my-result").innerText = division();
document.getElementById("divideButton").addEventListener("click", showDivision);


var total = () => operando();
var showTotal = () => document.getElementById("my-result").innerText = total();
document.getElementById("totalButton").addEventListener("click", showTotal);