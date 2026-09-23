var idade = 18;
console.log("you have ", + idade)
if (idade < 16) {
    console.log("Not to vote");
}
else if (idade < 18 || idade > 65) {
    console.log("Optional voting");
}
else {
    console.log(" Mandaotory vote!");
}