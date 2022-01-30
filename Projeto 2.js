console.clear();
var prompt = require(`prompt-sync`)();


var compt = [`Pedra`, `Papel`, `Tesoura`];
console.log();
console.log(`Vamos jogar Jokenpô?`);
console.log();
do {
var retorn = ``;
var rod = +prompt(`Quantas partidas você deseja jogar? `);
var vit = 0;
var der = 0;
var emp = 0;

    for (let contador = 1; contador <= rod; contador++) {
        console.log();
        var resp = prompt(`Escolha entre ${compt[0]}, Papel e Tesoura: `);
        console.log();
        var pense = compt[Math.floor(Math.random() * compt.length)];
        console.log(`Resposta do computador: ${pense}`);
        if (resp == pense) {
        emp <= rod
        emp++
    }   if (resp == `Pedra` && pense == compt[1] || resp == `Papel` && pense == compt[2] || resp == `Tesoura` && pense == compt[0]) {
        der <= rod
        der++
    }   if (resp == `Pedra` && pense == compt[2] || resp == `Papel` && pense ==  compt[0] || resp == `Tesoura` && pense == compt[1]) {
        vit <= rod
        vit++
    }
    } console.log();
    console.log(`Você venceu ${vit} rodada(s), foi derrotado ${der} vez(es) e empatou ${emp} vez(es)!`);
    console.log(`${vit} - Vitória(s)
${der} - Derrota(s)
${emp} - Jogada(s) iguais(l)`);
    console.log();
    console.log(`O computador venceu ${der} rodada(s), foi derrotado ${vit} vez(es) e empatou ${emp} vez(es)!`);
    console.log(`${der} - Vitória(s)
${vit} - Derrota(s)
${emp} - Jogada(s) iguais(l)`);
    console.log();
        if (vit > der) {
        console.log(`PARABÉNS, VOCÊ VENCEU!`);
    }   else if (vit < der) {
        console.log(`QUE PENA, O COMPUTADOR VENCEU!`);
        console.log();
    }   else if (vit == der) {
        console.log(`VOCÊS EMPATARAM!`);
    } 
    console.log();
    retorn = prompt(`Deseja jogar novamente? `);
    console.log();
} while (retorn != `nao` && retorn != `Nao`);
console.log(`O jogo acabou!
Obrigado por jogar!`);
    console.log();