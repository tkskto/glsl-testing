import type {genFType} from '../../types/index.mts';
import {vector2, vec2} from '../basic-types/vec2.mts';
import {vector3, vec3} from '../basic-types/vec3.mts';
import {vector4, vec4} from '../basic-types/vec4.mts';

const tangent = (degree: number) => {
    let result = Number(Math.tan(degree).toFixed(15));

    return result === -0 ? 0 : result;
}

export function tan(degree: genFType): genFType {
    if (typeof degree === 'number') {
        return tangent(degree);
    } else if (degree instanceof vector2) {
        return vec2(tangent(degree.x), tangent(degree.y));
    } else if (degree instanceof vector3) {
        return vec3(tangent(degree.x), tangent(degree.y), tangent(degree.z));
    } else if (degree instanceof vector4) {
        return vec4(tangent(degree.x), tangent(degree.y), tangent(degree.z), tangent(degree.w));
    }
}
