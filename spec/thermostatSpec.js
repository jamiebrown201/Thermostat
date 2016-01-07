describe("thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Default", function() {
    it("temperature of 20", function() {
      expect(thermostat.temperature).toBe(20);
    });
    it("has a default minimum temperature of 10", function() {
      expect(thermostat.MINIMUM_TEMPERATURE).toBe(10);
    });
    it("has a default maximum temperature of 25", function() {
      expect(thermostat.maximumTemperature).toBe(25);
    });
  });

  describe('down button', function() {
    it('decreases the temperature by 1', function() {
      thermostat.downButton();
      expect(thermostat.temperature).toBe(19);
    });
    it('raises an error if temperature is 10', function() {
      for (i=0; i < 10; i++) {
        thermostat.downButton();
      }
      expect(function(){thermostat.downButton();}).toThrow(new Error("Temperature is 10: Cannot decrease further."));
    });
  });

  describe('the up button', function() {
    it('increases the temperature by 1', function() {
      thermostat.upButton();
      expect(thermostat.temperature).toBe(21);
    });
    it('raises an error if temperature is 25', function() {
      for (i=0; i < 5; i++) {
        thermostat.upButton();
      }
      expect(function(){thermostat.upButton();}).toThrow(new Error("Cannot increase any more maximum temperature reached"));
    });
  });

  describe('power saving mode', function() {
    it('when on maximum temperature is 25 degrees', function() {
      thermostat.powerSavingModeOn();
      expect(thermostat.maximumTemperature).toBe(25);
    });

    it('when off maximum temperature is 32 degrees', function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.maximumTemperature).toBe(32);
    });
  });

  describe('reset', function() {
    it('sets the temperature to 20', function() {
      thermostat.upButton();
      thermostat.reset();
      expect(thermostat.temperature).toBe(20);
    });
  });

  describe('Temperature display', function() {
    it('displays low-usage if below 18 degrees', function(){
      for (i=0; i < 3; i++) {
        thermostat.downButton();
      }
      expect(thermostat.temperatureDisplay()).toBe('low usage');
    });

    it('displays medium-usage if below 25 degrees', function(){
      expect(thermostat.temperatureDisplay()).toBe('medium usage');
    });
    it('displays high-usage if above 25 degrees', function(){
      thermostat.powerSavingModeOff();
      for (i=0; i < 6; i++) {
        thermostat.upButton();
      }
      expect(thermostat.temperatureDisplay()).toBe('high usage');
    });
  });
});
