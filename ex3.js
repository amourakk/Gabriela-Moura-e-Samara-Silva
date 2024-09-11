var dias=parseInt(prompt("Insira um número de 1 a 7 que corresponderá ao dia da semana"));

switch(dias){
    case 1:
        alert("Domingo");
        break;
    case 2:
        alert("Segunda-feira");
        break;
    case 3:
        alert("Terça-feira");
        break;
    case 4:
        alert("Quarta-feira");
        break;
    case 5:
        alert("Quinta-feira");
        break;
    case 6:
        alert("Sexta-feira");
        break;
    case 7:
        alert("Sábado");
        break;
    default:
        alert("Inválido");
}