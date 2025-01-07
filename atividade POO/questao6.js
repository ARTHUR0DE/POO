const estudante = {nome: "João", curso: "Enfermagem", anoEngreço: 2021,
apresentar() {
    console.log(`Meu nome é ${this.nome}, estudo ${this.curso} entrei em ${this.anoEngreço}`)
}}
estudante.apresentar()