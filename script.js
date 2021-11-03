// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente 
// il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).

//faccio dire all'utente un numero da uno a tre (sarà il livello di difficoltà del gioco)
    //se mi dice 1 faccio partire il rimepimento del gioco con la prima difficoltà, se mi dice 2 ... ,se mi dice 3... => un if con tre condizioni con dentro un for con un <di tot in base alla difficoltà,con dentro i div con relative classi
//quando l'utente clicca su una casella gli faccio capire che è cliccata tramite un cambiamento di classe addEventListener(click,)

let livelloScelto = prompt("scegli il livello di difficoltà tra 1 e 3");
let creazione = document.getElementById("contenitore");

while ((livelloScelto !== "1") && (livelloScelto !== "2") && (livelloScelto !== "3")){
 livelloScelto = prompt("scegli un numero da 1 e 3 ")
}


if (livelloScelto === "1"){
    generateGrid(100, "square");
} else if(livelloScelto === "2"){
    generateGrid(81, "square2");
} else { 
    generateGrid(49, "square3");
}

// switch(livelloScelto){
//     case "1" : 
//     generateGrid(100, "square");
//     break;
// }



function generateGrid(levels, baseClass) {
    for (let i = 1; i <= levels; i++){ 
        // no innerHTML, usa createElement e sull'elemento creato aggiungi addEventListner
        let box = document.createElement('div');
        box.classList.add(baseClass);
        box.addEventListener("click", 
            function() {
                box.innerText = i;
                box.classList.add("colore");
                console.log('click');
        });
        creazione.appendChild(box);
    }
}