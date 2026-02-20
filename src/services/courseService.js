import { courses } from "../data/courses.js";

export function getCourses() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(courses), 300);
    });
}

export function getCourseById(id) {
    return new Promise((resolve) => {
        const course = courses.find(c => c.id === Number(id));
        setTimeout(() => resolve(course), 300);
    });
}