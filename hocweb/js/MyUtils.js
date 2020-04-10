function submitLogin() {
	let email = document.getElementById('inputEmailAddress').value;
	let password = document.getElementById('inputPassword').value;
	// console.log('submitLogin: jquery email = ', $('#inputEmailAddress').val());
	// console.log('submitLogin: email = ', email);
	// console.log('submitLogin: password = ', password);

	sessionStorage.setItem('email', email);
	sessionStorage.setItem('password', password);
	// setCookie('email', email, 1);
	// console.log('email = ' + getCookie('email'));

	// console.log('email = ' + sessionStorage.getItem('email'));
	// window.location.replace('index.html');

	$.get('https://codelaghien.club/web/login.asp', {
		username: email,
		password: password,
	})
		.done(function (returnedData) {
			console.log(returnedData);
			const myData = JSON.parse(returnedData);
			console.log(myData);
			if (myData['secret-key']) {
				window.location.replace('index.html');
			} else {
				console.log('LOGIN FAILED');
			}
		})
		.fail(function (xhr, status, error) {
			console.log(error);
		});

	// data: jQuery.param({ username: email, password: password }),
	// $.ajax({
	// 	url: 'http://codelaghien.club/web/login.asp',
	// 	type: 'GET',
	// 	// data: jQuery.param({ username: email, password: password }),
	// 	data: { username: email, password: password },
	// 	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
	// 	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
	// 	success: function (response) {
	// 		console.log('response', response);
	// 	},
	// 	error: function (response) {
	// 		console.log('error', response);
	// 	},
	// });

	// $.post(
	// 	'http://codelaghien.club/web/login.asp',
	// 	{ username: email, password: password },
	// 	function (result) {
	// 		console.log('result', result);
	// 	}
	// );
	// $.post(
	// 	'http://codelaghien.club/web/login.asp',
	// 	{ username: email, password: password },
	// 	function (returnedData) {
	// 		console.log(returnedData);
	// 	}
	// ).fail(function () {
	// 	console.log('error');
	// });
	// $.post('http://codelaghien.club/web/login.asp', {
	// 	username: email,
	// 	password: password,
	// })
	// 	.done(function (returnedData) {
	// 		console.log(returnedData);
	// 	})
	// 	.fail(function (xhr, status, error) {
	// 		console.log(error);
	// 	});

	// $.support.cors = true;
	// $.ajax({
	// 	type: 'POST',
	// 	crossDomain: true,
	// 	crossOrigin: true,
	// 	contentType: 'application/json; charset=utf-8',
	// 	url: 'http://codelaghien.club/web/login.asp',
	// 	data: { username: email, password: password },
	// 	dataType: 'json',
	// 	// headers: {
	// 	// 	accept: 'application/json; charset=utf-8',
	// 	// 	'Access-Control-Allow-Origin': '*',
	// 	// },
	// 	success: function (data) {
	// 		// alert(data.toSource());
	// 		console.log(data);
	// 		// var myData = JSON.parse(data.d);
	// 		// for (var i = 0; i < myData.length; i++) {
	// 		// 	$('#tbDetails').append(
	// 		// 		'<tr><td>' +
	// 		// 			myData[i].Name +
	// 		// 			'</td><td>' +
	// 		// 			myData[i].Loan +
	// 		// 			'</td><td>' +
	// 		// 			myData[i].Evnt +
	// 		// 			'</td></tr>'
	// 		// 	);
	// 		// }
	// 	},
	// 	error: function (result) {
	// 		console.log('error', result);
	// 	},
	// });
}

function logout() {
	sessionStorage.setItem('email', '');
	sessionStorage.setItem('password', '');
	window.location.replace('login.html');
}
