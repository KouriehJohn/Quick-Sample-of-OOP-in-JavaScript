// function person(name, favColor) {
//   console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".");
// }

// var john = {
//   name: "John Doe",
//   favoriteColor: "blue"
// }

// person(john.name, john.favoriteColor);
// person("Jane Smith", "green");
//
// ^^^^^^^^^^^ Round 1 ^^^^^^^^^^^^^^^


// var john = {
//   name: "John Doe",
//   favoriteColor: "blue",
//   greet: function() {
//     console.log("Hello, my name is " + john.name + " and my favorite color is " + john.favoriteColor + "." );
//   }
// }

// john.greet()
//
// ^^^^^^^^^^^ Round 2 ^^^^^^^^^^^^^^^


function Person(fullName, favColor) {
  this.name = fullName;
  this.favoriteColor = favColor;
  this.greet = function() {
    console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Doe", "green");
jane.greet();

// ^^^^^^^^^^^^^ Round 3 ^^^^^^^^^^^^^^^^
