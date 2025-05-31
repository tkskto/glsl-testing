import {test} from 'node:test';
import assert from 'node:assert/strict';
import {degrees} from './degrees.mts';

test('degrees with simple number', () => {
    assert.strictEqual(degrees(0), 0);
    assert.strictEqual(degrees(Math.PI * 0.5), 90);
    assert.strictEqual(degrees(Math.PI), 180);
    assert.strictEqual(degrees(Math.PI * 1.5), 270);
    assert.strictEqual(degrees(Math.PI * 2), 360);
    assert.strictEqual(degrees(Math.PI * 2.5), 450);
});

// vec2以下のテストは省略する。
