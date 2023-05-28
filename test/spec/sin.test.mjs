import test from 'ava';
import {sin} from '../built-in-functions/sin.mjs';
import {vec2} from '../basic-types/vec2.mjs';
import {vec3} from '../basic-types/vec3.mjs';
import {vec4} from '../basic-types/vec4.mjs';
import {radians} from '../built-in-functions/radians.mjs';

test('sin with simple number', (t) => {
    t.is(sin(0), 0);
    t.is(sin(radians(90)), 1);
    t.is(sin(radians(180)), 0);
    t.is(sin(radians(270)), -1);
    t.is(sin(radians(360)), 0);
    t.is(sin(radians(450)), 1);
});

// vec2以下のテストは省略する。
