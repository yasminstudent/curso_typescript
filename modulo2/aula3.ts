// Type em Arrays

let names: string[] = ['Yasmin', 'Ingrid', 'Barbara'];
let ages: number[] = [22, 26, 30];
let isDeveloper: boolean[] = [true, true, false];

let technologies: Array<string> = ['TypeScript', 'NodeJs'];
let numbers: Array<number> = [1, 2, 3];
//...

let random: Array<any> = ['Ola', 123, false];

// Isso dá erro pq o esperado era um array de strings
//names.push(90);