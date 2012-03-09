define(['jquery',
'underscore',
'backbone',
'models/modules/popup'],function($,_,Backbone, PopupModel) {
    "use strict"

    var PopupCollection = Backbone.Collection.extend({
        model: PopupModel,

        hasDuplicated: function(root) {
            return this.find(function(model) {
                return model.get('root') === root;
            });
        }
    });

    return new PopupCollection;
});