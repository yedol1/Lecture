// 1번
let arr = [10, 20, 30, 10, 20, 30, 40, 10];
let avg = 0;
let newarr = [];
let j = 0;
avg = arr.reduce((a, b) => a + b, 0) / arr.length;
for (const i of arr) {
    newarr[j] = (i - avg) ** 2;
    j++;
}
console.log(newarr);
//2번
let arr1 = "5, 4, 10, 2, 5";
let newarr1 = [];
let sum = 0;
newarr1 = arr1.split(",");
console.log(newarr1);
for (const i of newarr1) {
    sum += parseInt(i);
}
console.log(sum);
//3번
let arr2 = [11, 22, 33, 111, 2];
let str2 = "";
let sum2 = 0;
let num2 = 0;
// for (let i = 0; i < arr2.length; i++) {
//     str2 += arr2[i].toString();
// }
str2 = arr2.join("");
num2 = parseInt(str2);
for (let i = 0; i < str2.length; i++) {
    sum2 += num2 % 10;
    num2 = parseInt(num2 / 10);
    if (num2 === 0) {
        break;
    }
}
console.log(sum2);
//4번
// 등비 등차
function solution(common) {
    var answer = 0;
    let gapList = [];

    for (let i = 1; i < common.length; i++) {
        gapList[i - 1] = common[i] - common[i - 1];
    }
    const gap = new Set(gapList);

    if (gap.size === 1 && common.length > 2) {
        answer = common.pop() + gapList[0];
    } else {
        const check = [];
        for (let i = 1; i < common.length; i++) {
            check[i - 1] = common[i] / common[i - 1];
        }
        const gapcheck = new Set(check);
        if (gapcheck.size === 1 && common.length > 2) {
            answer = common.pop() * check[0];
        } else {
            console.log("ERROR!!!");
        }
    }
    return answer;
}
