let altura = parseFloat(prompt("Digite sua altura"))
let peso = parseFloat(prompt("Digite seu peso"))

let imc = peso / (altura * altura)
let classificacao;

switch (true) {
    case imc < 18.5:
       classificacao = "Abaixo do peso" 
        break;
    case imc >= 18.5 && imc <25:
       classificacao = "Peso normal"
        break;
    case imc >= 25 && imc < 30:
        classificacao = "Sobrepeso"
        break;
    default:
        classificacao = "Obesidade"
        break;
}
alert(`Seu IMC é ${imc}.Classificação: ${classificacao}`)

