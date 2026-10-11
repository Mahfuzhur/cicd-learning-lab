import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTotal, calculateBreakdown } from './calculator.js';

test('10% discount with free delivery totals BDT 900', () => {
  assert.equal(calculateTotal(1000, 10, 0), 900);
});

test('discount applies to items only, not the delivery fee', () => {
  assert.equal(calculateTotal(1000, 10, 100), 1000);
});

test('order breakdown shows the amounts used in the total', () => {
  assert.deepEqual(calculateBreakdown(1000, 10, 100), {
    subtotal: 1000, discount: 100, deliveryFee: 100, total: 1000,
  });
});

test('a 100% item discount still charges delivery', () => {
  assert.deepEqual(calculateBreakdown(1000, 100, 100), {
    subtotal: 1000, discount: 1000, deliveryFee: 100, total: 100,
  });
});
