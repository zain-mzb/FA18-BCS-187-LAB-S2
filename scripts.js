jQuery(document).ready(function ($) {

    $('.onebtn').hide();

    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=" + 1,

        success: function (res) {
            $('.front').html('');
            for (var a = 0; a < res.data.length; a++) {
                $('.front').append(' <div class="data"> <p> <img src="' + res.data[a].avatar + '" alt=""> </p> <p class="id">' + res.data[a].id + '</p> <p>' + res.data[a].first_name + '</p> <p >' + res.data[a].last_name + '</p> <p>' + res.data[a].email + '</p> </div>');
            }

        }
    });



    $('.twobtn').click(function () {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users?page=" + 2,

            success: function (res) {
                $('.front').html('');
                for (var a = 0; a < res.data.length; a++) {
                    $('.front').append(' <div class="data"> <p> <img src="' + res.data[a].avatar + '" alt=""> </p> <p >' + res.data[a].id + '</p> <p>' + res.data[a].first_name + '</p> <p>' + res.data[a].last_name + '</p> <p>' + res.data[a].email + '</p> </div>');
                }

            }
        });


        $('.twobtn').hide();
        $('.onebtn').show();
    });

    $('.onebtn').click(function () {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users?page=" + 1,

            success: function (res) {
                $('.front').html('');
                for (var a = 0; a < res.data.length; a++) {
                    $('.front').append(' <div class="data"> <p class="avatar"> <img src="' + res.data[a].avatar + '" alt=""> </p> <p class="id">' + res.data[a].id + '</p> <p class="firstname ">' + res.data[a].first_name + '</p> <p class="lastname ">' + res.data[a].last_name + '</p> <p class="email">' + res.data[a].email + '</p> </div>');
                }

            }
        });

        $('.onebtn').hide();
        $('.twobtn').show();
    });

});