define(['jquery',
'underscore',
'backbone',
'mustache',
'models/modules/popup',
'help/text!tpl/mustache/common/popup.tpl'],function($,_,Backbone,$$,model,tpl) {
    "use strict"

    var View = Backbone.View.extend({
        tagName: 'div',

        template: tpl,

        events: {
            'click #act-popup_close': 'clickClose',
            'click #act-popup_btnno': 'clickBtnNo',
            'click #act-popup_btnyes': 'clickBtnYes',
            'click #act-popup_btnskip': 'clickBtnSkip'
        },

        initialize: function() {
            _.initView('popup', this);
        },

        render: function(root, data, events) {
            this.model = new model(data);
            window.popupModel = this.model;

            var $container = $(this.el);

            $container.attr('id', 'act-popup_repository');

            var compliedTemplate = $$.render(this.template, this.model.toJSON());

            $container.append(compliedTemplate);

            this.setStyle($container);

            this.bindEvents(events);

            return this;
        },

        setStyle: function($container) {
            var popupWidth = this.model.get('width'),
                popupHeight = this.model.get('height');
            $container.find('#act-popup').css({
                'margin-left': - popupWidth/2,
                'margin-top': - popupHeight/2,
                'width': popupWidth,
                'height': popupHeight
            });

            $container.find(".act-popup_bg_topleft, .act-popup_bg_topright").height(this.model.get('height') - 10);
            $container.find(".act-popup_bg_topleft, .act-popup_bg_bottomleft").width(this.model.get('width') - 20);
        },

        //bind customerized events
        bindEvents: function(events) {
            if(typeof events === 'object') {
                var props = ['closeClick', 'btnNoClick', 'btnYesClick', 'btnSkipClick'];
                var that = this;
                _.each(props, function(prop) {
                    that[prop] = events[prop];
                });
            }
        },

        onClose: function() {
            //unbind all events
            $(this.el).unbind();
            //remove this dom
            $(this.el).remove();
        },

        clickClose: function(e) {
            if(_.isFunction(this.closeClick)) {
                this.closeClick();
            }

            this.onClose();

            return false;
        },
        
        clickBtnNo: function(e) {
            if(!this.checkDisabled(e)) {
                return false;
            }
            
            if(_.isFunction(this.btnNoClick)) {
                this.btnNoClick();
            }

            return false;
        },

        clickBtnYes: function(e) {
            if(!this.checkDisabled(e)) {
                return false;
            }
            
            if(_.isFunction(this.btnYesClick)) {
                this.btnYesClick();
            }
            return false;
        },

        clickBtnSkip: function(e) {
            if(!this.checkDisabled(e)) {
                return false;
            }
            
            if(_.isFunction(this.btnSkipClick)) {
                this.btnYesClick();
            }
            return false;
        },

        checkDisabled: function(e) {
            var el = e.target;
            if(e.target.tagName !== 'A') {
                el = e.target.parentNode;
            }

            if(el.className.indexOf('disabled') > -1) {
                return false;
            }
            return true;
        }

    });

    return {
        render: function(root, data, events) {
            var view = new View();
            $(root).append(view.render(root, data, events).el);
        }
    };
});

