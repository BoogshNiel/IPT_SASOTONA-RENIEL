function validateForm() {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    let errorMessage = document.getElementById('errorMessage');
    let successMessage = document.getElementById('successMessage');

    // Clear previous messages
    errorMessage.textContent = '';
    successMessage.style.display = 'none';

    // Basic validation
    if (fullName === "" || email === "" || message === "") {
        errorMessage.textContent = "Full Name, Email, and Message are required!";
        return false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address!";
        return false;
    }

    // Optional: Validate phone number if entered
    if (phone && !/^\+?\d{10,15}$/.test(phone)) {
        errorMessage.textContent = "Please enter a valid phone number!";
        return false;
    }

    // If everything is valid, show success message
    successMessage.style.display = 'block';
    document.getElementById("contactForm").reset(); // Reset form after success
    return false; // Prevent actual form submission for demonstration
}
