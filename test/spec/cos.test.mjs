import test from 'ava';
import {cos} from '../built-in-functions/cos.mjs';
import {vec2} from '../basic-types/vec2.mjs';
import {vec3} from '../basic-types/vec3.mjs';
import {vec4} from '../basic-types/vec4.mjs';
import {radians} from '../built-in-functions/radians.mjs';

test('cos with simple number', (t) => {
    t.is(cos(0), 1);
    t.is(cos(radians(90)), 0);
    t.is(cos(radians(180)), -1);
    t.is(cos(radians(270)), 0);
    t.is(cos(radians(360)), 1);
    t.is(cos(radians(450)), 0);
});

// vec2以下のテストは省略する。
