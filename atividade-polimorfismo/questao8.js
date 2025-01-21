class Notificacao {
    enviar() {
        throw new Error("Atribua uma plataforma de envio")
    } 
}

class Email extends Notificacao {
    enviar() {
        console.log("Notificação por Email enviada!")
    }
}

class SMS extends Notificacao {
    enviar() {
        console.log("Notificação por SMS enviada!")
    }
}

class Push extends Notificacao {
    enviar() {
        console.log("Notificação Push enviada!")
    }
}

const envios = [
    new Email(),
    new SMS(),
    new Push()
]
envios.forEach((Notificacao) => {
    Notificacao.enviar()
})