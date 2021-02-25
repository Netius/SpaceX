const calenderLaunches = document.getElementById("launch-calendar");

function createSpacexLaunches(spacex , launchpads, rockets) { 
    sortDateLaunches(spacex);
    let detailHtml = "";
    let counter = 0;
    let dateClass="hero-date-upcoming";
    let upcoming = true;
    

    for(let launch of spacex){
        if(new Date(launch.date_local) >= new Date()){
            const launchpad = launchpads.filter(element => element.id === launch.launchpad);
            const rocket = rockets.filter(element => element.id === launch.rocket);
            let formatedDate = formatDate(launch.date_local);

             // Adding bg-color to date for the 3 firsts launches
             if(counter > 2){
                dateClass = "";
                upcoming = false;
            }

            detailHtml += `
            <div class="launch-calender-child">
                <ul>
                    <li class="spaceship-name"><h3>${launch.name}
                        <span class="location-text flight-container">
                            #${launch.flight_number}
                        </span>
                        </h3>
                    </li>
                    <li class="hero-date ${dateClass}"><i class="calendar-icon far fa-calendar-alt"></i>${formatedDate}</li>
                    <li class="location-text"><i class="adress-icon fas fa-map-marker-alt"></i> ${launchpad[0].locality} - ${launchpad[0].region}</li>
                    <li class="location-text"><i class="rocket-icon fas fa-rocket"></i> ${rocket[0].name}</li>
                </ul>
                <a  class="btn-standard" title="Read more about ${launch.name} launch" href="upcoming.html?id=${launch.id}&first=${upcoming}">
                    Read more
                </a>
            </div>
             `;
            counter++;
    }
   }        
    return calenderLaunches.innerHTML = detailHtml;     
}


