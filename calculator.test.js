import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTotal } from './calculator.js';

test('10% discount with free delivery totals BDT 900', () => {
  assert.equal(calculateTotal(1000, 10, 0), 900);
});

test('discount applies to items only, not the delivery fee', () => {
  assert.equal(calculateTotal(1000, 10, 100), 1000);
});
