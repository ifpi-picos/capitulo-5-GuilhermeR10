const nota1 = Number (prompt('digite uma nota'))
const nota2 = Number (prompt('digite uma nota'))
const nota3 = Number (prompt('digite uma nota'))

const media =(nota1 + nota2 + nota3)/3

if(media >=7){
    console.log('aluno aprovado')
}else if(media <7){
    console.log('aluno reprovado')
}