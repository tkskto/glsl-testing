import type {genFType} from '../../types/index.mts';
import {vector2, vec2} from '../basic-types/vec2.mts';
import {vector3, vec3} from '../basic-types/vec3.mts';
import {vector4, vec4} from '../basic-types/vec4.mts';

const cosine = (degree: number) => {
    let result = Number(Math.cos(degree).toFixed(15));

    return result === -0 ? 0 : result;
}

export function cos(degree: genFType): genFType {
    if (typeof degree === 'number') {
        return cosine(degree);
    } else if (degree instanceof vector2) {
        return vec2(cosine(degree.x), cosine(degree.y));
    } else if (degree instanceof vector3) {
        return vec3(cosine(degree.x), cosine(degree.y), cosine(degree.z));
    } else if (degree instanceof vector4) {
        return vec4(cosine(degree.x), cosine(degree.y), cosine(degree.z), cosine(degree.w));
    }
}
