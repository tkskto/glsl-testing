import type {genFType} from '../../types';
import {vec2} from '../basic-types/vec2.mjs';
import {vec3} from '../basic-types/vec3.mjs';
import {vec4} from '../basic-types/vec4.mjs';

const sign = (degree: number) => {
    let result = Number(Math.sin(degree).toFixed(15));

    return result === -0 ? 0 : result;
}

export function sin(degree: genFType): genFType {
    if (typeof degree === 'number') {
        return sign(degree);
    } else if (degree instanceof vec2) {
        return new vec2(sign(degree.x), sign(degree.y));
    } else if (degree instanceof vec3) {
        return new vec3(sign(degree.x), sign(degree.y), sign(degree.z));
    } else if (degree instanceof vec4) {
        return new vec4(sign(degree.x), sign(degree.y), sign(degree.z), sign(degree.w));
    }
}
