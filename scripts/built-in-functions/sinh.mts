import type {genFType} from '../../types/index.mts';
import {vec2, vector2} from '../basic-types/vec2.mts';
import {vec3, vector3} from '../basic-types/vec3.mts';
import {vec4, vector4} from '../basic-types/vec4.mts';

const hyperbolicSine = (x: number) => {
    const result = Math.sinh(x);

    // `Math.sinh(-0)`は-0を返すので0にそろえておく。
    return result === 0 ? 0 : result;
};

export function sinh(x: genFType): genFType {
    if (typeof x === 'number') {
        return hyperbolicSine(x);
    } else if (x instanceof vector2) {
        return vec2(hyperbolicSine(x.x), hyperbolicSine(x.y));
    } else if (x instanceof vector3) {
        return vec3(hyperbolicSine(x.x), hyperbolicSine(x.y), hyperbolicSine(x.z));
    } else if (x instanceof vector4) {
        return vec4(
            hyperbolicSine(x.x),
            hyperbolicSine(x.y),
            hyperbolicSine(x.z),
            hyperbolicSine(x.w),
        );
    }
}
