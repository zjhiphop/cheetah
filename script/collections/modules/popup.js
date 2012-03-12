define(['jquery',
'underscore',
'backbone',
'models/modules/popup'],function($,_,Backbone, PopupModel) {
    "use strict"

    var PopupCollection = Backbone.Collection.extend({
        model: PopupModel
    });

    return new PopupCollection;
});