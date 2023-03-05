import type {genFType} from '../../types';
import {vec2} from '../basic-types/vec2.mjs';
import {vec3} from '../basic-types/vec3.mjs';
import {vec4} from '../basic-types/vec4.mjs';

const tangent = (degree: number) => {
    let result = Number(Math.tan(degree).toFixed(15));

    return result === -0 ? 0 : result;
}

export function tan(degree: genFType): genFType {
    if (typeof degree === 'number') {
        return tangent(degree);
    } else if (degree instanceof vec2) {
        return new vec2(tangent(degree.x), tangent(degree.y));
    } else if (degree instanceof vec3) {
        return new vec3(tangent(degree.x), tangent(degree.y), tangent(degree.z));
    } else if (degree instanceof vec4) {
        return new vec4(tangent(degree.x), tangent(degree.y), tangent(degree.z), tangent(degree.w));
    }
}
