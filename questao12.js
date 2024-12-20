 const numero = Number (prompt("Informe um numero para calcular o fatorial"))

let contador = 1

for (let i = 1; i <= numero; i++) {
    contador = contador * i;
}
console.log(`Resultado: ${contador}`)