    const calenderLaunches = document.getElementById("calendar-launches");
    const upcomingLaunch = document.getElementById("upcoming-container");

    function createSpacexLaunches(spacex , launchpads, rockets) { 
        sortDateLaunches(spacex);
        let detailHtml = "";
        let upcomingHtml = "";
        let counter = 0;
        let dateClass="hero-date-upcoming";
        let upcoming = true;

        for(let launch of spacex){
            if(new Date(launch.date_local) >= new Date() && (counter <= 5)){
                const launchpad = launchpads.filter(element => element.id === launch.launchpad);
                const rocket = rockets.filter(element => element.id === launch.rocket);
                let formatedDate = formatDate(launch.date_local);

                // Remove bg-color to date after 3 firsts launches
                if(counter > 2){
                    dateClass = "";
                    upcoming = false;
                }
                
                // Show upcoming launch i header
                if (counter === 0){
                    upcomingHtml = `
                                <h2 class="hero-starship">${launch.name}<span class="location-text pd-left">#${launch.flight_number}
                                </span></h2>
                                <p class="hero-date ${dateClass}"><i class="calendar-icon far fa-calendar"></i>${formatedDate}</p>
                                <div>
                                    <a class="btn-standard" title="More details about ${launch.name} launch" href="upcoming.html?id=${launch.id}&first=${upcoming}">
                                        More details
                                    </a>
                                </div>
                    `;
                    upcomingLaunch.innerHTML = upcomingHtml; 
                }

                detailHtml += `
                <div class="launches-container" title="More details about ${launch.name} launch" onclick="window.location='upcoming.html?id=${launch.id}&first=${upcoming}'">
                    <ul>
                        <li class="spaceship-name">
                            <h3>${launch.name}
                                <span class="location-text flight-container">
                                    #${launch.flight_number}
                                </span>
                            </h3>
                        </li>
                         <li class="hero-date ${dateClass}"><i class="calendar-icon far fa-calendar"></i>${formatedDate}</li>
                        <li class="location-text"><i class="adress-icon fas fa-map-marker-alt"></i> ${launchpad[0].locality} - ${launchpad[0].region}</li>
                        <li class="location-text"><i class="rocket-icon fas fa-rocket"></i> ${rocket[0].name}</li>
                    </ul>
                    <a  class="btn-details" title="More details about ${launch.name} launch" href="upcoming.html?id=${launch.id}&first=${upcoming}">
                        More details
                    </a>
                </div>
                 `;
                counter++;
        }
       }        
        return calenderLaunches.innerHTML = detailHtml;     
    }

    
