define([
// Load the original jQuery source file
  'help/order!lib/jquery-1.4.2'
], function(){
  // Tell Require.js that this module returns a reference to jQuery
  return window.jQuery&&jQuery.noConflict&&jQuery.noConflict();
});
