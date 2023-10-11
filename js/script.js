const button = document.querySelector('#generate-btn');
const reverseButton = document.querySelector('#reverse-btn');
const ticketEl = document.getElementById('ticket');
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
        offerType = `Discount ${disount18}&percnt;`;
        price -= price * discount18/100;
    }   else if(age === 'over65'){
        offerType = `Discount ${discount65}&percnt;`;
        price -= price * discount65/100;
    }   else {
        offerType = 'No discount';
    }
})


