function encontrarMedia(vetor){
    let soma=0;
    for(let i=0; i<vetor.length; i++){
        soma+= vetor[i]
    }
    return soma/vetor.length;
}

const qnt=parseInt(prompt("Digite a quantidade de valores que deseja fazer uma média"));
const vetor=[]
for(let i=0; i<qnt; i++){
    vetor[i]=parseInt(prompt("digite um número"));
}

alert("A média é: "+ encontrarMedia(vetor));