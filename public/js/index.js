var email = $('#email').val()


$('#email-sub').click(() => {
    var email = $('#email').val()
    console.log(email)
    $.ajax({
        url: "/",
        type: 'POST',  // http method
        data: { email: email },  // data to submit
        success: function (data) {
            console.log(data);
            // if res is 200
            if (data == "200") {
                $('#email').val('');
                $('#email').prop('disabled', 'true')
                setTimeout($('#email').prop('disabled', 'false'), 2000)
            } else {
                $('#email').val('');
            }
        },
        error: function (errorMessage) {
            console.log('Error' + errorMessage);
        }
    });
})
