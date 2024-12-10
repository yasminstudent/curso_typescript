let number1 = document.getElementById('number1') as HTMLInputElement;
let number2 = document.getElementById('number2') as HTMLInputElement;
let calculateButton = document.getElementById('calculate') as HTMLElement;
let result = document.getElementById('result') as HTMLElement ;

function calculate(n1: number, n2: number) {
    return n1 + n2;
}

calculateButton.addEventListener('click', function() {
    result.innerHTML = calculate(+number1.value, +number2.value).toString();
});
