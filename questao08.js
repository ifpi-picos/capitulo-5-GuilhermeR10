const escolha = prompt("Escolha um prato:1 - Pizza\ 2 - Hambúrguer\ 3 - Salada\ 4 - Macarrão:")

switch (escolha) {
    case "1":
        alert("Pizza: R$ 30,00 Massa crocante com ou sem queijo,Catupiri,Calabresa,Frango ou Mista")
        break;
    case "2":
        alert("Hambúrguer: R$ 15,00 X-tudo, X-salada ou X-becon")
        break;
    case "3":
        alert("Salada: R$ 10,00 Alface, tomate ,cebola, pipino e pimentão")
        break;
    case "4":
        alert("Macarrão: R$ 12,00 passado ao azeite com calabresa, queijo e molho da sua preferencia" )
        break;
    default:
        alert("Opção invalida")
        break;
}