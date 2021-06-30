const signup = (name, email, password) => {
    var url = "http://localhost:8000/api/signup";

	var data = {};
	data.name = name;
	data.email  = email;
	data.password = password;
	data.score = 0;
	var json = JSON.stringify(data);

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
	xhr.onload = function () {
		var users = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == "201") {
			console.table(users);
		} else {
			console.error(users);
		}
	}
	xhr.send(json);

}

const signin_api_call = (email, password) => {
    var url = "http://localhost:8000/api/signin";

	var data = {};
	data.email  = email;
	data.password = password;
	var json = JSON.stringify(data);

	console.log(data);
	console.log("in signin");
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader('Content-type','application/json');
	xhr.onload = function () {
		var users = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == "201") {
			console.log(users);
		} else {
			console.log(users.error);

		}
	}
	xhr.send(json);

}

const update = () => {

    const id = "b7178810-2709-43a3-b63c-9a5370524d48";
	var url = `http://localhost:8000/api/user/${id}`;

	var data = {};
	data.name = name;
	data.email  = email;
	data.password = password;
	data.score = score;
	var json = JSON.stringify(data);

	var xhr = new XMLHttpRequest();
	xhr.open("PUT", url, true);
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    
    xhr.setRequestHeader('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI3MTc4ODEwLTI3MDktNDNhMy1iNjNjLTlhNTM3MDUyNGQ0OCIsImlhdCI6MTYyNDk4OTAwNX0.ISux9aFQPlbL-lHICg1zaliX-JvUZc6NkMiq5hfLwUk');
	xhr.onload = function () {
		var users = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == "201") {
			console.table(users);
		} else {
			console.error(users);
		}
	}
	xhr.send(json);
   
}

const getData = () => {

    const id = "b7178810-2709-43a3-b63c-9a5370524d48";
	var url = `http://localhost:8000/api/user/${id}`;

    
	var xhr  = new XMLHttpRequest()
	xhr.open('GET', url, true)
	xhr.onload = function () {
		const data = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == "200") {
			console.table(data);
			console.log(data);
		} else {
			console.error(data);
		}
	}
	xhr.send(null);
    return;
}