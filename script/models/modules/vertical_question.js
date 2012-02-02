// Filename: models/projects/list
define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var vq_model = Backbone.Model.extend({
        initialize : function(options) {
            this.attributes = _.extend(this.attributes, options);
        },
        validate : function(options) {
            if(!options) {
                throw new Error("You must specify a data!");
            }
        }
    });
    return new vq_model({
        Prev : "Prev",
        Next : "Next",
        current : 1,
        total : 2,
        content : [{
            page : "1",
            question_name : "What can people receive who maintain a high account balance?",
            items : [{
                id : 'a',
                item : 'I like apple'
            }, {
                id : 'b',
                item : 'I like pear'
            }, {
                id : 'c',
                item : 'I like banana!'
            }, {
                id : 'd',
                item : 'I like cat!'
            }]
        }, {
            page : "2",
            question_name : "question2?",
            items : [{
                id : 'a',
                item : 'I like apple2'
            }, {
                id : 'b',
                item : 'I like pear2'
            }, {
                id : 'c',
                item : 'I like banana2!'
            }, {
                id : 'd',
                item : 'I like cat!2'
            }]
        }]
    });
});
