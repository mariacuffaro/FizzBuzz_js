describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();

    plane = new Plane();
  });

  it('contains a plane when it has landed', function(){
    spyOn(airport,'isStormy').and.returnValue(false);
    airport.land(plane);
    expect(airport.contains(plane)).toEqual(true);
  });

  it('does not contain a plane when the plane has taken off', function() {
    spyOn(airport,'isStormy').and.returnValue(false);
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.contains(plane)).toEqual(false);
  });

  it('prevents landing when weather is stormy', function() {
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){airport.land(plane)}).toThrowError('It is too stormy to land');

  });

  it('prevents takeoff when weather is stormy', function() {
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){airport.takeOff(plane)}).toThrowError('It is too stormy to takeoff');

  });
});
