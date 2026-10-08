// Learning exercise: automated tests protect this business rule.
// Prices are in BDT. The discount should apply to items only.
export function calculateTotal(subtotal, discountPercent, deliveryFee) {
  const discount = (subtotal + deliveryFee) * discountPercent / 100;
  return subtotal + deliveryFee - discount;
}

const [subtotal, discountPercent, deliveryFee] = process.argv.slice(2).map(Number);

if (import.meta.main && process.argv.length === 5) {
  console.log(`Total: BDT ${calculateTotal(subtotal, discountPercent, deliveryFee).toFixed(2)}`);
} else if (import.meta.main) {
  console.log('Usage: node calculator.js <subtotal> <discountPercent> <deliveryFee>');
}
