const p1 = new Promise((resolve, reject) => {
    resolve("hello world"); //executor(제작코드,실행함수) = 맛집
})
    .then((메시지) => {
        alert(메시지);
        return 메시지.split(" ")[0];
    })
    .then((메시지) => {
        alert(메시지);
        return 메시지[0];
    })
    .then((메시지) => {
        alert(메시지);
    });

const p2 = new Promise((resolve, reject) => {
    reject("hello world"); //executor(제작코드,실행함수) = 맛집
})
    .then((메시지) => {
        alert(메시지);
        return 메시지.split(" ")[0];
    })
    .then((메시지) => {
        alert(메시지);
        return 메시지[0];
    })
    .then((메시지) => {
        alert(메시지);
    })
    .catch((메시지) => {
        alert("catch 실행");
    });

fetch("http://test.api.weniv.co.kr/mall")
    .then((data) => data.json())
    .then((data) => console.log(data.productName));

fetch("http://test.api.weniv.co.kr/mall")
    .then((data) => data.json())
    .then((data) => {
        data.forEach((e) => console.log(e.productName));
        return data;
    })
    .then((data) => {
        data.forEach((e) => {
            if (e.price >= 10000) {
                console.log(e);
            }
        });

        return data;
    })
    .then((data) => {
        const main = document.createElement("main");
        data.forEach((e) => {
            const h2 = document.createElement("h2");
            const p = document.createElement("p");
            h2.innerText = e.productName;
            p.innerText = e.price;
            main.appendChild(h2);
            main.appendChild(p);
        });
        document.body.appendChild(main);
    })
    .catch((error) => {
        alert("에러!");
        console.log(error);
    });

async function getData() {
    const response = await fetch(`http://test.api.weniv.co.kr/mall`);
    const productData = await response.json();
    console.log(productData);
    console.log(productData.map((item) => item.productName));
    console.log(
        productData.map((item) => item.price).filter((item) => item > 10000)
    );

    const main = document.createElement("main");
    productData.forEach((item) => {
        const ProductCard = document.createElement("article");
        const productName = document.createElement("h2");
        const productPrice = document.createElement("p");

        productName.textContent = `상품명 : ${item.productName}`;
        productPrice.textContent = `가격 : ${item.price}`;

        ProductCard.appendChild(productName);
        ProductCard.appendChild(productPrice);

        main.appendChild(ProductCard);
    });
    document.body.appendChild(main);
}

getData();

async function f() {
    return "hello";
}

f()
    .then((메시지) => {
        alert(메시지);
        return 메시지.split(" ")[0];
    })
    .then((메시지) => {
        alert(메시지);
        return 메시지[0];
    });

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            alert("완료");
            resolve("완료!");
        }, 1000);
    });

    let result = promise;
    console.log(result);
    alert(result);
    return "hello";
}

f(); // Promise {<fulfilled>: 'hello'}

////////
console.log("안녕하세요");

let desc = function (callback) {
    setTimeout(() => {
        console.log("기다렸다면,");
        callback();
    }, 2000);
};

let desc2 = function () {
    console.log(" 보입니다.");
};

desc(desc2);

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = 10;
        if (num > 9) {
            resolve(num);
        } else {
            reject("error!!!");
        }
    }, 3000);
});

p.then(
    (item) => {
        console.log("suc", item);
    },
    (err) => {
        console.log(err);
    }
);
