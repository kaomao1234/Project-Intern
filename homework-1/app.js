let lat = 14.691473;
let lon = 100.6569881;

$(function () {
  $("#accordion").accordion();
  $(".widget input[type=submit], .widget a, .widget button").button();
  $("button, input, a").on("click", function (event) {
    event.preventDefault();
  });
});

function showMap(lat, lon) {
  let mapSrc = `http://maps.google.com/maps?q=${lat},${lon}
&z=17&output=embed`;
  document.getElementById("showMap").src = mapSrc;
}
document.getElementById(
  "showMap"
).src = `http://maps.google.com/maps?q=${lat},${lon}
&z=17&output=embed`;
