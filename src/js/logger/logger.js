/**
 * Sample module that wraps calls to console.log appending a [TAG] representing
 * different levels of verbosity.
 *
 * Not very useful TBH but it helps as an example for a module.
 *
 * How to use it:
 *  Insert
 *  	var Logger = require("logger/logger")
 *  at the top of your file.
 *
 * - Call any of the public methods to display a log.
 * 	(ie: Logger.d('This is a debug message') )
 */

/**
 * This is a "private" method. Can't be accessed from outside this file.
 */
var log = function(level, text) {
  console.log('[' + level + '] ' + text);
};

/**
 * The object assigned to module.exports represents the public part of the
 * module and it can be accessed from outside this file using require();
 */
module.exports = {
  v : function(text) {
    log('VERBOSE', text);
  },
  d : function(text) {
    log('DEBUG', text);
  },
  i : function(text) {
    log('INFO', text);
  },
  w : function(text) {
    log('WARNING', text);
  },
  e : function(text) {
    log('ERROR', text);
  }
};
