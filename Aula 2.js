console.clear()
var prompt = require(`prompt-sync`)();

console.log()
    
    console.log(`Escolha seu cavaleiro ou cavaleira...!`);
    
    console.log()
    console.log(`1 - Yennifer`);
    console.log(`2 - Hanna`);
    console.log(`3 - Athreus`);
    console.log(`4 - Lufyn`);
    console.log()
    
    let res = +prompt(`Cavaleiro(a): `);
    console.log()
    
    if (res === 1)
    {
        console.log(`Em um reino bem distante, chamado Horrara, uma cavaleira chamada Yennifer, destemida e muito forte, lutava para se tornar a próxima rainha!
    Mas para que ela se tornasse uma rainha, ela deveria provar que é merecedora, concluindo a missão que lhe foi imposta!
    Yennifer então saiu na sua jornada para completar sua missão...`)
    console.log()
    console.log(`Você passará pelo monte dos gigantes para tentar recuperar a espada dos Deuses. Será que você obterá sucesso nesse desafio? 
    Logo depois você enfrentará a cobra gigante de Mumbanda, para conseguir a Pedra da Vida!
    O próximo desáfio é nos confins do deserto de Aramboca, onde você terá que pegar a Capa de Invisibilidade!
    O seu próximo desáfio é pelas campinas de Dorck, a procura do Cavalo Branco de Thor!
    E por último e não menos importante, você terá que passar por Valarrary, para recuperar A Poção de Cura!
    Agora responda cavaleira Yennifer com Sim ou Não... `)
    console.log()
    }
    
    if(res == 2)
    {
        console.log(`Em um reino bem distante, chamado Horrara, uma cavaleira chamada Hanna, destemida e muito forte, lutava para se tornar a próxima rainha!
        Mas para que ela se tornasse uma rainha, ela deveria provar que é merecedora, concluindo a missão que lhe foi imposta!
        Hannad então saiu na sua jornada para completar sua missão...`)
        console.log()
        console.log(`Você passará pelo monte dos gigantes para tentar recuperar a espada dos Deuses. Será que você obterá sucesso nesse desafio? 
        Logo depois você enfrentará a cobra gigante de Mumbanda, para conseguir a Pedra da Vida!
        O próximo desáfio é nos confins do deserto de Aramboca, onde você terá que pegar a Capa de Invisibilidade!
        O seu próximo desáfio é pelas campinas de Dorck, a procura do Cavalo Branco de Thor!
        E por último e não menos importante, você terá que passar por Valarrary, para recuperar A Poção de Cura!
        Agora responda cavaleira Hanna com Sim ou Não... `)
        console.log()
    } 
    
    if (res == 3)
    {
        console.log(`Em um reino bem distante, chamado Horrara, um cavaleiro cahamado Athreus, destemido e muito forte, lutava para se tornar o próximo rei!
    Mas para que ele se tornasse o rei, ele deveria provar que era merecedor, concluindo a missão que lhe foi imposta!
    O cavaleiro então saiu na sua jornada para completar sua missão...`)
    console.log()
    console.log(`Você passará pelo monte dos gigantes para tentar recuperar a espada dos Deuses. Será que você obterá sucesso nesse desafio? 
    Logo depois você enfrentará a cobra gigante de Mumbanda, para conseguir a Pedra da Vida!
    O próximo desáfio é nos confins do deserto de Aramboca, onde você terá que pegar a Capa de Invisibilidade!
    O seu próximo desáfio é pelas campinas de Dorck, a procura do Cavalo Branco de Thor!
    E por último e não menos importante, você terá que passar por Valarrary, para recuperar A Poção de Cura!
    Agora responda cavaleiro Athreus com Sim ou Não... `)
    console.log()
    }
    
    if (res == 4)
    {
        console.log(`Em um reino bem distante, chamado Horrara, um cavaleiro cahamado Lufyn, destemido e muito forte, lutava para se tornar o próximo rei!
    Mas para que ele se tornasse o rei, ele deveria provar que era merecedor, concluindo a missão que lhe foi imposta!
    O cavaleiro então saiu na sua jornada para completar sua missão...`)
        console.log()
        console.log(`Você passará pelo monte dos gigantes para tentar recuperar a espada dos Deuses. Será que você obterá sucesso nesse desafio? 
    Logo depois você enfrentará a cobra gigante de Mumbanda, para conseguir a Pedra da Vida!
    O próximo desáfio é nos confins do deserto de Aramboca, onde você terá que pegar a Capa de Invisibilidade!
    O seu próximo desáfio é pelas campinas de Dorck, a procura do Cavalo Branco de Thor!
    E por último e não menos importante, você terá que passar por Valarrary, para recuperar A Poção de Cura!
    Agora responda cavaleiro Athreus com Sim ou Não... `)
    }

var cont = 0

console.log()
let espada = prompt("Você conseguiu recuperar a Espada dos Deuses? ");
if (espada == `Sim` || espada == `sim` || espada == `SIM` || espada == `s`) {
    cont = cont + 1
} else {
}
console.log()
var pedra = prompt("E a Pedra da Vida? ");
if (pedra == `Sim`|| pedra == `sim` || pedra == `SIM` || pedra == `s`) {
    cont = cont + 1
} else {
}
console.log()
var capa = prompt("Conseguiu achar a Capa de Invisibilidade? ");
if (capa == `Sim` || capa == `sim` || capa == `SIM` || capa == `s`) {
    cont = cont + 1
} else {
}
console.log()
let cavalo = prompt("Recuperou o Cavalo Branco de Thor? ");
if (cavalo == `Sim` || cavalo == `sim` || cavalo == `SIM` || cavalo == `s`) {
    cont = cont + 1
} else {
}
console.log()
let bebida = prompt("A poção de cura, você conseguiu pegar? ");
if (bebida == `Sim` || bebida == `sim` || bebida == `SIM` || bebida == `s`) {
    cont = cont + 1
} else {
}

console.log()
// console.log(`Resposta 1: ${espada}`);
// console.log(`Resposta 2: ${pedra}`);
// console.log(`Resposta 3: ${capa}`);
// console.log(`Resposta 4: ${cavalo}`);
// console.log(`Resposta 5: ${bebida}`);
// console.log()


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
    console.log(`Missão concluída cavaleiro, você se tornará o novo rei de Horrara!`)
}
console.log()
