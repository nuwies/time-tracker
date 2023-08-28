/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

window.timeTracker.addEventListener("submit", function (e) {
  e.preventDefault();
  return t
    .set("card", "shared", "hours", window.hours.value)
    .then("card", "shared", "minutes", window.minutes.value)
    .then(function () {
      t.closePopup();
    });
});

t.render(function () {
  return t
    .get("card", "shared", "hours")
    .get("card", "shared", "minutes")
    .then(function (hours, minutes) {
      window.hours.value = hours;
      window.minutes.value = minutes;
    })
    .then(function () {
      t.sizeTo("#time-tracker").done();
    });
});