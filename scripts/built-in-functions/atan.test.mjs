import {test} from 'node:test';
import assert from 'node:assert/strict';
import {atan} from './atan.mts';
import {radians} from './radians.mts';

test('atan with simple number', () => {
    assert.strictEqual(atan(-0, 1), 0);
    assert.strictEqual(atan(0, 1), 0);
    assert.strictEqual(atan(1, 1), radians(45));
    assert.strictEqual(atan(1, 0), radians(90));
    assert.strictEqual(atan(1, -1), radians(-45));
    assert.strictEqual(atan(0, -1), 0);
});

// vec2以下のテストは省略する。
