console.log("Hello world");

// Set a immutable (can't be changed) variable
const dontChangeMe = "1978-12-22";

// Set a mutable (can be changed) variable
let changeMe = "Diablo";

// Create an array
const myArray = [1, 3, 5, 7, "boo"];

// Add item to the end of an array
myArray.push("my item");

// Add item to the beginning of the array
myArray.unshift("my first item");

// Remove an item from end of the array
myArray.pop();

// Remove an item from the beginning of the array
myArray.shift();

// Using the Array.map() method
myArray.map(function (item) {
    console.log(item);
});

// Using the Array.filter() method
const leftOver = myArray.filter(function (item) {
    if (item > 3) {
        return true;
    } else {
        return false;
    }
});
console.log(leftOver);

// Using the Array.find() method
const first = myArray.find(function (item) {
    if (item === 5) 
    {
        return true;
    } 
    else 
    {
        return false;
    }
});
console.log(first);

// Add an event listener to an element
const image = document.querySelector('img');
image.addEventListener("click", function () {
    console.log("Image was clicked");
    alert("Image was clicked");
});