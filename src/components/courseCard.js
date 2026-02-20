export function createCourseCard(course) {
    return `
        <div class="course-card">
            <div class="course-image-container">
                <img src="${course.image}" alt="${course.title}" class="course-image">
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-price">Price: ₹${course.price}</p>
                <a href="course-details.html?id=${course.id}" class="btn btn-primary">View Details</a>
            </div>
        </div>
    `;
}