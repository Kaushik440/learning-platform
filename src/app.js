import { loadNavbar } from "./components/navbar.js";
import { loadFooter } from "./components/footer.js";
import { initHomePage } from "./pages/home.js";
import { initCoursesPage } from "./pages/courses.js";
import { initCheatSheetsPage } from "./pages/cheatsheetsPage.js";
import { initCourseDetailsPage } from "./pages/courseDetails.js";
import { initCheatSheetDetailsPage } from "./pages/cheatsheetDetails.js";


loadNavbar();
loadFooter();

const path = window.location.pathname;

if (path.includes("index.html") || path === "/") {
    initHomePage();
}

if (path.includes("courses.html")) {
    initCoursesPage();
}

if (path.includes("course-details.html")) {
    initCourseDetailsPage();
}

if (path.includes("cheatsheets.html")) {
    initCheatSheetsPage();
}
if (path.includes("cheatsheet-details.html")) {
    initCheatSheetDetailsPage();
}