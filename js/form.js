// Select the contact form and its input fields
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Handle form submission
contactForm.addEventListener('submit', event => {
    event.preventDefault(); // Prevent default form submission

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Validate inputs
    if (!name || !email || !message) {
        displayError('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        displayError('Please enter a valid email address.');
        return;
    }

    // If validation passes, display success and reset form
    displaySuccess('Message sent successfully!');
    contactForm.reset();
});

// Validate email using regex
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Display error messages
function displayError(message) {
    const errorElement = document.getElementById('form-error');
    errorElement.textContent = message;
    errorElement.style.color = 'red';
    errorElement.style.display = 'block';
}

// Display success messages
function displaySuccess(message) {
    const successElement = document.getElementById('form-success');
    successElement.textContent = message;
    successElement.style.color = 'green';
    successElement.style.display = 'block';

    // Hide the success message after 3 seconds
    setTimeout(() => {
        successElement.style.display = 'none';
    }, 3000);
}
