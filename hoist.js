//* Practice Assignment - read code the same way the interpreter does

// Rewrite the code the way it would be seen by the interpreter and predict the output

//? Given
// console.log(example); // prints undefined
// var example = "I'm the example!";

//? After hoisting by the interpreter
// var example;
// console.log(example); // output -> undefined
// example = "I'm the example!";

//? ES6 syntax -> js structure - js version
// console.log(example); // still undefined
// let example = "I'm the example!";

//* 1
console.log(hello); // output -> undefined
var hello = "world";

//? After hoisting by the interpreter
// var hello;
// console.log(hello); // output -> undefined
// hello = 'world'; // the assignment stays where it is

//* 2
var needle = "haystack";
test();
function test() {
    var needle = "magnet";
    console.log(needle);
}

//? After hoisting by the interpreter
// var needle; // declaratation is hoisted to the top of the global scope

// function test() {
//     var needle; // declaration is hoisted to the top of the local scope
//     needle = 'magnet'; // assignement for local scope
//     console.log(needle); // output -> 'magnet' - the needle value for local scope
// }

// needle = 'haystack'; // assignment for the global scope
// test(); // call the function
// if there was this was her console.log(needle); // output -> 'haystack' - the needle value for the global scope

//* 3
var brendan = "super cool";

function print() {
    brendan = "only okay";
    console.log(brendan);
}

console.log(brendan);

//? After being hoisted by the interpreter
// var brendan; // gets hoisted to the top of the global scope - declaration for the global scope

// function print() {
//     brendan = 'only okay'; // declaration for the local scope
//     console.log(brendan); // output -> nothing
//     //! function won't output nothing since the function was not called
// }

// brendan = 'super cool'; // assignment for the globale scope
// console.log(); // output -> 'super cool'

//* 4
var food = "chicken";
console.log(food);
eat();

function eat() {
    food = "half-chicken";
    console.log(food);
    var food = "gone";
}

//? After being hoisted by the interpreter
// var food; //declaration hoisted to the top of the global scope

// function eat() {
//     var food; // declaration for the local scope
//     food = 'half-chicken'; // assignment for the local scope -> stays where it is
//     console.log(food); // outout -> 'half-chicken'
// }

// food = 'chicken'; // assignment for the global scope
// eat(); // function called
// console.log(food); // output -> 'chicken' - value for global scope

//* 5
// mean();
// console.log(food);
var mean = function () {
    food = "chicken";
    // console.log(food);
    var food = "fish";
    // console.log(food);
};

// console.log(food);

//? the this will not run for the syntax error
// mean is not a function but a variable housing a function

//* 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}

console.log(genre);

//? After being hoisted by the interpreter
var genre; // declaration hoisted to the top of global scope
console.log(genre); // output -> undefined -> since there var has only the variable name and no value for the variable

function rewind() {
  var genre; // declaration hoisted to the top of the local scope
  genre = "rock"; // assignment for local scope
  console.log(genre); // output -> "rock";

  genre = "r&b"; // new declaration for local scope
  console.log(genre); // output -> "r&b";
}

rewind(); // invoke the function
genre = "disco"; // assignment for the global scope
console.log(genre); // output -> "disco"

//* 7
dojo = "san jose";
console.log(dojo);
learn();

function learn() {
    dojo = "seattle";
    var dojo = "burbank";
    console.log(dojo);
}

console.log(dojo);

//? After being hoisted by the interpreter
// dojo = "san jose" // assignment for the global scope -> it stays where it is
// console.log(dojo); // output -> " san jose"

// function learn() {
//     var dojo; // declaration for the local scope
//     dojo = "seattle"; // assignment
//     dojo = "burbank"; // new assignment for local scope
//     console.log(dojo); // output -> "burbank"
// }

// learn(); // invoke the function
// console.log(dojo); // output -> "san jose"

//* 8 Bonus ES6: const
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));

// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;

//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }

//     else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }

//? Not going to run due too syntax error -> tried to assign a new value to a const variable
