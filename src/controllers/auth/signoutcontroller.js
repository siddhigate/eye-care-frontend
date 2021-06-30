const signout = document.querySelector(".signout");

signout.addEventListener("click", () => {

    localStorage.removeItem("token");
    localStorage.removeItem("score");
    localStorage.removeItem("name");
    localStorage.removeItem("id");

    window.location.href="./index.html";	
    
})