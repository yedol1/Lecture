const arr = ["apple", "banana", "graph"];

// this가 window를 가리키지 않음
arr.map(function() { console.log(this); }, { a : 1 });

function a(){
    console.log(this);
}


let test = {
    one:1,
    two:2,
    three: function(){
        console.log(this)
    },
}

test.three()
let test2 = test.three

///////////
function sayName(){
    console.log(this.name)
}

var name = 'pang';

let peter = {
    name : 'pangryeol',
    sayName: sayName 
}
console.log(peter.sayName())

let fruit = {
	// 프로퍼티 : 객체 고유의 상태 데이터
	name: "Apple",
	price: 500,
	
	// 'this'는 '현재 객체'를 가리킵니다.
	fruitName: function() {
		alert( this.name );
	}
};

fruit.fruitName();
// Apple

