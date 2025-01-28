class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
    adicionais() {
        return `${this.nome} custa R$${this.preco.toFixed(2)}`
    }
}

class Eletronico extends Produto {
    constructor(nome, preco, garantia) {
        super()
        this.nome = nome
        this.preco = preco
        this.garantia = garantia
    }
    adicionais() {
    return ` ${super.adicionais()} e vem com uma garantia de ${this.garantia} ano(s)`
    }
}

class Vestuario extends Produto {
    constructor(nome, preco, tamanho) {
        super(nome, preco)
        this.tamanho = tamanho
    }
    adicionais() {
        return `${super.detalhes()} no tamanho ${this.tamanho}`
    }
}

const celular = new Eletronico('Smartphone', 1999.90, 2);
console.log(celular.detalhes());

const camiseta = new Vestuario('Camiseta', 49.90, 'M');
console.log(camiseta.detalhes());

