import test from 'ava';
import {distance} from '../built-in-functions/distance.mjs';
import {vec2} from '../basic-types/vec2.mjs';

test('distance with simple number', (t) => {
    t.is(distance(0, 0), 0);
    t.is(distance(0, 1), 1);
    t.is(distance(-1, 1), 2);
});

test('distance with vec2', (t) => {
    const a = vec2(0, 0);
    const b = vec2(1, 1);
    t.is(distance(a, b), Math.sqrt(2));
});
