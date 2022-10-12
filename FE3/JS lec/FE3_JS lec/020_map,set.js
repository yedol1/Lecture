let m = new Map();
m
    .set('하나',1)
    .set('둘',2)
    .set('셋',3)
    .set('넷',4)
    .set('다섯',5)
    .set(5,'다섯')

console.log(m.get('다섯'))

console.log(m.get('하나'))
console.log(m.has('둘'))
console.log(m.size)

for (const i of m){
    console.log(i)
}

console.log(m.values())
console.log(m.keys())
console.log(m.entries())

let s = new Set('abcdeeeeeeeee');
console.log(s)
s.add('a')
console.log(s)

let 회사게시판 = ['팡','팡','팡','팡','팡','렬','렬','렬','난','난','난']

let newcom = new Set(회사게시판)
console.log(newcom.size)
console.log(newcom)

for (const i of newcom){
    console.log(i, 회사게시판.filter(e=>e===i).length)
}

let cnt=0
let arr=[]
for (let i of newcom){
    for(let j of 회사게시판){
        if(i===j){
            cnt++;
        }
    }
    console.log(i,cnt)
    cnt=0
}