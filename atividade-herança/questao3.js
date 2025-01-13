class FormaGeometrica {}

class Retangulo extends FormaGeometrica {
    constructor(valor1, valor2) {
        super()
        this.valor1 = valor1
        this.valor2 = valor2
    }
    calcularArea() {
        return this.valor1 * this.valor2
    }
}

class Circulo extends FormaGeometrica {
    constructor(raio) {
        super()
        this.raio = raio
    }
    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2)
    }
}
const retangulo = new Retangulo(5, 10)
console.log(`Área do Retângulo: ${retangulo.calcularArea()}`)

const circulo = new Circulo(7)
console.log(`Área do Círculo: ${ circulo.calcularArea().toFixed(2)}`)