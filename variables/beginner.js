import fs from 'fs';

const outputName = "Alejandro";

let var1 = "variable 1";
let var2 = "variable 2";

var2 = [var1, var2];
var1 = var2[1];
var2 = var2[0];

console.log(`Hello ${outputName}`)
console.log(`Variable 1: ${var1} - Variable 2: ${var2}`);

function isEven(n) {
    return n % 2 == 0;
}

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

console.log(`FizzBuzz: ${fizzBuzz(20)}`);

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

function memoize(fn) {
    if (typeof fn !== 'function') {
        console.log('Not a function');
        return;
    }

    const code = fn.toString();
    let cache = {};

    if (!fs.existsSync('cache.json')) {
        fs.writeFileSync("cache.json", JSON.stringify(cache));
    }
    cache = JSON.parse(fs.readFileSync("cache.json"));
    console.log(`CACHE: ${cache}`);
    if (Object.keys(cache).length > 0) {
        console.log(cache[code]);

        if (cache[code] !== undefined) {
            return cache[code];
        } else {
            const answer = fn(37);
            cache[code] = answer;
            fs.writeFileSync("cache.json", JSON.stringify(cache));
            return cache[code];
        }
    } else {
        const answer = fn(37);
        cache[code] = answer;
        console.log(JSON.stringify(cache, null, 2));
        fs.writeFileSync("cache.json", JSON.stringify(cache));
    }
}


const timeStart = Date.now();
console.log(`Fibbonacci number ${memoize(slowFibomierda)}`)

const elapsedTime = Date.now() - timeStart;
console.log(`Elapsed Time: ${elapsedTime}ms`);
