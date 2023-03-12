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

test('sin with vec2', (t) => {
    t.is(sin(vec2(0)).x, 0);
    t.is(sin(vec2(radians(90))).y, 1);
    t.is(sin(vec2(radians(180))).x, 0);
    t.is(sin(vec2(radians(270))).y, -1);
    t.is(sin(vec2(radians(360))).x, 0);
    t.is(sin(vec2(radians(450))).y, 1);

    const vector2 = vec2(radians(180), radians(360));

    t.is(sin(vector2).x, 0);
    t.is(sin(vector2).y, 0);
});

test('sin with vec3', (t) => {
    t.is(sin(vec3(0)).x, 0);
    t.is(sin(vec3(radians(90))).y, 1);
    t.is(sin(vec3(radians(180))).z, 0);
    t.is(sin(vec3(radians(270))).x, -1);
    t.is(sin(vec3(radians(360))).y, 0);

    const vector3 = vec3(radians(90), radians(180), radians(360));

    t.is(sin(vector3).x, 1);
    t.is(sin(vector3).y, 0);
    t.is(sin(vector3).z, 0);
});

test('sin with vec4', (t) => {
    t.is(sin(vec4(0)).x, 0);
    t.is(sin(vec4(radians(90))).y, 1);
    t.is(sin(vec4(radians(180))).z, 0);
    t.is(sin(vec4(radians(270))).w, -1);
    t.is(sin(vec4(radians(360))).x, 0);

    const vector4 = vec4(radians(90), radians(180), radians(270), radians(360));

    t.is(sin(vector4).x, 1);
    t.is(sin(vector4).y, 0);
    t.is(sin(vector4).z, -1);
    t.is(sin(vector4).w, 0);
});
