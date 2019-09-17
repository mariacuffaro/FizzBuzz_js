function Airport() {
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};


Airport.prototype.takeOff = function(plane) {
  
}

Airport.prototype.contains = function(plane) {
  if (this.planes.includes(plane)) { return true } ;
  return false ;
};
