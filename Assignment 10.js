 // Define the array of fruits
 const fruits = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

 // Access the ul element where fruits will be listed
 const fruitsList = document.getElementById("fruitsList");

 // Loop through the fruits array and create list items
 fruits.forEach(function(fruit) {
     const listItem = document.createElement("li"); 
     listItem.textContent = fruit; 
     fruitsList.appendChild(listItem); 
 });





 // Define the initial array of numbers
 let numbers = [1, 2, 3, 4, 5];
 const arrayOutput = document.getElementById("arrayOutput");

 // Function to display the current array
 function displayArray() {
     arrayOutput.textContent = numbers.join(', '); // Display the array as a comma-separated string
 }

 // Event listener for adding an element to the array
 document.getElementById("addButton").addEventListener("click", function() {
     const newNumber = parseInt(prompt("Enter a number to add:"));
     if (!isNaN(newNumber)) {
         numbers.push(newNumber);
         displayArray();
     } else {
         alert("Invalid input. Please enter a valid number.");
     }
 });

 // Event listener for removing an element from the array
 document.getElementById("removeButton").addEventListener("click", function() {
     if (numbers.length > 0) {
         numbers.pop();
         displayArray();
     } else {
         alert("Array is empty. Nothing to remove.");
     }
 });

 // Event listener for finding the index of an element in the array
 document.getElementById("findIndexButton").addEventListener("click", function() {
     const searchNumber = parseInt(prompt("Enter a number to find its index:"));
     const index = numbers.indexOf(searchNumber);
     if (index !== -1) {
         alert(`Index of ${searchNumber} in the array: ${index}`);
     } else {
         alert(`${searchNumber} is not found in the array.`);
     }
 });

 // Initial display of the array
 displayArray();
