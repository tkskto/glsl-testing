import type {genFType} from '../../types/index.mts';
import {vector2, vec2} from '../basic-types/vec2.mts';
import {vector3, vec3} from '../basic-types/vec3.mts';
import {vector4, vec4} from '../basic-types/vec4.mts';

const toRadian = (degree: number) => {
    return (Math.PI * degree) / 180;
}

export function radians(degree: genFType): genFType {
    if (typeof degree === 'number') {
        return toRadian(degree);
    } else if (degree instanceof vector2) {
        return vec2(toRadian(degree.x), toRadian(degree.y));
    } else if (degree instanceof vector3) {
        return vec3(toRadian(degree.x), toRadian(degree.y), toRadian(degree.z));
    } else if (degree instanceof vector4) {
        return vec4(toRadian(degree.x), toRadian(degree.y), toRadian(degree.z), toRadian(degree.w));
    }
}
