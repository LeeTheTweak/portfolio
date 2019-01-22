// Getting the mail logo
const mail = document.querySelector("#contactDiv img");

// Animating the mail logo
$(document).ready(function(){
    $(mail).animate({
        marginTop: "-150",
        opacity: "1.0"
    }, 750);
});

// Getting the footer
var footerEl = document.querySelector("footer");
$(footerEl).hide().delay(500).fadeIn(1500);