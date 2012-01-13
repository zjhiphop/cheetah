define(["jquery"],function($){
  //use chrome to open view "view-source:http://cns-812:8111/blitz/testcase/jQueryPlugin_extension.html" for example
  $.plugin = function(name, object) {
    $.fn[name] = function(options) {
      var args = Array.prototype.slice.call(arguments, 1);
      return this.each(function() {
        var instance = $.data(this, name);
        if (instance) {
          instance[options].apply(instance, args);
        } else {
          instance = $.data(this, name, new object(options, this));
        }
      });
    };
  };
  return $.plugin;  
});
