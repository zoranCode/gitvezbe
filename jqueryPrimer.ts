declare var $: any;

$(document).ready(function () {

    $('p').css({ 'height': '50px', 'margin': 'auto', 'width': '40%' });

    $('p').each(function (i: number) {

        if (i == 0)
            $(this).addClass("yellow");
        if (i == 1)
            $(this).addClass("orange");
        if (i == 2)
            $(this).addClass("red");

    });
});
//https://stackoverflow.com/questions/32050645/how-to-use-jquery-with-typescript