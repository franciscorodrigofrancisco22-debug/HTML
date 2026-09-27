function mEdia() {

    var texto = window.document.getElementById("texto");
    var vel = String(texto.value);
    window.alert("Seu nome é " + vel);

    var n1 = Number(document.getElementById("n1").value); var n2 = Number(document.getElementById("n2").value); var n3 = Number(document.getElementById("n3").value);

    var S = (n1 + n2 + n3) / 3; var res = document.getElementById("res");

    res = window.alert(`Sua media é : ${S}`);

    if (S <= 10) {
        window.alert("Não transita 😥! ");
    } else if (S <= 12 || S < 12) { window.alert("Transita com difiência  🙂!"); } else {
        window.alert("Transita 😁!");
    }


}