class Animal {
    constructor(nome, especie) {
      if (this.constructor === Animal) {
        throw new Error("Não é possível instanciar uma classe abstrata!")
      }
      this.nome = nome
      this.especie = especie
    }

    emitirSom() {
      throw new Error("Método 'emitirSom()' deve ser implementado nas subclasses.")
    }

    descricao() {
      console.log(`Nome: ${this.nome}, Espécie: ${this.especie}, Som: ${this.emitirSom()}`)
    }
  }
  
  class Cachorro extends Animal {
    constructor(nome) {
      super(nome, "Cachorro")
    }
  
    emitirSom() {
      return "Latido"
    }
  }
  
  class Gato extends Animal {
    constructor(nome) {
      super(nome, "Gato")
    }
  
    emitirSom() {
      return "Miau"
    }
  }
 
  const cachorro = new Cachorro("Rex")
  const gato = new Gato("Whiskers")
  
  cachorro.descricao()
  gato.descricao()
  