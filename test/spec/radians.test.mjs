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

test('radians with vec2', (t) => {
    t.is(radians(new vec2(0)).x, 0);
    t.is(radians(new vec2(90)).y, Math.PI * 0.5);
    t.is(radians(new vec2(180)).x, Math.PI);
    t.is(radians(new vec2(270)).y, Math.PI * 1.5);
    t.is(radians(new vec2(360)).x, Math.PI * 2);
    t.is(radians(new vec2(450)).y, Math.PI * 2.5);

    const vector2 = new vec2(180, 360);

    t.is(radians(vector2).x, Math.PI);
    t.is(radians(vector2).y, Math.PI * 2);
});

test('radians with vec3', (t) => {
    t.is(radians(new vec3(0)).x, 0);
    t.is(radians(new vec3(90)).y, Math.PI * 0.5);
    t.is(radians(new vec3(180)).z, Math.PI);
    t.is(radians(new vec3(270)).x, Math.PI * 1.5);
    t.is(radians(new vec3(360)).y, Math.PI * 2);

    const vector3 = new vec3(90, 180, 360);

    t.is(radians(vector3).x, Math.PI * 0.5);
    t.is(radians(vector3).y, Math.PI);
    t.is(radians(vector3).z, Math.PI * 2);
});

test('radians with vec4', (t) => {
    t.is(radians(new vec4(0)).x, 0);
    t.is(radians(new vec4(90)).y, Math.PI * 0.5);
    t.is(radians(new vec4(180)).z, Math.PI);
    t.is(radians(new vec4(270)).w, Math.PI * 1.5);
    t.is(radians(new vec4(360)).x, Math.PI * 2);

    const vector4 = new vec4(90, 180, 270, 360);

    t.is(radians(vector4).x, Math.PI * 0.5);
    t.is(radians(vector4).y, Math.PI);
    t.is(radians(vector4).z, Math.PI * 1.5);
    t.is(radians(vector4).w, Math.PI * 2);
});
