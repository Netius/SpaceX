    const corsEnableUrl = "https://noroffcors.herokuapp.com/";
    const spacexUrl = corsEnableUrl + "https://api.spacexdata.com/v4/launches";
    const spacexLaunchpads = corsEnableUrl + "https://api.spacexdata.com/v4/launchpads";

    const calenderLaunches = document.getElementById("calendar-launches");

    async function fetchSpacex() {
        try {
            // API call for launches
            const responseLaunches = await fetch(spacexUrl);
            const launches = await responseLaunches.json();
           
            // Api call for Rockets
            const responseLaunchpads = await fetch(spacexLaunchpads);
            const launchpads = await responseLaunchpads.json();
            
            createSpacexLaunches(launches ,launchpads);
        } catch (error) {
            throw error;
        }
    }
    fetchSpacex();


    function createSpacexLaunches(spacex , launchpads) { 
        sortDateLaunches(spacex);
        let detailHtml = "";
        let counter = 0;
        
        for(let launch of spacex){
            if(new Date(launch.date_local) > new Date() && (counter <= 2)){
                const launchpad = launchpads.filter(element => element.id === launch.launchpad);
               
            
                detailHtml += `
                <div class="launches-container">
                    <ul>
                        <li class="spaceship-name"><h3>${launch.name}</h3></li>
                        <li class="launch-date">${launch.date_local}</li>
                        <li class="location-text"><i class="fas fa-map-marker-alt"></i> ${launchpad[0].locality}</li>
                        <li class="location-text">${launchpad[0].region}</li>
                    </ul>
                    <a  class="btn-details" title="Read more about upcoming launch" href="upcoming.html">
                        Read more <i class="fas fa-arrow-right link-arrow"></i>
                    </a>
                </div>
                 `;   
                counter++;
        }
       }        
        return calenderLaunches.innerHTML = detailHtml;     
    }

    // Sorts array by date
    function sortDateLaunches(array){
        array.sort(function(a,b){
            return new Date (a.date_local) - new Date(b.date_local);
          });
    }
    
    // Toogle menu icon from burguer to X 
    let toogleIcon = true;
    function toogleMenuIcon(event){
        let menuIcon = document.getElementById("menu-icon");
        if (toogleIcon){
                menuIcon.classList.remove("fa", "fa-bars");
                menuIcon.classList.add("fas", "fa-times");
        }else{
                menuIcon.classList.remove("fas", "fa-times");
                menuIcon.classList.add("fa", "fa-bars");
        }
        toogleIcon = !toogleIcon;
    }
    
