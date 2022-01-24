console.clear()
var prompt = require(`prompt-sync`)();


// let idade = 19;
// const cidade = `Goiânia`;
// let nome = "Danilo";

// console.log("Tenho", idade, "anos e moro em", cidade);

// nome = `Danilo`;
// idade = 19;

// console.log(nome);
// console.log(idade);

// idade = idade + 10
// console.log(cidade + idade);

// console.log(`Olá ${nome}, tudo bem? Você tem ${idade} anos!`);

// let string = `Blue EdTech`;
// let numberInt = 10;
// let numberFloat = 10.5;
// let boolean = true;

// console.log(string);
// console.log(numberInt);
// console.log(numberFloat);
// console.log(boolean);
// console.log(typeof(string));

// const cidade = prompt("Qual cidade você mora? ");
// console.log(`Que legal, você mora em ${cidade}`);
// let numero = prompt(`Quantos km somado com dez? `);
// console.log(numero + 10);
// let numero = +prompt(`Quantos km somado com dez? `);
// console.log(numero + 10);
// console.log(Number(numero) + 10);

// const num1 = +prompt('Digite um número: ');
// const num2 = +prompt('Digite outro número: ');

// console.log(num1 + num2);

// const nome = prompt('Digite seu nome: ');
// const sobrenome = prompt('Digite seu sobrenome: ')

// console.log(nome + sobrenome);


// const num1 = +prompt('Digite um número: ');
// const num2 = +prompt('Digite outro número: ');

// console.log(`Subtração: ${num1} - ${num2} = ${num1 - num2}`);
// console.log(`Multiplicação: ${num1} * ${num2} = ${num1 * num2}`); // Em JavaScript usamos um * para multiplicação
// console.log(`Divisão: ${num1} / ${num2} = ${num1 / num2}`);
// console.log(`Resto da divisão de ${num1}/${num2}: ${num1 % num2}`);
// console.log(`Resultado de ${num1} elevado a ${num2}: ${num1 ** num2}`);


//EXERCÍCIOS ESTRAS

// \1) Frase na tela - Implemente um programa que escreve na tela a frase "O primeiro programa a gente nunca esquece!".\

// console.log(`O primeiro programa a gente nunca esquece!`)
// console.log()


// \2) Etiqueta - Elabore um programa que escreve seu nome completo na primeira linha, 
// seu endereço na segunda, o CEP na terceira e o telefone na quarta.\

// console.log(`Nome: Danilo Alves de Aguiar
// Endereço: Você não sabe e nem eu
// CEP: 00000-000
// Telefone: (62)90000-0000`)
// console.log()


// \3) Letra de Música - Faça um programa que mostre na tela uma letra de música que você gosta.\

// console.log(`Vício de Amor - Delacruz

// Você viu que eu me sairia bem
// Acreditou em mim, disse: Vá além
// Eu quero mais uma vez
// Poder descobrir mais de você
// Agradecer por ser quem é e por ser quem sou`)
// console.log()


// \4) Tabela de notas - Você foi contratado ou contratada por uma escola pra fazer o sistema de boletim dos alunos. 
// Como primeiro passo, escreva um programa que produza a seguinte saída:\

// console.log(`ALUNO (A) ----------- NOTA`)
// console.log(`ALINE                  9.0
// MÁRIO                  DEZ
// SÉRGIO                 4.5
// SHIRLEY                7.0`)
// console.log()


// \5) Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, 
// exibindo qual foi a opção escolhida.\

// const itens = [`Bola`, `Carro`, `Boneca`, `Bicicleta`];
// console.log(`0 - Bola
// 1 - Carro
// 2 - Boneca
// 3 - Bicicleta`);
// console.log()
// var resp = prompt(`Escolha um dos itens: `);
// console.log()
// console.log(itens[resp])
// console.log()


// \6) Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário: 
// quantidade de vida de um monstro (entre 10 e 50) e valor do ataque do jogador por turno (entre 5 e 10). 
// Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro 
// (o jogador irá derrotar o monstro em 8 turnos).\

// let vida = prompt(`Quanto de vida o monstro tem entre 10 e 50? `);
// let ataque = prompt(`Qual o valor do dano do jogador entre 5 e 10? `);

// turno = Math.ceil(vida / ataque);

// console.log(`A quantidade de turno é ${turno}!`);
// console.log()


// \7) E os 10% do garçom? - Defina uma variável para o valor de uma refeição que custou R$ 42,54. 
// Na sequência, defina uma variável para o valor da taxa de serviço que é de 10%. 
// Por fim defina uma variável que será responsável pelo cálculo do valor total da conta e exiba-o no console com a seguinte formatação: R$99.99 
// (valor com duas casas decimais).\


// let ref1 = +parseFloat(`42.54`).toFixed(2) ;
// let taxa = +parseFloat(`10%`);
// let total = (((taxa / 100) * ref1) + ref1).toFixed(2)

// console.log(total)


// \8) Qual o valor do troco? - Crie um programa que calcule o troco de uma compra no valor de R$100,98 e que foi paga com R$150,00. 
// O valor do troco deve ser exibido no console.\

// let valor = 100.98;
// let vlpago = 150.00;
// let troco = parseFloat(vlpago - valor).toFixed(2);

// console.log(`O valor do troco é ${troco}`)
// console.log()


// \9) Conversor de moedas - Crie um programa que solicite um um valor em real ao usuário e converta esse valor, para dólar.\

// let valorReal = prompt(`Digite o valor a ser covertido: R$`);

// valorDolar = (valorReal / 5.46).toFixed(2);

// console.log(valorDolar)






// let numA = +prompt("Digita sua nota 1: ");
// let numB = +prompt("Digite sua nota 2: ")

// console.log("Sua nota final é", (numA + numB) /2);,




