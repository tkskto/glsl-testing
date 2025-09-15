import {test} from 'node:test';
import assert from 'node:assert/strict';
import {acosh} from './acosh.mts';

test('acosh with simple number', () => {
    // coshは定義域が[1, ∞)なので、acoshの引数は1以上である必要がある。
    assert.strictEqual(acosh(1), 0);
    assert.strictEqual(acosh(1.5430806348152437), 1);
    assert.strictEqual(acosh(11013.232920103324), 10);
});

// vec2以下のテストは省略する。
