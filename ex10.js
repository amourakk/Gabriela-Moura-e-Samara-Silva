const palavras=["nós", "amamos", "muito", "muito", "muito", "o", " professor", "samuel"];
const palavraEspecifica='muito';
let contagem=0;

for (let i=0; i<palavras.length; i++){
    if (palavras[i] === palavraEspecifica){
        contagem++;
    }
}

alert("Esta palavra aparece "+contagem+" vezes");
