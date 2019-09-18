it('returns true or false when asked if stormy', function() {
  weather = new Weather();
  spyOn(weather,'isStormy').and.returnValue(false);
  expect(weather.isStormy()).toEqual(false);
});
