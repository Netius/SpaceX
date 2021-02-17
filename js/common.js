// Sorts array by date
function sortDateLaunches(array){
    array.sort(function(a,b){
        return new Date (a.date_local) - new Date(b.date_local);
      });
}
// Format date and return
function formatDate(date){
    var month = new Array();
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";

    const launchDate = new Date(date);
    let formatedDate = launchDate.getUTCDate() + " " + 
                        month[launchDate.getMonth()] + ". " + 
                        launchDate.getFullYear();
   return formatedDate;
}

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