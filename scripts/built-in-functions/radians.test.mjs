import {test} from 'node:test';
import assert from 'node:assert/strict';
import {radians} from './radians.mts';

test('radians with simple number', () => {
    assert.strictEqual(radians(0), 0);
    assert.strictEqual(radians(90), Math.PI * 0.5);
    assert.strictEqual(radians(180), Math.PI);
    assert.strictEqual(radians(270), Math.PI * 1.5);
    assert.strictEqual(radians(360), Math.PI * 2);
    assert.strictEqual(radians(450), Math.PI * 2.5);
});

// vec2以下のテストは省略する。
