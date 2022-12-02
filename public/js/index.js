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
