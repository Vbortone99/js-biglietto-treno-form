// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

const button = document.querySelector('#btnStart');
console.log(button)

button.addEventListener('click', function(){
    let nome = document.getElementById('nome').value;
    let distanza = document.getElementById('km').value;
    let età = document.getElementById('età');

    if (nome === '' || distanza === ''){
        alert('Inserisci i tuoi dati')
    } else{
        // console.log(nome);
        // console.log(distanza);
        // console.log(minorenne);
        // console.log(maggiorenne);

        const ticket = document.querySelector('#ticket');
        ticket.innerHTML = ` ${nome} ${distanza} ${età}`;
        ticket.classList.remove('d-none');
        console.log(ticket);
      }
});


