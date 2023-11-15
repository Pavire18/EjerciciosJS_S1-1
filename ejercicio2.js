/*
   Completar la función para que, recibida una palabra,
   devuelva el caracter que está en el medio. Si la palabra
   es par, devuelve los dos caracteres.

   Ejemplo: camión => mi

*/

let word = "caión";

function middleCharacter(str){
    if(word.length%2==0){
        return word.slice((word.length/2)-1,(word.length/2)+1);
    }else{
        return word.charAt((word.length-1)/2);
    }
   //introduce aquí tu código
}

console.log(middleCharacter(word));