define(['jquery', 
'underscore', 
'backbone',
'mustache',
'lib/swfobject',
'lib/json2',
'help/text!tpl/mustache/common/audio_player_html5.tpl',
'models/widget/audio_player'], function($, _, Backbone, $$, swfobjct, JSON, tpl, model) {

    var View = Backbone.View.extend({
        tagName: "div",

        template: tpl,

        initialize: function() {
            this.model = new model;
        },
        /**
         * create an audio player by opt
         * opt contains below key/value paris:
         * containerId {String}: The container id for render
         * id {String}: The audio player id
         * audioUrl {String}: The audio url
         * size {String}: The audio player size,They're "49","42" and "29".
         * display {Boolean}: whether display the progress bar or not.
         * onPlaycallback {function}: the call back function when playing.
         * autoplay {Boolean}: whether auto play the audio when loaded.
         * times {Array}: The timelines to split the audio. 
         * audflash_url {String}: the audio flash url.
         */
        render : function(opt) {
            if (!opt.size) {
                opt.size = "49";
            }
            if (opt.display && opt.display !== "left") {
                opt.display = "hide";
            } else {
                opt.display = opt.display;
            }
            if (!opt.display) {
                if (opt.size === "49") {
                    opt.display = "show";
                }
                else {
                    opt.display = "hide";
                }
            }

            if (opt.times) {
                _display = "hide";
                this.pushTimes(id, times);
            }
            this.model.attributes.onPlayCallbackFunction.push({
                id: opt.id,
                callback: opt.onPlaycallback
            });

            this.setTemplate(opt);

            return this;
        },

        setTemplate: function(opt) {
            var _audioUrl = opt.audioUrl,
            _hidesrc = opt.audioUrl,
            undef;

            // remove below node, ensure that there is only one act_global_audio will be used
            $("#act_global_audio").remove();
            
            if(opt.times) {
                var _existAudio = $("video source[src='" + opt.audioUrl + "']'");
                if(_existAudio.length > 0) {
                    _audioUrl = null;
                }
            }

            var _global_audio = $("#act_global_audio");
            if(_global_audio.length === 0) {
                $("<video id='act_global_audio' width='0' height='0' controls='controls' ><source src='" + opt.audioUrl + "' /></video>").appendTo('body');
            }
            
            var compiledTemplate = $$.render(this.template, {
                id: opt.id,
                cacheSvr: window.cacheSvr,
                src: null, //_audioUrl
                hidesrc: _hidesrc
            });
            //$("#" + opt.containerId).html(compiledTemplate);
            $(this.el).html(compiledTemplate);
            
            if(opt.times) {
                var _commonAudio = $("#" + opt.containerId + " video");
                $("#act_global_audio").attr("src", opt.audioUrl);
                if(_commonAudio.length > 0) {
                    _commonAudio = $("#" + opt.containerId + " video").prependTo(".content");
                    var _sourceElem = document.createElement('source');
                    _sourceElem.src = opt.audioUrl;
                    _commonAudio[0].appendChild(_sourceElem);
                    _commonAudio[0].load();
                    _commonAudio[0].play();
                    _commonAudio.bind("play", function() {
                        setTimeout(function() {
                            _commonAudio[0].pause();
                        }, 100);
                    });
                }
            }

            if(!opt.size) {
                opt.size = "49";
            }
            $("#" + opt.containerId + " .act-player").addClass("act-player" + opt.size);
            $("#" + opt.containerId).find(".act-player_icon").addClass("act-play_icon" + opt.size);
            $("#" + opt.containerId).append("&nbsp;");
            var _id = "#" + opt.id;
            if (!opt.display) {
                opt.display = "show";
            }

            this.model.attributes.display.push(_id + "_" + opt.display);

            if(opt.display && opt.display === "left") {
                $(_id + " .act-player_ps_panel").addClass("act-player_ps_panel_left");
            } else {
                if(opt.display === "hide") {
                    $(_id + " .act-player_ps_panel").hide();
                    $(_id + " .act-player_ps_panel *").hide();
                }
            }

            var _onCompleteCallBack = null;

            this.opt = opt;
        },

        events: {
            "mouseover .act-player_icon": 'mouseOverIcon',
            "mouseout .act-player_icon": 'mouseOutIcon',
            "click .act-player_icon": 'clickIcon',
        },

        mouseOverIcon: function(e) {
            if ($(e.target).hasClass("act-player_pl_n")) {
                $(e.target).addClass("act-player_pl_h");
            }
        },

        mouseOutIcon: function(e) {
            $(e.target).removeClass("act-player_pl_h");
        },

        clickIcon: function(e) {
            e.preventDefault();

            $target = $(e.target);
            if($target.hasClass("act-player_pl_d")) {
                return;
            }

            var _audio = this.findAudio();
            _audio.unbind("playing");
            _audio.bind("playing", function() {
                $target.addClass('act-player_pl_l').removeClass('act-player_pl_c');
            });
            _audio.unbind('play');
            _audio.bind('play', function() {
                $target.addClass('act-player_pl_l').removeClass('act-player_pl_n');
            });


            if($target.hasClass('act-player_pl_c') || $target.hasClass('act-player_pl_l')) {
                this.findAudio()[0].pause();
                this.clearProgressInterval();
            }
        },

        findAudio: function() {
            var _global_audio = $('#act_global_audio');
            var _url = $(this.opt.id).find('.act-hide_audio').html();
            _global_audio.find('souce').remove();
            return _global_audio;
        }

    });

    return {
        render : function(opt) {
            var view = new View();
            $("#"+opt.containerId).html(view.render(opt).el)
            view.render(opt);
        }
    };
});



