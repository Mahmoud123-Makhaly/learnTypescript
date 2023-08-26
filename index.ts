// ...........Arrays in typeScript......................
// let num: number | string = "3";
// num = "ali";

// let myNums: number[] = [10, 20, 30];

// let myInfo: any[] = ["ali", 122, true];

// let myDetails: [string, boolean, number] = ["ali", true, 22];

// let Adds: (string | number | boolean)[] = ["ali"];

// Adds.push(122);
// Adds.push(false);
// Adds.map((item: string | number | boolean): void => console.log(item));
//.......................functions.....................
// function sum(a: number, b: number): void {
//   console.log(a + b);
// }
// sum(10, 10);

//..................................
// function sum(a: number, b: number): number {
//   return a + b;
// }
// sum(10, 10);

//.....................................
// const myfun = function (a: number, b: number): void {
//   console.log(a + b);
// };
// myfun(10, 10);

//............................................
// const myFun = (
//   a: number | string,
//   b: number | string
// ): number | string | boolean => {
//   return true;
// };
// console.log(myFun("10", 20));

// const myFun = (
//   a: number | string | boolean,
//   b: number | string | boolean,
//   c: number | string | boolean
// ): number | string | boolean => {
//   return c;
// };
// console.log(myFun(10, 20, "aliaa"));

//................................objects.............................
// let obj: {
//   id: number;
//   name: string;
//   age: number;
//   degree?: number;
//   data: {
//     name: string;
//     age: number;
//   };
// } = {
//   id: 1,
//   name: "mahmoud",
//   age: 26,
//   data: {
//     name: "ali",
//     age: 12,
//   },
// };

//  //........................tyes.......................
// type mix = number | string | boolean;
// let num: mix = true;
// console.log(num);

// type details = {
//   readonly id: number;
//   name: string;
//   male?: boolean;
// };
// let num: details = {
//   id: 1,
//   name: "ali",
// };
// let user1: details = {
//   id: 3,
//   name: "ali",
// };
// console.log(user1.id);

//.......................literal type.........................
// type mix = 2 | 3 | 4 | 5;
// let num: mix = 2;
// console.log(num);

//.....................

//.....................

//.....................
// type colors = [string, string, number, number];

// type colors = (string | number | Date)[];

// let nums1: colors = ["name1", "name2", 12, "nums"];
// let num2: colors = ["mohamed", "ahmed", 15, 11, new Date()];

// .......................interface .........................
// interface Details {
//   id: number | string;
//   name: string;
//   age?: number;
// }
// // reopen interface
// interface Details {
//   address?: string;
// }
// let num: Details = {
//   id: "1",
//   name: "mahmoud",
//   address: "cairo",
// };
// console.log(num.id, num.name, num.address);

// interface details {
//   id: number;
//   name: string;
//   myFun: () => string;
//   sum: (num1: number, num2: number) => number;
// }
// let nums: details = {
//   id: 1,
//   name: "mahmoud",
//   myFun() {
//     return `Helloo ${this.name}`;
//   },
//   sum(a: number, b: number) {
//     return a + b;
//   },
// };

// console.log(nums.sum(10, 20));
//.......................................................
// interface Details {
//   id: number;
//   name: string;
//   func: (name: string) => string;
//   sum(num1: number, num2: number): number;
// }
// interface newDetails extends Details {
//   degree: string;
//   ismale: boolean;
// }
// let nums: newDetails = {
//   id: 1,
//   name: "ali",
//   func(a: string) {
//     return `Hello ${a}`;
//   },
//   sum(n1: number, n2: number) {
//     return n1 + n2;
//   },
//   degree: "good",
//   ismale: true,
// };

// console.log(nums.func("mahmoud"));
// console.log(nums.sum(2, 3));

// interface details1 {
//   id: number;
//   name: string;
//   HelloMsg: (n: string) => string;
//   sum(num1: number, num2: number): number;
// }
// interface details2 extends details1 {
//   image: string;
// }
// let nums: details2 = {
//   id: 1,
//   name: "ali",
//   HelloMsg(ms: string) {
//     return `hello ${ms}`;
//   },
//   sum(n1: number, n2: number) {
//     return n1 + n2;
//   },
//   image: "http",
// };
// console.log(nums.HelloMsg("Mhmoud"));
// console.log(nums.sum(4, 5));
// console.log(nums.image);

// ...............................classess....................

// class Car {
//   constructor(name: string) {
//     console.log(name);
//   }
//   getName(name: string) {
//     console.log(`name is ${name}`);
//   }
//   speed(s: number) {
//     console.log(`speed is ${s}`);
//   }
// }

// class Car1 {
//   constructor(public model: string, public age: number) {
//     console.log(`my name is ${model} and my age is ${age}`);
//   }
//   getName(name: string) {
//     console.log(`hello my name is ${name}`);
//   }
//   getSpeed(speed: number) {
//     console.log(`hello my speed is ${speed}`);
//   }
// }

// class Car2 extends Car {}
// const car2 = new Car2("ali");
// console.log(car2.getName("Bmw"));
// console.log(car2.speed(100));
// const Car1 = new Car("mahmoud");
// console.log(Car1.getName("ali"));
// console.log(Car1.speed(100));

// ...............................classess...access modifier.................
// class Person {
//   constructor(name: string) {
//     console.log(`hello ${name}`);
//   }
//   public getName(myName: string) {
//     console.log(`Hello ${myName}`);
//   }
//   private getSpeed(speed: number) {
//     console.log(`your speed is ${speed}`);
//   }
// }
// let ahmed = new Person("Mhmoud");
// console.log(ahmed.getName("ALIaa"));
// console.log(ahmed.getSpeed(200));
// class PersonCopy extends Person {}
// let ali = new PersonCopy("ali");
// console.log(ali.getName("ali"));
// console.log(ali.getSpeed(200));
//............................
// class Person {
//   protected name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   getHello() {
//     return `Hello ${this.name} ${this.age}`;
//   }
// }
// let al = new Person("ALI", 27);
// console.log(al.getHello());

// interface Details {
//   name: string;
//   age: number;
//   getName: () => void;
// }
// class Person1 implements Details {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   getName() {
//     console.log(`Hello name`);
//   }
// }
// class Person2 extends Person1 {
//   degree: string;
//   constructor(name: string, age: number, degree: string) {
//     super(name, age);
//     this.degree = degree;
//   }
//   getSpeed(speed) {}
// }
// const man = new Person2("mahmoud", 26, "good");
// console.log(man.getName());
// interface Details {
//   name: string;
//   age: number;
//   sayHello: (name: string) => void;
// }
// class Car1 implements Details {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello(name: string) {
//     console.log(`Hello your name is ${name} ?`);
//   }
// }
// class Car2 extends Car1 {
//   degree: string;
//   constructor(name: string, age: number, degree: string) {
//     super(name, age);
//     this.degree = degree;
//     console.log(
//       `Hello your name is ${name} and your age is ${age} and your degree is ${degree}`
//     );
//   }
//   getSpeed(speed: number) {
//     return `Hello your speed is ${speed}`;
//   }
// }
// const car = new Car2("mhmaoud", 24, "good");
// console.log(car.getSpeed(100));
// console.log(car.sayHello("100"));
//................................
// interface CAR {
//   name: string;
//   model: number;
//   Fun(): string;
// }
// class Car1 implements CAR {
//   name: string;
//   model: number;
//   constructor(name: string, model: number) {
//     this.name = name;
//     this.model = model;
//   }
//   Fun() {
//     return `you car model is ${this.name} ${this.model} `;
//   }
// }
// class Car2 extends Car1 {
//   color: string;
//   constructor(name: string, model: number, color: string) {
//     super(name, model);
//     this.color = color;
//   }
// }
// let user = new Car2("bmw", 2015, "red");
// console.log(user.Fun());
// interface Details {
//   name: string;
//   age: number;
//   Fun: () => string;
// }
// class Person1 implements Details {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   Fun() {
//     return `you name is ${this.name} and your age is ${this.age}`;
//   }
// }
// class Person2 extends Person1 {
//   degree: string;
//   constructor(name: string, age: number, degree: string) {
//     super(name, age);
//     this.degree = degree;
//   }
// }
// const ali = new Person2("mahmoud", 26, "Good");
// console.log(ali.Fun());
///.........................................Generic in class ..............
// class ConnectDb<T, S> {
//   constructor(public baseURL: T, public response: S) {
//     console.log(`the url is ${baseURL} and res is ${response}`);
//   }
// }
// const db1 = new ConnectDb<number, boolean>(12, true);
// const db2 = new ConnectDb<string, number>("www.facebook.com", 122);
// const db3 = new ConnectDb<number, boolean>(12, true);

///.........................................Generic in normal function ..............
// function sum<T>(num1: T, num2: T) {
//   return num1;
// }
// console.log(sum<number>(10, 10));

///.........................................Generic in arrow function ..............
// const sum = <T, S>(num1: T, num2: S) => {
//   return num1 + " " + num2;
// };
// console.log(sum<number, string>(10, "20"));
// console.log(sum<boolean, string>(true, "ali"));

// const fun = <T, S>(num1: T, num2: S) => {
//   return num1;
// };
// console.log(fun<number, number>(10, 10));
// console.log(fun<boolean, string>(true, "ali"));
// let cars: string[] = ["car1", "car2", "car3", 8];
// console.log(cars[0]);
// let cars: [string, number, boolean, Date] = ["car1", 22, true, new Date()];
// let myArr: [string, string, number[]] = ["ali", "sara", [22, 33]];
// console.log(myArr);
//.............................................
type Props = {
  firstName: string;
  lastName: string;
  data: {
    name: string;
    age?: number;
  };
};
const myObj: Props = {
  firstName: "mahmoud",
  lastName: "ali",
  data: {
    name: "aser",
  },
};
myObj.firstName = "alii";
console.log(myObj);
