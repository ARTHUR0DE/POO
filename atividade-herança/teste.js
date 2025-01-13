// Classe base ContaBancaria
class ContaBancaria {
    constructor(saldoInicial) {
      this._saldo = saldoInicial; // Atributo protegido
    }
  
    // Método para exibir o saldo
    verSaldo() {
      console.log(`Saldo atual: R$${this._saldo.toFixed(2)}`);
      return this._saldo;
    }
  }
  
  // Classe derivada ContaCorrente
  class ContaCorrente extends ContaBancaria {
    constructor(saldoInicial) {
      super(saldoInicial); // Chama o construtor da classe base
    }
  
    // Método para depositar dinheiro
    depositar(valor) {
      if (valor <= 0) {
        console.log("O valor do depósito deve ser maior que zero.");
        return;
      }
      this._saldo += valor;
      console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
      this.verSaldo();
    }
  
    // Método para sacar dinheiro
    sacar(valor) {
      if (valor <= 0) {
        console.log("O valor do saque deve ser maior que zero.");
        return;
      }
      if (valor > this._saldo) {
        console.log("Saldo insuficiente para realizar o saque.");
        return;
      }
      this._saldo -= valor;
      console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
      this.verSaldo();
    }
  }
  
  // Exemplo de uso:
  const contaCorrente = new ContaCorrente(1000); // Cria uma ContaCorrente com saldo inicial de R$1000
  
  // Testando os métodos
  contaCorrente.verSaldo(); // Exibe o saldo inicial
  contaCorrente.depositar(200); // Deposita R$200
  contaCorrente.sacar(150); // Saca R$150
  contaCorrente.sacar(1200); // Tenta sacar R$1200 (saldo insuficiente)
  contaCorrente.depositar(-50); // Tenta depositar um valor negativo
  contaCorrente.sacar(0); // Tenta sacar um valor inválido
  