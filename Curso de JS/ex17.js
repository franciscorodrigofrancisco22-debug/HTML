


function sO() {
    var nome = window.document.getElementById("nome");
    var name = String(nome.value);
    var idade = window.document.getElementById("idade");
    var years = String(idade.value);

    window.alert("Seja Bem-vindo(a): " + name);

    if (years <= 10) {
        window.alert("" + name + "você é criança " + "você não pode jogar!");

    }
    else if (years <= 17) {
        window.alert("" + name + "você é adolescente " + "você pode jogar!");

    }
    else {
        window.alert("" + name + "você é adulto " + "você pode jogar!");
    }

}
function jOgar() {

    var pergunta = window.prompt("Queres jogar?");
    if (pergunta == "Sim" || pergunta == "sim") {
        window.alert("você  entrou no jogo!");
        var jogo = window.prompt("Qual é o mellhor jogador do mundo?")
    }

    else {
        window.alert("você não entrou no jogo!")
    }


    if (jogo == "Messi" || jogo == "messi") {
        window.alert("Você acertou😁😄👌👏👍!!")
    }
    else if (jogo == "Roanldo" || jogo == "Ronaldo") {
        window.alert("Você  acertou😁😄👌👏👍!")
    }
    else {
        window.alert("Você  errou😢😥😥🤦‍♂️!")
    }
    var pergunta1 = window.prompt("Quais são os  jogadores  que tem mais bola de ouro?");
    if (pergunta1 == "Messi e Ronaldo" || pergunta1 == "messi e ronaldo") {
        window.alert("Você  acertou😁😄👌👏👍!")
    } else if (pergunta1 != "Messi e Ronaldo" || pergunta1 != "messi e ronaldo") {
        var res = window.prompt("Quer tentar novamente?");

    }

    if (res == "sim" || res == "sim") {

        if (pergunta == "Sim" || pergunta == "sim") {
            window.alert("você  entrou no jogo!");
            var jogo = window.prompt("Qual é o mellhor jogador do mundo?")
        }

        else {
            window.alert("você não entrou no jogo!")
        }


        if (jogo == "Messi" || jogo == "messi") {
            window.alert("Você acertou😁😄👌👏👍!!")
        }
        else if (jogo == "Roanldo" || jogo == "Ronaldo") {
            window.alert("Você  acertou😁😄👌👏👍!")
        }
        else {
            window.alert("Você  errou😢😥😥🤦‍♂️!")
        }
    }
    else if (res == "Não" || res == "não") {
        window.alert("Você  errou todas as perguntas😢😥😥🤦‍♂️!");
    }
    var idade = window.document.getElementById("idade");
    
    var years = String(idade.value);
    if (years <= 10) {

        window.alert("você não pode  jogar este jogo, por que Você  tem !" + years)
    }
    else if (years <= 17) {
        window.alert("" + name + "você pode jogar!");

    }
    else {
        window.alert("" + name + "você pode jogar!");
    }

}

