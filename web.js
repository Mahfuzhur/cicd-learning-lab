import { calculateTotal } from './calculator.js';

const form = document.querySelector('#calculator');
function showTotal() {
  const subtotal = document.querySelector('#subtotal').valueAsNumber;
  const discount = document.querySelector('#discount').valueAsNumber;
  const delivery = document.querySelector('#delivery').valueAsNumber;
  document.querySelector('#total').textContent =
    `Total: BDT ${calculateTotal(subtotal, discount, delivery).toFixed(2)}`;
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  showTotal();
});
showTotal();
