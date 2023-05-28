import test from 'ava';
import {degrees} from '../built-in-functions/degrees.mjs';

test('degrees with simple number', (t) => {
    t.is(degrees(0), 0);
    t.is(degrees(Math.PI * 0.5), 90);
    t.is(degrees(Math.PI), 180);
    t.is(degrees(Math.PI * 1.5), 270);
    t.is(degrees(Math.PI * 2), 360);
    t.is(degrees(Math.PI * 2.5), 450);
});

// vec2以下のテストは省略する。
