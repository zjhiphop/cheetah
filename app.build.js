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
        toplevel : false,
        ascii_only : false,
        beautify : false
    },
    optimizeCss : "standard",
    cssImportIgnore : null,
    inlineText : true,
    optimizeAllPluginResources : false,
    findNestedDependencies : false,
    modules : [{
        name : "script/main",
        //@off
        include:["mustache","jtemplate","modernizr",
                 "engine","help/text","lib/swfobject",
                 "lib/json2","lib/jquery-ui",
                 "views/modules/bottom_button","views/modules/option_box",
                 "views/modules/vertical_question","views/widget/audio_player_controller",
                 "views/widget/audio_player_flash","views/widget/audio_player_html5",
                 "views/widget/epaper"
                 ]
        //@on
    }],
    fileExclusionRegExp : /^\.|css_tpl|unittest|tpl\.js|solution|lab|app\.build\.js|package\.json|\.(exe|bat|coffee|less|styl|markdown|md|txt)$/
})