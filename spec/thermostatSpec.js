describe("thermostat", function() {
  var thermostat;

  beforeEach(function() {
    controller = {temperature: 20};
    thermostat = new Thermostat(controller);
  });

  describe("Default", function() {
    it("tempreture of 20", function() {
      expect(thermostat.temperature()).toBe(20);
    });
  });

  describe('temperature control buttons', function() {
    it('up button calls increase function in Temperature control', function() {
      thermostat.upButton();
      expect(controller.increase()).toHaveBeenCalled();
    });
    it('down button calls increase function in Temperature control', function(){
      thermostat.downButton();
      expect(controller.decrease).toHaveBeenCalled();
    });
  });
});
