class Instrumento {
tocar() {
    throw new Error('O método tocar() deve ser implementado pelas classes derivadas.') 
    }
}

class violao extends Instrumento {
    tocar() {
        return`Som de violão: strum strum`
    }
}

class Piano extends Instrumento {
    tocar() {
        return `Som de Piano: plim plim`
    }
}

const meuViolao = new Violao();
console.log(meuViolao.tocar());

const meuPiano = new Piano();
console.log(meuPiano.tocar());
