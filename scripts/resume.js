// Getting the actual resume
const resume = document.querySelector("#resumeDiv img");
// Animating the resume
$(document).ready(function(){
    $(resume).animate({
        marginTop: "-150",
        opacity: "1.0"
    }, 750);
});

// Getting the footer
var footerEl = document.querySelector("footer");
$(footerEl).hide().delay(500).fadeIn(1500);