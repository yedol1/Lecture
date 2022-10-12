let book = {
    책이름: '완전정복',
    가격: 10000,
    저자: '홍홍홍',
    출판일: '22.10.11',
}

let newbook ={}

newbook['책이름'] = 'JAVASCRIPT'
newbook['가격'] = 12000
newbook['저자'] = '팡팡팡'
newbook['출판일'] = '22.10.12'

console.log(newbook)

let book1 = new Book('html', 10, '팡' , '22.01.11')
let book2 = new Book('js', 123, '10팡' , '22.08.11')
console.log(book1,book2)
console.log(book1.가격)

function Book(책이름,가격,저자,출판일) {
    this.책이름 = 책이름
    this.가격 = 가격
    this.저자 = 저자
    this.출판일 = 출판일
}

// 콜백함수
function sum(x,y,callback){
    callback(x-y);
    return x+y
}
console.log(sum(10,20,console.log))

function 제곱(x){
    return x**2
}

let arr=[10,20,30,40,5]
console.log(arr.map(제곱))

let result=[]
arr.forEach(x=>{
    result.push(x**2)
})
console.log(result)