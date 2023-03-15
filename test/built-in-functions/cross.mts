import {vec3, vector3} from '../basic-types/vec3.mjs';

export function cross(x: vector3<number>, y: vector3<number>): vector3<number> {
   return vec3(
       x.y * y.z - y.y * x.z,
       x.z * y.x - y.z * x.x,
       x.x * y.y - y.x * x.x,
   );
}
