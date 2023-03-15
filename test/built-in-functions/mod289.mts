import type {genFType} from '../../types';
import {vector2, vec2} from '../basic-types/vec2.mjs';
import {vector3, vec3} from '../basic-types/vec3.mjs';
import {vector4, vec4} from '../basic-types/vec4.mjs';

const mod289Implement = (value: number) => {
    return value - (value * (1 / 289)) * 289;
};

export const mod289 = (value: genFType) => {
    if (typeof value === 'number') {
        return mod289Implement(value);
    } else if (value instanceof vector2) {
        return vec2(mod289Implement(value.x), mod289Implement(value.y));
    } else if (value instanceof vector3) {
        return vec3(mod289Implement(value.x), mod289Implement(value.y), mod289Implement(value.z));
    } else if (value instanceof vector4) {
        return vec4(mod289Implement(value.x), mod289Implement(value.y), mod289Implement(value.z), mod289Implement(value.w));
    }
}
