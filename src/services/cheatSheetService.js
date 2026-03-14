import { cheatsheets } from "../data/cheatsheets.js";

export function getCheatSheets() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(cheatsheets), 300);
    });
}

export function getCheatSheetById(id) {
    return new Promise((resolve) => {
        const sheet = cheatsheets.find(c => c.id === Number(id));
        setTimeout(() => resolve(sheet), 300);
    });
}