import { loadNavbar } from "./components/navbar.js";
import { loadFooter } from "./components/footer.js";
import { initHomePage } from "./pages/home.js";
import { initCoursesPage } from "./pages/courses.js";

loadNavbar();
loadFooter();

if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    initHomePage();
}
if (window.location.pathname.includes("courses.html")) {
    initCoursesPage();
}
