import test from 'ava';
import {acos} from '../built-in-functions/acos.mjs';
import {radians} from '../built-in-functions/radians.mjs';

test('cos with simple number', (t) => {
    t.is(acos(1), radians(0));
    t.is(acos(0), radians(90));
    t.is(acos(-1), radians(180));
});

// vec2以下のテストは省略する。
