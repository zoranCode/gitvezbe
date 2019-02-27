$(document).ready(function () {
    $('p').css({ 'height': '50px', 'margin': 'auto', 'width': '40%' });
    $('p').each(function (i) {
        if (i == 0)
            $(this).addClass("yellow");
        if (i == 1)
            $(this).addClass("orange");
        if (i == 2)
            $(this).addClass("red");
    });
});
