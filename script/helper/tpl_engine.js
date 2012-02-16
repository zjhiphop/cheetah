define(function(require) {
    var app=require('js/app');
    return {
        render : function(tpl, data) {
            var render;
            type = app.tpl.tpl_engine;
            switch(type) {
                case "jtemplate":
                    var $j=require('jtemplate'),
                    tem = $j.createTemplate(tpl,null,app.tpl.config);
                    return $j.processTemplateToText(tem, data);
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
