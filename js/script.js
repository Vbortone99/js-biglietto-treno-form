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


