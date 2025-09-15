import {test} from 'node:test';
import assert from 'node:assert';
import { fract } from './fract.mts';
import { vec2 } from '../basic-types/vec2.mts';
import { vec3 } from '../basic-types/vec3.mts';
import { vec4 } from '../basic-types/vec4.mts';

// Helper function to check if two numbers are approximately equal
function approxEqual(actual, expected, epsilon = 1e-10) {
    return Math.abs(actual - expected) < epsilon;
}

// Test fract with simple number
test('fract with simple number', () => {
    assert.ok(approxEqual(fract(1.5), 0.5));
    assert.ok(approxEqual(fract(2.3), 0.3));
    assert.ok(approxEqual(fract(-1.5), 0.5));
    assert.ok(approxEqual(fract(0), 0));
    assert.ok(approxEqual(fract(1), 0));
});

// Test fract with vec2
test('fract with vec2', () => {
    const result1 = fract(vec2(1.5, 2.7));
    assert.ok(approxEqual(result1.x, 0.5));
    assert.ok(approxEqual(result1.y, 0.7));

    const result2 = fract(vec2(-1.5, -2.7));
    assert.ok(approxEqual(result2.x, 0.5));
    assert.ok(approxEqual(result2.y, 0.3));
});

// Test fract with vec3
test('fract with vec3', () => {
    const result1 = fract(vec3(1.5, 2.7, 3.2));
    assert.ok(approxEqual(result1.x, 0.5));
    assert.ok(approxEqual(result1.y, 0.7));
    assert.ok(approxEqual(result1.z, 0.2));

    const result2 = fract(vec3(-1.5, -2.7, -3.2));
    assert.ok(approxEqual(result2.x, 0.5));
    assert.ok(approxEqual(result2.y, 0.3));
    assert.ok(approxEqual(result2.z, 0.8));
});

// Test fract with vec4
test('fract with vec4', () => {
    const result1 = fract(vec4(1.5, 2.7, 3.2, 4.9));
    assert.ok(approxEqual(result1.x, 0.5));
    assert.ok(approxEqual(result1.y, 0.7));
    assert.ok(approxEqual(result1.z, 0.2));
    assert.ok(approxEqual(result1.w, 0.9));

    const result2 = fract(vec4(-1.5, -2.7, -3.2, -4.9));
    assert.ok(approxEqual(result2.x, 0.5));
    assert.ok(approxEqual(result2.y, 0.3));
    assert.ok(approxEqual(result2.z, 0.8));
    assert.ok(approxEqual(result2.w, 0.1));
});
