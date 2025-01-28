class Conta {
    #saldo
  
    constructor(saldoInicial) {
      if (saldoInicial < 0) {
          throw new Error("O saldo inicial não pode ser negativo.")
      }
      this.#saldo = saldoInicial
    }
  
    #adicionarSaldo(valor) {
      if (valor <= 0) {
        throw new Error("O valor para depósito deve ser positivo.")
      }
      this.#saldo += valor
    }
  
    #subtrairSaldo(valor) {
      if (valor <= 0) {
        throw new Error("O valor para saque deve ser positivo.")
      }
        if (valor > this.#saldo) {
          throw new Error("Saldo insuficiente para saque.")
        }
        this.#saldo -= valor
      }
  

    _depositar(valor) {
      this.#adicionarSaldo(valor)
    }
  
    _sacar(valor) {
      this.#subtrairSaldo(valor)
    }
  

    consultarSaldo() {
      return this.#saldo
    }
  }
  
  class ContaPremium extends Conta {
    constructor(saldoInicial) {
      super(saldoInicial)
    }
  

    depositar(valor) {
      try {
        this._depositar(valor)
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`)
      } catch (error) {
        console.error(error.message)
      }
    }
  
    sacar(valor) {
      try {
        this._sacar(valor)
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`)
      } catch (error) {
        console.error(error.message)
      }
    }
  }
  

  const contaPremium = new ContaPremium(1000)
  console.log("Saldo inicial:", contaPremium.consultarSaldo())
  
  contaPremium.depositar(500)
  console.log("Saldo após depósito:", contaPremium.consultarSaldo())
  
  contaPremium.sacar(200)
  console.log("Saldo após saque:", contaPremium.consultarSaldo())
  
  contaPremium.sacar(2000)
  console.log("Saldo final:", contaPremium.consultarSaldo())
  