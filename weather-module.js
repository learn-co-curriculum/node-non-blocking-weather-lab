var http = require('http')
module.exports = function(apiKey, city, callback){
  city = encodeURIComponent(city)
    return http.get({
        host: 'api.openweathermap.org',
        path: `/data/2.5/forecast/?q=${city}&APPID=${apiKey}&units=imperial`
    }, function(response) {
        // Continuously update stream with data
        var body = ''
        response.on('data', function(d) {
            body += d
        })
        response.on('end', function() {
          // Data reception is done, do whatever with it!
          console.log(body);
          var parsed = JSON.parse(body)
          callback(null, body)
      })
  })

}