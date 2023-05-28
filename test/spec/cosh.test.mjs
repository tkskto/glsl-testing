import test from 'ava';
import {cosh} from '../built-in-functions/cosh.mjs';

test('cosh with simple number', (t) => {
    t.is(cosh(0), 1);
    t.is(cosh(-1), 1.5430806348152437);
    t.is(cosh(1), 1.5430806348152437);
    t.is(cosh(-10), 11013.232920103324);
    t.is(cosh(10), 11013.232920103324);
});

// vec2以下のテストは省略する。
