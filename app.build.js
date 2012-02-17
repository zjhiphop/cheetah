/**
 * Require build JS.
 */

( {
    appDir : ".",
    baseUrl : ".",
    paths : {
        "jquery" : "script/lib/jquery/_jquery",
        "js" : "script",
        "css" : "css",
        "tpl" : "tpl",
        "help" : "script/helper",
        "lib" : "script/lib",
        "backbone" : "script/lib/backbone/_backbone",
        "mustache" : "script/lib/mustache/_mustache",
        "modernizr" : "script/lib/modernizr/_modernizr",
        "underscore" : "script/lib/underscore/_underscore",
        "models" : "script/models",
        "views" : "script/views",
        "collections" : "script/collections"
    },
    dir : "../build",
    locale : "en-us",
    optimize : "uglify",
    modules : [{
        name : "script/helper/require-jquery"
    }, {
        name : "script/main",
        exclude : ["jquery"]
    }],
    fileExclusionRegExp : /^.|app.build.js|.(exe|bat|coffee|less|styl|markdown)$/
})