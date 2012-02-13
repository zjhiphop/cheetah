// Filename: views/project/list
//@off
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'models/app_model'
], function($, _, Backbone,$$,model){
  //@on
    var appView = Backbone.View.extend({
        el : $('#ets-activity'),
        intialize : function() {
        },
        render : function(mode, type, id) {
            var data = this.model.toJSON();
            this.loadActivity(data, function() {
                //load epaper
                _.viewWrapper("wid:epaper", data.comsrc.epaper, function() {
                    if(this.defaultsSetting.container) {
                        this.$box.appendTo(this.defaultsSetting.container);
                        this.setTemplate(this.$el);
                    }
                });
                
                //load bottom_botton
                _.viewWrapper("mod:bb", data.bb.container, data.bb.config, data.bb.events);
            });
            this.loadComsrc(data);
        },
        loadActivity : function(data, next) {
            //get activity type
            var type = this._getActivityType(data.activity.jsonData);
            //load view
            if(!type){
              this.$el.append("Not implements!");
            }else{
              _.viewWrapper("act:"+type, data.activity, next);  
            }            
        },
        loadComsrc : function(data) {
            //load header
            //load audio
        },
        _getActivityType : function(data) {
            var template_id = parseInt(data.Activity['Template_id']);
            if(!template_id || template_id > 32) {
                return ;
            }
            if(template_id <= 11) {
                switch (template_id) {
                    case 1:
                        return 'MatchingAudio';
                    case 2:
                        return 'MatchingPicture';
                    case 3:
                        return 'MatchingLongText';
                    case 4:
                        return 'MatchingText';
                    case 5:
                        return 'MultipleChoice:text:radio';
                    case 6:
                        return 'MultipleChoice:img:radio';
                    case 8:
                        return 'MultipleChoice:text:checkbox';
                    case 9:
                        return 'MultipleChoice:img:checkbox';
                    case 11:
                        var laymode = parseInt(data.Activity.LayMode);
                        if(laymode === 2) {
                            return 'FlashCard_Presention';
                        }
                        else
                        if(laymode === 3) {
                            return 'FlashCard_Mix';
                        }
                        else
                        if(laymode === 1) {
                            return 'FlashCard_Excise';
                        }
                    default:
                        return ;
                }
            }
            if(template_id <= 20) {
                switch (template_id) {
                    case 12:
                        return 'Grouping';
                    case 13:
                        var type_mode=parseInt(data.Activity.TypMode);
                        if(type_mode===2){
                          return 'TypingGapFill';
                        }else if(type_mode===3){
                          return 'TypingTable';
                        }else if(type_mode===1){
                          return 'TypingParagraph';
                        }
                    case 14:
                        return 'TextSelectSingle';
                    case 15:
                        return 'TextSelectMultiple';
                    case 16:
                        return 'RoleplaySingle';
                    case 17:
                        return 'RoleplayMultiple';
                    case 18:
                        return 'Movie';
                    case 19:
                        return 'MultipleChoice';
                    case 20:
                        return 'AudioSequencing';
                }
            }
            if(template_id <= 32) {
                switch (template_id) {
                    case 22:
                        return 'ImageSequencing';
                    case 24:
                        return 'Paragraphvertical';
                    case 25:
                        return 'Wordjumble';
                    case 26:
                        return 'WritingChallenge';
                    case 27:
                        return 'SpeakingChallenge';
                    case 28:
                        return 'LanguageFocus';
                    case 29:
                        return 'LanguageComparison';
                    case 30:
                        return 'ModelSentence';
                    case 32:
                        return 'VideoRoleplay';
                    default:
                        return ;
                }
            }
        }
    });

    return appView;
});
