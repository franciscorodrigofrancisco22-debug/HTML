const A = [5, 6, 7, 1, 0, 3];
A.sort();
/*
for (B = 0; B < A.length; B++) {
    console.log("A posiçao " + B, "Tem o nome " + A[B])
}*/

for (let B in A) {
    console.log("A posiçao " + B, "Tem o nome " + A[B])
}