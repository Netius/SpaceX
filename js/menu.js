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