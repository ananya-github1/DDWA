document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission to a server (use AJAX for real backend interaction)
    console.log(`Form submitted with name: ${name}, email: ${email}, message: ${message}`);
    alert('Thank you for reaching out!');

    // Clear the form
    document.getElementById('contact-form').reset();
});

document.getElementById('book-counseling-btn').addEventListener('click', function () {
    alert('Booking an appointment feature coming soon!');
});
