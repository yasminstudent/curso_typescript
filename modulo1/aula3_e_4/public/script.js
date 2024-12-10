var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var calculateButton = document.getElementById('calculate');
var result = document.getElementById('result');
function calculate(n1, n2) {
    return n1 + n2;
}
calculateButton.addEventListener('click', function () {
    result.innerHTML = calculate(+number1.value, +number2.value).toString();
});
