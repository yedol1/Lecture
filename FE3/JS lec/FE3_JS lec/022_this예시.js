let 호텔 = [
    {
        이름: "하나호텔1",
        방의개수: 50,
        예약자수: 25,
        남은방의개수: function () {
            return this.방의개수 - this.예약자수;
        },
    },
    {
        이름: "하나호텔2",
        방의개수: 40,
        예약자수: 25,
        남은방의개수: function () {
            return this.방의개수 - this.예약자수;
        },
    },
    {
        이름: "하나호텔3",
        방의개수: 30,
        예약자수: 25,
        남은방의개수: function () {
            return this.방의개수 - this.예약자수;
        },
    },
    {
        이름: "하나호텔4",
        방의개수: 25,
        예약자수: 25,
        남은방의개수: function () {
            return this.방의개수 - this.예약자수;
        },
    },
];

console.log(호텔[0]["방의개수"] - 호텔[0]["예약자수"]);
console.log(호텔[0]["남은방의개수"]());
console.log(호텔[0].남은방의개수()); //위에것보단 this 를 사용한다는 것을 조금더 명확히 보일수있다.

// call()

// var peter = {
//     name : 'fasdf',
//     sayName: function(){
//         console.log(this.name)
//     }
// }
// var bruce = {
//     name : 'gjgjgjgj'
// }

// console.log(peter.sayName.call(bruce))

//apply()

// var peter = {
//     name : 'Peter Parker',
//     sayName : function(is, is2){
//             console.log(this.name+ ' is '+ is + ' or ' + is2);
//     }
// }

// var bruce = {
// name : 'Bruce Wayne',
// }

// console.log(peter.sayName.apply(bruce, ['batman', 'richman']));

function sayName() {
    console.log(this.name);
}

var bruce = {
    name: "bruce",
    sayName: sayName,
};

var peter = {
    name: "peter",
    sayName: sayName.bind(bruce),
};

peter.sayName();
bruce.sayName();

const person = {
    name: "hojun",
    age: 25,
    a() {
        console.log(this);
        console.log(this.name);
        function b() {
            console.log(this);
            console.log(this.name);
            function c() {
                console.log(this);
                console.log(this.name);
            }
            c();
        }
        b();
    },
};
console.log(person.a());
