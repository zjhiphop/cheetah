define(['jquery',
'underscore',
'backbone',
'mustache',
'models/modules/popup',
'help/text!tpl/mustache/common/popup.tpl'],function($, _, Backbone, $$, PopupModel, tpl) {
    "use strict"

    var views = [];

    var PopupView = Backbone.View.extend({
        tagName: 'div',

        className: 'act-popup_layer',

        template: tpl,

        events: {
            'click .act-popup_close': 'onClickClose',
            'click .ets-btn-no': 'onClickBtnNo',
            'click .ets-btn-yes': 'onClickBtnYes',
            'click .ets-btn-skip': 'onClickBtnSkip'
        },

        initialize: function() {
        },

        render: function() {          
            var $container = $(this.el),
            $root = $(this.model.get('root'));
            
            $root.append(this.el);

            this.popup();

            return this;
        },

        popup: function() {
            var $container = $(this.el);
            var compliedTemplate = $$.render(this.template, this.model.toJSON());

            var $root = $(this.model.get('root')),
            rootWidth = $root.innerWidth(),
            rootHeight = $root.innerHeight();

            $(this.el).css({
                width: rootWidth,
                height: rootHeight
            });


            $container.html(compliedTemplate);
            $container.show();
            this.setStyle($container);
            this.bindEvents(this.model.get('events'));
        },

        setStyle: function() {
            var popupWidth = this.model.get('width'),
                popupHeight = this.model.get('height');

            if(typeof popupHeight === 'number') {
                this.$('.act-popup_content').height(popupHeight - 93);
            } else {
                popupHeight = this.$('.act-popup').height();
            } 

            this.$('.act-popup').css({
                'margin-left': - popupWidth/2,
                'margin-top': - popupHeight/2,
                'width': popupWidth,
                'height': popupHeight
            });
        },

        hide: function() {
            $(this.el).hide();
            this.unbind();
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

    return {
        show: function(data) {
            if(typeof data !== 'object') {
                throw 'The parameter should be an object';
                return;
            } else if(typeof data.root === 'undefined') {
                throw "A 'root' property is expected";
                return;
            }

            var newModel = new PopupModel(data);

            var existedView = _.find(views, function(view) {
                return view.model.get('root') === newModel.get('root');
            });

            if(typeof existedView !== 'undefined') {
                existedView.popup();
            } else {
                var popupView = new PopupView({model: newModel});
                popupView.render();
                views.push(popupView);
            }
        },
        hide: function() {
            _.each(views, function(view) {
                view.hide();
            });
        },
        dispose: function() {
            _.each(views, function(view) {
                _._dispose(view);
            })
        }
    };
});

