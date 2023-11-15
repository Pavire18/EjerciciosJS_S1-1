/*
    Completar el código de la función para que
    devuelva el ganador del balón de oro, siendo
    el que más puntuación tenga.
    Nota: Os toca investigar como ordenar valores númericos ;)
*/

let playerList = [
    {name:'Cristiano', score:300},
    {name:'Messi', score:250},
    {name:'Benzema', score:500}
];

//VERSIÓN CON SORT
function winner(list){
    let scores=[];
    for (let i = 0; i < playerList.length; i++) {
        scores.push(playerList[i].score);
    }
    scores.sort(function(a, b){return b - a});
    for (let i = 0; i < playerList.length; i++) {
        if(playerList[i].score==scores[0]){
            return playerList[i].name;
        }
    }
}

//VERSIÓN QUE ME PARECE MÁS EFICIENTE
function winner2(list){
    let winner;
    let scoreAux=0;
    for (let i = 0; i < playerList.length; i++) {
        if(playerList[i].score>scoreAux){
            scoreAux=playerList[i].score;
            winner=playerList[i].name;
        }
    }
    return winner;
}

console.log(winner(playerList));