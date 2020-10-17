const title = document.querySelector("body");
const btn = document.querySelector(".profile-btn");
const navItem = document.querySelector(".navbar-nav");
const logo = document.querySelector(".logo");

// title.style.overflow = "hidden";

var mobile = window.matchMedia("(max-width: 575.98px)");
var tab = window.matchMedia("(max-width: 991.92px)");
mobileViewport(mobile);
mobileViewport(tab);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
navItem.addEventListener("click", function() {
    title.style.overflow = "visible";
});
btn.addEventListener("click", function() {
    title.style.overflow = "visible";
});

function mobileViewport(mobile) {
    if (mobile.matches) { // If media query matches
        logo.setAttribute("src", "images/ignaz-logo-blue.png")
        return true;
    }
}
  

$(window).scroll(function() {
    var s = $(this).scrollTop();
    if(s <= 50) {
        var mobile = window.matchMedia("(max-width: 575.98px)")
        if(!mobileViewport(mobile)) {
            if(!mobileViewport(tab)) {
                logo.setAttribute("src", "images/ignaz-logo-white.png")
            }    
        }   
    }
    else {
        logo.setAttribute("src", "images/ignaz-logo-blue.png")
    }
    
})


