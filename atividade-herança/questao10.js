class Funcionario {
    constructor(nome, salarioBase) {
      this.nome = nome
      this.salarioBase = salarioBase
    }
  
    calcularSalario() {
      throw new Error("O método calcularSalario deve ser implementado na classe derivada.")
    }
  }
  

  class Estagiario extends Funcionario {
    constructor(nome, salarioBase) {
      super(nome, salarioBase)
    }
  
    calcularSalario() {
      return this.salarioBase
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, salarioBase, bonusPercentual) {
      super(nome, salarioBase)
      this.bonusPercentual = bonusPercentual
    }
  
    calcularSalario() {
      return this.salarioBase + (this.salarioBase * this.bonusPercentual / 100)
    }
  }
  
  const estagiario = new Estagiario("João", 1500)
  console.log(`${estagiario.nome} - Salário: R$${estagiario.calcularSalario().toFixed(2)}`)
  
  const gerente = new Gerente("Maria", 5000, 20)
  console.log(`${gerente.nome} - Salário: R$${gerente.calcularSalario().toFixed(2)}`)
  