// დავალება 1:

let fruits = ["apple", "mango", "avocado", "kiwi"];

fruits.splice(fruits.length - 2, 1, "strawberry");
console.log(fruits); 

// დავალება 2:

let info = "good day";

let extractedWord = info.slice(5, 8);
console.log(extractedWord);

// დავალება 3:

function getStringLength(str) {
    return str.length;
}

let myString = "checkMyString";
let length = getStringLength(myString);

console.log(length);


// დავალება 4:


let numbers = [5, 25, 89, 120, 36];

numbers.push("javascript", "python");
numbers.unshift("html", "css");

console.log("myArrayLeght", numbers.length);

numbers.shift();
numbers.pop();

console.log(numbers);

// დავალება 5:


let fruits1 = ["ფორთოხალი", "ბანანი", "კივი"];

console.log(fruits1.length);

fruits1.push("ვაშლი", "ანანასი");
fruits1.unshift("საზამთრო");

console.log(fruits.length);

fruits1.splice(2, 0, "მანგო");
fruits1.shift();
fruits1.pop();

console.log(fruits1.length);

console.log(fruits1);

// დავალება 6:

let array3 = [1, 2, 3, 4, 5];

array3.splice(3, 0, 'a', 'b', 'c');

console.log(array3);

// დავალება 7:

let array7 = [15, 100, 25, 10, 36];

let index = array7.indexOf(10);

if (index !== -1) {
    array7.splice(index, 1);
}

console.log(array7);

// დავალება 8:

let array8 = [1, 2, 3, 4, 5];

let indexCheck = array8.indexOf(3);

if (indexCheck !== -1) {
    array8.splice(indexCheck, 1, "three");
}

console.log(array8);





