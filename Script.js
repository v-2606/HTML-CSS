document.addEventListener("DOMContentLoaded", function() {
    const loginBox = document.getElementById("login-box");
    const registerBox = document.getElementById("register-box");
    const showRegister = document.getElementById("show-register");
    const showLogin = document.getElementById("show-login");

    showRegister.addEventListener("click", function(event) {
        event.preventDefault();
        loginBox.classList.add("hidden");
        registerBox.classList.add("show");
    });

    showLogin.addEventListener("click", function(event) {
        event.preventDefault();
        registerBox.classList.remove("show");
        loginBox.classList.remove("hidden");
    });
});
