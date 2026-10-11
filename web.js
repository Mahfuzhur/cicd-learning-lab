import { calculateBreakdown } from './calculator.js';

const form = document.querySelector('#calculator');
function showTotal() {
  const subtotal = document.querySelector('#subtotal').valueAsNumber;
  const discount = document.querySelector('#discount').valueAsNumber;
  const delivery = document.querySelector('#delivery').valueAsNumber;
  const order = calculateBreakdown(subtotal, discount, delivery);
  document.querySelector('#items-amount').textContent = `BDT ${order.subtotal.toFixed(2)}`;
  document.querySelector('#discount-amount').textContent = `− BDT ${order.discount.toFixed(2)}`;
  document.querySelector('#delivery-amount').textContent = `+ BDT ${order.deliveryFee.toFixed(2)}`;
  document.querySelector('#total').textContent = `Total: BDT ${order.total.toFixed(2)}`;
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  showTotal();
});
showTotal();
