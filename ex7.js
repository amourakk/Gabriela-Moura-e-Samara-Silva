let vetor=Array();

for(let x=0; x<5; x++){
    let numero=parseInt(prompt("Insira 5 números"));
    vetor.push(numero);
}

vetor.sort(function (a,b){
    return a-b;
})

alert("O maior número é "+vetor[vetor.length-1]);
alert("O menor número é "+vetor[0]);