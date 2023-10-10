// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.


const nome = document.querySelector('#name');
    console.log(nome);

const distanza = document.querySelector('#km');
    console.log(distanza);

const età = document.querySelector('#età');
    console.log(età);

let avvia = document.querySelector('#btnStart');
    avvia.addEventListener('click',function(){
        
    })
console.log(avvia);
let annulla = document.querySelector('#btnReverse');
    annulla.addEventListener('click', function(){
        
    })
console.log(annulla);

const kmPrice = 0.21;
    price = kmPrice * distanza;

const discountUnder18 = 20/100;
const discountOver65 = 20/100;

const ticket = document.querySelector('#ticket')
