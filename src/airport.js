// Plane object:

function Plane() {};

Plane.prototype.land = function(airport) {
  airport._planes.push(this);
};

// Airport object:

function Airport() {
  this._planes = [];
};

Airport.prototype.planes = function() {
  return this._planes;
};
