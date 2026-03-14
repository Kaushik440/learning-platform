import { getCourseById } from "../services/courseService.js";

export async function initCourseDetailsPage() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    

    const course = await getCourseById(id);
    const container = document.getElementById("course-details-container");

    if (!course) {
        container.innerHTML = "<h2>Course Not Found</h2>";
        return;
    }
    window.enrollInCourse = function(link) {
    window.open(link, "_blank");
};

    container.innerHTML = `
        <div class="course-details-card">
            <div class="course-image-container">
                <img src="${course.image}" alt="${course.title}" class="course-image">
            </div>
            <div class="course-info">
                <h2>${course.title}</h2>
                <p><strong>Instructor:</strong> ${course.instructor}</p>
                ${course.instructorImage ? `<img src="${course.instructorImage}" alt="${course.instructor}" class="instructor-image">` : ''}
                <p><strong>Level:</strong> ${course.level || 'All Levels'}</p>
                <p><strong>Duration:</strong> ${course.duration || 'N/A'}</p>
                <p><strong>Schedule:</strong> ${course.schedule || 'Flexible'}</p>
                <p>${course.description}</p>
                <p><strong>Price:</strong> ₹${course.price}</p>
                <p><strong>Rating:</strong> ${course.rating} / 5</p>
                <p><strong>Reviews:</strong> ${course.reviews ? course.reviews.length : 0}</p>
                <button class="btn-primary" onclick="enrollInCourse('${course.links}')">
               Enroll Now
                </button>
              
        </div>
    `;
}