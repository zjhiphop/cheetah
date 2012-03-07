define(['jquery',
'underscore',
'backbone',
'mustache',
'models/modules/popup',
'help/text!tpl/mustache/common/popup.tpl'],function($,_,Backbone,$$,model,tpl) {
    "use strict"

    var PopupView = Backbone.View.extend({
        tagName: 'div',

        template: tpl,

        events: {
            'click #act-popup_close': 'onClickClose',
            'click #act-popup_btnno': 'onClickBtnNo',
            'click #act-popup_btnyes': 'onClickBtnYes',
            'click #act-popup_btnskip': 'onClickBtnSkip'
        },

        initialize: function() {
            this.model = new model();
            this.model.bind('change', this.popup, this);
        },


        render: function() {
            var $container = $(this.el).attr('id', 'act-popup_layer');
            $(this.model.get('root')).append(this.el);

            return this;
        },

        setStyle: function() {
            var popupWidth = this.model.get('width'),
                popupHeight = this.model.get('height');

            if(typeof popupHeight === 'number') {
                this.$('.act-popup_content').height(popupHeight - 93);
            } else {
                popupHeight = this.$('#act-popup').height();
            } 

            this.$('#act-popup').css({
                'margin-left': - popupWidth/2,
                'margin-top': - popupHeight/2,
                'width': popupWidth,
                'height': popupHeight
            });
        },

        popup: function() {
            var $container = $(this.el);
            var compliedTemplate = $$.render(this.template, this.model.toJSON());

            $container.html(compliedTemplate);
            this.setStyle($container);
            this.bindEvents(this.model.get('events'));
            $container.show();
        },

        hide: function() {
            $(this.el).hide();
        },

        //bind customerized events
        bindEvents: function(events) {
            if(typeof events === 'object') {
                var props = ['clickClose', 'clickBtnNo', 'clickBtnYes', 'clickBtnSkip'];
                var that = this;
                _.each(props, function(prop) {
                    that[prop] = events[prop];
                });
            }
        },

        onClose: function() {
            $(this.el).remove();
        },

        onClickClose: function(e) {
            if(_.isFunction(this.clickClose)) {
                this.clickClose();
            }

            this.hide();

            return false;
        },
        
        onClickBtnNo: function(e) {
            if(!this.checkDisabled(e)) {
                return false;
            }
            
            if(_.isFunction(this.clickBtnNo)) {
                this.clickBtnNo();
            }

            return false;
        },

        onClickBtnYes: function(e) {
            if(!this.checkDisabled(e)) {
                return false;
            }
            
            if(_.isFunction(this.clickBtnYes)) {
                this.clickBtnYes();
            }
            return false;
        },

        onClickBtnSkip: function(e) {
            if(!this.checkDisabled(e)) {
                return false;
            }
            
            if(_.isFunction(this.clickBtnSkip)) {
                this.clickBtnSkip();
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

    var popupView = (new PopupView()).render();

    return {
        show: function(key, value, options) {
            popupView.model.set(key, value, options);
        },
        hide: function() {
            popupView.hide();
        }
    };
});

