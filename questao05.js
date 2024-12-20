let x = paraCelsius (prompt('digite um Fahrenheit'));

function paraCelsius(valorFahrenheit){
    return (5 / 9) * (valorFahrenheit - 32);
}
alert(`A  temperatura é de ${x} graus celsius`)

let y = paraFahrenheit (prompt('digite um grau'))

function paraFahrenheit(Celsius){
    return(Celsius * 9 / 5) + 32
}
alert(`A temperatura é de ${y} Fahrenheit`)
