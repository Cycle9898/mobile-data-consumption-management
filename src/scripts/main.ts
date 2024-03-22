import "../style/style.css";
import { displayAvgDataConsumption, generateDaysObjArray } from "./utils";

// DOM elements
const dataQuantityInput = document.getElementById("data-quantity") as HTMLInputElement;
const billingDaySelect = document.getElementById("billing-day") as HTMLSelectElement;
const planDetailsForm = document.getElementById("plan-details-form");
export const avgResultsSpan = document.getElementById("avg-result") as HTMLSpanElement;
const resultsTableBody = document.getElementById("results-table-body");

// Main function
function displayDataConsumption(event: SubmitEvent) {
	event.preventDefault();

	const dataQuantity: number = parseInt(dataQuantityInput.value);
	const billingDayNb: number = parseInt(billingDaySelect.value);

	// Input control
	if (!dataQuantity || !billingDayNb) {
		return;
	}

	const daysObjArray = generateDaysObjArray(billingDayNb);

	// Average consomption view
	const avgDataConsumption: number = dataQuantity / daysObjArray.length;

	displayAvgDataConsumption(avgDataConsumption);

	console.log(daysObjArray);
}
// Event listener
planDetailsForm?.addEventListener("submit", event => displayDataConsumption(event));
