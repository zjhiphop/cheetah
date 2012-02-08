define([
  'jquery',
  'underscore',
  'backbone',
  'models/modules/option_box'
], function($, _, Backbone, option_model){
  var optionCollection = Backbone.Collection.extend({
    model: option_model    
  });
  
  return new optionCollection;
});
