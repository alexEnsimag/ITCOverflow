/**
 * Created by User on 1/28/2016.
 */
$(function(){
    $('.signup').unbind('click').bind('click', function(){
        $('.form-holder').hide();
        $('.create-profile').removeClass('hidden');
        return false;
    })
});

function sendNewUserDetails(){
    var email = $('.email').val();
    var password = $('.password').val();
    var firstName = $('.firstName').val();
    var lastName = $('.lastName').val();
    var job = $('.job').val();
    var country = $('.country').val();
    var skills = $('.skills').val();
    var program = $('.program').val();

    $.post("/subscribe", {"email": email, "password": password, "firstName": firstName, "lastName": lastName, "job": job, "country": country, "skills": skills, "program": program}, function(data){
        console.log("result " + JSON.stringify(data));
    }, "json");
}

function login(){
    var username = $('.username').val();
    var userPassword = $('.userPassword').val();

    $.post("/auth", {"email": username, "password": userPassword}, function(data){
        console.log("result " + JSON.stringify(data));
    }, "json");
}