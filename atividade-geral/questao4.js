class Produto {
    constructor(nome, preco) {
        if (this.constructor === Produto) {
            throw new Error("Produto é uma classe abstrata e não pode ser instanciada diretamente.")
        }
        this._nome = nome
        this._preco = preco
    }

    calcularDesconto() {
        throw new Error("O método calcularDesconto() deve ser implementado pelas subclasses.")
    }

    exibirDetalhes() {
        const precoComDesconto = this.calcularDesconto()
        console.log(`Nome: ${this._nome}`)
        console.log(`Preço original: R$ ${this._preco.toFixed(2)}`)
        console.log(`Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`)
    }
}

class Eletronico extends Produto {
    constructor(nome, preco) {
        super(nome, preco)
    }

    calcularDesconto() {
        return this._preco * 0.9
    }
}

class Alimento extends Produto {
    constructor(nome, preco) {
        super(nome, preco)
    }

    calcularDesconto() {
        return this._preco * 0.95
    }
}

const produto1 = new Eletronico("Smartphone", 2000)
const produto2 = new Alimento("Arroz", 20)

produto1.exibirDetalhes()
produto2.exibirDetalhes()