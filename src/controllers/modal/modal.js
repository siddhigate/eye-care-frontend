const close_dialog = document.querySelector(".done-btn");

close_dialog.addEventListener("click", () => {

    if(localStorage.getItem("token")){
        update();
    }

    modal_window.style.display = "none";
})

const update = () => {

    console.log("update");
    var id = localStorage.getItem("id");
    var token = localStorage.getItem("token");
	var url = `${api}/user/${id}`;


	var data = {};
	data.name = localStorage.getItem("name");
	data.email  = localStorage.getItem("email");
	data.score = localStorage.getItem("score");
	var json = JSON.stringify(data);

	var xhr = new XMLHttpRequest();
	xhr.open("PUT", url, true);
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    
    xhr.setRequestHeader('Authorization',`Bearer ${token}`);
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

