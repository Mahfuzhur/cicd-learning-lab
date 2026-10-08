// Learning exercise: automated tests protect this business rule.
// Prices are in BDT. The discount should apply to items only.
export function calculateTotal(subtotal, discountPercent, deliveryFee) {
  const discount = (subtotal + deliveryFee) * discountPercent / 100;
  return subtotal + deliveryFee - discount;
}

// Only run the command-line interface when executed directly in Node.js.
if (import.meta.main) {
  const [subtotal, discountPercent, deliveryFee] = process.argv.slice(2).map(Number);
  if (process.argv.length === 5) {
    console.log(`Total: BDT ${calculateTotal(subtotal, discountPercent, deliveryFee).toFixed(2)}`);
  } else {
    console.log('Usage: node calculator.js <subtotal> <discountPercent> <deliveryFee>');
  }
}
