import type {genFType} from '../../types/index.mts';
import {vec2, vector2} from '../basic-types/vec2.mts';
import {vec3, vector3} from '../basic-types/vec3.mts';
import {vec4, vector4} from '../basic-types/vec4.mts';

export function fract(value: genFType): genFType {
    if (typeof value === 'number') {
        return value - Math.floor(value);
    } else if (value instanceof vector2) {
        return vec2(
            value.x - Math.floor(value.x),
            value.y - Math.floor(value.y),
        );
    } else if (value instanceof vector3) {
        return vec3(
            value.x - Math.floor(value.x),
            value.y - Math.floor(value.y),
            value.z - Math.floor(value.z),
        );
    } else if (value instanceof vector4) {
        return vec4(
            value.x - Math.floor(value.x),
            value.y - Math.floor(value.y),
            value.z - Math.floor(value.z),
            value.w - Math.floor(value.w),
        );
    }

    throw new Error('dot : no matching overloaded function found');
}
