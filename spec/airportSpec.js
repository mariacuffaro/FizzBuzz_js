describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();

    plane = new Plane();
  });

  it('contains a plane when it has landed', function() {
    airport._land(plane);
    expect(airport._contains(plane)).toEqual(true);
  });

});
