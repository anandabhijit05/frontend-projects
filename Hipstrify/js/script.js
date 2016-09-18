$(function() {
    $('body').scrollspy({ target: '#navbar-collapse' });
    $('.nav-link').click(function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
    });
});