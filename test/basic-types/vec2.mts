export class vec2<T> {
    #x: T;

    #y: T;

    constructor(arg1: T | vec2<T>, arg2?: T) {
        if (arg1 instanceof vec2) {
            this.#x = arg1.x;
            this.#y = arg1.y;

            return;
        }

        if (typeof arg1 === 'number' && arg2 === undefined) {
            this.#x = arg1;
            this.#y = arg1;

            return;
        }

        if (arg1 && arg2) {
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

    get xy(): vec2<T> {
        return new vec2<T>(this.#x, this.#y);
    }

    get xx(): vec2<T> {
        return new vec2<T>(this.#x, this.#x);
    }

    get yy(): vec2<T> {
        return new vec2<T>(this.#y, this.#y);
    }
}
