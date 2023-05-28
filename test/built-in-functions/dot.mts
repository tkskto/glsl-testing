import {genFType} from '../../types';
import {vector2} from '../basic-types/vec2.mjs';
import {vector3} from '../basic-types/vec3.mjs';
import {vector4} from '../basic-types/vec4.mjs';

export function dot(x: genFType, y: genFType): number {
    if (typeof x === 'number') {
        return x * y;
    } else if (x instanceof vector2 && y instanceof vector2) {
        return x.x * y.x + x.y * y.y;
    } else if (x instanceof vector3 && y instanceof vector3) {
        return x.x * y.x + x.y * y.y + x.z * y.z;
    } else if (x instanceof vector4 && y instanceof vector4) {
        return x.x * y.x + x.y * y.y + x.z * y.z + x.w * y.w;
    }

    throw new Error('dot : no matching overloaded function found');
}
