import test from 'ava';
import {tan} from '../built-in-functions/tan.mjs';
import {radians} from '../built-in-functions/radians.mjs';

test('tan with simple number', (t) => {
    t.is(tan(0), 0);
    t.is(tan(radians(45)), 1);
    t.is(tan(radians(90)), 16331239353195370);
    t.is(tan(radians(91)), -57.28996163075955);
    t.is(tan(radians(180)), 0);
    t.is(tan(radians(270)), 5443746451065123);
    t.is(tan(radians(271)), -57.28996163076068);
    t.is(tan(radians(315)), -1);
    t.is(tan(radians(360)), 0);
    t.is(tan(radians(450)), 3266247870639074);
});

// vec2以下のテストは省略する。
