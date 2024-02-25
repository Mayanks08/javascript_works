
//Function to calculate BMI
function calculateBMI(weight, height) {
    // Ensure height is in meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Round BMI to two decimal places
    return bmi.toFixed(2);
}

// Function to handle form submission
function calculateAndDisplayBMI() {
    const age = parseFloat(document.getElementById("age").value);
    const gender = document.querySelector('input[name="radio"]:checked').id;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    // Check if all input values are valid
    if (!isNaN(age) && !isNaN(height) && !isNaN(weight)) {
        const bmi = calculateBMI(weight, height);
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `Your BMI is: ${bmi}`;

        // Store BMI value in local storage
         localStorage.setItem("bmiValue", bmi);
    } else {
        alert("Please enter valid age, height, and weight.");
    }

    // Prevent the form from submitting
    return false;
}

// Add event listener to the form
const form = document.getElementById("form");
form.addEventListener("submit", calculateAndDisplayBMI);

//Retrieve BMI value from local storage and display it on page load
window.onload = function () {
    const savedBMI = localStorage.getItem("bmiValue");
    if (savedBMI) {
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `Your BMI is: ${savedBMI}`;
    }
};


// function calculateAndDisplayBMI() {
//     const age = parseFloat(document.getElementById("age").value);
//     const gender = document.querySelector('input[name="radio"]:checked').id;
//     const height = parseFloat(document.getElementById("height").value);
//     const weight = parseFloat(document.getElementById("weight").value);

//     // Check if all input values are valid
//     if (!isNaN(age) && !isNaN(height) && !isNaN(weight)) {
//       const bmiData = calculateBMI(weight, height);
//       const bmi = bmiData.bmi;
//       const bmiCategory = bmiData.bmiCategory;

//       const resultElement = document.getElementById("result");
//       resultElement.innerHTML = `Your BMI is: ${bmi}. You are ${bmiCategory}.`;

//       // Store BMI value in local storage
//       localStorage.setItem("bmiValue", bmi);
//     } else {
//       alert("Please enter valid age, height, and weight.");
//     }

//     // Prevent the form from submitting
//     return false;
//   }

//   function calculateBMI(weight, height) {
//     // Ensure height is in meters
//     const heightInMeters = height / 100;

//     // Calculate BMI
//     const bmi = weight / (heightInMeters * heightInMeters);

//     // Round BMI to two decimal places
//     const roundedBmi = bmi.toFixed(2);

//     // Classify BMI into different categories
//     let bmiCategory;
//     if (roundedBmi < 18.5) {
//       bmiCategory = "Underweight";
//     } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
//       bmiCategory = "Healthy";
//     } else if (roundedBmi >= 25 && roundedBmi <= 29.9) {
//       bmiCategory = "Overweight";
//     } else if (roundedBmi >= 30 && roundedBmi <= 34.9) {
//       bmiCategory = "Obese";
//     } else if (roundedBmi >= 35) {
//       bmiCategory = "Extremely obese";
//     }

//     // Return BMI and BMI category
//     return { bmi: roundedBmi, bmiCategory };
//   }

//   // Add event listener to the form
//   const form = document.getElementById("form");
//   form.addEventListener("submit", calculateAndDisplayBMI);
