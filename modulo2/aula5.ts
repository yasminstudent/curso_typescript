// Usando types nos parâmetros de uma função

function firstLetterUpperCase(name: string) {
    //pega a primeira letra
    let firstLetter = name.charAt(0).toUpperCase();

    //retorna a primeira letra em maiúscula e o restante da string
    return firstLetter + name.substring(1);
}

firstLetterUpperCase('yasmin');
