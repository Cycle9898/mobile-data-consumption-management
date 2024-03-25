import { DaysObjType } from "./Types";

// DOM element
const resultsTableBody = document.getElementById("results-table-body");

function deleteAllChildrenElements() {
	while (resultsTableBody?.firstChild) {
		resultsTableBody.removeChild(resultsTableBody.firstChild);
	}
}

export function generateTableBody(daysObjArray: DaysObjType[], avgDataConsumption: number) {
	// delete all table body rows
	deleteAllChildrenElements();

	// generate table body rows
	daysObjArray.forEach((daysObj, index) => {
		const dataConsumptionNb = (index + 1) * avgDataConsumption;

		const tableRow = document.createElement("tr");
		tableRow.classList.add("even:bg-cyan-500", "hover:bg-cyan-300", "text-lg");

		const dayCell = document.createElement("td");
		dayCell.classList.add("py-1");
		dayCell.innerText = `${daysObj.dayNb} ${daysObj.month}`;
		tableRow.appendChild(dayCell);

		const dataConsumptionCell = document.createElement("td");
		dataConsumptionCell.classList.add("py-1");
		dataConsumptionCell.innerText = `${dataConsumptionNb.toLocaleString("fr-FR", {
			maximumFractionDigits: 2,
			minimumFractionDigits: 2
		})} Go`;
		tableRow.appendChild(dataConsumptionCell);

		resultsTableBody?.appendChild(tableRow);
	});
}
