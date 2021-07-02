const email = document.querySelector("#email-signin");
const password = document.querySelector("#password-signin");
const signinbtn = document.querySelector("#btn-signin");
const signoutlink = document.querySelector(".signout");
const signin_form = document.querySelector("#signinform");
const error_msg = document.querySelector(".error-msg")

email.addEventListener("focus", ()=> {
	error_msg.style.display = "none";
})

password.addEventListener("focus", () => {
	error_msg.style.display = "none";
})
signinbtn.addEventListener("click", () => {

    signinbtn.value = "Loading";
	signinbtn.style.background = "#BFDBFE";

	var url = `${api}/signin`;

	var data = {};
	data.email  = email.value;
	data.password = password.value;
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
			if(users.error){
				console.log(users.error);
				console.log(error_msg.innerText);
				error_msg.innerText = users.error;
				error_msg.style.display = "block";
				signinbtn.value = "Sign in";
				signinbtn.style.background = "#3B82F6";
			}
			else{
				
				localStorage.setItem("token", users.token);
				localStorage.setItem("id", users.user.id);
				localStorage.setItem("score", users.user.score);
				localStorage.setItem("name", users.user.name);
				localStorage.setItem("email", users.user.email);
				
				console.log(localStorage.getItem("token"))

				window.location.href="../../index.html";	
				signinbtn.value = "Sign in";	
				signinbtn.style.background = "#3B82F6";	

			}
		}
	}
	xhr.send(json);


})


/** ONLOADING */
const signinonload = () => {
    signoutlink.style.display = "none";

	
	email.value = "";
	password.value = "";
}