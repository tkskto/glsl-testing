import type {genFType} from '../../types';
import {vector2, vec2} from '../basic-types/vec2.mjs';
import {vector3, vec3} from '../basic-types/vec3.mjs';
import {vector4, vec4} from '../basic-types/vec4.mjs';

const arcCosine = (x: number) => {
    // -1 <= x <= 1
    return Number(Math.acos(x).toFixed(16));
}

export function acos(value: genFType): genFType {
    if (typeof value === 'number') {
        return arcCosine(value);
    } else if (value instanceof vector2) {
        return vec2(arcCosine(value.x), arcCosine(value.y));
    } else if (value instanceof vector3) {
        return vec3(arcCosine(value.x), arcCosine(value.y), arcCosine(value.z));
    } else if (value instanceof vector4) {
        return vec4(arcCosine(value.x), arcCosine(value.y), arcCosine(value.z), arcCosine(value.w));
    }

    throw new Error('acos: no matching overloaded function found');
}
