define(['require', 'jquery', 'js/app'], function(require, $, app) {
    return {
        render : function(tpl, data) {
            var render;
            type = app.tpl_engine;
            switch(type) {
                case "jtemplate":
                    require('helpe/order!lib/jtemplate');
                    var tem = $.createTemplateURL(tpl);
                    return $.processTemplateToText(tem, data);
                    break;
                case "mustache":
                    var $$ = require('mustache');
                    return $$.render(tpl, data);
                    break;
                case "underscore":
                    var _ = require('underscore');
                    return _.template(tpl, data);
                    break;
                default:
                    throw new Error('Template engine is not exists!')
                    break;
            }
        }
    }
});
