var FlotStream = require('../../');

var plot = $.plot('#placeholder', [ ], {
  series: {
    shadowSize: 0
  },
  yaxis: {
    min: 0,
    max: 100
  },
  xaxis: {
    min: 0,
    max: 100,
    show: false
  }
});

var stream = new FlotStream({
  plot: plot,
  points: 100
});

setInterval(function () {
  stream.write(Math.random() * 100);
}, 100);
