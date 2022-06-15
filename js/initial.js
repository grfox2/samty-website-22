function getDate() {
	let todayP2Yr = new Date();
	todayP2Yr.setFullYear(todayP2Yr.getFullYear() + 2);
	return todayP2Yr.toUTCString();
}

function accept() {
	document.cookie = "accepted=true; expires="+getDate()+"; SameSite=None; Secure; path=/";
	window['ga-disable-GA_MEASUREMENT_ID'] = false;
}