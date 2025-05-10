/**
 * This function returns a greeting based on the time of day.
 * Possible greetings are:
 * - "Good morning" for 0-11
 * - "Good afternoon" for 12-17
 * - "Good evening" for 18-23
 * @param hour - The current time (ex: 15)
 */
export function getGreetingName(hour: number): string {
	const data = {
		morning: { min: 0, max: 11, text: "Good morning 🌅" },
		afternoon: { min: 12, max: 17, text: "Good afternoon ☀️" },
		evening: { min: 18, max: 23, text: "Good evening 🌙" },
	};

	if (hour < 0 || hour > 23) {
		throw new Error("Invalid hour");
	}

	// Check if the hour is in the range of morning, afternoon, or evening
	for (const key in data) {
		const { min, max, text } = data[key as keyof typeof data];
		if (hour >= min && hour <= max) {
			return text;
		}
	}

	throw new Error("Invalid time");
}

/**
 * This function returns the current hour.
 * @returns The current hour (0-23)
 */
export function getCurrentHour(): number {
	const date = new Date();
	return date.getHours();
}
