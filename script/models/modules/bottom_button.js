define(['underscore',
'backbone'],function(_,Backbone) {
    var model = Backbone.Model.extend({
        defaults: {
            skipBtn: { 
                show: false,
                disable: false,
                text:'Skip Activity'
            },
            prevBtn: {
                show: false,
                disable: false,
                text: 'Prev'
            },
            nextBtn: {
                show: false,
                disable: false,
                text: 'Next'
            },
            submitBtn: {
                show: false,
                disable: false,
                text: 'Submit'
            },
            questionCounter: {
                show: false,
                text: 'Question',
                currentNum: 1,
                currentTotal: 6
            },
            prevBtnAtRight: function() {
                if (this.prevBtn.show === true && this.submitBtn.show === false && this.nextBtn.show === false && this.questionCounter.show === false) {
                    return true;
                }
                return false;
            }
        },

        initialize: function() {
            var args = [].slice.call(arguments,0), that = this;
            _.each(args,function(opt) {

               for ( var p in opt) {
                   if(typeof that.attributes[p] === 'object') {
                       that.attributes[p] = _.extend({},that.defaults[p],opt[p]);
                   } else {
                       that.attributes[p] = opt[p];
                   }
               }

            });
        }

    });

    return model;
});
