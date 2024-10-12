// console.log("Hello World");

// int number = 5

// var
// let
// const

// String
// Boolean
// Number
// Object
// null
// undefined
// BigInt
// Symbol 

// alert("Hello World");

// let name = prompt("What is your name?");
// alert("Welcome, " + name);

// let check = confirm("Retake?");

// alert(check ? 'Yes' : 'No');

// let number = 5;

// console.log(number);
// console.log(typeof(number))

// number = "5";

// console.log(number);
// console.log(typeof(number))
// // + - * / % 
// // > < >= <= != == ===

// console.log(5 == "5");
// console.log(5 === "5");
// console.log(1 - "1");
// console.log(("b" + "a" + + "a" + "a").toLowerCase());
// console.log(NaN)

// if (true+true+true === 3){
//     console.log('true')
// }else{
//     console.log('false');
// }

// console.log('');

// && || ?? ?

// "" || 0 

// let str = "";

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// let i = 0;

// while (i< 10){
//     console.log(i);
//     i++;
// }

// console.log("hello\nworld")

// public static void sayHello()


// function sayHello(){
//     console.log('hello');
// }

// const sayHello = () => {
//     console.log('hello');
// }

// sayHello();

const arr = ["red", "yellow", "black", "blue", "green"];

const body = document.querySelector("body");

setInterval(() => {
    body.style.background = arr[Math.floor(Math.random()*5)]
}, 3000)