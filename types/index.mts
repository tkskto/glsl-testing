import type {vector2} from '../scripts/basic-types/vec2.mjs';
import type {vector3} from '../scripts/basic-types/vec3.mjs';
import type {vector4} from '../scripts/basic-types/vec4.mjs';
import type {ivec2} from '../scripts/basic-types/ivec2.mjs';
import type {ivec3} from '../scripts/basic-types/ivec3.mjs';
import type {ivec4} from '../scripts/basic-types/ivec4.mjs';
import type {uvec4} from '../scripts/basic-types/uvec4.mjs';
import type {uvec3} from '../scripts/basic-types/uvec3.mjs';
import type {uvec2} from '../scripts/basic-types/uvec2.mjs';

export type genFType = number | vector2<number> | vector3<number> | vector4<number>
export type genIType = number | ivec2 | ivec3 | ivec4
export type genUType = number | uvec2 | uvec3 | uvec4
export type genBType = boolean | vector2<boolean> | vector3<boolean> | vector4<boolean>
