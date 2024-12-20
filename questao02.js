let n1 = Number (prompt('digite um numero'))
let n2 = Number (prompt('digite um numero'))
let n3 = Number (prompt('digite um numero'))


if(n1>n2 & n1>n3){
    console.log(`${n1} é maior`)
}else if(n2>n1 & n2>n3){
    console.log(`${n2} é maior`)
}else{
    console.log(`${n3} é maior`)
}