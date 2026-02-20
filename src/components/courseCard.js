export function createCourseCard(course) {
    return `
        <div class="course-card">
            <h3>${course.title}</h3>
            <p>Price: ₹${course.price}</p>
            <a href="course-details.html?id=${course.id}" class="btn-primary">View Details</a>
        </div>
    `;
}