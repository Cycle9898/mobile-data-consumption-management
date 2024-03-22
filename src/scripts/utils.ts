import { avgResultsSpan, resultsTableBody } from "./main";

type DaysObjType = {
	dayNb: string;
	month: string;
};

const months: string[] = [
	"janvier",
	"février",
	"mars",
	"avril",
	"mai",
	"juin",
	"juillet",
	"août",
	"septembre",
	"octobre",
	"novembre",
	"décembre"
];

export function generateDaysObjArray(billingDay: number) {
	const today: Date = new Date();
	const currentMonthDaysNb: number = 32 - new Date(today.getFullYear(), today.getMonth(), 32).getDate();
	const nextMonthDaysNb: number = 32 - new Date(today.getFullYear(), today.getMonth() + 1, 32).getDate();
	const daysObjArray: DaysObjType[] = [];

	if (billingDay <= currentMonthDaysNb) {
		for (let i = billingDay; i <= currentMonthDaysNb; i++) {
			daysObjArray.push({
				dayNb: i.toString().padStart(2, "0"),
				month: months[today.getMonth()]
			});
		}
	}

	const lastDay: number = billingDay > nextMonthDaysNb ? nextMonthDaysNb : billingDay - 1;
	const nextMonthNb: number = today.getMonth() == 11 ? 0 : today.getMonth() + 1;

	for (let i = 1; i <= lastDay; i++) {
		daysObjArray.push({
			dayNb: i.toString().padStart(2, "0"),
			month: months[nextMonthNb]
		});
	}

	return daysObjArray;
}

export function displayAvgDataConsumption(avgDataConsumption: number) {
	const sentence: string = `La consommation moyenne journalière de votre forfait est de ${avgDataConsumption.toLocaleString(
		"fr-FR",
		{ maximumFractionDigits: 2, minimumFractionDigits: 2 }
	)} Go.`;

	avgResultsSpan.innerText = sentence;
}

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
