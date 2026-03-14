import { getCheatSheets } from "../services/cheatSheetService.js";
import { createCheatSheetCard } from "../components/cheatsheetCard.js";

export async function initCheatSheetsPage() {

    const cheatsheets = await getCheatSheets();
    const container = document.getElementById("cheatsheetContainer");
    const searchInput = document.getElementById("searchInput");

    displayCheatSheets(cheatsheets);

    searchInput.addEventListener("input", () => {
        const filtered = cheatsheets.filter(sheet =>
            sheet.title.toLowerCase().includes(searchInput.value.toLowerCase())
        );

        displayCheatSheets(filtered);
    });

    function displayCheatSheets(sheetArray) {
        container.innerHTML = "";

        sheetArray.forEach(sheet => {
            container.innerHTML += createCheatSheetCard(sheet);
        });
    }
}