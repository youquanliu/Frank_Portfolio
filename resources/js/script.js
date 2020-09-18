$(document).ready(function () {

    $(".js--section-introduction").waypoint(function (direction) {
        if (direction = "down") {
            $(".ready_to_stick").addClass("sticky");
        } else {
            $(".ready_to_stick").removeClass("sticky");
        }
    });

});