/**
 * Created by User on 1/28/2016.
 */

var profile = {};

$(function(){

    profile.createTop = loadTopHalf();
    profile.createInfo = loadUserInfo();

    function loadTopHalf(){
        var leftCol = $('<div></div>', {class: 'col-sm-2'});
        var topHalf = $('<div></div>', {class: 'col-sm-8'});
        var rightCol = $('<div></div>', {class: 'col-sm-2'});
        $('.top-container').append(leftCol, topHalf, rightCol);

        var container = $('<div></div>', {class: 'container top-profile'});
        topHalf.append(container);

        var row = $('<div></div>', {class: 'row'});
        container.append(row);

        var profilePic = $('<div></div>', {class: 'profile-pic'});
        row.append(profilePic);

        var nameHolder = $('<div></div>', {class: 'name-holder'});
        row.append(nameHolder);

        var name = $('<h1></h1>', {class: 'profile-name', text: 'User Name'});
        nameHolder.append(name);
    }

    function loadUserInfo(){
        var leftCol = $('<div></div>', {class: 'col-sm-2'});
        var midHalf = $('<div></div>', {class: 'col-sm-8'});
        var rightCol = $('<div></div>', {class: 'col-sm-2'});
        $('.info-container').append(leftCol, midHalf, rightCol);

        var container = $('<div></div>', {class: 'container'});
        midHalf.append(container);

        var row = $('<div></div>', {class: 'row'});
        container.append(row);

        var userInfoHolder = $('<div></div>', {class: 'user-info-holder'});
        row.append(userInfoHolder);

        var program = $('<h4></h4>', {class: 'info user-program', text: 'Program: '});
        var job = $('<h4></h4>', {class: 'info user-job', text: 'Work: '});
        var country = $('<h4></h4>', {class: 'info user-country', text: 'Location: '});
        var skills = $('<h4></h4>', {class: 'info user-skills', text: 'Skills: '});

        userInfoHolder.append(program, job, country, skills);
    }



}(profile));