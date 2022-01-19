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
Agora responda cavaleiro... `)
console.log()


let espada = prompt("Você conseguiu recuperar a Espada dos Deuses? ");
console.log()
let pedra = prompt("E a Pedra da Vida? ");
console.log()
let capa = prompt("Conseguiu achar a Capa de Invisibilidade? ");
console.log()
let cavalo = prompt("Recuperou o Cavalo Branco de Thor? ");
console.log()
let bebida = prompt("A poção de cura, você conseguiu pegar? ");

console.log()
console.log(`Resposta 1: ${espada}`);
console.log(`Resposta 2: ${pedra}`);
console.log(`Resposta 3: ${capa}`);
console.log(`Resposta 4: ${cavalo}`);
console.log(`Resposta 5: ${bebida}`);
console.log()

let respostaFinal = prompt(`Chegou a última parte cavaleiro!
Informe quantos desafios você completou: `)
