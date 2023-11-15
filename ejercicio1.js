/*
    Completar el código de la función para que
    devuelva la frase recibida sin vocales.
*/

let sentence = 'Hola soy Edu Feliz Navidad';

function noVowels(str){
        return sentence.replace(/[aeiouAEIOU]/g,'');
}

console.log(noVowels(sentence));