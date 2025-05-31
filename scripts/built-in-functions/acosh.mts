import type {genFType} from '../../types/index.mts';
import {vec2, vector2} from '../basic-types/vec2.mts';
import {vec3, vector3} from '../basic-types/vec3.mts';
import {vec4, vector4} from '../basic-types/vec4.mts';

const hyperbolicArcCosign = (x: number) => {
    return Math.acosh(x);
}

export function acosh(x: genFType): genFType {
    if (typeof x === 'number') {
        return hyperbolicArcCosign(x);
    } else if (x instanceof vector2) {
        return vec2(hyperbolicArcCosign(x.x), hyperbolicArcCosign(x.y));
    } else if (x instanceof vector3) {
        return vec3(hyperbolicArcCosign(x.x), hyperbolicArcCosign(x.y), hyperbolicArcCosign(x.z));
    } else if (x instanceof vector4) {
        return vec4(hyperbolicArcCosign(x.x), hyperbolicArcCosign(x.y), hyperbolicArcCosign(x.z), hyperbolicArcCosign(x.w));
    }

    throw new Error('acosh: no matching overloaded function found');
}

