const button = document.querySelector('#generate-btn');
const reverseButton = document.querySelector('#reverse-btn');
const ticketEl = document.querySelector('#ticket');
const errorEl = document.querySelector('#alert');
const ticketRowEl = ticketEl.querySelector('.row');
const discount18 = 20;
const discount65 = 40;
const kmPrice = 0.21;

reverseButton.addEventListener('click', function(){
    document.getElementById('name').value = '';
    document.getElementById('km').value = '';
    document.getElementById('age').value = '';
    errorEl.classList.add('d-none');
    ticketEl.classList.add('d-none');
});

button.addEventListener('click', function(){
    errorEl.classList.add('d-none');
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const km = parseInt(document.getElementById('km').value);
    let offerType;
    let price = kmPrice * km;
    if (age === 'under18'){
        offerType = `Discount ${discount18}&percnt;`;
        price -= price * discount18/100;
    }   else if(age === 'over65'){
        offerType = `Discount ${discount65}&percnt;`;
        price -= price * discount65/100;
    }   else {
        offerType = 'No discount';
    }


if(name && age && km){
    ticketRowEl.innerHTML = `
    <div class="col bg-black">
        <h5>${name}</h5>
        <p>
            <strong>PRICE: ${price.toFixed(2)}€</strong>
        </p>
        <em>${offerType}</em>

    </div>
    <div class="col">
        <strong>Carrozza n. ${randomInteger(1,10)} </strong>
    </div>
    <div class="col">
        <strong>Carrozza n. ${randomInteger(100000,999999)} </strong>
    </div>
    `;
    ticketEl.classList.remove('d-none');
}   else{
    const errorMsg = 'Devi inserire i valori corretti';
    errorEl.innerHTML = `<p class ="fw-bold">${errorMsg}</p>`;
    errorEl.classList.remove('d-none');
}
});
function randomInteger(min,max){
    return Math.floor(Math.random() * (max - min +1) ) + min;
}

