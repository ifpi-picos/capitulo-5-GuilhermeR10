const lado1 = Number (prompt("Digite o valor do primeiro lado:"))
const lado2 = Number (prompt("Digite o valor do segundo lado:"))
const lado3 = Number (prompt("Digite o valor do terceiro lado:"))

if ( lado1 + lado2 + lado3 && lado1 + lado3 + lado2 > lado2 && lado2 + lado2 + lado3 > lado1){
    if (lado1 === lado2 && lado2 === lado3){
        console.log("É um triângulo equilatero")
    }else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        console.log("É um triângulo isósceles")
    }else {
        console.log("É um triângulo escaleno")
 } 
    } else {
        console.log ("os valores não formam um triângulo")
    }
