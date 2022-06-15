let cookiemsg = document.getElementById('cookiemsg');

// Show cookie message for first time user.
if (document.cookie.indexOf("accepted" + '=true') > -1) {
	window['ga-disable-GA_MEASUREMENT_ID'] = false;
} else {
	cookiemsg.setAttribute("class", "alert alert-dark alert-dismissible")
}