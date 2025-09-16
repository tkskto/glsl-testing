import {test} from 'node:test';
import assert from 'node:assert/strict';
import {atanh} from './atanh.mts';

test('atanh with simple number', () => {
    assert.strictEqual(atanh(0), 0);
    assert.strictEqual(atanh(0.5), 0.5493061443340548);
    assert.strictEqual(atanh(-0.5), -0.5493061443340548);
    assert.strictEqual(atanh(0.9), 1.4722194895832204);
    assert.strictEqual(atanh(-0.9), -1.4722194895832204);
});

// vec2以下のテストは省略する。
