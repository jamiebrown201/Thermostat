var Thermostat = function() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.maximumTemperature = 25;
};

Thermostat.prototype.upButton = function() {
  if (this.temperature === this.maximumTemperature) {
    throw new Error("Cannot increase any more maximum temperature reached");
  }
  this.temperature++;
};

Thermostat.prototype.downButton = function() {
  if (this.temperature === 10) {
    throw new Error("Temperature is 10: Cannot decrease further.");
  }
  this.temperature--;
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.maximumTemperature = 25;
};

Thermostat.prototype.powerSavingModeOff = function() {
  this.maximumTemperature = 32;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.temperatureDisplay = function() {
  if (this.temperature < 18) {
    return 'low usage';
  } else if (this.temperature < 25) {
    return 'medium usage';
  } else {
    return 'high usage';
  }
};
