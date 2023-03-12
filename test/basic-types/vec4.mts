import {vector2, vec2} from './vec2.mjs';
import {vector3, vec3} from './vec3.mjs';

export class vector4<T> {
    #x: T;

    #y: T;

    #z: T;

    #w: T;

    constructor(arg1: T | vector2<T> | vector3<T> | vector4<T>, arg2?: T | vector2<T> | vector3<T>, arg3?: T | vector2<T>, arg4?: T) {
        if (arg1 instanceof vector4) {
            this.#x = arg1.x;
            this.#y = arg1.y;
            this.#z = arg1.z;
            this.#w = arg1.w;

            return;
        }

        if (arg1 instanceof vector3 && typeof arg2 === 'number') {
            this.#x = arg1.x;
            this.#y = arg1.y;
            this.#z = arg1.z;
            this.#w = arg2;

            return;
        }

        if (typeof arg1 === 'number' && arg2 instanceof vector3) {
            this.#x = arg1;
            this.#y = arg2.x;
            this.#z = arg2.y;
            this.#w = arg2.z;

            return;
        }

        if (arg1 instanceof vector2 && arg2 instanceof vector2) {
            this.#x = arg1.x;
            this.#y = arg1.y;
            this.#z = arg2.x;
            this.#w = arg2.y;

            return;
        }

        if (typeof arg1 === 'number' && typeof arg2 === 'number' && arg3 instanceof vector2) {
            this.#x = arg1;
            this.#y = arg2;
            this.#z = arg3.x;
            this.#w = arg3.y;

            return;
        }

        if (arg2 === undefined && arg3 === undefined && arg4 === undefined) {
            if (typeof arg1 === 'number') {
                this.#x = arg1;
                this.#y = arg1;
                this.#z = arg1;
                this.#w = arg1;

                return;
            }
        }

        if (typeof arg1 === 'number' && typeof arg2 === 'number' && typeof arg3 === 'number' && typeof arg4 === 'number') {
            this.#x = arg1;
            this.#y = arg2;
            this.#z = arg3;
            this.#w = arg4;

            return;
        }

        throw new Error();
    }

    get x(): T {
        return this.#x;
    }

    get y(): T {
        return this.#y;
    }

    get z(): T {
        return this.#z;
    }

    get w(): T {
        return this.#w;
    }

    get xy(): vector2<T> {
        return vec2<T>(this.#x, this.#y);
    }

    get xx(): vector2<T> {
        return vec2<T>(this.#x, this.#x);
    }

    get yy(): vector2<T> {
        return vec2<T>(this.#y, this.#y);
    }

    get xyz(): vector3<T> {
        return vec3<T>(this.#x, this.#y, this.#z);
    }

    get zzz(): vector3<T> {
        return vec3<T>(this.#z, this.#z, this.#z);
    }

    get xyzw(): vector4<T> {
        return vec4<T>(this.#x, this.#y, this.#z, this.#w);
    }

    get wwww(): vector4<T> {
        return vec4<T>(this.#w, this.#w, this.#w, this.#w);
    }
}

export const vec4 = <T,>(arg1: T | vector2<T> | vector3<T> | vector4<T>, arg2?: T | vector2<T> | vector3<T>, arg3?: T | vector2<T>, arg4?: T) => {
    return new vector4(arg1, arg2, arg3, arg4);
};
