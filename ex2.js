var idade=parseInt(prompt("Digite sua idade"));

if(idade>=0 && idade<13){
    alert("Você é uma criança");
}else if(idade>12 && idade<18){
    alert("Você é um adolescente");
}else if(idade>17 && idade<65){
    alert("Você é um adulto");
}else if(idade>64 && idade<111){
    alert("Você é um idoso");
}else if(idade>110){
    alert("Você é adubo");
}else{
    alert("Inválido");
}

