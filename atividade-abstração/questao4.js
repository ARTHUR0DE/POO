const carro = {marca: "Nissan", modelo: "GTR R35", velocidade: 0,
 
acelerar() {
    this.velocidade += 10
    console.log(`Velocidade atual: ${this.velocidade} Km/h`)
}
}
carro.acelerar()
carro.acelerar()