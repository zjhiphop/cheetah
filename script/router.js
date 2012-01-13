	
define([                                                              
  'jquery',                                                           
  'underscore',                                                       
  'backbone',                                                         
  'views/home/main'                                                   
], function($, _, Backbone, mainHomeView){                            
  var AppRouter = Backbone.Router.extend({                            
	routes: {                                                           
	  // Define some URL routes                                         
	  '/main': 'showMain',                                              
	  // Default                                                        
	  '*actions': 'defaultAction'                                       
	},                                                                  
	showMain: function(){                                               
	  // Call render on the module we loaded in via the dependency array
	  // 'views/projects/list'                                          
	  mainHomeView.render();                                            
	},                                                                  
	defaultAction: function(actions){                                   
	  // We have no matching route, lets just log what the URL was      
	  console.log('No route:', actions);                                
	}                                                                   
  });                                                                 
                                                                      
  var initialize = function(){                                        
	var app_router = new AppRouter;                                     
	Backbone.history.start();                                           
  };                                                                  
  return {                                                            
	initialize: initialize                                              
  };                                                                  
});                                                                   
 