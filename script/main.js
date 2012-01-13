
require.config({											
	baseUrl : ".",                                          
	paths : {                                               
		"js" : "script",                                    
		"css" : "css",                                      
		"tpl" : "tpl",                                      
		"help" : "script/helper",                           
		"lib" : "script/lib",                               
		"backbone" : "script/lib/backbone/_backbone",       
		"mustache" : "script/lib/mustache/_mustache",       
		"modernizr" : "script/lib/modernizr/_modernizr",    
		"underscore" : "script/lib/underscore/_underscore", 
		"jquery" : "script/lib/jquery/_jquery",             
		"models" : "script/models",                         
		"views" : "script/views",                           
		"collections" : "script/collections"                
	},                                                      
	waitSeconds : 15,                                       
	locale : "fr-fr"                                        
});														
require([                                                 
"js/app",                                                 
"help/order!jquery",                                      
"help/order!underscore",                                  
"help/order!backbone"                                     
], function(App) {                                        
App.initialize();                                         
});                                                       
