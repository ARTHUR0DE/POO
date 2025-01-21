class pagamento {
    processarPagamento(){
        throw new Error("O método deve conter uma forma de pagamento")
    }
}

class cartaoDeCredito extends pagamento {
    processarPagamento() {
        console.log("Pagamento no cartão de crédito efetuado com sucesso")
    }
}

class pix extends pagamento {
    processarPagamento() {
        console.log("Pix efetuado com sucesso!")
    }
}

class boleto extends pagamento {
    processarPagamento() {
        console.log("Seu boleto foi gerado e já está no seu Email")
    }
}

const Pagamentos = [
    new cartaoDeCredito(),
    new pix(),
    new boleto()
]
Pagamentos.forEach((pagamento) => {
    pagamento.processarPagamento()
}
    
) 