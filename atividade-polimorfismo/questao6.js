class Ferramenta {
    usar(){
        throw new Error("Deve atribuir a uma ferramenta")
    }
}

class Martelo extends Ferramenta {
    usar() {
        console.log("Martelo está sendo usado!")
    }
}

class chaveDeFenda extends Ferramenta {
    usar() {
        console.log("Chave de Fenda está sendo usada!")
    }
}

class Serrote extends Ferramenta {
    usar() {
        console.log("Serrote está sendo usado!")
    }
}

const ferramentas = [
    new Martelo(),
    new chaveDeFenda(),
    new Serrote()
]
ferramentas.forEach((Ferramenta) => {
    Ferramenta.usar()
})