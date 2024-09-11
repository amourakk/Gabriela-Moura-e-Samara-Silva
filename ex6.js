var numero=0;

while(numero!=7){
    numero = parseInt(prompt("Digite um número de 1 a 10 e adivinhe o número correto"));
    if(numero>10){
       alert("Número inválido");
    }else if(numero !== 7){
        alert("Você errou o número, tente novamente");
    }
}
alert("Parabéns!");