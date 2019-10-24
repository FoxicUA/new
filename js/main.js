$( function() {
    $( "#tabs" ).tabs();
    $( "#tabs-gallery" ).tabs();
    $('.slider').slick({
    dots: true,
    arrows: true,
});
    $('.section-open').on('click', function(e) {
        e.preventDefault();
        $('.section-open').parents('.section-bg').addClass('open');
    });
    // $('.btn-toggle').on('click', function(bt) {
    //     bt.preventDefault();
    //     $(this).parents('.nav').addClass('isActive');
    // })
    $('.btn-toggle').on('click', function(z) {
        z.preventDefault();
        $('.nav').toggleClass('isActive');
      });
});





