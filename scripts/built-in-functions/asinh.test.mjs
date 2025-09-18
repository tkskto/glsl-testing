import {test} from 'node:test';
import assert from 'node:assert/strict';
import {asinh} from './asinh.mts';

test('asinh with simple number', () => {
    assert.strictEqual(asinh(0), 0);
    assert.strictEqual(asinh(1), 0.881373587019543);
    assert.strictEqual(asinh(-1), -0.881373587019543);
    assert.strictEqual(asinh(10), 2.99822295029797);
    assert.strictEqual(asinh(-10), -2.99822295029797);
});

// vec2以下のテストは省略する。
