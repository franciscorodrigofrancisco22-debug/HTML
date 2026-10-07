function sE() {
    let vel = window.prompt("Sim ou Não?");
    let res = window.alert("Ok " + vel)
    let dados = window.document.getElementById("dados");
    let dad = window.document.getElementById("dad");

    if (vel == "Sim" || vel == "sim") {
        let nome = window.prompt("Qual é seu nome?");
        dados.innerHTML = `Os seus dados são : Seu nome é ${nome} <br>`
        dad.innerHTML = `Seja Bem-vindo(a):  ${nome}`;



    }
    else {
        let hum = window.alert("Não  entrou no sistema!");
    }
}