function Airport() {
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  if (this.isStormy()) {throw new Error('It is too stormy to land')};
  this.planes.push(plane);
};


Airport.prototype.takeOff = function(plane) {
  if (this.isStormy()) {throw new Error('It is too stormy to takeoff')};
  var index = this.planes.indexOf(plane);
  if (index > -1) {this.planes.splice(index,1)};
}

Airport.prototype.contains = function(plane) {
  if (this.planes.includes(plane)) { return true } ;
  return false ;
};

Airport.prototype.isStormy = function() {
  this.weather = new Weather();
  return this.weather.isStormy();
}
