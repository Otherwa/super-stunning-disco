var email = $('#email').val()


$('#email-sub').click(() => {
    var email = $('#email').val()
    console.log(email)
    $('#email-sub').prop('disabled', true)
    $.ajax({
        url: "/",
        type: 'POST',  // http method
        data: { email: email },  // data to submit
        success: function (data) {
            console.log(data);
            // if res is 200
            if (data == "200") {
                $('#email').val('');
                setTimeout(function () { $('#email-sub').prop('disabled', false) }, 2000)
                $('#suc').fadeIn(900);
                $('#suc').fadeOut(2000);
            } else {
                $('#email').val('');
                setTimeout(function () { $('#email-sub').prop('disabled', false) }, 2000)
                $('#msg').fadeIn(900);
                $('#msg').fadeOut(2000);
            }
        },
        error: function (errorMessage) {
            console.log('Error' + errorMessage);
        }
    });
})


var countDownDate = new Date("Jan 6, 2023 09:30:00").getTime(); //Set date on event
// Update 1 second
var x = setInterval(function () {
    var now = new Date().getTime();
    var timerem = countDownDate - now;
    // days, hours, minutes and seconds
    var days = Math.floor(timerem / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timerem % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timerem % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timerem % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d " + hours + "hrs " + minutes + "min " + seconds + "sec ";
    if (timerem < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Sucessfull Ended";
        document.querySelector("#demo").style.fontSize = "2rem";
        document.querySelector("#demo").style.line_height = "1.6rem";
        $('.contain').show()
        $('.preload').hide()
    } else {
        $('.preload').show()
        $('.contain').hide()
    }
}, 1000);

// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth - 3;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Setting up the draw function
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
            drops[i] = 0;
        }
    }
}

// Loop the animation
setInterval(draw, 33);
