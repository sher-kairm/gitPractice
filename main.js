//variable a data type used to store values such as integers strings boolean.

// var name = "Karima";
// var age = 20;
// var isMarried = false;
// var Defined_that = undefined;
// // console.log(name, age, isMarried, Defined_that)
// // console.log(`${name} type of name is ${typeof(name)}`)
// // console.log(`${isMarried} type of isMarried is ${typeof(isMarried)}`)
// // console.log(`${age} type of age is ${typeof(age)}`)
// // console.log(`${Defined_that} type of Defined_that  is ${typeof(Defined_that)}`)

// //Array stores multipule values
// var car =["Tecila", "Brown", "8C"]
// // onsole.log('Properties of car is given below', car, typeof(car))c
// console.log(car.length)
// console.log(car[1]);

//looping through an array using for and foreach loop
// console.log(car.length);
// for( var n of car){
//     console.log(n)
// }
// car.forEach(n, index => {
//     console.log(`${index}-${n}`);
// });



//Arthematic Operator 


// function add(a,b){
//    const sum = a+b
//      console.log(`Sum of ${a} and ${b} is: ${sum} `)
// }
// add(5,5)
// function sub(c,d){
//    const subt = c-d
//      console.log(`Subtraction of ${c} and ${d} is: ${subt} `)
// }
// sub(10,29)
// function mul(e,f){
//    const prodt = e*f
//      console.log(`Product of ${e} and ${f} is: ${prodt} `)
// }
// mul(2.5, 9.3)
// function Division(g,h){
//    const divide = g/h
//      console.log(`Division of ${g} and ${h} is: ${divide} `)
// }
// Division(24,5)
// function Modulus(i,j){
//    const modulus= i%j;
//      console.log(`Modulus of ${i} and ${j} is: ${modulus} `)
// }
// Modulus(30,8);

//loop
// for(var i =0; i<=10; i++){
//     console.log('Number is', i)
// }

// var students = [
// {    name : "Azra", age: 23},
// {    name : "Ali", age: 24},
// {    name : "Farheen", age: 22},
// {    name : "ishrat", age: 20},
// ]
// for(var i = 0; i <= students.length; i++){
//     console.log(students[i].name);
//     console.log(students[i].age);
//     console.log("--------------------")
// }

// Comparision and logical Operators
// console.log(10 == 10)
// console.log(10 < 10)
// console.log(10 <= 10)
// console.log(10 > 10)
// console.log(10 >= 10)
// console.log(10 != 10)

// // Logical Operator

// console.log("Logical Operators")
// console.log("AND Logical Operator &&")
// console.log(10 == 10 && 20 == 20 && 100 == 100)
// console.log(10==10 && 20 != 20)
// console.log("OR Logical Operator ")
// console.log(20 == 30 || 29 ==29);
// console.log(!((1 == 1)))
// if((10== 29)){
//     console.log(false)
// }


// console.log("Equality without type coercion and 3 equals")

// console.log(typeof 0 + " " + typeof false);
// console.log("0" == false, "'0' is equal to false");
// console.log(typeof 1 + " " + typeof "1", "type of 1 and '1'");
// console.log(1 =="1", "1 ==='1'")


// map filter and Reduce

// var map = [2, 4, 6, 8, 10].map(function(n) {
// return n *2
// })

// console.log()

// //Bitwise operator 

// const a = 29;
// const b = 3;
// console.log(10 & 1)
// // bitwise not operator inverts bits of its opend
// const c = 8;
// const d = -4;
// console.log(~c);
// console.log(~d)

// console.log(`Bitwie operator a & b is =  ${a & b} `)

// // bitwise AND ASSIGNMENT &=
// var odd = 9;
// odd &=9;
// console.log(`AND ASSIGNMENT is ${odd}`)

// // map filter and reduce

// console.log('Map |  filter | Reduce'  );

// var students = [1,3,4,5,6,7].map(function(n){
//     return n * 2;
// });
// console.log(students)

// //filter 
// var num = [3,9,5,6,3,6,7,3,2,6,7,8,9].filter(function(n){
//     return n % 2 == 0;
// })
// console.log(`Number of odd numbers are${num}`);
// // Reduce 
// var reduce =[3,9,5,6,3,6,7,3,2,6,7,8,9].reduce(function(accumulator, current){
//     return accumulator + current;
// })
// console.log(reduce)

// Callbacks ----> a funciton that is executed inside another funciton
// function callbackExample(name, callback){
// console.log((name))
// }
// callbackExample('Karima', function(name){
//     return "Hello Dear "+name
// });


// var callback = function(name) {
//     return "Hello " + name;
// }
// callbackExample("Karim", callback)
// import * as Math from './Math'

// Template String

// console.log(`Template Literals`)
// const myName = 'karim';
// const myAge = 22;
// const degree = 'BS RS & GIS'
// console.log(`I'm ${myName} ${myAge} years old and my education degree is ${degree}`)

//Spread operator

// const arrayOne = ['afsar','shahzad','nawab','naseeba', 'karim', 'sarir', 'karim'];
// const arrayTwo = ['Arshad', 'farman', 'ambar', 'rahat', 'tawakal', 'nadia', 'saliha'];

// const concatArray = [...arrayOne, ...arrayTwo]
// concatArray.forEach(function(name){
//     console.log(name)
// });

// const name = 'afsar';
// const nameToArray = [...name];
// nameToArray.forEach(function(letter){
//     console.log(letter)
// });

// const addNumbers = function(n1,n2,n3){
//     return n1 + n2 +n3;
// }

// const numbers = [4, 6,3];

// const addition = addNumbers(...numbers)
// console.log(addition)

// const address = {
//     city: "Gilgit",
//     countary: "Pakistan",
//     postcode: 15100
// };
// const fullName = {
//     firstName: 'Sher',
//     lastName: 'Karim',
// };
// const person = {...address, ...fullName};
// console.log(JSON.stringify(person, null, 2 ))

//Arrow funciotn

// const hello = ()=>{
//     const es6 = 'ES6';
//     return `Hello ${es6}`
// }

// const power = [3,4,6,9].map((num,index)=>Math.pow(num,index));

// const add =((n1, n2) => n1 +n2)

// const milesToKm = miles =>miles * 1.60934;  
// console.log(hello())
// console.log(power)
// console.log(add(89, 82))
// console.log(milesToKm(100))

//Lexical this
// const person = {
//     name: 'Alex',
//     cars:['ferrari','lambo'],
//     toString: function(){
//         this.cars.forEach((car)=>{
//             console.log(`${this.name} has ${car}`)
//         })
// }
// // person.toString()
// }

//Enhanced Object Properties
// const calculator = name =>{
//     return {
//         name,
//         add: (n1,n2)=>{
//             return n1 + n2;
//         } 
//     }
// }
// const calc = calculator(43)
// console.log(calc.add(3, 23))


//Array Destructring
// const names = ['Ali','muiz', 'saleem','hussnain','abid','nasir','zailan'];
//  const [Ali, , muiz,...restOfNames] = names
// console.log(`${'Ali'} ${'saleem'}`)
// console.log(restOfNames)
// console.log(`Length of rest  of array is ${restOfNames.length}`)

// //OBject Destructring
// const  userProfile = () => {
//   return {
//       name: 'karim',
//       fullName: 'Sher Karim',
//       gender: 'male',
//       address:{
//           permanent: 'Village and P/O shimshal Tehsil Gulmit Gojal District Hunza',
//           Temprary: 'Sulaiman House near Tourism directrate office sonikot gilgit',
//       },
//       countary: 'Pakistan',
//       city: 'Gilgit',
//   }
// };

// const user = userProfile();

// // const name = user.name;
// // const gender = user.gender;
// const countary = user.countary;
// const address = user.address.Temprary;
// const surename = user.fullName;

// const {name,gender,address:{Temprary:resedintalAddress} }= user

// console.log(`My nick name is ${name}`);
// console.log(`my gender status is ${gender}`);
// console.log(`my address is ${resedintalAddress}`)
// console.log(`My contary name is ${countary}`)
// console.log(`My full name is ${surename}`);

// class 
// class Person{
//     constructor(name, age){
//         console.log(`${name} is a student and programmer`);
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         console.log(`${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`${this.name} is sleeping`);
//     }

//     work(){
//         console.log(`${this.name}is working`);
//     }
// }

// const karim = new Person ('Karim',2);
// karim.eat();
// karim.sleep();
// karim.work();
// karim.sleep();




// class Student extends Person {
//     constructor(name, age,study){
//         super(name, age)
//         this.study = study;
//     }
//      logStudy(){
//          console.log(`${this.name} is ${this.age} years old`)
//     }
//     logAge(){
//         super.logAge;
//     }
// }

// const student = new Student('sarir', 12)
// student.logStudy()
// student.logAge()


// class Laptop {
//     constructor(company, generation, graphics, price){
//         this.company = company;
//         this.generation = generation;
//         this.graphics = graphics;
//         this.price = price;
//         console.log(`I have a ${company} laptop of ${generation} with ${graphics} and price is ${price}`)
//     }
// }
//  const mylaptop= new Laptop('Lenovo', '3rd generation', '2.8 graphics', 300000)

//  class Hp extends Laptop {
//      constructor(company, generation, graphics, price,hardDisk, weight,){
//         super(company, generation, graphics, price, )
//          this.disk = hardDisk;
//          this.weight = weight;
//          console.log(`my hp laptop have ${hardDisk} and is  ${weight},weight`);
//      };
//  };

//  const myhp =new Hp ('hp','5th','HDDR HardDisk', 'Lite', '3000 graphics ' , 500000);


//Creating Promesis
const promise = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve('Data back from the server ')
    },3000);
});
promise.then(response =>{
   console.log(response);
}).catch(error =>{
    console.log(error);
})

// Promise.all([namesPromise, surnamesPromise]).then(data =>{
//     const [names, surname]=data;
//     for(var i = 0; i < names.length; i++){
//         const name = names[i];
//         const surname = surname[i];
//         console.log(`${name} ${surname}`)
//     }
// });

// const getRandomUsers = n => {
//     const fetchRandomUsers = fetch()
// }

const getNumbers = function (){
    yield 1;
    yield "hello";
    yield true;
    yield {name:'Alex'};
    return "i am done";
}

