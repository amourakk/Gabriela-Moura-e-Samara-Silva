const p=document.querySelector("p");

const numeros=[4, 5, 8, 12, 3, 7, 19, 30];
const valorEspecifico=6;
const filtrados=[];

for(let i = 0; i<numeros.length; i++){
    if(numeros[i]> valorEspecifico){
        filtrados.push(numeros[i]);
    }
}

alert(filtrados.join(", "));
