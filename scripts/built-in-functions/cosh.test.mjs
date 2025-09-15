import {test} from 'node:test';
import assert from 'node:assert/strict';
import {cosh} from './cosh.mts';

test('cosh with simple number', () => {
    assert.strictEqual(cosh(0), 1);
    assert.strictEqual(cosh(-1), 1.5430806348152437);
    assert.strictEqual(cosh(1), 1.5430806348152437);
    assert.strictEqual(cosh(-10), 11013.232920103324);
    assert.strictEqual(cosh(10), 11013.232920103324);
});

// vec2以下のテストは省略する。
