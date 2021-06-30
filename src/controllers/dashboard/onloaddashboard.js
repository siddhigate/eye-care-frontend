const flower_pic = document.querySelector("#flower");

const onloaddash = () => {
    if(localStorage.getItem("token")){
        document.querySelector(".signin").style.display = "none";

        document.querySelector(".signout").style.display = "initial";
        document.querySelector(".continue-btn").style.display="initial";
        document.querySelector(".login-btn").style.display = "none";

        getData();
        updateFlower();
    }
    else{
        document.querySelector(".signout").style.display = "none";
        document.querySelector(".score").innerText = "You are not signed in!"
        document.querySelector(".continue-btn").style.display="none";
        document.querySelector(".login-btn").style.display = "initial"
    }
}

const getData = () => {

    var id = localStorage.getItem("id");
	var url = `${api}/user/${id}`;
    console.log(url)
    
	var xhr  = new XMLHttpRequest()
	xhr.open('GET', url, true)
	xhr.onload = function () {
		const data = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == "200") {
			localStorage.setItem("score", data.score);
			console.log(data.score);
            document.querySelector(".score").innerText = `Score : ${data.score}`
            updateFlower(data.score);
		} else {
			console.error(data);
		}
	}
	xhr.send(null);
    return;
}

const updateFlower = (score) => {

    switch(score){

        case 0:  flower_pic.src="../images/plant2.png"
                  break;

        case 5:  flower_pic.src="../images/plant3.png"
                  break;

        case 10: console.log("10") 
                 flower_pic.src="../images/plant4.png"
                  break;
        
        case 15:  flower_pic.src="../images/plant5.png"
                  break;

        case 20:  flower_pic.src="../images/plant6.png"
                  break;

        case 25:  flower_pic.src="../images/plant7.png"
                  break;

        case 25:  flower_pic.src="../images/plant8.png"
                  break;

        case 30:  flower_pic.src="../images/plant9.png"
                  break; 

        case 35:  flower_pic.src="../images/plant9.png"
                  break; 
    }

}