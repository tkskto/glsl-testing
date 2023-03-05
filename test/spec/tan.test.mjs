import test from 'ava';
import {tan} from '../built-in-functions/tan.mjs';
import {vec2} from '../basic-types/vec2.mjs';
import {vec3} from '../basic-types/vec3.mjs';
import {vec4} from '../basic-types/vec4.mjs';
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

test('tan with vec2', (t) => {
    t.is(tan(new vec2(0)).x, 0);
    t.is(tan(new vec2(radians(90))).y, 16331239353195370);
    t.is(tan(new vec2(radians(180))).x, 0);
    t.is(tan(new vec2(radians(270))).y, 5443746451065123);
    t.is(tan(new vec2(radians(360))).x, 0);
    t.is(tan(new vec2(radians(450))).y, 3266247870639074);

    const vector2 = new vec2(radians(180), radians(360));

    t.is(tan(vector2).x, 0);
    t.is(tan(vector2).y, 0);
});

test('tan with vec3', (t) => {
    t.is(tan(new vec3(0)).x, 0);
    t.is(tan(new vec3(radians(90))).y, 16331239353195370);
    t.is(tan(new vec3(radians(180))).z, 0);
    t.is(tan(new vec3(radians(270))).x, 5443746451065123);
    t.is(tan(new vec3(radians(360))).y, 0);

    const vector3 = new vec3(radians(90), radians(180), radians(360));

    t.is(tan(vector3).x, 16331239353195370);
    t.is(tan(vector3).y, 0);
    t.is(tan(vector3).z, 0);
});

test('tan with vec4', (t) => {
    t.is(tan(new vec4(0)).x, 0);
    t.is(tan(new vec4(radians(90))).y, 16331239353195370);
    t.is(tan(new vec4(radians(180))).z, 0);
    t.is(tan(new vec4(radians(270))).w, 5443746451065123);
    t.is(tan(new vec4(radians(360))).x, 0);

    const vector4 = new vec4(radians(90), radians(180), radians(270), radians(360));

    t.is(tan(vector4).x, 16331239353195370);
    t.is(tan(vector4).y, 0);
    t.is(tan(vector4).z, 5443746451065123);
    t.is(tan(vector4).w, 0);
});
