// DOM element
const avgResultsSpan = document.getElementById("avg-result") as HTMLSpanElement;

export function displayAvgDataConsumption(avgDataConsumption: number) {
	const sentence: string = `La consommation moyenne journalière de votre forfait est de ${avgDataConsumption.toLocaleString(
		"fr-FR",
		{ maximumFractionDigits: 2, minimumFractionDigits: 2 }
	)} Go.`;

	avgResultsSpan.innerText = sentence;
}
