import {test} from 'node:test';
import assert from 'node:assert/strict';
import {distance} from './distance.mts';
import {vec2} from '../basic-types/vec2.mts';

test('distance with simple number', () => {
    assert.strictEqual(distance(0, 0), 0);
    assert.strictEqual(distance(0, 1), 1);
    assert.strictEqual(distance(-1, 1), 2);
});

test('distance with vec2', () => {
    const a = vec2(0, 0);
    const b = vec2(1, 1);

    assert.strictEqual(distance(a, b), Math.sqrt(2));
});
