// Variáveis e tipos de dados
// 1 - Conversão de temperatura

const celsius = 38
const fahrenheit = 90

function celsiusToFahrenheit (celsius) {
  return (celsius * 9) / 5 + 32
}

function fahrenheitToCelsius (fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

console.log(`${celsius} graus Celsius equivalem a ${celsiusToFahrenheit(celsius)} graus Fahrenheit.`)
console.log(`${fahrenheit} graus Fahrenheit equivalem a ${fahrenheitToCelsius(fahrenheit)} graus Celsius.`)