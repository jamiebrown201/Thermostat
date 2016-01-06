var Thermostat = function(temperatureController) {
  this.controller = temperatureController;
};

Thermostat.prototype.upButton = function() {
  this.controller.increase();
};

Thermostat.prototype.temperature = function() {
  return this.controller.temperature;
};
