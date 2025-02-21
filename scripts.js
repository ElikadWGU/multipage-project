document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        const email = document.getElementById("email").value;
        const confirmEmail = document.getElementById("confirmEmail").value;

        

        if (email !== confirmEmail) {
            alert("The emails do not match");
            event.preventDefault();
        }
    });
});