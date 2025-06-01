const prompt = require('prompt-sync')();

let saldo = 1000;
let opção;

console.log("Bem Vindo ao Caixa Eletrônico!");

do {
    console.log("\nEscolha uma opção:");
    console.log("1 - Consultar saldo");
    console.log("2 - Sacar");
    console.log("3 - Depositar");
    console.log("4 - Sair");
    opcao = prompt("Opção: ");

    switch (opcao) {
        case '1':
            console.log("Saldo atual: " + saldo);
            break;
        case '2':
            let saque = Number(prompt("Valor do saque: "));
            if (saque > 0 && saldo >= saque) {
                saldo -= saque;
                console.log("Saque realizado com sucesso. Saldo atual: " + saldo);
            } else {
                console.log("Saldo insuficiente ou valor inválido.");
            }
            break;
        case '3':
            let deposito = Number(prompt("Valor do depósito: "));
            if (deposito > 0) {
                saldo += deposito;
                console.log("Depósito realizado com sucesso. Saldo atual: " + saldo);
            } else {
                console.log("Valor de depósito inválido.");
            }
            break;
        case '4':
            console.log("Obrigado por usar o NMG!");
            break;
        default:
            console.log("Opção inválida.");
    }
} while (opcao !== '4');