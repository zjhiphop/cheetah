/*http://requirejs.org/docs/api.html#config*/
require.config({
    baseUrl : ".",
    paths : {
        "js" : "script",
        "css" : "css",
        "tpl" : "tpl",
        "help" : "script/helper",
        "lib" : "script/lib",
        "engine":"script/helper/tpl_engine",
        "backbone" : "script/lib/backbone/_backbone",
        "mustache" : "script/lib/mustache/_mustache",
        "modernizr" : "script/lib/modernizr/_modernizr",
        "underscore" : "script/lib/underscore/_underscore",
        "jquery" : "script/lib/jquery/_jquery",
        /*jquery plugins*/
        "jtemplate" : "script/lib/jtemplate/_jtemplate",
        "lionbars" : "script/lib/lionbars/_lionbars",
        "mejs": "script/lib/mediaelement/_mediaelement",
        "models" : "script/models",
        "views" : "script/views",
        "collections" : "script/collections"
    },
    waitSeconds : 15,
    locale : "fr-fr",
    urlArgs:"site-version"
});

/*
require(['js/widget/epaper'], function(epaper) {
    epaper.init({
        epaper_wrapper : '#epaper_container',
        src : "imgs/eg_epaper.jpg",
        engine : 'jtemplate'
    });
});*/

require([
// Load our app module and pass it to our definition function
//@off
  // Some plugins have to be loaded in order due to there non AMD compliance
  // Because these scripts are not "modules" they do not pass any values to the
  // definition function below
  'help/order!jquery', 
  'help/order!underscore', 
  'help/order!backbone',
  'js/router'
//@on
], function($,_,Backbone,Router) {
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass
    // a parameter to this function
    Router.initialize();
});
/*
 *locale
 *
 define(function(require) {
 var lamp = require("js/helper/nls/lamp");
 console.log(lamp.testMessage);
 });
 */
/*
 *plugin test
 *
 require(["some/module", "text!some/module.html!strip", "text!some/module.css"],
 function(module, html, css) {
 //the html variable will be the text
 //of the some/module.html file
 //the css variable will be the text
 //of the some/module.css file.
 }
 );
 */

/*
 * this type of code can not be optimized
 *
 require(["js/helper/text!package.json?callback=define"], function(data) {
 //The dta object will be the API response for the
 //JSONP data call.
 console.log(data);
 });
 */
