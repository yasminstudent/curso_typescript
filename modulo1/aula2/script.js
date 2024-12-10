let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let calculateButton = document.getElementById('calculate');
let result = document.getElementById('result');

function calculate(n1, n2) {
    return n1 + n2;

    /*
        Para resulver com js, teremos que converter para números
        return +n1 + +n2;

        Mas a ideia é obrigar que essa função receba apenas números, p/ isso
        teremos que usar o typescript.
    */
}

calculateButton.addEventListener('click', function() {
    /*
        Como estamos usando apenas javascript, a função calculate está recebendo
        strings (o elemento input sempre vai armazenar uma string) e não está
        retornando erro, no entanto o comportamento esperado não acontece
        pois a ideia seria somar os números, mas o js está concatenando as strings.
    */
    result.innerHTML = calculate(number1.value, number2.value);
});
