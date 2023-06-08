// Loading Screen
window.addEventListener("load", function(){
    document.getElementById("website-loading").style.display = "none";
    document.getElementById("website-loading").style.transitionDuration = "1s";
})

window.onscroll = function() {scrollFunction()};

// Bar
let renk2 = "#1a1c1f"
let renk1 = "rgba(21, 21, 21, 0.01)"
let renk3 = "rgba(21, 21, 21, 0.75)"

let delay1 = "1s"
let delay2 = "0.01s"

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("website-bar").style.backgroundColor = renk3;
        document.getElementById("website-bar-mainbar").style.backgroundColor = renk1;
        document.getElementById("website-bar-mainbar-logo").style.backgroundColor = renk1;
        document.getElementById("website-bar-mainbar-links").style.backgroundColor = renk1;
        document.getElementById("website-bar-mainbar-links-icon").style.backgroundColor = renk1;
        document.getElementById("website-bar-mainbar-links-icon-svg").style.backgroundColor = renk1;

        document.getElementById("website-bar").style.transitionDuration = delay1;
        document.getElementById("website-bar-mainbar").style.transitionDuration = delay2;
        document.getElementById("website-bar-mainbar-logo").style.transitionDuration = delay2;
        document.getElementById("website-bar-mainbar-links").style.transitionDuration = delay2;
        document.getElementById("website-bar-mainbar-links-icon").style.transitionDuration = delay2;
        document.getElementById("website-bar-mainbar-links-icon-svg").style.transitionDuration = delay2;

    } else {
        document.getElementById("website-bar").style.backgroundColor = renk2;
        document.getElementById("website-bar-mainbar").style.backgroundColor = renk2;
        document.getElementById("website-bar-mainbar-logo").style.backgroundColor = renk2;
        document.getElementById("website-bar-mainbar-links").style.backgroundColor = renk2;
        document.getElementById("website-bar-mainbar-links-icon").style.backgroundColor = renk2;
        document.getElementById("website-bar-mainbar-links-icon-svg").style.backgroundColor = renk2;
    
        document.getElementById("website-bar").style.transitionDuration = delay1;
        document.getElementById("website-bar-mainbar").style.transitionDuration = delay2;
        document.getElementById("website-bar-mainbar-logo").style.transitionDuration = delay2;
        document.getElementById("website-bar-mainbar-links").style.transitionDuration = delay2;
        document.getElementById("website-bar-mainbar-links-icon").style.transitionDuration = delay2;
        document.getElementById("website-bar-mainbar-links-icon-svg").style.transitionDuration = delay2;
    }
}
