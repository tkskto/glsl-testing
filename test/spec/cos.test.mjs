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

test('cos with vec2', (t) => {
    t.is(cos(vec2(0)).x, 1);
    t.is(cos(vec2(radians(90))).y, 0);
    t.is(cos(vec2(radians(180))).x, -1);
    t.is(cos(vec2(radians(270))).y, 0);
    t.is(cos(vec2(radians(360))).x, 1);
    t.is(cos(vec2(radians(450))).y, 0);

    const vector2 = vec2(radians(180), radians(360));

    t.is(cos(vector2).x, -1);
    t.is(cos(vector2).y, 1);
});

test('cos with vec3', (t) => {
    t.is(cos(vec3(0)).x, 1);
    t.is(cos(vec3(radians(90))).y, 0);
    t.is(cos(vec3(radians(180))).z, -1);
    t.is(cos(vec3(radians(270))).x, 0);
    t.is(cos(vec3(radians(360))).y, 1);

    const vector3 = vec3(radians(90), radians(180), radians(360));

    t.is(cos(vector3).x, 0);
    t.is(cos(vector3).y, -1);
    t.is(cos(vector3).z, 1);
});

test('cos with vec4', (t) => {
    t.is(cos(vec4(0)).x, 1);
    t.is(cos(vec4(radians(90))).y, 0);
    t.is(cos(vec4(radians(180))).z, -1);
    t.is(cos(vec4(radians(270))).w, 0);
    t.is(cos(vec4(radians(360))).x, 1);

    const vector4 = vec4(radians(90), radians(180), radians(270), radians(360));

    t.is(cos(vector4).x, 0);
    t.is(cos(vector4).y, -1);
    t.is(cos(vector4).z, 0);
    t.is(cos(vector4).w, 1);
});
