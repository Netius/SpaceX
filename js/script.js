    const corsEnableUrl = "https://noroffcors.herokuapp.com/";
    const spacexUrl = corsEnableUrl + "https://api.spacexdata.com/v4/launches";
    const spacexLaunchpads = corsEnableUrl + "https://api.spacexdata.com/v4/launchpads";
    const rocketsSpacex = corsEnableUrl + "https://api.spacexdata.com/v4/rockets";

    const calenderLaunches = document.getElementById("calendar-launches");
    const apiLoader = document.querySelector(".loader-container");

    const upcomingLaunch = document.getElementById("upcoming-container");

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

            createSpacexLaunches(launches ,launchpads, rockets);
            apiLoader.style.display = "none";

        } catch (error) {
            throw error;
        }

    }
    fetchSpacex();


    function createSpacexLaunches(spacex , launchpads, rockets) { 
        sortDateLaunches(spacex);
        let detailHtml = "";
        let upcomingHtml = "";
        let counter = 0;

        for(let launch of spacex){
            if(new Date(launch.date_local) > new Date() && (counter <= 2)){
                const launchpad = launchpads.filter(element => element.id === launch.launchpad);
                const rocket = rockets.filter(element => element.id === launch.rocket);

                console.log(launchpad[0].id);
                console.log(rocket[0].id);
                
                let formatedDate = formatDate(launch.date_local);
                
                // Show upcoming launch i header
                if (counter === 0){
                    upcomingHtml = `
                        <div class="container-hero">
                            <div class="hero-text">
                                <h1 class="hero-header">Upcoming launch</h1>
                                <h2 class="hero-starship">${launch.name}</h2>
                                <p class="hero-date">${formatedDate}</p>
                                <div>
                                    <a class="btn-standard" title="Read more about upcoming launch" href="upcoming.html?id=${launch.id}">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    `;
                    upcomingLaunch.innerHTML = upcomingHtml; 
                }

                detailHtml += `
                <div class="launches-container">
                    <ul>
                        <li class="spaceship-name"><h3>${launch.name}</h3></li>
                        <li class="launch-date">${formatedDate}</li>
                        <li class="location-text"><i class="adress-icon fas fa-map-marker-alt"></i> ${launchpad[0].locality} - ${launchpad[0].region}</li>
                        <li class="location-text"><i class="rocket-icon fas fa-rocket"></i> ${rocket[0].name}</li>
                    </ul>
                    <a  class="btn-details" title="Read more about upcoming launch" href="upcoming.html?id=${launch.id}">
                        Read more <i class="fas fa-arrow-right link-arrow"></i>
                    </a>
                </div>
                 `;   
                counter++;
        }
       }        
        return calenderLaunches.innerHTML = detailHtml;     
    }

    
