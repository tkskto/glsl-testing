import test from 'ava';
import {acos} from '../built-in-functions/acos.mjs';
import {vec2} from '../basic-types/vec2.mjs';
import {vec3} from '../basic-types/vec3.mjs';
import {vec4} from '../basic-types/vec4.mjs';
import {radians} from '../built-in-functions/radians.mjs';

test('cos with simple number', (t) => {
    t.is(acos(1), radians(0));
    t.is(acos(0), radians(90));
    t.is(acos(-1), radians(180));
});

test('acos with vec2', (t) => {
    t.is(acos(vec2(1)).x, radians(0));
    t.is(acos(vec2(0)).y, radians(90));
    t.is(acos(vec2(-1)).x, radians(180));

    const vector2 = vec2(1, 0);

    t.is(acos(vector2).x, radians(0));
    t.is(acos(vector2).y, radians(90));
});

test('acos with vec3', (t) => {
    t.is(acos(vec3(1)).x, radians(0));
    t.is(acos(vec3(0)).y, radians(90));
    t.is(acos(vec3(-1)).z, radians(180));

    const vector3 = vec3(1, 0, -1);

    t.is(acos(vector3).x, radians(0));
    t.is(acos(vector3).y, radians(90));
    t.is(acos(vector3).z, radians(180));
});

test('acos with vec4', (t) => {
    t.is(acos(vec4(1)).x, 0);
    t.is(acos(vec4(0)).y, radians(90));
    t.is(acos(vec4(-1)).z, radians(180));
    t.is(acos(vec4(1)).w, 0);

    const vector4 = vec4(1, 0, -1, 1);

    t.is(acos(vector4).x, 0);
    t.is(acos(vector4).y, radians(90));
    t.is(acos(vector4).z, radians(180));
    t.is(acos(vector4).w, 0);
});
