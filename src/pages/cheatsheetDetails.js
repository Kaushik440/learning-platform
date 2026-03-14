import { getCheatSheetById } from "../services/cheatSheetService.js";

export async function initCheatSheetDetailsPage() {

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const sheet = await getCheatSheetById(id);

document.getElementById("sheetTitle").textContent = sheet.title;
document.getElementById("sheetTopic").textContent = sheet.topic;

document.getElementById("sheetContent").innerHTML = sheet.content;

}