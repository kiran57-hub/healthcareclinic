

// Function to calculate BMI
function calculateBMI() {
    // Get weight and height values
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    // Validate input
    if (weight <= 0 || height <= 0) {
        alert('Please enter valid values for both weight and height.');
        return;
    }

    // Calculate BMI
    let bmi = weight / (height * height);

    // Display BMI result
    let bmiResult = document.getElementById('bmi-result');
    bmiResult.textContent = `Your BMI is: ${bmi.toFixed(2)}`;

    // Add category of BMI
    if (bmi < 18.5) {
        bmiResult.textContent += " (Underweight)";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiResult.textContent += " (Normal weight)";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiResult.textContent += " (Overweight)";
    } else {
        bmiResult.textContent += " (Obesity)";
    }
}

// Form submission for appointment request
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Simple form validation
    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }

    // Display confirmation message
    let formResponse = document.getElementById('form-response');
    formResponse.textContent = `Thank you, ${name}! Your appointment request has been submitted. We'll get back to you soon.`;
    formResponse.style.color = 'green';
    
    // Optionally clear the form
    document.getElementById('contact-form').reset();
});
