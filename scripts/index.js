/** Getting the greeings elements */
var hello = document.querySelector("#greetings h1");
var intro = document.querySelector("#greetings p");

var and = document.querySelector("#greetings2 h1");
var intro2 = document.querySelector("#greetings2 p");

// Animate the greetings on document ready.
$(document).ready(function() {
    $(hello).animate({
       marginLeft: "+=80"
    }, 800);

    // First sub title intro
    $(intro).hide().delay(800).fadeIn(1400);
    // The Second subtitle intro
    $(and).hide().delay(3000).fadeIn(1400);
    $(intro2).hide().delay(4000).slideDown().fadeIn(1400);
    
});

// Getting the developer icons 
var devIcons = document.querySelectorAll("#greetings img");
$(devIcons).hide().delay(2000).fadeIn(1000);

// Getting the design icons
var designIcons = document.querySelectorAll("#greetings2 img");
$(designIcons).hide().delay(3000).fadeIn(1000);

// Getting the main contents
var mainContents = document.getElementById("contents");
// Getting the nav icons
var navIcons = document.querySelectorAll("#mainTabs a");

// Getting the footer
var footerEl = document.querySelector("footer");
$(footerEl).hide().delay(5000).fadeIn(1200);