const detailsLaunch = document.getElementById("details-launch");

function createSpacexLaunches(launch ,launchpads, rockets){
    // Filter launchpad and rocket based on their ID from launches
    const launchpad = launchpads.filter(element => element.id === launch.launchpad);
    const rocket = rockets.filter(element => element.id === launch.rocket);
   
    // Formats date dd.month.yy
    let formatedDate = formatDate(launch.date_local);
    
    // Format text breaking after point.
    let rocketText = formatText(rocket[0].description);
    let launchPadDetails = formatText(launchpad[0].details);

    // Some launches does not have any details
    let launchDetails= "More details about this launch is coming soon!";
    if(launch.details){
        launchDetails = formatText(launch.details);
    }
    // Pu some yellow background on the closest 3 launches
    let dateClass="hero-date-upcoming";
    if(firstLaunch === "false"){
        dateClass = "";
    }
    // console.log(rocket[0].flickr_images.length);
    let randomImage = randomRocketImage( 1, rocket[0].flickr_images.length); 

    let detailHtml= "";
        detailHtml += `
                <div class="subhead-container">
                    <div class="col">
                        <h2 class="spaceship-name">${launch.name} 
                            <span class="location-text pd-left">#${launch.flight_number}
                            </span>
                        </h2>
                        <p class="hero-date" ${dateClass}"><i class="calendar-icon far fa-calendar-alt"></i>${formatedDate}</p>
                        <p class="pd-bottom">${launchDetails}<p>
                        
                        <h2 class="spaceship-name"><i class="adress-icon fas fa-map-marker-alt"></i> ${launchpad[0].locality} - ${launchpad[0].region}</h2>
                        <p class="details-text pd-bottom">${launchPadDetails}</p>
                    
                        <h2 class="spaceship-name"><i class="rocket-icon fas fa-rocket"></i> ${rocket[0].name}</h2>
                        <p class="details-text pd-bottom">${rocketText}</p>
                    </div> 
                    <div class="flex-thirds details-image">
                        <figure>
                            <img src=${rocket[0].flickr_images[0]} alt=${rocket[0].name} title=${rocket[0].name} width="100%">
                            <figcaption class="figcaption-text">${rocket[0].name}</figcaption>
                        </figure>
                        <figure>
                            <img src=${rocket[0].flickr_images[randomImage]} alt=${rocket[0].name} title=${rocket[0].name} width="100%">
                            <figcaption class="figcaption-text">${rocket[0].name}</figcaption>
                        </figure>
                    <div>
                </div>
                 `; 
                 
    detailsLaunch.innerHTML = detailHtml;          

}

// Just to get a random rocket image from galery
function randomRocketImage(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }