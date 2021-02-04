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
        for(detail of spacex){
            console.log(detail.details)
         detailHtml += `<h2 style="color: white;">${detail.details}</h2> `;   
        }

        return latestContainer.innerHTML = detailHtml;
        
    }
