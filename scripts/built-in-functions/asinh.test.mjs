import test from 'ava';
import {asinh} from '../built-in-functions/asinh.mjs';

test('asinh with simple number', (t) => {
    t.is(asinh(0), 0);
    t.is(asinh(1), 0.881373587019543);
    t.is(asinh(-1), -0.881373587019543);
    t.is(asinh(10), 2.99822295029797);
    t.is(asinh(-10), -2.99822295029797);
});

// vec2以下のテストは省略する。
