describe("FizzBuzz", function() {

  it('should return FizzBuzz if given multiple of 3 and 5', function() {
    expect(FizzBuzz(15)).toEqual('FizzBuzz');
    expect(FizzBuzz(30)).toEqual('FizzBuzz');
    expect(FizzBuzz(60)).toEqual('FizzBuzz');
  });

  it('should return Fizz if given multiple of 3', function() {
    expect(FizzBuzz(3)).toEqual('Fizz');
    expect(FizzBuzz(6)).toEqual('Fizz');
    expect(FizzBuzz(9)).toEqual('Fizz');
  });

  it('should return Buzz if given multiple of 5', function() {
    expect(FizzBuzz(5)).toEqual('Buzz');
    expect(FizzBuzz(10)).toEqual('Buzz');
    expect(FizzBuzz(20)).toEqual('Buzz');
  });

  it('should return number if not multiple of 3 is given', function() {
    expect(FizzBuzz(1)).toEqual(1);
    expect(FizzBuzz(2)).toEqual(2);
  });


});
