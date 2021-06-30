/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// const first = () => {
//     modal_window.style.display = "none";
// }

const signout_btn = document.querySelector(".signout");
const signin_btn = document.querySelector(".signin");

const index_onload = () => {

    modal_window.style.display = "none";

    if(localStorage.getItem("token")){
        signout_btn.style.display = "initial";
        signin_btn.style.display = "none";
    }
    else{
        signout_btn.style.display = "none";
        signin_btn.style.display = "inital";
    }
}