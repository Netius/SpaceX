const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const launchId = params.get("id");


const corsEnableUrl = "https://noroffcors.herokuapp.com/";
const spacexUrl = corsEnableUrl + "https://api.spacexdata.com/v4/launches/" + launchId;
const spacexLaunchpads = corsEnableUrl + "https://api.spacexdata.com/v4/launchpads";
const rocketsSpacex = corsEnableUrl + "https://api.spacexdata.com/v4/rockets";

const apiLoader = document.querySelector(".loader-container");

async function fetchSpacex() {
    try {
        apiLoader.style.display = "flex";
        // API call for launches
        const responseLaunches = await fetch(spacexUrl);
        const launches = await responseLaunches.json();
       
        // Api call for Launchpads
        const responseLaunchpads = await fetch(spacexLaunchpads);
        const launchpads = await responseLaunchpads.json();

        // Api call for rockets
        const responseRockets = await fetch(rocketsSpacex);
        const rockets = await responseRockets.json();

        createLaunchesDetails(launches ,launchpads, rockets);
        apiLoader.style.display = "none";

    } catch (error) {
        throw error;
    }

}
fetchSpacex();

function createLaunchesDetails(launches ,launchpads, rockets){
    console.log(launches);
    
    // let detailHtml= "";
    // detailHtml += `
    //             <div>
    //                 <ul>
    //                     <li class="spaceship-name"><h3>${launch.name}</h3></li>
    //                     <li class="launch-date">${formatedDate}</li>
    //                     <li class="location-text"><i class="rocket-icon fas fa-rocket"></i> ${rocket[0].name}</li>
    //                     <li class="location-text"><i class="adress-icon fas fa-map-marker-alt"></i> ${launchpad[0].locality} - ${launchpad[0].region}</li>
    //                     <li class="location-text"></li>
    //                 </ul>
    //                 <a  class="btn-details" title="Read more about upcoming launch" href="upcoming.html?id=${launch.id}">
    //                     Read more <i class="fas fa-arrow-right link-arrow"></i>
    //                 </a>
    //             </div>
    //              `;   

}