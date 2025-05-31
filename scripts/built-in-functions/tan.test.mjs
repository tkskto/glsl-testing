import {test} from 'node:test';
import assert from 'node:assert/strict';
import {tan} from './tan.mts';
import {radians} from './radians.mts';

test('tan with simple number', () => {
    assert.strictEqual(tan(0), 0);
    assert.strictEqual(tan(radians(45)), 1);
    assert.strictEqual(tan(radians(90)), 16331239353195370);
    assert.strictEqual(tan(radians(91)), -57.28996163075955);
    assert.strictEqual(tan(radians(180)), 0);
    assert.strictEqual(tan(radians(270)), 5443746451065123);
    assert.strictEqual(tan(radians(271)), -57.28996163076068);
    assert.strictEqual(tan(radians(315)), -1);
    assert.strictEqual(tan(radians(360)), 0);
    assert.strictEqual(tan(radians(450)), 3266247870639074);
});

// vec2以下のテストは省略する。
