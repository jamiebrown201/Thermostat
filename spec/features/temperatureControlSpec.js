describe('Temperature control', function() {
  var thermostat;

  beforeEach(function() {
    temperatureController = new TemperatureController();
    thermostat = new Thermostat(temperatureController);
  });

  describe('the up button', function() {
    it('increases the temperature by 1', function() {
      thermostat.upButton();
      expect(thermostat.temperature()).toBe(21);
    });
  });

  describe("Default", function() {
    it("tempreture of 20", function() {
      // temperatureController = new TemperatureController();
      // thermostat = new Thermostat(temperatureController);
      expect(thermostat.temperature()).toBe(20);
    });
  });
});
