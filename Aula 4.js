console.clear();
var prompt = require(`prompt-sync`)();

/*
SE o Manoel estiver no Rio
Ele verá o jogo do Vasco
*/

// let local = prompt(`Onde o Manoel está? `);

// if (local == `Rio`) {
//     console.log(`Ele verá o jogo do Vasco`);
// } else {
//     console.log(`Ele não verá o jogo do Vasco`)
// }

// const compara = 5 > 3;
// console.log(compara);
// console.log(typeof(compara));


// EXERCÍCIO 1
// \1) Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// Salários até R$ 280,00 (incluindo): aumento de 20%.
// Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
// Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
// Salários de R$ 1500,00 em diante: aumento de 5%.
// Após o aumento ser realizado, informe na tela:
// O salário antes do reajuste.
// O percentual de aumento aplicado.
// O valor do aumento.
// O novo salário, após o aumento.\

// let salario = +prompt(`Informe o valor do seu salário: `);
// let aumento

// if (salario <= 280) {
//     aumento = salario * (20 / 100)
//     console.log()
//     console.log(`O salário é de ${salario} reais.

// O percentual de aumento aplicado é de 20%

// O valor do aumento é de ${aumento} reais

// O novo salário é de ${aumento + salario} reais`)
// }
// if (salario > 280 && salario <= 700) {
//     aumento = salario * (15 / 100)
//     console.log(`O salário é de ${salario} reais.

//     O percentual de aumento aplicado é de 15%

//     O valor do aumento é de ${aumento} reais

//     O novo salário é de ${aumento + salario} reais`)
// }
// if (salario > 700 && salario <= 1500) {
//     aumento = salario * (10 / 100)
//     console.log(`O salário é de ${salario} reais.

//     O percentual de aumento aplicado é de 10%

//     O valor do aumento é de ${aumento} reais

//     O novo salário é de ${aumento + salario} reais`)
// }
// if (salario > 1500) {
//     aumento = salario * (5 / 100)
//     console.log(`O salário é de ${salario} reais.

//     O percentual de aumento aplicado é de 15%

//     O valor do aumento é de ${aumento} reais

//     O novo salário é de ${aumento + salario} reais`)
// }
// console.log()


//  EXERCÍCIO 2
// \Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro
// entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador.
// O programa deverá escrever na tela se o usuário venceu ou perdeu.\

// let pense = Math.floor(Math.random() * 11)
// let compt = 0


//     var resp = +prompt(`Tente adivinhar o nmr da máquina `)
//     if (resp != pense) {
//         console.log(pense)
//         console.clear
//         console.log(`Você perdeu!`)
//     } if (resp == pense) {
//         console.log(pense)
//         console.clear
//         console.log(`Você venceu!`)
//     }
// console.log()

//EXERCÍCIO 3
/*Caixa Eletrônico - Faça um Programa para uma caixa eletrônica. 
O programa deve perguntar ao usuário a valor do e depois informar quantas notas de cada valor serão entregues. As notas disponíveis serão de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais.
O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1.
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/

//CÓDIGO DA IU - ESTUDAR ESSE CÓDIGO//

// let dinheiro = +prompt("Diga quanto você quer sacar: R$");
// console.log("Existem notas de 1 real, 5 reais, 10 reais, 50 reais e 100 reais");
// console.log("Você irá sacar: R$", dinheiro);

// if (dinheiro >= 100) {
//   var notasDe100 = parseInt(dinheiro / 100);
//   var notas100 = dinheiro % 100;
//   console.log(notasDe100, "notas de 100");
// } else if (dinheiro < 100) {
//   var notasDe100 = parseInt(dinheiro / 100);
//   var notas100 = dinheiro % 100;
// }
// if (notas100 >= 50) {
//   var notasDe50 = parseInt(notas100 / 50);
//   var notas50 = notas100 % 50;
//   console.log(notasDe50, "notas de 50");
// } else if (notas100 < 100) {
//   var notasDe50 = parseInt(dinheiro / 50);
//   var notas50 = dinheiro % 50;
// }
// if (notas50 >= 10) {
//   var notasDe10 = parseInt(notas50 / 10);
//   var notas10 = notas50 % 10;
//   console.log(notasDe10, "notas de 10");
// } else if (notas50 < 10) {
//   var notasDe10 = parseInt(notas50 / 10);
//   var notas10 = notas50 % 10;
// }

// if (notas10 >= 5) {
//   var notasDe5 = parseInt(notas10 / 5);
//   var notas5 = notas10 % 5;
//   console.log(notasDe5, "notas de 5");
// } else if (notas10 < 5) {
//   var notasDe5 = parseInt(notas50 / 5);
//   var notas5 = notas10 % 5;
// }
// if (notas5 >= 1) {
//   var notasDe1 = parseInt(notas5 / 1);
//   var notas1 = notas5 % 1;
//   console.log(notasDe1, "notas de 1");
// }
// console.log();





