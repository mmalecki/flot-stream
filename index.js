var util = require('util');
var Writable = require('stream').Writable;

var FlotStream = module.exports = function (options) {
  this.points = options.points;
  this.plot = options.plot;
  this.data = [];
  Writable.call(this, { objectMode: true });
};
util.inherits(FlotStream, Writable);

FlotStream.prototype._write = function (chunk, _, callback) {
  var i = 0;

  if (this.data.length >= this.points) {
    this.data.shift();
  }
  this.data.push(chunk);

  var data = this.data.map(function (point) {
    return [ i++, point ];
  });

  this.plot.setData([ data ]);
  this.plot.draw();

  callback();
};
