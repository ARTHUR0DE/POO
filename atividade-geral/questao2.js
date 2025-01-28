class Pagamento {
    constructor(valor, descricao) {
        if(this.constructor === Pagamento) {
            throw new Error('Classe abstrata "Pagamento" não pode ser instanciada diretamente.')
        }
        this._valor = valor
        this._descricao = descricao
    }
    calculartaxa() {
        throw new Error("Método calculartaxa() precisa ser implementado")
    }
    exibirDetalhes() {
        const valorFinal = this._valor + this.calculartaxa()
        return `Descrição: ${this._descricao}\n valor Original: R$${this._valor.toFixed(2)}\nTaxa: R$${this.calculartaxa().toFixed(2)}\nValor Final: R$${valorFinal.toFixed(2)}`
    }
}

class CartaoCredito extends Pagamento {
    calculartaxa() {
        return this._valor * 0.05
    }
}

class Boleto extends Pagamento {
    calculartaxa() {
        return this._valor * 0.02
    }
}

const pagamentoCartao = new CartaoCredito(200, 'Pagamento com Cartão de Crédito')
const pagamentoBoleto = new Boleto(200, 'Pagamento com Boleto')

console.log(`${pagamentoBoleto.exibirDetalhes()}`)
console.log(`${pagamentoCartao.exibirDetalhes()}`)