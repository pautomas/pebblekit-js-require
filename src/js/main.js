/* jshint latedef:false */
/* global Pebble */

// Export the Logger module using require
var Logger = require("logger/logger");
// Put here more libraries

Pebble.addEventListener("ready",
    function(e) {
      // Use the Logger module we exported to log a message.
      // Run 'pebble --logs' on your terminal to see it.
      Logger.d("Hello world! - Sent from your javascript application.");
    }
);
