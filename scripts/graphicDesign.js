// Getting the table in it's div
const theArtTable = document.querySelector("#tableDiv table");

//Animate the table to go up
$(document).ready(function(){
    $(theArtTable).animate({
        marginTop: "0",
        opacity: "1.0"
    }, 750);
});

// Getting the footer
var footerEl = document.querySelector("footer");
$(footerEl).hide().delay(500).fadeIn(1500);