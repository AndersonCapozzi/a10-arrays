//Exercicio 1:
let numerosAleatorios = [03, 06, 12, 24, 11, 88, 02, 90, 21];
let nomesAleatorios = ["Martin", "Luanna", "Anderson", "Flora", "Scooby"];
let coisasAleatorias = [05, 10, "familia", "pets", true, true];
console.log((numerosAleatorios),(nomesAleatorios),(coisasAleatorias));

//Exercicio 2:
console.log(numerosAleatorios.length, nomesAleatorios.length, coisasAleatorias.length);
console.log(numerosAleatorios[0]);
console.log(nomesAleatorios[1]);
console.log(coisasAleatorias[2]);
console.log(nomesAleatorios.includes("Luanna"));
console.log(coisasAleatorias.includes("Mar"));

//Exercicio 3:
let original= [88, 24, 11, 02, 03];
let originalCopia = original.slice();
let originalCopia2 = original.slice();
original.push(21);
console.log(original, originalCopia, originalCopia2);
originalCopia.splice(4, 1);
console.log(original, originalCopia, originalCopia2);
originalCopia2.splice(2, 1);
console.log(original, originalCopia, originalCopia2);


