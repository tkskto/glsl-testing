export class vector2<T> {
    #x: T;

    #y: T;

    constructor(arg1: T | vector2<T>, arg2?: T) {
        if (arg1 instanceof vector2) {
            this.#x = arg1.x;
            this.#y = arg1.y;

            return;
        }

        if (typeof arg1 === 'number' && arg2 === undefined) {
            this.#x = arg1;
            this.#y = arg1;

            return;
        }

        if (typeof arg1 === 'number' && typeof arg2 === 'number') {
            this.#x = arg1;
            this.#y = arg2;

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

    get xy(): vector2<T> {
        return new vector2<T>(this.#x, this.#y);
    }

    get xx(): vector2<T> {
        return new vector2<T>(this.#x, this.#x);
    }

    get yy(): vector2<T> {
        return new vector2<T>(this.#y, this.#y);
    }
}

export const vec2 = <T,>(arg1: T | vector2<T>, arg2?: T) => {
    return new vector2(arg1, arg2);
};
