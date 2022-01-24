console.clear();
var prompt = require(`prompt-sync`)();

// let num1 = 15;
// let num2 = 20;

// while (num1 < num2) {
//     console.log(`O ${num1} é menor`);
//     num1++ // Aumenta em 1 o valor de num1
// }

console.log();

// let num = '';

//while (num <= 10 || num > 10) {// Repetição pra sempre

// while (num <= 10) {
//     if (num < 0) {
//         console.log(`O número é negativo`);
//         if (num < -10) {
//             console.log(`Muitooo negativo`);
//             console.log(`Vou resolver isso`);
//             while (num < -10) {
//                 console.log(num);
//                 num++
//             }
//         }
//     }
// num = prompt('Digite seu usuário: ');
// }
// Equanto o número não for maior que 10 ele não vai parar de perguntar

// let salario = Number(+prompt(`Qual o salário `)).toFixed(2)
// salario = Number(salario);//
// console.log(salario);
// console.log(typeof(salario));
// Usar como valor

// let nom1 = '';
// let nom2 = '';

// while (nom1 == nom2) {
//     nom1 = prompt(`Digite um nome: `);
//     nom2 = prompt(`Digite outro nome: `);
// }

// let senha = '';

// do {
//     senha = prompt(`Digite a senha de acesso: `);
//     while (senha != `Blue`);
// }


// EXERCÍCIO 1
// \Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.\

// let num = prompt('Digite seu usuário: ');

// let senha = prompt(`Digite sua senha: `);

// while (senha == num) {
//     console.log()
//     console.log(`ACESSO NEGADO
// Obs: A senha não pode ser a mesma que o usuário.`);
// console.log()
// num = prompt('Digite seu usuário: ');
// senha = prompt(`Digite sua senha: `);
// if (senha != num) {
//     console.log()
//     console.log(`LOGIN REALIZADO COM SUCESSO!`)
//     console.log()
// }
// }


// EXERCÍCIO 2
// \Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';\

/*
let nome  =  prompt( 'Digite seu nome: ') ;
while ( nome.comprimento  <=  3 ) {
    consola.log( 'Nome inválido. Precisa ter mais de 3 caracteres.' )
    nome = prompt( 'Digite seu nome: ' ) ;
}

let idade  =  prompt ( 'Digite sua idade: ' ) 
while (idade  <= 0  ||  idade  >  150 ) {
    consola.log ( 'idade inválida!' ) ;
    idade  =  prompt ( 'Digite sua idade: ' ) ;
}

let salario  =  prompt ( 'Digite seu salário: ' ) ;
while (salario  <=  0 ) {
    consola.log ( 'Salário inválido!' )
    salario  =  prompt ( 'Digite seu salário: ' ) ;
}

let estado = prompt ( 'Digite seu estado civil: ' ).toLowerCase ( ) ;
while ( estado  !=  's'  &&  estado  !=  'c'  &&  estado  !=  'v'  &&  estado  !=  'd' ) {
    consola.log ( 'Estado civil inválido.' )
    estado = prompt ( 'Digite seu estado civil: ' ).toLowerCase ( ) ;
}*/


// EXERCÍCIO 3
// \Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.\

/*
// var number = '';

// do {
//     number = prompt(`Digite um número par: `)
//     console.log()
// } while ((number % 2) !=0 ) {
// }
// console.log(`É PAR!`)
// console.log()
*/

// EXERCÍCIO 4
// \Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. 
// O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o número é maior ou menor que o palpite. 
// No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.\

// let pense = Math.floor(Math.random() * 11)
// let compt = 0

// while (resp != pense) {
//     compt = compt + 1
//     console.log()
//     var resp = +prompt(`Tente adivinhar o nmr da máquina `)
//     if (resp > pense) {
//         console.log(pense)
//         console.clear
//         console.log(`O número da máquina é menor`)
//     } if (resp < pense) {
//         console.log(pense)
//         console.clear
//         console.log(`O número da máquina é maior`)
//     }
// }
// console.log(`Você acertou. Tentativas ${compt}`);
// console.log()


