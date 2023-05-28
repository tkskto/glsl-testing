import {genFType} from '../../types';
import {vec2, vector2} from '../basic-types/vec2.mjs';
import {vec3, vector3} from '../basic-types/vec3.mjs';
import {vec4, vector4} from '../basic-types/vec4.mjs';

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
}

