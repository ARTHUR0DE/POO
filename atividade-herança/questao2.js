// Classe base Funcionario
class Funcionario {
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
    }
  }
  
  // Classe derivada Gerente
  class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
      super(nome, salario); // Chama o construtor da classe base
      this.departamento = departamento; // Adiciona o atributo departamento
    }
  
    // Método para exibir todas as informações do gerente
    exibirInformacoes() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Salário: R$${this.salario.toFixed(2)}`);
      console.log(`Departamento: ${this.departamento}`);
    }
  }
  
  // Exemplo de uso:
  const gerente = new Gerente("João Silva", 8500.50, "Vendas");
  gerente.exibirInformacoes();
  