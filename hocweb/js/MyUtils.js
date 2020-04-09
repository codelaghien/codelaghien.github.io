function submitLogin() {
	let email = document.getElementById('inputEmailAddress').value;
	let password = document.getElementById('inputPassword').value;
	console.log('submitLogin: email = ', email);
	console.log('submitLogin: password = ', password);

	sessionStorage.setItem('email', email);
	sessionStorage.setItem('password', password);

	// console.log('email = ' + sessionStorage.getItem('email'));
	window.location.replace('index.html');
}

function logout() {
	sessionStorage.setItem('email', '');
	sessionStorage.setItem('password', '');
	window.location.replace('login.html');
}
