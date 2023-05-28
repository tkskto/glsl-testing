import test from 'ava';
import {radians} from '../built-in-functions/radians.mjs';
import {vec2} from '../basic-types/vec2.mjs';
import {vec3} from '../basic-types/vec3.mjs';
import {vec4} from '../basic-types/vec4.mjs';

test('radians with simple number', (t) => {
    t.is(radians(0), 0);
    t.is(radians(90), Math.PI * 0.5);
    t.is(radians(180), Math.PI);
    t.is(radians(270), Math.PI * 1.5);
    t.is(radians(360), Math.PI * 2);
    t.is(radians(450), Math.PI * 2.5);
});

// vec2以下のテストは省略する。
