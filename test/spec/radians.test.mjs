import test from 'ava';
import {radians} from '../built-in-functions/radians.mjs';

test('radians:built-in-functions', (t) => {
    t.is(radians(0), 0);
    t.is(radians(90), Math.PI * 0.5);
    t.is(radians(180), Math.PI);
    t.is(radians(270), Math.PI * 1.5);
    t.is(radians(360), Math.PI * 2);
});
