console.clear()
var prompt = require(`prompt-sync`)();


/* EXERCÍCIO 1
\Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.\

let number1 = prompt(`Digite um número: `);
let number2 = prompt(`Digite outro número: `);

if (number1 > number2) {
    console.log(number1)
} else {
    console.log(number2)
} 

const compara = number1 == number2
console.log(compara)
*/


/* EXERCÍCIO 2
\Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Em recuperação", se a média for entre cinco e sete;
A mensagem "Reprovado", se a média for menor que cinco.\

let nota1 = +prompt(`Informe sua primeira nota: `);
let nota2 = +prompt(`Informe sua segunda nota: `);
let nota3 = +prompt(`Informe sua terceira nota: `);
let nota4 = +prompt(`Informe sua quarta nota: `);

let resultado = ((nota1 + nota2 + nota3 + nota4) /4);

console.log(`Sua nota final é: ${resultado}`);

let media = 7
let media2 = 5

if (resultado >= media) {
    console.log(`APROVADO`);
} else if (resultado >= 5) {
    console.log(`EM RECUPERAÇÃO`);
} else if (resultado < media2) {
    console.log(`REPROVADO`)
}
*/


//EXERCÍCIO 3
// \Faça um programa que leia um número, e informe se ele é par ou impar\

// var number = '';

// do {
// number = prompt(`Digite um número par: `)
//      console.log()
// } while ((number % 2) != 0) {
// }
// console.log(`É PAR!`)
// console.log()


//EXERCÍCIO 4
// \Faça um programa que leia 2 valores inteiros (A e B). 
// Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si. 
// Exemplo:\

// let A = parseInt(prompt(`Digite um número inteiro: `));
// let B = parseInt(prompt(`Digite outro número inteiro: `));
// let múltiplo = parseInt(A / B);

// console.log(múltiplo)

// if ((múltiplo * B) != A) {
//     console.log(`Não é múltiplo`)
// } else if((múltiplo * A) != B){
//     console.log(`É múltiplo`)
// }


/* EXERCÍCIO 5
\Faça um programa que leia 3 valores que representam os lados de um triângulo A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos:
Se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO;
Se A² = B² + C² , apresente a mensagem: TRIANGULO RETANGULO;
Se A² > B² + C² , apresente a mensagem: TRIANGULO OBTUSANGULO;
Se A² < B² + C² , apresente a mensagem: TRIANGULO ACUTANGULO;
Se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO;
Se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES;\

let A = +prompt(`Digite o valor para o lado 1: `);
let B = +prompt(`Digite o valor para o lado 2: `);
let C = +prompt(`Digite o valor para o lado 3: `);
var X = 0;

console.log();
console.log(`----- Lados -----`);
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log(`-----------------`);
console.log();

if (A < B); {

    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    X = A;
    A = B;
    B = X;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
}

if ( B < C); {
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
    X = B;
    B = C;
    C = X;
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
}

if (A < B); {

    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    X = A;
    A = B;
    B = X;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
}

console.log();
console.log(`----- Lados -----`);
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log(`-----------------`);
console.log();

se  ( A  >=  ( B  +  C ) )
{
    consola . log ( "NAO FORMA TRIANGULO" ) ;
}
senão
{
    if  (  ( A * A )  ==  ( B * B )  +  ( C * C )  )
    {
        consola . log ( "TRIANGULO RETANGULO" ) ;
    }
    if  (  ( A * A )  >  ( B * B )  +  ( C * C )  )
    {
        consola . log ( "TRIANGULO OBTUSANGULO" ) ;
    }
    if  (  ( A * A )  <  ( B * B )  +  ( C * C )  )
    {
        consola . log ( "TRIANGULO ACUTANGULO" ) ;
    }
    se  ( A  ==  B  &&  B  ==  C )
    {
        consola . log ( "TRIANGULO EQUILATERO" ) ;
    }
    if  (  ( A  ==  B  &&  A  !=  C )  ||  ( B  ==  C  &&  B  !=  A ) )
    {
        consola . log ( "TRIANGULO ISOSCELES" ) ;
    }*/