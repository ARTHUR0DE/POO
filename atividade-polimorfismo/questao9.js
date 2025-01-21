class ContaBancaria {
    constructor(numeroConta, saldo) {
        this.numeroConta = numeroConta
        this.saldo = saldo
    }

    calcularJuros() {
        throw new Error("O método calcularJuros deve ser implementado nas subclasses.")
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(numeroConta, saldo, taxaJuros) {
        super(numeroConta, saldo)
        this.taxaJuros = taxaJuros
    }

    calcularJuros() {
        const juros = this.saldo * this.taxaJuros
        console.log(`Conta Poupança (${this.numeroConta}): Juros calculados: R$ ${juros.toFixed(2)}`)
        return juros;
    }
}


class ContaCorrente extends ContaBancaria {
    constructor(numeroConta, saldo) {
        super(numeroConta, saldo)
    }

    calcularJuros() {
        const juros = 0
        console.log(`Conta Corrente (${this.numeroConta}): Esta conta não gera juros. Saldo atual: R$ ${this.saldo.toFixed(2)}`)
        return juros
    }

}

// Exemplo de uso
const contas = [
    new ContaPoupanca(101, 1000, 0.02),
    new ContaPoupanca(102, 1500, 0.03),
    new ContaCorrente(201, 2000, 15),
    new ContaCorrente(202, 3000, 20)
]
contas.forEach((ContaBancaria) => {
    ContaBancaria.calcularJuros()
})