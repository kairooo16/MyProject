document.addEventListener("DOMContentLoaded", function () {
    // Toggle navigation menu for smaller screens
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });
    }

    // Form submission handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            const email = document.getElementById('email')?.value;
            const password = document.getElementById('password')?.value; // Ensure correct ID
            const message = document.getElementById('message')?.value;

            if (email && password && message) {
                alert(`Form submitted!\nEmail: ${email}\nPassword: ${password}\nMessage: ${message}`);
            } else {
                alert("Please fill out all fields before submitting.");
            }
        });
    }

    // Highlight a row when the user hovers over the table
    const tableRows = document.querySelectorAll('table tbody tr');
    if (tableRows.length > 0) {
        tableRows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                row.style.backgroundColor = '#f1f1f1'; // Highlight row
            });
            row.addEventListener('mouseleave', () => {
                row.style.backgroundColor = ''; // Reset row color
            });
        });
    }

    // Display a welcome message with the current date
    const welcomeMessage = document.querySelector('#home h1');
    if (welcomeMessage) {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();
        welcomeMessage.innerHTML = `Welcome to MarketPlace - ${formattedDate}`;
    }

    // Toggle car image size when clicked
    const carImages = document.querySelectorAll('.card img');
    if (carImages.length > 0) {
        carImages.forEach(image => {
            image.addEventListener('click', () => {
                image.classList.toggle('enlarged');
            });
        });
    }
});
