import type {genFType} from '../../types';
import {vector2, vec2} from '../basic-types/vec2.mjs';
import {vector3, vec3} from '../basic-types/vec3.mjs';
import {vector4, vec4} from '../basic-types/vec4.mjs';

const arcSine = (x: number) => {
    // -1 <= x <= 1
    return Number(Math.asin(x).toFixed(16));
}

export function asin(value: genFType): genFType {
    if (typeof value === 'number') {
        return arcSine(value);
    } else if (value instanceof vector2) {
        return vec2(arcSine(value.x), arcSine(value.y));
    } else if (value instanceof vector3) {
        return vec3(arcSine(value.x), arcSine(value.y), arcSine(value.z));
    } else if (value instanceof vector4) {
        return vec4(arcSine(value.x), arcSine(value.y), arcSine(value.z), arcSine(value.w));
    }
}
