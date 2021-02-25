const corsEnableUrl = "https://noroffcors.herokuapp.com/";
var spacexUrl = corsEnableUrl + "https://api.spacexdata.com/v4/launches/";
const spacexLaunchpads = corsEnableUrl + "https://api.spacexdata.com/v4/launchpads";
const rocketsSpacex = corsEnableUrl + "https://api.spacexdata.com/v4/rockets";

// Checks if any id are sendt in details
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let firstLaunch = params.get("first"); //Uses to added bg color to date for the 3 first launches
let launchId = params.get("id");
if(launchId){
    spacexUrl += launchId;
}




// Show loader when loading API or error
const apiLoader = document.querySelectorAll(".loader-container");
const apiError = document.querySelectorAll(".error-container");
async function fetchSpacex() {
    try {
           for (let loader of apiLoader){
                 loader.style.display = "flex";
           }
        
        // API call for launches
        const responseLaunches = await fetch(spacexUrl);
        const launches = await responseLaunches.json();
       
        // Api call for Launchpads
        const responseLaunchpads = await fetch(spacexLaunchpads);
        const launchpads = await responseLaunchpads.json();

        // Api call for rockets
        const responseRockets = await fetch(rocketsSpacex);
        const rockets = await responseRockets.json();

        createSpacexLaunches(launches ,launchpads, rockets);
        
        for (let loader of apiLoader){
            loader.style.display = "none";
        }
        for (let error of apiError ){
            error.style.display = "none";
        }             

    } catch (error) {
        for (let error of apiError ){
            error.style.display = "flex";
        }
        throw error;

    }

}
fetchSpacex();

// Sorts array by date
function sortDateLaunches(array){
    array.sort(function(a,b){
        return new Date (a.date_local) - new Date(b.date_local);
      });
}
// Format date and time and return
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

    let formatedHours = launchDate.getHours();
    formatedHours = ("0" + formatedHours).slice(-2); 
    // + ":" + launchDate.getMinutes();

    let formatedMinutes = launchDate.getMinutes();
    formatedMinutes = ("0" + formatedMinutes).slice(-2); 


    let formatedDate = launchDate.getDate() + " " + 
                        month[launchDate.getMonth()] + ". " + 
                        launchDate.getFullYear() + " " + "<i class='far fa-clock time-icon'></i>" + " " +
                        formatedHours + ":" + formatedMinutes; 
   
         
   return formatedDate;
}
// Format text breaking after point.
function formatText(text){
    var formatedText = text.split('. ').join('. <br/>');
    console.log(formatedText);
    return formatedText;
}