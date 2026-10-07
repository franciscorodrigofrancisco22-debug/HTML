let taxas = [USD, BRL, EUR];


let pergunta = console.log("O que voce quer");


if (pergunta == "Sim") {

    var res = USD * BRL;
    res = USD * EUR * BRL;

    console.log("O valor de res e" + res);
}
else {
    console.log("Not pode converter ")
}