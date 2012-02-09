define([
  'jquery',
  'underscore',
  'backbone',
  'models/modules/option_box',
  'views/modules/option_box'
], function($, _, Backbone, opx_model,opx_view){
  var optionCollection = Backbone.Collection.extend({
    model: opx_model
  });
  
  return new optionCollection;
});
