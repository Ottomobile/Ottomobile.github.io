// Snowbots Image Carousel
jQuery(function ($) {
    $('#carousel-snowbots.carousel').carousel();
    var caption = $('div.item:nth-child(1) #caption-snowbots.carousel-caption');
    $('.new-caption-area-snowbots').html(caption.html());
    caption.css('display', 'none');

    $("#carousel-snowbots.carousel").on('slide.bs.carousel', function (evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') #caption-snowbots.carousel-caption');
        $('.new-caption-area-snowbots').html(caption.html());
        caption.css('display', 'none');
    });
});

// Snake Game Image Carousel
jQuery(function ($) {
    $('#carousel-snake-app.carousel').carousel();
    var caption = $('div.item:nth-child(1) #caption-snake-app.carousel-caption');
    $('.new-caption-area-snake-app').html(caption.html());

    $("#carousel-snake-app.carousel").on('slide.bs.carousel', function (evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') #caption-snake-app.carousel-caption');
        $('.new-caption-area-snake-app').html(caption.html());
        caption.css('display', 'none');
    });
});

// 281 Robot Image Carousel
jQuery(function ($) {
    $('#carousel-281robot.carousel').carousel();
    var caption = $('div.item:nth-child(1) #caption-281robot.carousel-caption');
    $('.new-caption-area-281robot').html(caption.html());

    $("#carousel-281robot.carousel").on('slide.bs.carousel', function (evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') #caption-281robot.carousel-caption');
        $('.new-caption-area-281robot').html(caption.html());
        caption.css('display', 'none');
    });
});

// Wifi Piano Image Carousel
jQuery(function ($) {
    $('#carousel-wifipiano.carousel').carousel();
    var caption = $('div.item:nth-child(1) #caption-wifipiano.carousel-caption');
    $('.new-caption-area-wifipiano').html(caption.html());

    $("#carousel-wifipiano.carousel").on('slide.bs.carousel', function (evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') #caption-wifipiano.carousel-caption');
        $('.new-caption-area-wifipiano').html(caption.html());
        caption.css('display', 'none');
    });
});