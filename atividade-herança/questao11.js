class Veiculo {
    constructor(tipo) {
      this.tipo = tipo
    }
  
    info() {
      console.log(`Tipo de veículo: ${this.tipo}`)
    }
  }
  
  class Carro extends Veiculo {
    constructor(modelo, ano) {
      super('Carro')
      this.modelo = modelo
      this.ano = ano
    }
  
    info() {
      console.log(`Tipo de veículo: ${this.tipo}, Modelo: ${this.modelo}, Ano: ${this.ano}`)
    }
  }
  
  class Moto extends Veiculo {
    constructor(modelo, ano) {
      super('Moto')
      this.modelo = modelo
      this.ano = ano
    }
  
    info() {
      console.log(`Tipo de veículo: ${this.tipo}, Modelo: ${this.modelo}, Ano: ${this.ano}`)
    }
  }
  
  const carro = new Carro('Civic', 2022)
  carro.info()
  
  const moto = new Moto('Ninja ZX-6R', 2023)
  moto.info()
  