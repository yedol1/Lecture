import * as 개인프로필 from "./002.js";
import hello from "./003.js";
import sum from "./004.js";
// const 개인프로필 = require('./two');

console.log(개인프로필.이름);
console.log(개인프로필.나이);
개인프로필.한살더먹음();
개인프로필.한살더먹음();
console.log(개인프로필.나이); //이번에는 출력이 되었죠?
console.log(개인프로필.값가져와());
hello();
console.log(sum(5, 6));
