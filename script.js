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

while ((livelloScelto != "1") && (livelloScelto != 2) && (livelloScelto != 3)){
 livelloScelto = prompt("scegli un numero da 1 e 3 ")
}

if (livelloScelto === "1"){
    for (let i = 0; i < 100; i++){ 
        let creazione = document.getElementById("contenitore")
    creazione.innerHTML += `
        <div class="square"></div>
    `
    }

}else if(livelloScelto === "2"){
    for (let i = 0; i < 81; i++){
        let creazione = document.getElementById("contenitore");
        creazione.className = "container2";
        console.log(creazione);
        creazione.innerHTML += `
            <div class="square2"></div>
        `
    }

}else {
    for (let i = 0; i < 49; i++){
        let creazione = document.getElementById("contenitore");
        creazione.className = "container3 ";
        console.log(creazione);
        creazione.innerHTML += `
            <div class="square3"></div>
        `
    }
}

