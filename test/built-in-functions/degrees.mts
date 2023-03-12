import type {genFType} from '../../types';
import {vector2, vec2} from '../basic-types/vec2.mjs';
import {vector3, vec3} from '../basic-types/vec3.mjs';
import {vector4, vec4} from '../basic-types/vec4.mjs';

const toDegree = (degree: number) => {
    return (180 * degree) / Math.PI;
}

export function degrees(degree: genFType): genFType {
    if (typeof degree === 'number') {
        return toDegree(degree);
    } else if (degree instanceof vector2) {
        return vec2(toDegree(degree.x), toDegree(degree.y));
    } else if (degree instanceof vector3) {
        return vec3(toDegree(degree.x), toDegree(degree.y), toDegree(degree.z));
    } else if (degree instanceof vector4) {
        return vec4(toDegree(degree.x), toDegree(degree.y), toDegree(degree.z), toDegree(degree.w));
    }
}
