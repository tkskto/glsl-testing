import {test} from 'node:test';
import assert from 'node:assert/strict';
import {sin} from './sin.mts';
import {radians} from './radians.mts';

test('sin with simple number', () => {
    assert.strictEqual(sin(0), 0);
    assert.strictEqual(sin(radians(90)), 1);
    assert.strictEqual(sin(radians(180)), 0);
    assert.strictEqual(sin(radians(270)), -1);
    assert.strictEqual(sin(radians(360)), 0);
    assert.strictEqual(sin(radians(450)), 1);
});

// vec2以下のテストは省略する。
