/*

Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.


Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
Consigli del giorno:
1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"

*/



/* PROCEDIMENTO

1. Creare variabile per identificare il contenitore del carosello

2. Creare un array per le immagini 

3. Utilizzare un ciclo for che contatena il template del carosello

4. Creare una classe da attribuire all'immagine che vogliamo rendere visibile

*/

let carouselBox = document.querySelector(".carouselBox");
let carouselsImg = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
let carousel = "";

for (let i = 0; i < carouselsImg.length; i++) {

    carousel += `<div class="carousel col-10 bg-black p-0 d-none">
            <img src="${carouselsImg[i]}" alt="0${i + 1}-image">
        </div>
`;
}

let currentIndex = 0;

carouselBox.innerHTML = carousel + carouselBox.innerHTML;
document.querySelectorAll(".carousel")[currentIndex].classList.add("active");

const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

next.addEventListener("click", goNext);

function goNext() {
    document.querySelectorAll(".carousel")[currentIndex].classList.remove("active");
    if (currentIndex === carouselsImg.lenght - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    document.querySelectorAll(".carousel")[currentIndex].classList.add("active");
}