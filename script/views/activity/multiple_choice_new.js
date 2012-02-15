//off
define(['jquery', 'underscore', 'backbone', 'mustache', 'models/activity/multiple_choice_new', 'help/text!tpl/mustache/activity/multiple_choice_new.tpl', 'views/modules/vertical_question', 'models/modules/vertical_question' , 'views/modules/bottom_button', 'views/widget/audio_player'],
//on
function($, _, Backbone, $$, model, tpl, vq_view, vq_model, bb_view, audioPlayer_view) {
    var multiple_choice_new = Backbone.View.extend({
        el : $("#ets-act-multichoice"),
        initialize : function() {
        },
        render : function(data, next, viewMode, viewBox) {
            //load multiple_choice_new activity framework
            var _model = new model(data),
            //get data from url
            //@off
            json = _model.toJSON(), 
            _ques = json.jsonData.Activity.Questions,
            compiledTemplate = $$.render(tpl, json),
            that = this, 
            _ans = [];
            //@on
            this.$el.html(compiledTemplate);
            this.q_con = $(json.vq_container);
            //get right answer;
            _.map(_ques, function(vale, idx) {
                _ans[idx] = [];
                _.each(vale.Options, function(value, index) {
                    if(value.Ans === '1') {
                        _ans[idx].push(index);
                    }
                })
            })
            //render vertical question
            var _vq_model = new vq_model(json.jsonData.Activity, {
                Prev : "Prev",
                Next : "Next",
                current : 1,
                total : _ques.length,
                type : viewMode,
                boxType : viewBox,
                rightAns : _ans
            }), _vq_view = (new vq_view({
                model : _vq_model
            })).render();

            //cache small view in verticle question view
            this.q_con.prepend(_vq_view.el);
            //render bottom_button
            bb_view.render($(this.el).find("#ets-act-mc-form-ft"), {
                prevBtn : {
                    show : true,
                    text : data.Prev
                },
                nextBtn : {
                    show : true,
                    text : data.Next
                }
            }, {
                prevClick : _.bind(function() {
                    var _data = this.model.toJSON(), _preCurr = _data.current;
                    that.checkDis('prev', _preCurr, _data.total);
                    if(_preCurr === 1)
                        return;
                    console.log(_preCurr);
                    var curr = Math.max(_preCurr - 1, 1);
                    this.setSelection();
                    this.model.set({
                        "current" : curr
                    });
                }, _vq_view),
                nextClick : _.bind(function() {
                    var _data = this.model.toJSON();
                    that.checkDis('next', _data.current, _data.total);
                    if(_data.current === _data.total)
                        return;
                    var curr = Math.min(_data.current + 1, _data.total);
                    this.setSelection();
                    this.model.set({
                        "current" : curr
                    });
                }, _vq_view),
                submitClick : _.bind(function() {
                    this.setSelection();
                    alert('submit ' + json.jsonData.Activity.Id + ', score: ' + this.getScore());
                }, _vq_view)
            });

            if(_.isFunction(next)) {
                next();
            }

            // call audio player view
            audioPlayer_view.render({
                containerId: 'au_launchBtn',
                id: 'au_launchBtn_audio',
                audioUrl: 'http://local.englishtown.com/Juno/school/audios/5.1.3%20lo2.4%20comp.mp3',
                size: '50'
            });
        },
        checkDis : function(opr, curr, total) {
            if(opr === 'next' && (curr + 1 === total)) {
                this.$el.find('.ets-btn-next').addClass('ets-none');
                this.$el.find('.ets-btn-submit').removeClass('ets-none');
            }
            else
            if(opr === 'prev' && (curr === total)) {
                this.$el.find('.ets-btn-next').removeClass('ets-none');
                this.$el.find('.ets-btn-submit').addClass('ets-none');
            }
        }
    });
    return new multiple_choice_new;
});
