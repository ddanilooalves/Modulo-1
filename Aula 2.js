console.clear()
var prompt = require(`prompt-sync`)();

console.log()
console.log(`Em um reino bem distante, chamado Horrara, um cavaleiro destemido e muito forte, lutava para se tornar o próximo rei!
Mas para que ele se tornasse um rei, ele deveria provar, concluindo a missão que lhe foi imposta!
O cavaleiro então saiu na sua jornada para completar sua missão...`)
console.log()
console.log(`Você passará pelo monte dos gigantes para tentar recuperar a espada dos Deuses. Será que você obterá sucesso nesse desfio? 
Logo depois você enfrentará a cobra gigante de Mumbanda, para conseguir a Pedra da Vida!
O próximo desáfio é nos confins do deserto de Aramboca, onde você terá que pegar a Capa de Invisibilidade!
O seu próximo desáfio é pelas campinas de Dorck, a procura do Cavalo Branco de Thor!
E por último e não menos importante, você terá que passar por Valarrary, para recuperar A Poção de Cura!
Agora responda cavaleiro com Sim ou Não... `)
console.log()

var cont = 0

console.log()
let espada = prompt("Você conseguiu recuperar a Espada dos Deuses? ");
if (espada == `Sim`) {
    cont = cont + 1
} else {
}
console.log()
var pedra = prompt("E a Pedra da Vida? ");
if (pedra == `Sim`) {
    cont = cont + 1
} else {
}
console.log()
var capa = prompt("Conseguiu achar a Capa de Invisibilidade? ");
if (capa == `Sim`) {
    cont = cont + 1
} else {
}
console.log()
let cavalo = prompt("Recuperou o Cavalo Branco de Thor? ");
if (cavalo == `Sim`) {
    cont = cont + 1
} else {
}
console.log()
let bebida = prompt("A poção de cura, você conseguiu pegar? ");
if (bebida == `Sim`) {
    cont = cont + 1
} else {
}

console.log()
console.log(`Resposta 1: ${espada}`);
console.log(`Resposta 2: ${pedra}`);
console.log(`Resposta 3: ${capa}`);
console.log(`Resposta 4: ${cavalo}`);
console.log(`Resposta 5: ${bebida}`);
console.log()


let num1 = cont;
console.log(`Você completou ${cont} desafios!`)
console.log()

if (num1 == 0) {
    console.log(`Você falhou miseravelmente!`)
} else if (num1 == 1) {
    console.log(`Você falhou, mas conseguiu fugir!`)
} else if (num1 == 2) {
    console.log(`Você falhou, mas conseguiu fugir!`)
} else if (num1 == 3) {
    console.log(`Foi por pouco, mas você falhou!`)
} else if (num1 == 4) {
    console.log(`Você conseguiu concluir a missão, mesmo que não da maneira perfeita!`)
} else if (num1 == 5) {
    console.log(`Missão concluída cavaleiro, você se tornará o novo rei de Horrara`)
}
console.log()