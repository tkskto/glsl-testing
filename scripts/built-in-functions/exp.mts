import type {genFType} from '../../types/index.mts';
import {vec2, vector2} from '../basic-types/vec2.mts';
import {vec3, vector3} from '../basic-types/vec3.mts';
import {vec4, vector4} from '../basic-types/vec4.mts';

const exponential = (value: number) => {
    return Math.exp(value);
}

export function exp(value: genFType): genFType {
    if (typeof value === 'number') {
        return exponential(value);
    } else if (value instanceof vector2) {
        return vec2(exponential(value.x), exponential(value.y));
    } else if (value instanceof vector3) {
        return vec3(exponential(value.x), exponential(value.y), exponential(value.z));
    } else if (value instanceof vector4) {
        return vec4(exponential(value.x), exponential(value.y), exponential(value.z), exponential(value.w));
    }
}
