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
      // stdout = stdout.replace('\n','')
      getWeatherByCity('London', function(error, expectedResults){
        console.log(actualResults)
        expect(actualResults).to.equal(expectedResults)
        done()
      })

    })
  })
})
function getWeatherByCity(city, callback) {
  return http.get({
      host: 'api.openweathermap.org',
      path: `/data/2.5/weather?q=${city}&APPID=${apiKey}`
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
// function getWeatherByCity(city, callback) {
//   http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}`, (res) => {
//     console.log(`Got response: ${res.statusCode}`);
//     // consume response body
//     res.resume();
//     callback(null, res)
//   }).on('error', (e) => {
//     console.log(`Got error: ${e.message}`);
//   });
// }
//
// describe('weather app', function () {
//   it('must return error when no city provided', function(done){
//     child = cp.exec('../node weather', function (error, stdout, stderr) {
//       expect(stderr).to.equal('')
//       expect(error).to.be.null
//       stdout = stdout.replace('\n','')
//       // expect(semver.satisfies(stdout, '>=2.14.15')).to.equal(true)
//       done()
//     })
//   })
// })
//
// describe('npm version', function () {
//   it('must be 2.14.15 or greater', function(done){
//     child = cp.exec('npm -v',
//     function (error, stdout, stderr) {
//       expect(stderr).to.equal('')
//       if (error !== null) {
//         console.log('exec error: ' + error)
//       }
//       stdout = stdout.replace('\n','')
//       // expect(semver.satisfies(stdout, '>=2.14.15')).to.equal(true)
//       done()
//     })
//   })
// })