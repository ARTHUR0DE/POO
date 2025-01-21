class Animal {
    emitirSom() {
        throw new Error("Deve ser subscrita para um Animal")
    }
}

class cachorro extends Animal {
    emitirSom() {
        console.log(" Au Au!")
    }
}

class gato extends Animal {
    emitirSom() {
        console.log("Miau Miau!")
    }
}

const animais = [
    new cachorro(),
    new gato()
]
animais.forEach((Animal) => {
    Animal.emitirSom()
})