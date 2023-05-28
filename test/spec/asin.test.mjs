import test from 'ava';
import {asin} from '../built-in-functions/asin.mjs';
import {radians} from '../built-in-functions/radians.mjs';

test('asin with simple number', (t) => {
    t.is(asin(0), 0);
    t.is(asin(1), radians(90));
    t.is(asin(-1), radians(-90));
});

// vec2以下のテストは省略する。
