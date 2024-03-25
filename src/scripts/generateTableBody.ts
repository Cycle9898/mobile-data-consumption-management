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

		const dayCell = document.createElement("td");
		dayCell.innerText = `${daysObj.dayNb} ${daysObj.month}`;
		tableRow.appendChild(dayCell);

		const dataConsumptionCell = document.createElement("td");
		dataConsumptionCell.innerText = `${dataConsumptionNb.toLocaleString("fr-FR", {
			maximumFractionDigits: 2,
			minimumFractionDigits: 2
		})} Go`;
		tableRow.appendChild(dataConsumptionCell);

		resultsTableBody?.appendChild(tableRow);
	});
}
