document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (event) => {
        let isValid = true;

        const errorMessages = form.querySelectorAll(".error-message");
        errorMessages.forEach(msg => msg.remove());

        const username = document.getElementById("uname");
        if (!username.value.trim()) {
            showError(username, "Username is required.");
            isValid = false;
        }

        const password = document.getElementById("pass");
        if (!password.value.trim()) {
            showError(password, "Password is required.");
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