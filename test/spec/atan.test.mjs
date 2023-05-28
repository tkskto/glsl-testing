import test from 'ava';
import {atan} from '../built-in-functions/atan.mjs';
import {radians} from '../built-in-functions/radians.mjs';

test('atan with simple number', (t) => {
    t.is(atan(1, 1), radians(45));
    t.is(atan(1, -1), radians(-45));
    t.is(atan(0, 1), 0);
    t.is(atan(-0, 1), 0);
});

// vec2以下のテストは省略する。
