class Eletronico {
    ligar(){
        throw new Error("Atribua a um eletrônico")
    }
}

class Smartphone extends Eletronico {
    ligar() {
        console.log("Smartphone ligado")
    }
}

class Notebook extends Eletronico {
    ligar() {
        console.log("Notebook ligado")
    }
}

const dispositivos = [
    new Smartphone(),
    new Notebook()
]
dispositivos.forEach((Eletronico) => {
    Eletronico.ligar()
})