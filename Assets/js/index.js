// Smooth Scroll
$(document).ready(function () {
    $(".smooth").click(function (event) {
    event.preventDefault();

    var gato = this.hash;

    $("html").animate(
        {
        scrollTop: $(gato).offset().top - 50,
        },
        1200
        );
    });
});
// Tooltip
$('[data-toggle="tooltip"]').tooltip()
// Popover
$('[data-toggle="popover"]').popover()




