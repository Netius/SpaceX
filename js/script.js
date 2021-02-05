    const spacexUrl = "https://api.spacexdata.com/v4/launches/latest";
    const corsEnableUrl = "https://noroffcors.herokuapp.com/" + spacexUrl;

    const latestContainer = document.getElementById("latest-container");

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
        let detailHtml = "";
        console.log(spacex);
        for(let detail of spacex){
            console.log(detail.details)
         detailHtml += `<h2 style="color: white;">${detail.details}</h2> `;   
        }

        return latestContainer.innerHTML = detailHtml;
        
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
    
