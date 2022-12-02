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
                $('#email-sub').attr('disabled', 'disabled');
                $('#email').val('');
            }
        },
        error: function (errorMessage) {
            console.log('Error' + errorMessage);
        }
    });
})
