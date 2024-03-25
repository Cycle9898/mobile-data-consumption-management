import "../style/style.css";
import { generateDaysObjArray } from "./generateDaysObjArray";
import { displayAvgDataConsumption } from "./displayAvgDataConsumption";
import { generateTableBody } from "./generateTableBody";

// DOM elements
const dataQuantityInput = document.getElementById("data-quantity") as HTMLInputElement;
const billingDaySelect = document.getElementById("billing-day") as HTMLSelectElement;
const resultsSection = document.getElementById("results-section");
const planDetailsForm = document.getElementById("plan-details-form");

// Main function
function displayDataConsumption(event: SubmitEvent) {
	event.preventDefault();

	const dataQuantity: number = parseInt(dataQuantityInput.value);
	const billingDayNb: number = parseInt(billingDaySelect.value);

	// Input control
	if (!dataQuantity || !billingDayNb) {
		return;
	}

	// Display results section
	resultsSection?.classList.remove("hidden");

	const daysObjArray = generateDaysObjArray(billingDayNb);

	// Average consomption view
	const avgDataConsumption: number = dataQuantity / daysObjArray.length;

	displayAvgDataConsumption(avgDataConsumption);

	// Data consumption table body view
	generateTableBody(daysObjArray, avgDataConsumption);
}

// Event listener
planDetailsForm?.addEventListener("submit", event => displayDataConsumption(event));
