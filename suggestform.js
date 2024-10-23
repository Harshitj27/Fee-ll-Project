document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("suggestForm");

    form.addEventListener("submit", (event) => {
        let isValid = true;

        const errorMessages = form.querySelectorAll(".error-message");
        errorMessages.forEach(msg => msg.remove());

        const name = document.getElementById("name");
        if (!name.value.trim()) {
            showError(name, "Name is required.");
            isValid = false;
        }

     
        const email = document.getElementById("email");
        if (!email.value.trim()) {
            showError(email, "Email is required.");
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            showError(email, "Email is invalid.");
            isValid = false;
        }

        const subject = document.getElementById("subject");
        if (!subject.value.trim()) {
            showError(subject, "Subject is required.");
            isValid = false;
        }

        const message = document.getElementById("message");
        if (!message.value.trim()) {
            showError(message, "Message is required.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function showError(input, message) {
        const error = document.createElement("div");
        error.className = "error-message";
        error.style.color = "red";
        error.innerText = message;
        input.parentNode.insertBefore(error, input.nextSibling);
    }
});