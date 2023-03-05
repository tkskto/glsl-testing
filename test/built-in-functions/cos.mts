import type {genFType} from '../../types';
import {vec2} from '../basic-types/vec2.mjs';
import {vec3} from '../basic-types/vec3.mjs';
import {vec4} from '../basic-types/vec4.mjs';

const cosign = (degree: number) => {
    let result = Number(Math.cos(degree).toFixed(15));

    return result === -0 ? 0 : result;
}

export function cos(degree: genFType): genFType {
    if (typeof degree === 'number') {
        return cosign(degree);
    } else if (degree instanceof vec2) {
        return new vec2(cosign(degree.x), cosign(degree.y));
    } else if (degree instanceof vec3) {
        return new vec3(cosign(degree.x), cosign(degree.y), cosign(degree.z));
    } else if (degree instanceof vec4) {
        return new vec4(cosign(degree.x), cosign(degree.y), cosign(degree.z), cosign(degree.w));
    }
}
