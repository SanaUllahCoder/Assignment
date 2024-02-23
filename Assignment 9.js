// Define the software company object
const softwareCompany = {
    name: "Sana Ullah Siddiqui",
    founder: "Sana Ullah Siddiqui",
    yearFounded: 2006,
    products: ["InnoSuite", "DataSync", "CyberGuard"]
};

// Access and log some properties to the console
console.log("Company Name:", softwareCompany.name);
console.log("Founder:", softwareCompany.founder);
console.log("Year Founded:", softwareCompany.yearFounded);


// Define the car object
const car = {
    brand: "Bentley",
    model: "Bentley",
    year: 2024,
    drive: function() {
        console.log("The " + this.brand + " " + this.model + " is being driven.");
    }
};

// Call the drive method on the car object
car.drive();
