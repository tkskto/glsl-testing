import test from 'ava';
import {degrees} from '../built-in-functions/degrees.mjs';
import {vec2} from '../basic-types/vec2.mjs';
import {vec3} from '../basic-types/vec3.mjs';
import {vec4} from '../basic-types/vec4.mjs';

test('degrees with simple number', (t) => {
    t.is(degrees(0), 0);
    t.is(degrees(Math.PI * 0.5), 90);
    t.is(degrees(Math.PI), 180);
    t.is(degrees(Math.PI * 1.5), 270);
    t.is(degrees(Math.PI * 2), 360);
    t.is(degrees(Math.PI * 2.5), 450);
});

test('degrees with vec2', (t) => {
    t.is(degrees(new vec2(0)).x, 0);
    t.is(degrees(new vec2(Math.PI * 0.5)).y, 90);
    t.is(degrees(new vec2(Math.PI)).x, 180);
    t.is(degrees(new vec2(Math.PI * 1.5)).y, 270);
    t.is(degrees(new vec2(Math.PI * 2)).x, 360);
    t.is(degrees(new vec2(Math.PI * 2.5)).y, 450);

    const vector2 = new vec2(Math.PI, Math.PI * 2);

    t.is(degrees(vector2).x, 180);
    t.is(degrees(vector2).y, 360);
});

test('degrees with vec3', (t) => {
    t.is(degrees(new vec3(0)).x, 0);
    t.is(degrees(new vec3(Math.PI * 0.5)).y, 90);
    t.is(degrees(new vec3(Math.PI)).z, 180);
    t.is(degrees(new vec3(Math.PI * 1.5)).x, 270);
    t.is(degrees(new vec3(Math.PI * 2)).y, 360);

    const vector3 = new vec3(Math.PI * 0.5, Math.PI, Math.PI * 2);

    t.is(degrees(vector3).x, 90);
    t.is(degrees(vector3).y, 180);
    t.is(degrees(vector3).z, 360);
});

test('degrees with vec4', (t) => {
    t.is(degrees(new vec4(0)).x, 0);
    t.is(degrees(new vec4(Math.PI * 0.5)).y, 90);
    t.is(degrees(new vec4(Math.PI)).z, 180);
    t.is(degrees(new vec4(Math.PI * 1.5)).w, 270);
    t.is(degrees(new vec4(Math.PI * 2)).x, 360);

    const vector4 = new vec4(Math.PI * 0.5, Math.PI, Math.PI * 1.5, Math.PI * 2);

    t.is(degrees(vector4).x, 90);
    t.is(degrees(vector4).y, 180);
    t.is(degrees(vector4).z, 270);
    t.is(degrees(vector4).w, 360);
});
