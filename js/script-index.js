    const calenderLaunches = document.getElementById("calendar-launches");
    const upcomingLaunch = document.getElementById("upcoming-container");

    function createSpacexLaunches(spacex , launchpads, rockets) { 
        sortDateLaunches(spacex);
        let detailHtml = "";
        let upcomingHtml = "";
        let counter = 0;
        let firstRocket ="";

        for(let launch of spacex){
            if(new Date(launch.date_local) > new Date() && (counter <= 5)){
                const launchpad = launchpads.filter(element => element.id === launch.launchpad);
                const rocket = rockets.filter(element => element.id === launch.rocket);

                // if (firstRocket === launch.rocket){
                //     console.log("LIKT");
                //     continue;
                // }
                
                // firstRocket = launch.rocket;
                
                let formatedDate = formatDate(launch.date_local);
                
                // Show upcoming launch i header
                if (counter === 0){
                    upcomingHtml = `
                                <h2 class="hero-starship">${launch.name}</h2>
                                <p class="hero-date">${formatedDate}</p>
                                <div>
                                    <a class="btn-standard" title="Read more about upcoming launch" href="upcoming.html?id=${launch.id}">
                                        Read more
                                    </a>
                                </div>
                    `;
                    upcomingLaunch.innerHTML = upcomingHtml; 
                }

                detailHtml += `
                <div class="launches-container" title="Read more about upcoming launch" onclick="window.location='upcoming.html?id=${launch.id}'">
                    <ul>
                        <li class="spaceship-name"><h3>${launch.name}</h3></li>
                         <li class="hero-date">${formatedDate}</li>
                        <li class="location-text"><i class="adress-icon fas fa-map-marker-alt"></i> ${launchpad[0].locality} - ${launchpad[0].region}</li>
                        <li class="location-text"><i class="rocket-icon fas fa-rocket"></i> ${rocket[0].name}</li>
                    </ul>
                    <a  class="btn-details" title="Read more about upcoming launch" href="upcoming.html?id=${launch.id}">
                        Read more <i class="fas fa-arrow-right link-arrow"></i>
                    </a>
                </div>
                 `;
                 console.log(counter);   
                counter++;
        }
       }        
        return calenderLaunches.innerHTML = detailHtml;     
    }

    
