    class Conversor {
    static celsiusParaFahrenheit(celsius) {
        if (typeof celsius !== 'number') {
            throw new Error("O valor deve ser um número.")
        }
        return (celsius * 9/5) + 32
    }
}


class ConversorAvancado extends Conversor {
    static fahrenheitParaCelsius(fahrenheit) {
        if (typeof fahrenheit !== 'number') {
            throw new Error("O valor deve ser um número.")
        }
        return (fahrenheit - 32) * 5/9
    }
}


try {
    const fahrenheit = Conversor.celsiusParaFahrenheit(25)
    console.log(`25°C em Fahrenheit é: ${fahrenheit}°F`)

    const celsius = ConversorAvancado.fahrenheitParaCelsius(77)
    console.log(`77°F em Celsius é: ${celsius.toFixed(2)}°C`)
} catch (error) {
    console.error(error.message);
}
