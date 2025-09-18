import {test} from 'node:test';
import assert from 'node:assert/strict';
import {sinh} from './sinh.mts';

test('sinh with simple number', () => {
    assert.strictEqual(sinh(0), 0);
    assert.ok(Object.is(sinh(-0), 0));
    assert.strictEqual(sinh(-1), -1.1752011936438014);
    assert.strictEqual(sinh(1), 1.1752011936438014);
    assert.strictEqual(sinh(-10), -11013.232874703393);
    assert.strictEqual(sinh(10), 11013.232874703393);
});

// vec2以下のテストは省略する。
