import type {genFType} from '../../types/index.mts';
import {vector2, vec2} from '../basic-types/vec2.mts';
import {vector3, vec3} from '../basic-types/vec3.mts';
import {vector4, vec4} from '../basic-types/vec4.mts';

const arcTangent = (y: number, x: number) => {
    // -1 <= x <= 1
    return Number(Math.atan(y / x).toFixed(16));
}

export function atan(y: genFType, x: genFType): genFType {
    if (typeof y === 'number' && typeof x === 'number') {
        return arcTangent(y, x);
    } else if (y instanceof vector2 && x instanceof vector2) {
        return vec2(arcTangent(y.x, x.x), arcTangent(y.y, x.y));
    } else if (y instanceof vector3 && x instanceof vector3) {
        return vec3(arcTangent(y.x, x.x), arcTangent(y.y, x.y), arcTangent(y.z, x.z));
    } else if (y instanceof vector4 && x instanceof vector4) {
        return vec4(arcTangent(y.x, x.x), arcTangent(y.y, x.y), arcTangent(y.z, x.z), arcTangent(y.w, x.w));
    }

    throw new Error('atan: no matching overloaded function found');
}
