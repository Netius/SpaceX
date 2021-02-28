// Toogle menu icon from burguer to X 
let toogleIcon = true;
function toogleMenuIcon(event){
    let menuIcon = document.getElementById("menu-icon");
    if (toogleIcon){
            menuIcon.classList.remove("fa", "fa-bars");
            menuIcon.classList.add("fas", "fa-times");
    }else{
            menuIcon.classList.remove("fas", "fa-times");
            menuIcon.classList.add("fa", "fa-bars");
    }
    toogleIcon = !toogleIcon;
}

// Function to show and hide to top button after 800px
const topBtn = document.getElementById("topBtn");
function scrollToTop() {
  var scrollY = window.scrollY;
  var screenHeight = screen.height;
  if(!screenHeight){
        screenHeight = 800;
  }    

  //Show top button if user have scrolled 100vh
  if (scrollY >= screenHeight ) {
        topBtn.className = "top-button-show"
  } else {
        topBtn.className = "top-button-hide"
  }
};

window.addEventListener("scroll", scrollToTop);