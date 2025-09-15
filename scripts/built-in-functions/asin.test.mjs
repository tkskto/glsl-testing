import {test} from 'node:test';
import assert from 'node:assert/strict';
import {asin} from './asin.mts';
import {radians} from './radians.mts';

test('asin with simple number', () => {
    assert.strictEqual(asin(0), 0);
    assert.strictEqual(asin(1), radians(90));
    assert.strictEqual(asin(-1), radians(-90));
});

// vec2以下のテストは省略する。
