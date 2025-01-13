// Classe base chamada Animal
class Animal {
    constructor(nome) {
      this.nome = nome; // Define o nome do animal
    }
   
    fazerSom() {
      // Método genérico para fazer som
      console.log(`${this.nome} está fazendo um som.`);
    }
  }
   
  // Classe derivada Cachorro
  class Cachorro extends Animal {
    fazerSom() {
      // Sobrescreve o método fazerSom
      console.log(`${this.nome} está latindo: Au Au!`);
    }
  }
   
  // Classe derivada Gato
  class Gato extends Animal {
    fazerSom() {
      // Sobrescreve o método fazerSom
      console.log(`${this.nome} está miando: Miau!`);
    }
  }
   
  // Instanciando os objetos
  const cachorro = new Cachorro("Rex"); // Cria um cachorro chamado Rex
  const gato = new Gato("Luna"); // Cria um gato chamado Luna
   
  cachorro.fazerSom(); // Imprime: Rex está latindo: Au Au!
  gato.fazerSom(); // Imprime: Luna está miando: Miau!