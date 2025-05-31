import {test} from 'node:test';
import assert from 'node:assert/strict';
import {cos} from './cos.mts';
import {radians} from './radians.mts';

test('cos with simple number', () => {
    assert.strictEqual(cos(0), 1);
    assert.strictEqual(cos(radians(90)), 0);
    assert.strictEqual(cos(radians(180)), -1);
    assert.strictEqual(cos(radians(270)), 0);
    assert.strictEqual(cos(radians(360)), 1);
    assert.strictEqual(cos(radians(450)), 0);
});

// vec2以下のテストは省略する。
