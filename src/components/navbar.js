export function loadNavbar() {
    const navbar = `
        <nav class="navbar">
            <h2>LearnHub</h2>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="courses.html">Courses</a></li>
                <li><a href="login.html">Login</a></li>
            </ul>
        </nav>
    `;
    document.getElementById("navbar").innerHTML = navbar;
}