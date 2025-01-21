class Transporte {
    mover() {
        throw new Error ("Subscreva esse metodo a um transporte")
    }
}

class Carro extends Transporte {
    mover() {
        console.log("O carro está se movendo na estrada.")
    }
}

class Bicicleta extends Transporte {
    mover() {
        console.log("A bicicleta está sendo pedalada na ciclovia.")
}
}

class Aviao extends Transporte {
    mover() {
        console.log("O avião está voando")
    }
}

const Veiculos = [
    new Carro(),
    new Bicicleta(),
    new Aviao()
]
Veiculos.forEach((Transporte) => {
    Transporte.mover()
})