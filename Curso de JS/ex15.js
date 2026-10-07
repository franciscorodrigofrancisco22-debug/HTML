let num = [5, 7, 0, 2, 6];

num.sort()
num.push(1)
console.log(num)

console.log("O vetor tem : " + num.length, "posiçoes");
console.log(" O primeiro valor do vetor e: " + num[0]);

let Pos = num.indexOf(10);
if (Pos == -1) {
    console.log("Valor nao foi encotrado!")
}
else {
    console.log("O valor " + num[Pos], "esta na posiçao " + Pos)
}
