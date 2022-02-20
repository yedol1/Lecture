class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    getArea() {
      return this.height * this.width;
    }
    draw() {
        console.log(`drawing ${this.color}`);
    }
}
class Rectangle extends Shape {}
class Triangle extends Shape {
    // extends 를 사용하여 변경을 원하는 필요한 함수만 재정의
    getArea() {
      return (this.height * this.width) / 2;
    }
}
const rectangle = new Rectangle(20, 20, 'black');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());