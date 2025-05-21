const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question ("Digite o número de vitórias: ", function (vitorias){
    rl.question ("Digite o número de derrotas: ", function (derrotas){
        
    let saldoDeVitorias = vitorias - derrotas

    if (saldoDeVitorias < 10){
        nivel = "Ferro"
    } else if (saldoDeVitorias <= 20){
        nivel = "Bronze"
    } else if (saldoDeVitorias <= 50){
        nivel = "Prata"
    } else if (saldoDeVitorias <= 80){
        nivel = "Ouro"
    } else if (saldoDeVitorias <= 90){
        nivel = "Diamante"
    } else if (saldoDeVitorias <= 100){
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

    console.log(`\O Herói tem de saldo de **${saldoDeVitorias}** está no nível de **${nivel}**`)
    rl.close();
    })
})