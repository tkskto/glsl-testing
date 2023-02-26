import {vec2} from './vec2.mjs';
import {vec3} from './vec3.mjs';

export class vec4<T> {
    #x: T;

    #y: T;

    #z: T;

    #w: T;

    constructor(arg1: T | vec2<T> | vec3<T> | vec4<T>, arg2?: T | vec2<T> | vec3<T>, arg3?: T | vec2<T>, arg4?: T) {
        if (arg1 instanceof vec4) {
            this.#x = arg1.x;
            this.#y = arg1.y;
            this.#z = arg1.z;
            this.#w = arg1.w;

            return;
        }

        if (
            arg1 instanceof vec3 &&
            (arg2 && !(arg2 instanceof vec2) && !(arg2 instanceof vec3))
        ) {
            this.#x = arg1.x;
            this.#y = arg1.y;
            this.#z = arg1.z;
            this.#w = arg2;

            return;
        }

        if (
            !(arg1 instanceof vec2) && !(arg1 instanceof vec3) &&
            arg2 instanceof vec3
        ) {
            this.#x = arg1;
            this.#y = arg2.x;
            this.#z = arg2.y;
            this.#w = arg2.z;

            return;
        }

        if (arg1 instanceof vec2 && arg2 instanceof vec2) {
            this.#x = arg1.x;
            this.#y = arg1.y;
            this.#z = arg2.x;
            this.#w = arg2.y;

            return;
        }

        if (
            !(arg1 instanceof vec2) && !(arg1 instanceof vec3) &&
            (arg2 && !(arg2 instanceof vec2)) && (arg2 && !(arg2 instanceof vec3)) &&
            arg3 instanceof vec2
        ) {
            this.#x = arg1;
            this.#y = arg2;
            this.#z = arg3.x;
            this.#w = arg3.y;

            return;
        }

        if (!arg2 && !arg3 && !arg4) {
            if (!(arg1 instanceof vec2) && !(arg1 instanceof vec3)) {
                this.#x = arg1;
                this.#y = arg1;
                this.#z = arg1;
                this.#w = arg1;

                return;
            }
        }

        if (
            !(arg1 instanceof vec2) && !(arg1 instanceof vec3) &&
            (arg2 && !(arg2 instanceof vec2)) && (arg2 && !(arg2 instanceof vec3)) &&
            (arg3 && !(arg3 instanceof vec2)) &&
            arg4
        ) {
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

    get xy(): vec2<T> {
        return new vec2<T>(this.#x, this.#y);
    }

    get xx(): vec2<T> {
        return new vec2<T>(this.#x, this.#x);
    }

    get yy(): vec2<T> {
        return new vec2<T>(this.#y, this.#y);
    }

    get xyz(): vec3<T> {
        return new vec3<T>(this.#x, this.#y, this.#z);
    }

    get zzz(): vec3<T> {
        return new vec3<T>(this.#z, this.#z, this.#z);
    }

    get xyzw(): vec4<T> {
        return new vec4<T>(this.#x, this.#y, this.#z, this.#w);
    }

    get wwww(): vec4<T> {
        return new vec4<T>(this.#w, this.#w, this.#w, this.#w);
    }
}
