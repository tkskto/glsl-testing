import {test} from 'node:test';
import assert from 'node:assert/strict';
import {acos} from './acos.mts';
import {radians} from './radians.mts';

test('cos with simple number', () => {
    assert.strictEqual(acos(1), radians(0));
    assert.strictEqual(acos(0), radians(90));
    assert.strictEqual(acos(-1), radians(180));
});

// vec2以下のテストは省略する。
