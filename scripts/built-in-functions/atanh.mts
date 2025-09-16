import type {genFType} from '../../types/index.mts';
import {vec2, vector2} from '../basic-types/vec2.mts';
import {vec3, vector3} from '../basic-types/vec3.mts';
import {vec4, vector4} from '../basic-types/vec4.mts';

const hyperbolicArcTangent = (x: number) => {
    return Math.atanh(x);
}

export function atanh(x: genFType): genFType {
    if (typeof x === 'number') {
        return hyperbolicArcTangent(x);
    } else if (x instanceof vector2) {
        return vec2(hyperbolicArcTangent(x.x), hyperbolicArcTangent(x.y));
    } else if (x instanceof vector3) {
        return vec3(hyperbolicArcTangent(x.x), hyperbolicArcTangent(x.y), hyperbolicArcTangent(x.z));
    } else if (x instanceof vector4) {
        return vec4(
            hyperbolicArcTangent(x.x),
            hyperbolicArcTangent(x.y),
            hyperbolicArcTangent(x.z),
            hyperbolicArcTangent(x.w)
        );
    }

    throw new Error('atanh: no matching overloaded function found');
}
