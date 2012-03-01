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
            'click #act-popup_close': 'clickClose',
            'click #act-popup_btnno': 'clickBtnNo',
            'click #act-popup_btnyes': 'clickBtnYes',
            'click #act-popup_btnskip': 'clickBtnSkip'
        },

        initialize: function() {
            this.model = new model();
            this.model.bind('change', this.render, this);
        },


        render: function() {
            // if root element is not specified, then return
            if(this.model.get('root') === null) {
                return;
            }


            var $container = $(this.el).attr('id', 'act-popup_repository'),
                compliedTemplate = $$.render(this.template, this.model.toJSON());

            $container.append(compliedTemplate);

            $(this.model.get('root')).append(this.el);
            this.setStyle($container);

            this.bindEvents(this.model.events);

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
            //reset root
            //this.model.set({root:null});
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

    //return {
        //init: function(root, data, events) {
            //var view = new View(data, events);
            //$(root).append(view.render().el);
        //}
    //};
    //
    return new PopupView();
});

