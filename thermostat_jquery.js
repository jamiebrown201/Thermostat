$(document).ready(function() {
  var thermostat = new Thermostat();
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.temperatureDisplay());
  }

  updateTemperature();

  $('#temperature-up').on('click', function(){
      thermostat.upButton();
      updateTemperature();
  });

  $('.plus-button').on('click', function(){
      thermostat.upButton();
      updateTemperature();
  });

  $('.minus-button').on('click', function(){
    thermostat.downButton();
    updateTemperature();
  });

  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    updateTemperature();
  });

  $('.reset').on('click', function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#powerSavingModeOff').on('click', function(){
    thermostat.powerSavingModeOff();
    $('#PSM').text('Power Saving mode is: OFF');
  });

  $('#powerSavingModeOn').on('click', function(){
    thermostat.powerSavingModeOn();
    updateTemperature();
    $('#PSM').text('Power Saving mode is: ON');
  });

  $('#test').on('click', function(){
    if(thermostat.powerSavingMode === true) {
      thermostat.powerSavingModeOff();
      $('#PSM').text('Power Saving mode is: OFF');
    } else {
      thermostat.powerSavingModeOn();
      $('#PSM').text('Power Saving mode is: ON');
      updateTemperature();
    }
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=6073733122cbe6dafbe83968e1e2631e', function(data) {
    $('#current-temperature').text(data.main.temp);
  });

});
