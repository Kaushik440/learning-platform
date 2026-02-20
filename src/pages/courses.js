import { getCourses } from "../services/courseService.js";
import { createCourseCard } from "../components/courseCard.js";

export async function initCoursesPage() {
    const courses = await getCourses();
    const container = document.getElementById("course-list");
    const searchInput = document.getElementById("searchInput");

    displayCourses(courses);

    searchInput.addEventListener("input", () => {
        const filtered = courses.filter(course =>
            course.title.toLowerCase().includes(searchInput.value.toLowerCase())
        );
        displayCourses(filtered);
    });

    function displayCourses(courseArray) {
        container.innerHTML = "";
        courseArray.forEach(course => {
            container.innerHTML += createCourseCard(course);
        });
    }
}