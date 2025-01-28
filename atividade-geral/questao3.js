class Veiculo {
    constructor(marca, modelo) {
        if(this.constructor === Veiculo) {
    throw new Error("classe abstrata veiculo não pode ser isntanciada diretamente.")
        }
    }
}