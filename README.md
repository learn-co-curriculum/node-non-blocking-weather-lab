# Weather App Lab

## Objectives

1. Implement a CLI app that makes request to a third-party service and yuses event emitters
1. Describe how to work with OpenWeatherMaps API
1. Get OpenWeatherMaps API key

## Introduction

This is another task for NASA. You need to implement a CLI program which will give a weather forecast for a particular city. It's a CLI app because astronauts are not expected to know Node so they cannot modify the code and the computing resources are scarce so we cannot use a full-blown GUI environment. 

In this lab, you will create modules, make an HTTP request, read CLI arguments, work with observers (event emitters) and the OpenWeatherMaps API (to get the forecast).

Here's a bird's-eye view of what you'll need to create:

* `config.json`: A file with an API key
* `weather-module.js`: A module with a function that make a call based on the city name and provides the forecast as a JavaScript/Node object
* `weather.js`: A CLI runner which uses the module, takes the CLI argument (city name) and prints the results nicely


## Instructions

1. Register with [OpenWeatherMaps API](http://openweathermap.org/api) by going to their website and clicking "Sign up". 
1. Once you signed up for the API, go to your home at <http://home.openweathermap.org>, locate your API key, copy it and paste/save into `config.json`. 
1. Create/open `weather-module.js` and implement a module that provides a forecast from OpenWeatherMaps. The purpose of this function is to take API key, city name and a callback function, make an HTTP request to OpenWeatherMaps, parse response body and invoke callback with the results when everything is done.
1. Encode the city name to allow it to be use in the URL for the API request.
1. Utilize `http.get` or `http.request` to request the data. The units must be imperial (F).
1. You can look up the format of the forecast URL request at [OpenWeather forecast](http://openweathermap.org/forecast5).
1. When you are ready to return the data, make sure it's in an object.
1. Create/open `weather.js` which will be the CLI app runner. It will require our module, get the city name from the CLI input, get the API key from the JSON file and print the results into the terminal.
1. Utilize this format for the output: `dt_text` (date and time as text), `main.temp` (temperature) and `F` (units). You will need to become familiar with the response structure first. Consult the API documentation or make a few test requests to see what is the results of those calls.
2. Show an error "Please provide city" if the city is missing from a CLI command.

In the end, these commands should work just fine:

```
node weather London
node weather "New York"
node weather "San Francisco"
``` 

The example of the output with the forecast every three hours:

```
2016-03-07 15:00:00 40.49 F
2016-03-07 18:00:00 44 F
2016-03-07 21:00:00 46.67 F
2016-03-08 00:00:00 40.93 F
2016-03-08 03:00:00 39.41 F
2016-03-08 06:00:00 40.44 F
2016-03-08 09:00:00 40.94 F
2016-03-08 12:00:00 39.74 F
2016-03-08 15:00:00 43.57 F
2016-03-08 18:00:00 49.47 F
2016-03-08 21:00:00 53.57 F
2016-03-09 00:00:00 53.22 F
2016-03-09 03:00:00 53.62 F
2016-03-09 06:00:00 53.31 F
2016-03-09 09:00:00 52.19 F
2016-03-09 12:00:00 50.43 F
2016-03-09 15:00:00 51.57 F
```

### Extra Info

* [OpenWeatherMaps API](http://openweathermap.org/api) 
* [OpenWeather forecast](http://openweathermap.org/forecast5)