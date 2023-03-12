import test from 'ava';
import {asin} from '../built-in-functions/asin.mjs';
import {vec2} from '../basic-types/vec2.mjs';
import {vec3} from '../basic-types/vec3.mjs';
import {vec4} from '../basic-types/vec4.mjs';
import {radians} from '../built-in-functions/radians.mjs';

test('asin with simple number', (t) => {
    t.is(asin(0), 0);
    t.is(asin(1), radians(90));
    t.is(asin(-1), radians(-90));
});

test('asin with vec2', (t) => {
    t.is(asin(vec2(0)).x, 0);
    t.is(asin(vec2(1)).y, radians(90));
    t.is(asin(vec2(-1)).x, radians(-90));

    const vector2 = vec2(1, -1);

    t.is(asin(vector2).x, radians(90));
    t.is(asin(vector2).y, radians(-90));
});

test('asin with vec3', (t) => {
    t.is(asin(vec3(0)).x, 0);
    t.is(asin(vec3(1)).y, radians(90));
    t.is(asin(vec3(-1)).z, radians(-90));

    const vector3 = vec3(0, 1, -1);

    t.is(asin(vector3).x, radians(0));
    t.is(asin(vector3).y, radians(90));
    t.is(asin(vector3).z, radians(-90));
});

test('asin with vec4', (t) => {
    t.is(asin(vec4(0)).x, 0);
    t.is(asin(vec4(1)).y, radians(90));
    t.is(asin(vec4(-1)).z, radians(-90));

    const vector4 = vec4(0, 1, -1, 1);

    t.is(asin(vector4).x, radians(0));
    t.is(asin(vector4).y, radians(90));
    t.is(asin(vector4).z, radians(-90));
    t.is(asin(vector4).w, radians(90));
});
