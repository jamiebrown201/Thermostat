describe("TemperatureController", function() {
  var temperatureController;

  beforeEach(function() {
    temperatureController = new TemperatureController();
  });

  describe("Default", function() {
    it("tempreture of 20", function() {
      expect(temperatureController.temperature).toBe(20);
    });
  });

  describe("Up button", function() {
    it("increases temperatureController by 1", function() {
      temperatureController.increase();
      expect(temperatureController.temperature).toBe(21);
    });
  });
});
