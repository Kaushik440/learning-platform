export function initLoginPage() {

    const form = document.getElementById("loginForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const errorMessage = document.getElementById("errorMessage");

        // Simple validation
        if (!email || !password) {
            errorMessage.textContent = "All fields are required!";
            return;
        }

        // Get stored users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (!user) {
            errorMessage.textContent = "Invalid email or password!";
            return;
        }

        // Save logged-in user
        localStorage.setItem("currentUser", JSON.stringify(user));

        // Redirect to dashboard
        window.location.href = "dashboard.html";
    });
}