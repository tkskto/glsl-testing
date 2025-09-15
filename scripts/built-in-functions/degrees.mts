import type {genFType} from '../../types/index.mjs';
import {vector2, vec2} from '../basic-types/vec2.mts';
import {vector3, vec3} from '../basic-types/vec3.mts';
import {vector4, vec4} from '../basic-types/vec4.mts';

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
