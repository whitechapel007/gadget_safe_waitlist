$(".form-submit").click(function(event) {
    event.preventDefault()
    console.log($('input[name=email]').val())
    const data = {
        email: $('input[name=email]').val()
    }
    $.ajax({
        type: "POST",
        url: "https://gadgetsafefeedback.herokuapp.com/api/users",
        data: JSON.stringify(data),
        success: function() {


        },

    })
})