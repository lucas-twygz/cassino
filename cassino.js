const readline = require('readline');
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function apostas(dinheiro, meta) { // funcao de aposta
    let runs = 0;
    while (dinheiro > 1 && dinheiro < meta) {
        await delay(100); // Adiciona um atraso de 200 ms
        runs++;
        let dinheiroAposta = dinheiro / 2; // quantidade de dinheiro apostado por aposta
        dinheiro -= dinheiroAposta;
        let chance = Math.floor(Math.random() * 100) + 1;
        if (chance > 40) {
            dinheiro += dinheiroAposta * 2;
            console.log("tentativa GANHOU", runs, ": ", "você ganhou, seu saldo é ", dinheiro.toFixed(2), " reais");
        } else {
            console.log("tentativa PERDEU", runs, ": ", "você perdeu, seu saldo é ", dinheiro.toFixed(2), " reais");
        }
    }
    if (dinheiro<meta){
        console.log("obrigado por jogar no nosso cassino e perder tudo, volte sempre!")
    } else if (dinheiro>1) {
        console.log("parabens você venceu o cassino (iremos te caçar)")
    }
}

const metaLer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

metaLer.question('Qual sua meta de dinheiro? ', (meta) => {
    const dinheiro = 1000; // dinheiro da banca
    apostas(dinheiro, parseInt(meta));
    metaLer.close();
});
