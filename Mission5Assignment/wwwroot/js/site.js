// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$("#calculate").click(function () {
    const hours = Number($("#hours").val());
    const cost = Number($("#cost").val());

    if (isNaN(hours) || hours < 0) {
        alert("Enter a valid number");
        return;
    }

    const result = hours * cost;
    $("#result").val(result.toFixed(2));
});