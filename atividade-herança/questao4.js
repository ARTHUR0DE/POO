class ContaBancaria {
    constructor(saldoInicial = 0) {
        if (saldoInicial < 0) {
            throw new Error("O saldo inicial não pode ser negativo.");
        }
        this._saldo = saldoInicial; 
    }

    verSaldo() {
        return `Seu saldo atual é R$${this._saldo.toFixed(2)}`;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(saldoInicial = 0) {
        super(saldoInicial); 
    }

    depositar(valor) {
        if (valor <= 0) {
            throw new Error("O valor do depósito deve ser positivo.");
        }
        this._saldo     += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso!`);
    }

    sacar(valor) {
        if (valor <= 0) {
            throw new Error("O valor do saque deve ser positivo.");
        }
        if (valor > this._saldo) {
            throw new Error("Saldo insuficiente para realizar o saque.");
        }
        this._saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso!`);
    }
}

try {
    const minhaConta = new ContaCorrente(1000); 

    console.log(minhaConta.verSaldo());

    minhaConta.depositar(500); 
    console.log(minhaConta.verSaldo());

    minhaConta.sacar(300);
    console.log(minhaConta.verSaldo());

} catch (error) {
    console.error(error.message);
}
