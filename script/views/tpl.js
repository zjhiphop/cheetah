// Filename: views/project/list
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'help/text!tpl/underscore/template_name'
], function($, _, Backbone,$$,template){
  var templateView = Backbone.View.extend({
    el: $('#container'),
    render: function(){
      // Using Underscore we can compile our template with data
      var data = {};
      var compiledTemplate = $$.render( template, data );
      // Append our compiled template to this Views "el"
      this.el.append( compiledTemplate );
    }
  });
  // Our module now returns an instantiated view
  // Sometimes you might return an un-instantiated view e.g. return templateView
  return new templateView;
});