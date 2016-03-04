# Weather App Lab

## Objectives

1. Implement a CLI app that makes request to a third-party service and which uses event emitters
1. Describe how to work with OpenWeatherMaps API
1. Get OpenWeatherMaps API key

## Introduction

This is another task for NASA. You need to implement a CLI program which will give a weather forecast for a particular city. It's a CLI app because astronauts are not expected to know Node so they cannot modify the code and the computing resources are scarce so we cannot use a full-blown GUI environment. 

In this lab, you will use the skills of creating modules, making an HTTP request, reading CLI arguments, working with observers (event emmiters) and OpenWeatherMaps API (to get the forecast).

## Instructions

1. Register with [OpenWeatherMaps API](http://openweathermap.org/api) by going to their website and clicking "Sign up". 
2. Once you signed up for the API, go to your home at <http://home.openweathermap.org>, locate your API key, copy it and paste/save into `config.json`. You must use your own key. Refrain using the key that's already in there or we will hunt you down and punish. 
3. Create/open `weather-module.js` and implement a module which is providing a forecast. The function has three arguments: `apiKey`, `city`, and `callback`. The exact naming doesn't matter. We named them this way to convey the meaning. The purpose of this function is to take API key (step 2), city name and a callback function, make an HTTP request to OpenWeatherMaps (with the key), parse response body and invoke callback with the results when everything is done.
4. Utilize `http.get` or `http.request`


### Extra Info
