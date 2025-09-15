import {fract} from '../built-in-functions/fract.mts';

export function rand(value: number) {
    return fract(Math.sin(value) * 43758.5453123);
}
