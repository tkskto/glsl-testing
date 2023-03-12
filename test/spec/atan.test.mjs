import test from 'ava';
import {atan} from '../built-in-functions/atan.mjs';
import {vec2} from '../basic-types/vec2.mjs';
import {vec3} from '../basic-types/vec3.mjs';
import {vec4} from '../basic-types/vec4.mjs';
import {radians} from '../built-in-functions/radians.mjs';

test('atan with simple number', (t) => {
    t.is(atan(1, 1), radians(45));
    t.is(atan(1, -1), radians(-45));
    t.is(atan(0, 1), 0);
    t.is(atan(-0, 1), 0);
});

test('atan with vec2', (t) => {
    t.is(atan(vec2(1), vec2(1)).x, radians(45));
    t.is(atan(vec2(0), vec2(1)).x, 0);
    t.is(atan(vec2(-0), vec2(1)).x, 0);

    const vector2 = vec2(1, -1);

    t.is(atan(vector2, vector2).x, radians(45));
    t.is(atan(vector2, vector2).y, radians(45));
});

test('atan with vec3', (t) => {
    t.is(atan(vec3(0), vec3(1)).x, 0);
    t.is(atan(vec3(1), vec3(1)).y, radians(45));
    t.is(atan(vec3(1), vec3(-1)).z, radians(-45));

    const vector3 = vec3(1, 1, -1);

    t.is(atan(vector3, vector3).x, radians(45));
    t.is(atan(vector3, vector3).y, radians(45));
    t.is(atan(vector3, vector3).z, radians(45));
});

test('atan with vec4', (t) => {
    t.is(atan(vec4(0), vec4(1)).x, 0);
    t.is(atan(vec4(1), vec4(1)).y, radians(45));
    t.is(atan(vec4(1), vec4(-1)).z, radians(-45));

    const vector4 = vec4(1, 1, -1, 1);

    t.is(atan(vector4, vector4).x, radians(45));
    t.is(atan(vector4, vector4).y, radians(45));
    t.is(atan(vector4, vector4).z, radians(45));
    t.is(atan(vector4, vector4).w, radians(45));
});
