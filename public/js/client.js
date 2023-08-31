/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var CLOCK_ICON = "https://cdn-icons-png.flaticon.com/128/2088/2088617.png";

var openIframe = function (t) {
  return t.popup({
    title: "Time Tracker",
    url: "/time.html",
    height: 130,
  });
};

TrelloPowerUp.initialize({
  "card-buttons": function (t, options) {
    return [
      {
        icon: CLOCK_ICON,
        text: "Time Tracker",
        callback: openIframe,
      },
    ];
  },
  "card-badges": function (t, options) {
    return t.get("card", "shared", "time").then(function (time) {
      if (time.hours != 0 || time.minutes != 0) {
        return [
          {
            icon: CLOCK_ICON,
            text: time.hours + "h " + time.minutes + "m",
            color: "yellow",
          },
        ];
      }
    });
  },
  "card-detail-badges": function (t, options) {
    return t.get("card", "shared", "time").then(function (time) {
      if (time.hours != 0 || time.minutes != 0) {
        return [
          {
            title: "Time (Estimate)",
            text: time.hours + "h " + time.minutes + "m",
            color: "yellow",
            callback: openIframe,
          },
        ];
      }
    });
  },
});
