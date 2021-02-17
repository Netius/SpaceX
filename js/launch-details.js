const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const launchId = params.get("id");

const corsEnableUrl = "https://noroffcors.herokuapp.com/";
const spacexUrl = corsEnableUrl + "https://api.spacexdata.com/v4/launches/" + launchId;
const spacexLaunchpads = corsEnableUrl + "https://api.spacexdata.com/v4/launchpads";
const rocketsSpacex = corsEnableUrl + "https://api.spacexdata.com/v4/rockets";

const apiLoader = document.querySelector(".loader-container");

const detailsLaunch = document.getElementById("details-launch");

async function fetchSpacex() {
    try {
        apiLoader.style.display = "flex";
        // API call for launches
        const responseLaunches = await fetch(spacexUrl);
        const launch = await responseLaunches.json();
       
        // Api call for Launchpads
        const responseLaunchpads = await fetch(spacexLaunchpads);
        const launchpads = await responseLaunchpads.json();

        // Api call for rockets
        const responseRockets = await fetch(rocketsSpacex);
        const rockets = await responseRockets.json();

        createLaunchesDetails(launch ,launchpads, rockets);
        apiLoader.style.display = "none";

    } catch (error) {
        throw error;
    }

}
fetchSpacex();

function createLaunchesDetails(launch ,launchpads, rockets){
    const launchpad = launchpads.filter(element => element.id === launch.launchpad);
    const rocket = rockets.filter(element => element.id === launch.rocket);
    console.log("LAUNCH" , launch);
    console.log("PAD" , launchpad);
    console.log("Rocket" , rocket);
   
    let formatedDate = formatDate(launch.date_local);
    
    let detailHtml= "";
        detailHtml += `
                    <h2 class="spaceship-name">${launch.name}</h2>
                    <ul class="details-list">
                        <li class="launch-date">${formatedDate}</li>
                        <li class="location-text"><i class="adress-icon fas fa-map-marker-alt"></i> ${launchpad[0].locality} - ${launchpad[0].region}</li>
                        <li class="location-text">${launchpad[0].details}</li>
                        <li class="location-text"><i class="rocket-icon fas fa-rocket"></i> ${rocket[0].name}</li>
                        <li class="location-text">${rocket[0].description}</li>
                        <li class="location-text"></li>
                    </ul>
                 `; 
                 
    detailsLaunch.innerHTML = detailHtml;          

}