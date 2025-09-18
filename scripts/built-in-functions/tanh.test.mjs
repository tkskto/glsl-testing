import {test} from 'node:test';
import assert from 'node:assert/strict';
import {tanh} from './tanh.mts';

test('tanh with simple number', () => {
    assert.strictEqual(tanh(0), 0);
    assert.strictEqual(tanh(1), 0.7615941559557649);
    assert.strictEqual(tanh(-1), -0.7615941559557649);
    assert.strictEqual(tanh(10), 0.9999999958776927);
    assert.strictEqual(tanh(-10), -0.9999999958776927);
});

test('tanh normalizes negative zero to positive zero', () => {
    assert.strictEqual(tanh(-0), 0);
    assert.strictEqual(Object.is(tanh(-0), -0), false);
});

// vec2以下のテストは省略する。
