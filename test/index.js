var expect = require('chai').expect,
  cp = require('child_process')
var path = require('path')
var apiKey = require(path.join('..', 'config.json')).openWeatherApiKey // USE YOUR OWN KEY!
var weather = require(path.join('..', 'weather-module.js'))
var http = require('http')

describe('weather app', function () {
  it('must return forecast for the given city', function(done){
    weather(apiKey, 'London', function(error, actualResults){
      expect(error).to.be.null
      getWeatherByCity('London', function(error, expectedResults){
        expect(actualResults).to.equal(expectedResults)
        done()
      })

    })
  })
})
function getWeatherByCity(city, callback) {
  return http.get({
      host: 'api.openweathermap.org',
      path: `/data/2.5/forecast?q=${city}&APPID=${apiKey}`
  }, function(response) {
      // Continuously update stream with data
      var body = ''
      response.on('data', function(d) {
          body += d
      })
      response.on('end', function() {
        console.log(body);
        // Data reception is done, do whatever with it!
        var parsed = JSON.parse(body)
        callback(null, body)
    })
})
}
