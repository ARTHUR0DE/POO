class Dispositivo {
    ligar() {
        throw new Error("Atribua a um Dispositivo")
    }
}

class Celular extends Dispositivo {
    ligar() {
        console.log("Celular conectado via Wifi")
    }
}

class Tablet extends Dispositivo {
    ligar() {
        console.log("Tablet conectado via Bluetooth")
    }
}

class Notebook extends Dispositivo {
    ligar() {
        console.log("Notebook conectado via Cabo VGA")
    }
}

const aparelhos = [
    new Celular(),
    new Tablet(),
    new Notebook()
]
aparelhos.forEach((Dispositivo) => {
    Dispositivo.usar()
})