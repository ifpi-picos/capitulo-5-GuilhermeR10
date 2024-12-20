let numero1 = parseInt(prompt("digite o primeiro numero"))
let numero2 = parseInt(prompt("digite o segundo numero"))

if(numero1 % numero2 === 0 || numero2 % numero1 === 0){
    console.log("Pelo menos um dos numeros é multiplo do outro")
}else{
    console.log("Nenhum dos numeros é multiplo do outro")
}