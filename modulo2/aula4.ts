// O type any (e quando usá-lo)

// Deve ser usado quando precisamos que o typescript ignore o tipo de algo
// (variável, constante...), usado em último caso.

let things: any = ['Porta', 227, 'Cadeira'];
let random2: any = 'Celular';

things.push(true)
random2 = false;
