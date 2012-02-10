define(['jquery',
'underscore',
'backbone',
'mustache',
'models/modules/bottom_button',
'help/text!tpl/mustache/common/bottom_button.tpl'],function($,_,Backbone,$$,model,tpl) {

    var View = Backbone.View.extend({
        initialize: function() {

        },

        events : {
            'click .ets-btn-prev' : "prevClkEvt",
            'click .ets-btn-next' : "nextClkEvt",
            'click .ets-btn-submit': 'submitClkEvt',
            'click .ets-btn-skip': 'skipClkEvt'
        },

        render: function(el, data, events) {
            var viewData = (new model(data)).toJSON();
            
            var template = $(this.el).addClass('ets-act-bottom-button ets-cf').append($$.to_html(tpl, viewData));

            if (typeof el === 'string') {
                $(el).append(template);
            } else if(el instanceof jQuery) {
                el.append(template);
            }

            //console.log(events);
            this.bindEvents(events);

            return this;
        },

        bindEvents: function(events) {
            if(typeof events === 'object') {
                var props = ['prevClick', 'nextClick', 'submitClick', 'skipClick'];
                var that = this;
                _.each(props, function(prop) {
                    that[prop] = events[prop];
                });
            }
        },

        prevClkEvt: function(e){
            if(!this.checkDisabled(e)) {
                return;
            }
            
            if(_.isFunction(this.prevClick)) {
                this.prevClick();
            }
        },
        nextClkEvt: function(e) {
            if(!this.checkDisabled(e)) {
                return;
            }

            if(_.isFunction(this.nextClick)) {
                this.nextClick();
            }
        },
        submitClkEvt: function(e) {
            if(!this.checkDisabled(e)) {
                return;
            }

            if(_.isFunction(this.submitClick)) {
                this.submitClick();
            }
        },
        skipClkEvt: function(e) {
            if(!this.checkDisabled(e)) {
                return;
            }

            if(_.isFunction(this.skipClick)) {
                this.skipClick();
            }
        },

        checkDisabled: function(e) {
            var el = e.target;
            if(e.target.tagName !== 'DIV') {
                el = e.target.parentNode;
            }

            if(el.className.indexOf('disabled') > -1) {
                return false;
            }
            return true;
        }

    });

    return {
        render: function(el, data, events) {
            if (!el) 
                throw ('Please provider a node that needs to hold bottom buton');
            var view = new View();
            view.render(el, data, events);
        }
    };
});
