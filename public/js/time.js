/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

window.time.addEventListener("submit", function (e) {
  e.preventDefault();

  var time = {
    hours: window.hours.value,
    minutes: window.minutes.value,
  };

  return t.set("card", "shared", "time", time).then(function () {
    t.closePopup();
  });
});

t.render(function () {
  return t.get("card", "shared", "time").then(function (time) {
    window.hours.value = time.hours;
    window.minutes.value = time.minutes;
  });
});
