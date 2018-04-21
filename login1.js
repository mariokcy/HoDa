$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$('#loginbutton').click(function(){
   window.location='mainPage.html';
});