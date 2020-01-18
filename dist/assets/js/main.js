(function($){
    //var test = 'Console is OK!';
    //console.log(test);


    /* Auto fixed navigation on scroll */
    $(document).scroll(function () {
        var $nav = $("#navbar");
        //when scroll down
        $nav.toggleClass('scrolled-nav', $(this).scrollTop() > 160);
    });   

})(jQuery);