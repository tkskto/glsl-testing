import type {genFType} from '../../types/index.mts';
import {vec2, vector2} from '../basic-types/vec2.mts';
import {vec3, vector3} from '../basic-types/vec3.mts';
import {vec4, vector4} from '../basic-types/vec4.mts';

const hyperbolicArcSine = (x: number) => {
    return Math.asinh(x);
}

export function asinh(x: genFType): genFType {
    if (typeof x === 'number') {
        return hyperbolicArcSine(x);
    } else if (x instanceof vector2) {
        return vec2(hyperbolicArcSine(x.x), hyperbolicArcSine(x.y));
    } else if (x instanceof vector3) {
        return vec3(hyperbolicArcSine(x.x), hyperbolicArcSine(x.y), hyperbolicArcSine(x.z));
    } else if (x instanceof vector4) {
        return vec4(hyperbolicArcSine(x.x), hyperbolicArcSine(x.y), hyperbolicArcSine(x.z), hyperbolicArcSine(x.w));
    }
}
