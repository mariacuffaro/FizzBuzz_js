function Airport() {
  this.planes = [];
};

Airport.prototype._land = function(plane) {
  this.planes.push(plane);
};

Airport.prototype._contains = function(plane) {
  if (this.planes.includes(plane)) { return true } ;
  return false ;
};
