import type {genFType} from '../../types';
import {vector2} from '../basic-types/vec2.mjs';
import {vector3} from '../basic-types/vec3.mjs';
import {vector4} from '../basic-types/vec4.mjs';

export function distance(x: genFType, y: genFType): number {
    if (typeof x === 'number' && typeof y === 'number') {
        return Math.abs(x - y);
    } else if (x instanceof vector2 && y instanceof vector2) {
        const dx = x.x - y.x;
        const dy = x.y - y.y;
        return Math.sqrt(dx * dx + dy * dy);
    } else if (x instanceof vector3 && y instanceof vector3) {
        const dx = x.x - y.x;
        const dy = x.y - y.y;
        const dz = x.z - y.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    } else if (x instanceof vector4 && y instanceof vector4) {
        const dx = x.x - y.x;
        const dy = x.y - y.y;
        const dz = x.z - y.z;
        const dw = x.w - y.w;
        return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
    }

    throw new Error('distance : no matching overloaded function found');
}
