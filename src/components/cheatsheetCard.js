export function createCheatSheetCard(sheet) {
    return `
        <div class="cheatsheet-card">
            <div class="cheatsheet-image">
                <img src="${sheet.image}" alt="${sheet.title}">
            </div>

            <div class="cheatsheet-body">
                <h3>${sheet.title}</h3>
                <p class="topic">${sheet.topic}</p>

                <div class="cheatsheet-actions">
                    <a href="cheatsheet-details.html?id=${sheet.id}" class="view-btn">
                        View Cheat Sheet
                        
                    </a>
                </div>
                
            </div>
        </div>
    `;
}