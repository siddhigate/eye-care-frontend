const signoutlink = document.querySelector(".signout");
const signupbtn = document.querySelector("#btn-signup");

const email_signup = document.querySelector("#email-signup");
const password_signup = document.querySelector("#password-signup");
const username_signup = document.querySelector("#username-signup")
const error_msg = document.querySelector(".error-msg")


signupbtn.addEventListener("click", () => {
    
    signupbtn.value = "Loading";
	signupbtn.style.background = "#BFDBFE";

	var url = `${api}/signup`;

	var data = {};
	data.email  = email_signup.value;
	data.password = password_signup.value;
    data.name = username_signup.value;
    data.score =0;
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
				signupbtn.value = "Sign up";
				signupbtn.style.background = "#3B82F6";
			}
			else{
				
				window.location.href="./signin.html";	
				signinbtn.value = "Sign in";	
				signinbtn.style.background = "#3B82F6";	

			}
		}
	}
	xhr.send(json);


})


/** ONLOADING */
const signuponload = () => {
    signoutlink.style.display = "none";

	email_signup.value = "";
	username_signup.value = "";
	password_signup = "";
}
