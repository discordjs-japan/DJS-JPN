$(window).on(`load`, () => {

    $(`.sk-cube-grid`).fadeOut(1000);

    $(`.parallax`).parallax();

});

$(`a,.force-link`).click((element) => {

    if (element.currentTarget.id === `top_a`) return;

    $(`.sk-cube-grid`).fadeIn(0);

});

$(`#top`).click(() => {

    $("body,html").animate({ scrollTop: 0 }, 500);

});
