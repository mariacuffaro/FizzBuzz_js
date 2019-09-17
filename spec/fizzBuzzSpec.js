describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it('should return FizzBuzz if given multiple of 3 and 5', function() {
    expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
    expect(fizzBuzz.play(60)).toEqual('FizzBuzz');
  });

  it('should return Fizz if given multiple of 3', function() {
    expect(fizzBuzz.play(3)).toEqual('Fizz');
    expect(fizzBuzz.play(6)).toEqual('Fizz');
    expect(fizzBuzz.play(9)).toEqual('Fizz');
  });

  it('should return Buzz if given multiple of 5', function() {
    expect(fizzBuzz.play(5)).toEqual('Buzz');
    expect(fizzBuzz.play(10)).toEqual('Buzz');
    expect(fizzBuzz.play(20)).toEqual('Buzz');
  });

  it('should return number if not multiple of 3 is given', function() {
    expect(fizzBuzz.play(1)).toEqual("1");
    expect(fizzBuzz.play(2)).toEqual("2");
  });


});
