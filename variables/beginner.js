import fs from 'fs';

// Basic varible control

const outputName = "Alejandro";

let var1 = "variable 1";
let var2 = "variable 2";

var2 = [var1, var2];
var1 = var2[1];
var2 = var2[0];

console.log(`Hello ${outputName}`)
console.log(`Variable 1: ${var1} - Variable 2: ${var2}`);

// Basic function working

function isEven(n) {
    return n % 2 == 0;
}

// This was my air-istotle moment

function sumRange(a, b) {
    let distance = b - a + 1;
    let square = distance * a;
    let realDis = distance - 1;
    let piramid = realDis * (realDis + 1) / 2;
    return square + piramid;
}

const numbers = [1, 2]

console.log(`Number A: ${numbers[0]} is ${isEven(numbers[0]) ? "even" : "odd"}`)
console.log(`Number B: ${numbers[1]} is ${isEven(numbers[1]) ? "even" : "odd"}`)

console.log(`Piralol function: ${sumRange(5, 10)}`);

function fizzBuzz(n) {
    const array = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                array.push("FizzBuzz");
            } else {
                array.push("Fizz");
            }
        } else if (i % 5 == 0) {
            array.push("Buzz");
        } else {
            array.push(i);
        }
    }
    return array;
}

// Probably this would work better
/*
function fastBuzz(n) {
    const r = "";
    if (n % 3 == 0) r += "Fizz";
    if (n % 5 == 0) r += "Buzz";
    
    return r;
}
*/

console.log(`FizzBuzz: ${fizzBuzz(20)}`);

// I prefer to build an hand-maded algorithm instead use Set (Idk what Set does)

function unique(arr) {
    const array = [];
    console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        let match = false;
        for (let c = 0; c < array.length; c++) {
            match = arr[i] == array[c];
        }
        if (!match) {
            array.push(arr[i]);
        }
    }

    return array;
}

const noUnique = [1, 2, 2, 3, 1, 5];
console.log(`Unique: ${unique(noUnique)}`);

function flatten(arrOfArrs) {
    const array = []
    for (let i = 0; i < arrOfArrs.length; i++) {
        for (let c = 0; c < arrOfArrs[i].length; c++) {
            array.push(arrOfArrs[i][c]);
        }
    }
    return array;
}

const arrOfArrs = [
    [1, 2],
    [3, 4],
    [5]
];

console.log(`Flatten: ${flatten(arrOfArrs)}`);

// This was my second air-istotle moment

function fibonacci(slop) {
    const fibonacciArray = [0, 1];
    for (let i = 0; i < slop - 1; i++) {
        const newFibonacci = fibonacciArray[0] + fibonacciArray[1];
        fibonacciArray[0] = fibonacciArray[1];
        fibonacciArray[1] = newFibonacci;
    }

    return fibonacciArray[1];
}

function slowFibomierda(n) {
    if (n <= 1) {
        return n;
    }
    return slowFibomierda(n - 1) + slowFibomierda(n - 2);
}

// This is clousure? Was more easy than I can imagine

function memoize(fn) {
    const cache = {};
    return function (n) {
        if (cache[n] !== undefined) return cache[n];
        cache[n] = fn(n);
        return cache[n];
    };
}


let timeStart = Date.now();

function setMark() {
    timeStart = Date.now();
}

function displayTime(startTime) {
    let elapsedTime = Date.now() - timeStart;
    console.log(`Elapsed Time: ${elapsedTime}ms`);
}

setMark();
console.log(`LOL: ${fibonacci(1000)}`);
displayTime(timeStart);


setMark();
const fastFib = memoize(slowFibomierda);
console.log(fastFib(37));
displayTime(timeStart);

setMark();
console.log(fastFib(37));
displayTime(timeStart);

const inputA = ["El pepe", "22", "Mexico"];
const inputB = ["Ete sech", "99", "Colombia"];

// Attempt to parse

function parseData(data) {
    const obj = { name: "", age: "", country: "" };
    obj.name = data[0];
    obj.age = data[1];
    obj.country = data[2];
    return obj;
}

console.log(`Data A: ${JSON.stringify(parseData(inputA))}`);
console.log(`Data B: ${JSON.stringify(parseData(inputB))}`);

const localPath = "./esotilin.json";

function read(path) {
    return JSON.parse(fs.readFileSync(path));
}

console.log(`Read File ${localPath}: ${Object.values(read(localPath))}`)

