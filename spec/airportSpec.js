describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();

    plane = new Plane();
  });

  it('contains a plane when it has landed', function() {
    airport.land(plane);
    expect(airport.contains(plane)).toEqual(true);
  });

  it('does not contain a plane when the plane has taken off', function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.contains(plane)).toEqual(false);
  });

});
