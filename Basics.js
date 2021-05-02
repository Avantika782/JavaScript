console.log("Hii there");
var name = "AS";
console.log(name);
console.log(NaN === NaN);
console.log(Number.NaN === NaN);
console.log(isNaN(NaN));
console.log(isNaN(Number.NaN));
console.log(Number.isNaN(NaN));
var a = 10;
var b = 15;
console.log(a != b);
var arr = [1, 2, 3, 4, 5, 6, 7, 9];
console.log(arr.indexOf(3));

let arr1 = [2, 3, 4, 5, 6, 8];
let arr2 = arr1.map((curElem) => curElem * 2).filter((curElem) => curElem > 10).reduce((accumulator, curElem) => {
    return accumulator += curElem;
});
console.log(arr2);


const arr3 = [
    [1, 2],
    [3, 4, 5],
    [6, 7, 8, 9]

]

let flatarr = arr3.reduce((accum, currVal) => {
    return accum.concat(currVal);
})

console.log(flatarr);

let myname = "Avantika";
let yname = new String("Singh");
console.log(myname);
console.log(yname);
console.log(myname.length);

//slice() method

var str = "Apple, Banana, Kiwi";
var str1 = str.slice(5, -2);
console.log(str1);

//substring() method
var str2 = "Apple, Banana, Kiwi";
var str3 = str2.substring(5, 8);
console.log(str3);

//substr() method
var str4 = "Apple, Banana, Kiwi";
//var str5 = str4.substr(7, 1);
var str5 = str4.substr(-10);
console.log(str5);

//replace() method - case sensitive replaces first match of the string
let var2 = "I am avantika singh avantika";
let var3 = var2.replace("avantika", "Avantika");
console.log(var3);

//charAt() method
let str8 = "Avantika Singh";
console.log(str8.charAt(1));

//charCodeAt() method - returns unicode UTF-8
console.log(str8.charCodeAt(1));

//Property Access
//ECMA 5 allowsproperty acces [] on strings
console.log(str8[0]);
console.log(str8.toLowerCase());
let fname = "Avantika";
let lname = "Singh";
console.log(fname + lname);
console.log(fname.concat(lname));
console.log(fname.concat(" ", lname));
console.log(`${fname} is my ${lname}`);

//trim() method - removes whitespace from both sides of the string

let vsgg = "      HELOO   WOFK      ";
console.log(vsgg.trim());

//split() method - converts string to an array
var txt = "a, b, Avantikac, d,e";
console.log(txt.split(","));
console.log(txt.split(" "));
console.log(txt.split("Avantika"));

//new Date() method
console.log(Date());
let currDate = new Date();
console.log(currDate);
console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date().toString());
console.log(Date.now());

//Time method
const curTime = new Date();
console.log(curTime.getTime());
console.log(curTime.getHours());
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());

const surTime = new Date();
//console.log(surTime.setTime());
console.log(surTime.setHours(23));
console.log(surTime.setMinutes(34));
console.log(surTime.setSeconds(53));
console.log(surTime.setMilliseconds(353));
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().toLocaleString());

//Math object
console.log(Math.PI);
let num1 = 10.864672;
console.log(Math.round(num1));
console.log(Math.pow(2, 3));
console.log(2 ** 3);
console.log(Math.sqrt(81));
console.log(Math.abs(-50.1));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.4));
console.log(Math.min(132, 47, -3));
console.log(Math.max(132, 47, -3));
console.log(Math.floor(Math.random() * 10));
//trunc return integer part of a number
console.log(Math.trunc(132.213));
console.log(Math.trunc(-3.26));

//this object
const obj = {
    myName: "Avantika",
    myAge() {
        console.log(this);
    }
}

obj.myAge();

let bioData = {
    myName: {
        realName: "Avantika Singh",
        nickName: "Ujjaini"
    },
    myAge: 20,
    getData() {
        console.log(`My name is ${this.myName.realName} and my age is ${this.myAge}`);
    }
}

bioData.getData();

//spread operator
const colors = ['red', 'green', 'yellow'];
const myfavcolors = [...colors, 'pink', 'black'];
console.log(myfavcolors);

//array includes
const ispresent = colors.includes('purple');
console.log(ispresent);

//flat() method


//Object.values()
//Object.entries()

const person = { name: 'Avantika', age: 87 };
console.log(Object.values(person));
console.log(Object.entries(person));

// spread operator in object
const sperson = { ...person };
console.log(sperson);

//flat() method

const arr10 = [
    [1, 2],
    [3, 4, 5],
    [6, 7, 8, [10, 9, 11]]

]
console.log(arr10.flat(2));
//we can use flat(Infinity) to flat to whatever levels we want
//flatmap
//Object.fromEntries

let oldNum = Number.MAX_SAFE_INTEGER;
console.log(oldNum);


//CALCULATOR
//Higher order function
//CallBack function-function under another function

const subs = (a, b) => {
    return Math.abs(a - b);
}

const add = (a, b) => {
    return a + b;
}


console.log(add(2, 5));

const mul = (a, b) => {
    return a * b;
}

const calculator = (num1, num2, operator) => {
    return operator(num1, num2);
}

console.log(calculator(5, 2, add));

