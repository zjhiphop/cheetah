( {
    appDir : ".",
    baseUrl : ".",
    paths : {
        "js" : "script",
        "css" : "css",
        "tpl" : "tpl",
        "help" : "script/helper",
        "lib" : "script/lib",
        "engine" : "script/helper/tpl_engine",
        "backbone" : "script/lib/backbone/_backbone",
        "mustache" : "script/lib/mustache/_mustache",
        "modernizr" : "script/lib/modernizr/_modernizr",
        "underscore" : "script/lib/underscore/_underscore",
        "jquery" : "script/lib/jquery/_jquery",
        "jtemplate" : "script/lib/jtemplate/_jtemplate",
        "lionbars" : "script/lib/lionbars/_lionbars",
        "models" : "script/models",
        "views" : "script/views",
        "collections" : "script/collections"
    },
    dir : "./build",
    locale : "en-us",
    optimize : "uglify",
    uglify : {
        toplevel : true,
        ascii_only : true,
        beautify : true
    },
    optimizeCss : "standard",
    cssImportIgnore : null,
    inlineText : true,
    optimizeAllPluginResources : false,
    findNestedDependencies : true,
    modules : [{
        name : "script/lib/require"
    }, {
        name : "script/main"
    }, {
        name : "script/views/activity/multiple_choice_new",
        exclude : ["jquery", "backbone", "underscore"]
    }],
    fileExclusionRegExp : /^\.|unittest|tpl\.js|app\.build\.js|package\.json|\.(exe|bat|coffee|less|styl|markdown|md|txt)$/
})