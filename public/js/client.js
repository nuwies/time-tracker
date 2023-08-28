/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var CLOCK_ICON = 'https://cdn-icons-png.flaticon.com/128/2088/2088617.png';

var onBtnClick = function (t) {
  return t.popup({
    title: 'Time Tracker',
    url: 'time.html',
  });
}

TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
    return [{
      icon: CLOCK_ICON,
      text: 'Time Tracker',
      callback: onBtnClick,
    }];
  },
});
