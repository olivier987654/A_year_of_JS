// JavaScript Script to get the weather forecast for a given location

// Get the location from the command line

var location = process.argv[2];

// Get the weather forecast for the location

var weather = require("weather-js");

weather.find({search: location, degreeType: "F"}, function(err, result) {

if(err) console.log(err);

console.log(JSON.stringify(result, null, 2));

}

);

// End of script
