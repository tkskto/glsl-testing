import test from 'ava';
import {acosh} from '../built-in-functions/acosh.mjs';

test('acosh with simple number', (t) => {
    // coshは定義域が[1, ∞)なので、acoshの引数は1以上である必要がある。
    t.is(acosh(1), 0);
    t.is(acosh(1.5430806348152437), 1);
    t.is(acosh(11013.232920103324), 10);
});

// vec2以下のテストは省略する。
