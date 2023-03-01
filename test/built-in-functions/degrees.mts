import type {genFType} from '../../types';
import {vec2} from '../basic-types/vec2.mjs';
import {vec3} from '../basic-types/vec3.mjs';
import {vec4} from '../basic-types/vec4.mjs';

const toDegree = (degree: number) => {
    return (180 * degree) / Math.PI;
}

export function degrees(degree: genFType): genFType {
    if (typeof degree === 'number') {
        return toDegree(degree);
    } else if (degree instanceof vec2) {
        return new vec2(toDegree(degree.x), toDegree(degree.y));
    } else if (degree instanceof vec3) {
        return new vec3(toDegree(degree.x), toDegree(degree.y), toDegree(degree.z));
    } else if (degree instanceof vec4) {
        return new vec4(toDegree(degree.x), toDegree(degree.y), toDegree(degree.z), toDegree(degree.w));
    }
}
