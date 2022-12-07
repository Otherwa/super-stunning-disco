console.log("Nice")

const swup = new Swup();

ScrollReveal({ reset: true });

let config = {
    delay: 500,
    duration: 600,
    origin: 'bottom',
    distance: '10px'
}

ScrollReveal().reveal('#main', config);
ScrollReveal().reveal('#sub-main1', config);
ScrollReveal().reveal('#sub-main2', config);

function description() {
var x = document.getElementById("myDIV");
if (x.style.display === "none") 
{
x.style.display = "block";
} else {
x.style.display = "none";
}
}
                            