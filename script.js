// Assignment 6(a)


// Function to handle button click event
function handleClick() {
  // Display an alert when the button is clicked
  alert("Button Clicked!");
}

// Get the button element by its ID
var button = document.getElementById("myButton");

// Add an event listener to the button for the click event
button.addEventListener("click", handleClick);

// (b)


// Get the div element by its ID
var div = document.getElementById("myDiv");

// Function to handle mouseover event
function handleMouseOver() {
  // Change the background color when mouse hovers over the div
  div.style.backgroundColor = "#ffcc00"; // Example color
}

// Function to handle mouseout event
function handleMouseOut() {
  // Revert the background color to its original state when mouse moves out
  div.style.backgroundColor = "#ccc"; // Default color
}

// Add event listeners to the div for mouseover and mouseout events
div.addEventListener("mouseover", handleMouseOver);
div.addEventListener("mouseout", handleMouseOut);


// Assignment 7(a)
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the value of the username input field
  var usernameInput = document.getElementById("username").value;

  // Regular expression to validate alphanumeric characters
  var alphanumericRegex = /^[a-zA-Z0-9]+$/;

  // Check if the username is at least 5 characters long and contains only alphanumeric characters
  if (usernameInput.length >= 5 && alphanumericRegex.test(usernameInput)) {
    // Validation passes, display success message
    alert("Username validation passed. Success!");
  } else {
    // Validation fails, display error message
    alert("Username validation failed. Please enter a username with at least 5 characters and containing only letters and numbers.");
  }
});

// (b)

// Get the button and hidden div elements by their IDs
var button = document.getElementById("toggleButton");
var div = document.getElementById("hiddenDiv");

// Function to handle button click event and toggle the visibility of the div
function toggleDiv() {
  if (div.style.display === "none") {
    div.style.display = "block"; // Show the div
  } else {
    div.style.display = "none"; // Hide the div
  }
}

// Add event listener to the button for click event
button.addEventListener("click", toggleDiv);


// Assignment 8(a)
function simulateAsyncOperation(shouldSucceed) {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation with setTimeout
      setTimeout(() => {
        if (shouldSucceed) {
          resolve("Asynchronous operation successful.");
        } else {
          reject("Asynchronous operation failed.");
        }
      }, 2000); // Simulate a delay of 2 seconds
    });
  }
  
  // Example usage:
  // Simulate a successful asynchronous operation
  simulateAsyncOperation(true)
    .then((successMessage) => {
      console.log(successMessage);
    })
    .catch((errorMessage) => {
      console.error(errorMessage);
    });
  
  // Simulate a failed asynchronous operation
  simulateAsyncOperation(false)
    .then((successMessage) => {
      console.log(successMessage);
    })
    .catch((errorMessage) => {
      console.error(errorMessage);
    });

    // (b)
    function fetchData() {
        return new Promise((resolve, reject) => {
          // Simulate fetching data with setTimeout
          setTimeout(() => {
            // Simulated fetched data
            const data = { id: 1, name: "Example Data" };
            resolve(data);
          }, 2000); // Simulate a delay of 2 seconds
        });
      }
      
      function processData(data) {
        return new Promise((resolve, reject) => {
          // Simulate processing the fetched data with setTimeout
          setTimeout(() => {
            // Simulated processed data
            const processedData = { ...data, processed: true };
            resolve(processedData);
          }, 2000); // Simulate a delay of 2 seconds
        });
      }
      
      // Chain promises to fetch and process data in sequence
      fetchData()
        .then(data => {
          console.log("Data fetched:", data);
          return processData(data); // Return a promise for chaining
        })
        .then(processedData => {
          console.log("Data processed:", processedData);
          console.log("Final result:", processedData);
        })
        .catch(error => {
          console.error("Error:", error);
        });
      
