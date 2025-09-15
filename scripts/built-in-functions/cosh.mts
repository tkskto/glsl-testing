import type {genFType} from '../../types/index.mts';
import {vec2, vector2} from '../basic-types/vec2.mts';
import {vec3, vector3} from '../basic-types/vec3.mts';
import {vec4, vector4} from '../basic-types/vec4.mts';

const hyperbolicCosign = (x: number) => {
    // JavaScriptの`Math`オブジェクトに`cosh`があるのでそれを使えば良い。
    return Math.cosh(x);
}

export function cosh(x: genFType): genFType {
    if (typeof x === 'number') {
        return hyperbolicCosign(x);
    } else if (x instanceof vector2) {
        return vec2(hyperbolicCosign(x.x), hyperbolicCosign(x.y));
    } else if (x instanceof vector3) {
        return vec3(hyperbolicCosign(x.x), hyperbolicCosign(x.y), hyperbolicCosign(x.z));
    } else if (x instanceof vector4) {
        return vec4(hyperbolicCosign(x.x), hyperbolicCosign(x.y), hyperbolicCosign(x.z), hyperbolicCosign(x.w));
    }
}
