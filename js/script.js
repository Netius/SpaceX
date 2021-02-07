    const spacexUrl = "https://api.spacexdata.com/v4/launches/upcoming";
    const corsEnableUrl = "https://noroffcors.herokuapp.com/" + spacexUrl;

    const calenderLaunches = document.getElementById("calendar-launches");

    async function fetchSpacex() {
        try {
            const response = await fetch(corsEnableUrl);
            const spacex = await response.json();
            createSpacexLaunches(spacex);
        } catch (error) {
            throw error;
        }
    }
    fetchSpacex();

    function createSpacexLaunches(spacex) {
        spacex.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(a.date_local) - new Date(b.date_local);
          });
          
       console.log(spacex);
       
        let detailHtml = "";
        spacex.sort()
        // console.log(spacex);
        for(let detail of spacex){
            console.log(detail.date_local)
         detailHtml += `<h2 style="color: white;">${detail.details}</h2> `;   
        }

        return calenderLaunches.innerHTML = detailHtml;
        
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
    
