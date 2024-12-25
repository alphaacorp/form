$(document).ready(function () {
    $('#registrationForm').on('submit', function (event) {
        const name = $('#name').val();
        const email = $('#email').val();
        if (name.trim() === "" || email.trim() === "") {
            alert("Name and Email are required.");
            event.preventDefault(); // Prevent form submission
        }
    });
});
