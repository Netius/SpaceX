const queryString = document.location.search;
const params = new URLSearchParams(queryString);


let launchId = params.get("id");
// Checking just if is accessing upcoming.html direct
if(!launchId){
    launchId = "600f9a718f798e2a4d5f979d";
}

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
                <div class="subhead-container">
                    <div class="col">
                        <h2 class="spaceship-name">${launch.name}</h2>
                        <p class="launch-date">${formatedDate}</p>
                        
                        <h3 class="spaceship-name"><i class="adress-icon fas fa-map-marker-alt"></i> ${launchpad[0].locality} - ${launchpad[0].region}</h3>
                        <p class="details-text">${launchpad[0].details}</p>
                    
                        <h3 class="spaceship-name"><i class="rocket-icon fas fa-rocket"></i> ${rocket[0].name}</h3>
                        <p class="details-text">${rocket[0].description}</p>
                    </div> 
                    <div class="col details-image">
                        <figure>
                            <img src=${rocket[0].flickr_images} alt=${rocket[0].name} title=${rocket[0].name} width="100%">
                            <figcaption class="figcaption-text">${rocket[0].name}</figcaption>
                        </figure>
                    <div>
                </div>
                 `; 
                 
    detailsLaunch.innerHTML = detailHtml;          

}