function submitLogin() {
	let email = $('#inputEmailAddress').val();
	let password = $('#inputPassword').val();
	// console.log('submitLogin: email = ', email);
	// console.log('submitLogin: password = ', password);

	sessionStorage.setItem('email', email);
	sessionStorage.setItem('password', password);

	$.post('https://codelaghien.club/web/login.asp', {
		username: email,
		password: password,
	})
		.done(function (returnedData) {
			const myData = JSON.parse(returnedData);
			console.log(myData);
			if (myData['secret-key']) {
				window.location.replace('index.html');
			} else {
				alert('Invalid password !');
			}
		})
		.fail(function (xhr, status, error) {
			console.log(error);
		});
}

function logout() {
	sessionStorage.setItem('email', '');
	sessionStorage.setItem('password', '');
	window.location.replace('login.html');
}

function refreshData() {
	console.log('refreshData');
	$('#dataTable_wrapper').remove();
	$('#myTableData').append(
		'<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0"></table>'
	);
	const columns = [
		{ data: 'name.first', title: 'Tên' },
		{ data: 'gender', title: 'Giới tính' },
		{ data: 'email', title: 'Điện thư' },
		{ data: 'phone', title: 'Điện thoại' },
		{
			data: 'picture.thumbnail',
			title: 'Hình',
			render: function (url, type, full) {
				return '<img height="50" src="' + url + '"/>';
			},
		},
	];
	$('#dataTable').DataTable({
		ajax: {
			url: 'https://randomuser.me/api/?results=100',
			dataSrc: 'results',
		},
		columns: columns,
	});
}
