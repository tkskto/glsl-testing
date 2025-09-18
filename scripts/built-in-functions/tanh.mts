import type {genFType} from '../../types/index.mts';
import {vec2, vector2} from '../basic-types/vec2.mts';
import {vec3, vector3} from '../basic-types/vec3.mts';
import {vec4, vector4} from '../basic-types/vec4.mts';

const hyperbolicTangent = (x: number) => {
    const result = Math.tanh(x);

    return result === 0 ? 0 : result;
};

export function tanh(x: genFType): genFType {
    if (typeof x === 'number') {
        return hyperbolicTangent(x);
    } else if (x instanceof vector2) {
        return vec2(hyperbolicTangent(x.x), hyperbolicTangent(x.y));
    } else if (x instanceof vector3) {
        return vec3(hyperbolicTangent(x.x), hyperbolicTangent(x.y), hyperbolicTangent(x.z));
    } else if (x instanceof vector4) {
        return vec4(
            hyperbolicTangent(x.x),
            hyperbolicTangent(x.y),
            hyperbolicTangent(x.z),
            hyperbolicTangent(x.w),
        );
    }
}
