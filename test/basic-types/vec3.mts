import {vec2} from './vec2.mjs';

export class vec3<T> {
    #x: T;

    #y: T;

    #z: T;

    constructor(arg1: T | vec2<T> | vec3<T>, arg2?: T | vec2<T>, arg3?: T) {
        if (arg1 instanceof vec3) {
            this.#x = arg1.x;
            this.#y = arg1.y;
            this.#z = arg1.z;

            return;
        }

        if (arg1 instanceof vec2 && arg2 && !(arg2 instanceof vec2)) {
            this.#x = arg1.x;
            this.#y = arg1.y;
            this.#z = arg2;

            return;
        }

        if (!(arg1 instanceof vec2) && arg2 instanceof vec2) {
            this.#x = arg1;
            this.#y = arg2.x;
            this.#z = arg2.y;

            return;
        }

        if (!arg2 && !arg3) {
            if (!(arg1 instanceof vec2)) {
                this.#x = arg1;
                this.#y = arg1;
                this.#z = arg1;

                return;
            }
        }

        if (!(arg1 instanceof vec2) && arg2 && !(arg2 instanceof vec2) && arg3) {
            this.#x = arg1;
            this.#y = arg2;
            this.#z = arg3;

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
}
