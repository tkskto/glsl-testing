import {test} from 'node:test';
import assert from 'node:assert/strict';
import {exp} from './exp.mts';

const EPSILON = 1e-12;

const almostEqual = (actual, expected, epsilon = EPSILON) => {
    assert.ok(Math.abs(actual - expected) <= epsilon, `${actual} !== ${expected}`);
};

test('exp with simple number', () => {
    assert.strictEqual(exp(0), 1);
    assert.strictEqual(exp(-0), 1);
    assert.strictEqual(exp(1), Math.E);
    almostEqual(exp(-1), 1 / Math.E);
    almostEqual(exp(10), Math.exp(10));
});

// vec2以下のテストは省略する。
