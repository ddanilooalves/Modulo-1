console.clear()
var prompt = require(`prompt-sync`)();

/*EXERCÍCIO 1 
\Leia 2 valores A e B, que correspondem a 2 notas de um aluno. 
A seguir calcule e informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6. 
Ex: nota a * 4 e nota b * 6.\

// let numA = +prompt("Digita sua nota 1: ");
// let numB = +prompt("Digite sua nota 2: ")

// console.log("Sua nota final é", (numA + numB) /2);,
*/

// EXERCÍCIO 2
// \\Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, o número de peças1 que o usuário quer, o valor unitário de cada peça1, 
// o nome de uma peça2, o número de peças2 e o valor unitário de cada peça2. 
// Após, calcule e mostre o valor a ser pago.\\

// console.log(`O valor de cada camisa é de 10 reais.`)
// console.log(`O valor de cada calça é de 20 reais.`)
// console.log()
// var peca1 = +prompt(`Quantas peça de camisa você deseja? `)
// var peca2 = +prompt(`Quantas calças você deseja? `)
// console.log()
// var valor1 = 10;
// var valor2 = 20;

// console.log(`São ${peca1} peças de camisa, e ${peca2} de calça!`);
// console.log()
// console.log(`O valor total das peças de camisa ficou no valor de ${peca1 * valor1} reais!`)
// console.log()
// console.log(`O valor total das calças ficou no valor de ${peca2 * valor2} reais!`)
// console.log()
// console.log(`O valor total a ser pago é de ${(peca1 * valor1) + (peca2 * valor2)} reais!`)
// console.log()


// EXERCÍCIO 3
// \Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. 
// Calcule e exiba o total de dias que essa pessoa já viveu. 
// Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.\

// let anos = +prompt(`Quantos anos de idade você tem? `);
// console.log()
// let meses = +prompt(`Quantos meses? `);
// console.log()
// let dias = +prompt(`E quantos dias? `);
// console.log()
// console.log(`Eu tenho ${anos} ano(s), ${meses} mes(es) e ${dias} dia(s).`)
// console.log()
// var ano = 365;
// var mes = 30;

// console.log(`Você já viveu ${(ano * anos) + (mes * meses) + dias} dias de vida!`);
// console.log()


// EXERCÍCIO 4
// \Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias. 
// Também considere todo ano com 365 dias e todo mês com 30 dias.\

// let diasv = +prompt(`Quantos dias de vida você possui? `)

// var anos = parseInt(diasv / 365)
// var meses = parseInt((diasv % 365) / 30)
// var dias = parseInt((diasv % 365) % 30)
// console.log()
// console.log(`Você tem ${anos} ano(s), ${meses} mes(es) e ${dias} dia(s)!`)
// console.log()