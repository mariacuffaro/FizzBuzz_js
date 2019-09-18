function Weather() {
  this.possibleWeather = ['stormy', 'sunny', 'sunny', 'sunny'];
  this.weather = this.possibleWeather[Math.floor(Math.random() * this.possibleWeather.length)];
};

Weather.prototype.isStormy = function() {
  console.log(this.weather);
  console.log(this.weather === 'stormy');
  return this.weather === 'stormy';
};
