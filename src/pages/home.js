import { getCourses } from "../services/courseService.js";
import { createCourseCard } from "../components/courseCard.js";

export async function initHomePage() {
    const courses = await getCourses();
    const container = document.getElementById("featured-courses");

    courses.slice(0, 3).forEach(course => {
        container.innerHTML += createCourseCard(course);
    });
}