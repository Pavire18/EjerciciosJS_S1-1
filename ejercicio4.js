/*
    Completar el código de la función para que
    devuelva la suma de los elementos del array.
*/

let numberList = [1,2,-1,3,5,7];

function sumList(list){
    let result=0;
    for (let i = 0; i < numberList.length; i++) {
        result+=numberList[i];
    }
    return result;
}

console.log(sumList(numberList));