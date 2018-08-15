$(window).on(`load`, () => {

    $(`.sk-cube-grid`).fadeOut(1000);

    $(`.parallax`).parallax();

});

$(window).scroll(function () {

    if ($(window).scrollTop() + $(window).height() > $(window).height()) {

        $(`#top`).css({
            visibility: `visible`,
            opacity: 1,
        });

    } else {

        $(`#top`).css({
            visibility: `hidden`,
            opacity: 0,
        });

    }

});

$(`a,.force-link`).click((element) => {

    if (element.currentTarget.id === `top_a`) return;

    $(`.sk-cube-grid`).fadeIn(0);

});

$(`#top`).click(() => {

    $("body,html").animate({ scrollTop: 0 }, 500);

});
