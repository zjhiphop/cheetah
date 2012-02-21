/*http://requirejs.org/docs/api.html#config*/
require.config({
    baseUrl : "../",
    paths : {
        "js" : "script",
        "css" : "css",
        "tpl" : "tpl",
        "help" : "script/helper",
        "lib" : "script/lib",
        "engine" : "script/helper/tpl_engine",
        "backbone" : "script/lib/backbone/_backbone",
        "mustache" : "script/lib/mustache/_mustache",
        "jtemplate" : "script/lib/jtemplate/_jtemplate",
        "modernizr" : "script/lib/modernizr/_modernizr",
        "underscore" : "script/lib/underscore/_underscore",
        "jquery" : "script/lib/jquery/_jquery",
        "models" : "script/models",
        "views" : "script/views",
        "collections" : "script/collections",
        "model" : "unittest/testCase/model",
        "view" : "unittest/testCase/view",
        "collection" : "unittest/testCase/collection"
    },
    waitSeconds : 15,
    locale : "fr-fr"
});

require(['help/order!jquery', 
  'help/order!underscore', 
  'help/order!backbone','model', 'view', 'collection'], function($,_,bb,m, v, c) {
    m.run();
    v.run();
    c.run();
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var trivialReporter = new jasmine.TrivialReporter();

    jasmineEnv.addReporter(trivialReporter);

    jasmineEnv.specFilter = function(spec) {
        return trivialReporter.specFilter(spec);
    };
    var currentWindowOnload = window.onload;

    window.onload = function() {
        if(currentWindowOnload) {
            currentWindowOnload();
        }
        execJasmine();
    };
    function execJasmine() {
        jasmineEnv.execute();
    }
});
