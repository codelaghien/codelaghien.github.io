function setCookie(cname, cvalue, exdays) {
	console.log('setCookie', cname, cvalue);
	const d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	const expires = 'expires=' + d.toUTCString();
	const value = cname + '=' + cvalue + ';' + expires + ';path=/';
	document.cookie = value;
	console.log('setCookie exit: ', cname, document.cookie);
}

function getCookie(cname) {
	// console.log(cname, document.cookie);
	const name = cname + '=';
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		const c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

function checkCookie(cname) {
	return getCookie(cname) !== '';
}
