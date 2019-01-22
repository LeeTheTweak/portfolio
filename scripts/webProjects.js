// Getting the projects container area
const projectContainer = document.querySelector("#projectsContainer #projectsDiv");

//Animate the table to go up
$(document).ready(function(){
    $(projectContainer).animate({
        marginTop: "0",
        opacity: "1.0"
    }, 750);
});

// Getting the footer
var footerEl = document.querySelector("footer");
$(footerEl).hide().delay(500).fadeIn(1500);