'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var sourceMapSupport = require('source-map-support');
var default_retrieve_file_handler_1 = require('./default-retrieve-file-handler');
var transpile_if_ts_1 = require('./transpile-if-ts');
exports.transpileIfTypescript = transpile_if_ts_1.transpileIfTypescript;
function install() {
  var options = {};
  options.retrieveFile =
    default_retrieve_file_handler_1.defaultRetrieveFileHandler;
  options['environment'] = 'node';
  return sourceMapSupport.install(options);
}
exports.install = install;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBdUQ7QUFDdkQsaUZBQTZFO0FBRTdFLHFEQUEwRDtBQUFqRCxrREFBQSxxQkFBcUIsQ0FBQTtBQUM5QjtJQUNFLElBQU0sT0FBTyxHQUE2QixFQUFFLENBQUM7SUFFN0MsT0FBTyxDQUFDLFlBQVksR0FBRywwREFBMEIsQ0FBQztJQUtsRCxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBR2hDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQVpELDBCQVlDIn0=
