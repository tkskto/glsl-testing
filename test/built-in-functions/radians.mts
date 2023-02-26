import type {genFType} from '../../types';
import {vec2} from '../basic-types/vec2.mjs';
import {vec3} from '../basic-types/vec3.mjs';
import {vec4} from '../basic-types/vec4.mjs';

const toRadian = (degree: number) => {
    return (Math.PI * degree) / 180;
}

export function radians(degree: genFType): genFType {
    if (typeof degree === 'number') {
        return toRadian(degree);
    } else if (degree instanceof vec2) {
        return new vec2(toRadian(degree.x), toRadian(degree.y));
    } else if (degree instanceof vec3) {
        return new vec3(toRadian(degree.x), toRadian(degree.y), toRadian(degree.z));
    } else if (degree instanceof vec4) {
        return new vec4(toRadian(degree.x), toRadian(degree.y), toRadian(degree.z), toRadian(degree.w));
    }
}
