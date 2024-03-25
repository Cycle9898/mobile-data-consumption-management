import { DaysObjType } from "./Types";

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
