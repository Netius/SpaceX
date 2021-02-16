const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const launchId = params.get("id");


const corsEnableUrl = "https://noroffcors.herokuapp.com/";
const spacexUrl = corsEnableUrl + "https://api.spacexdata.com/v4/launches/" + launchId;
const spacexLaunchpads = corsEnableUrl + "https://api.spacexdata.com/v4/launchpads";
const rocketsSpacex = corsEnableUrl + "https://api.spacexdata.com/v4/rockets";

// const apiLoader = document.querySelector(".loader-container");

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

}