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

    $.ajax({
            url: '/subscribe',
            method: 'post',
            dataType: 'application/json',
            data: {"email": email, "password": password, "firstName": firstName, "lastName": lastName, "job": job, "country": country, "skills": skills, "program": program},
            success: function (data) {
                if (data){
                    console.log('succesful')
                }
                else{
                    console.log('no')
                }
            }
        });
}

function login(){
    var username = $('.username').val();
    var userPassword = $('.userPassword').val();

    $.ajax({
            url: '/auth',
            method: 'post',
            dataType: 'application/json',
            data: {"email": username, "password": userPassword},
            success: function (data) {
                if (data){
                    console.log('succesfulLogin')
                }
                else{
                    console.log('no')
                }
            }
        });

}