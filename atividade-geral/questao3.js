class Veiculo {
    constructor(marca, modelo, valor) {
        if (this.constructor === Veiculo) {
            throw new Error("Classe abstrata 'Veiculo' não pode ser instanciada diretamente.")
        }
        this._marca = marca
        this._modelo = modelo
        this._valor = valor
    }
    
    calcularImposto() {
        throw new Error("Método abstrato 'calcularImposto' deve ser implementado.")
    }
    
    mostrarInformacoes() {
        console.log(`Marca: ${this._marca}, Modelo: ${this._modelo}, Imposto: R$${this.calcularImposto().toFixed(2)}`)
    }
}

class Carro extends Veiculo {
    calcularImposto() {
        return this._valor * 0.10
    }
}

class Moto extends Veiculo {
    calcularImposto() {
        return this._valor * 0.05
    }
}

const veiculos = [
    new Carro("Toyota", "Corolla", 90000),
    new Moto("Honda", "CB 500", 35000),
    new Carro("Ford", "Mustang", 300000),
    new Moto("Yamaha", "MT-07", 40000)
]

veiculos.forEach(veiculo => veiculo.mostrarInformacoes())
