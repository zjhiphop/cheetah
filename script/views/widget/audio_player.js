define(['jquery', 
'underscore', 
'backbone',
'mustache',
'modernizr',
'lib/swfobject',
'lib/json2',
'help/text!tpl/mustache/common/audio_player_flash.tpl',
'help/text!tpl/mustache/common/audio_player_html5.tpl',
'models/widget/audio_player'], function($, _, Backbone, $$, Modernizr, swfobjct, JSON, flash_tpl, html5_tpl, model) {

    var View = Backbone.View.extend({
        tagName: "div",
        flashTemplate: flash_tpl,
        html5Template: html5_tpl,

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
            // check player's size
            if(!opt.size) {
                opt.size = "49";
            }
            // check player's display status
            if(opt.display && opt.display !== "left") {
                opt.display = "hide";
            }
            if(!opt.display) {
                if(opt.size === "49") {
                    opt.display = "show";
                } else {
                    opt.display = "hide";
                }
            }

            // if split audio by times then do pushTimes
            if(opt.times) {
                opt.display = "hide";
                this.pushTimes(opt.id, opt.times);
            }
            this.model.attributes.onPlayCallbackFunction.push({
                "id": opt.id,
                "callback": opt.onPlaycallback
            });

            // if HTML5 mp3 audio can be used,
            // then use HTML5, or use Flash
            if(Modernizr.audio.mp3 === 'true' || Modernizr.audio.mp3 === 'maybe') {
                this.loadHtml5Version(opt); 
            } else {
                //use flash method to add audio
                opt.flashId = opt.id + "_flash";
                this.loadFlashVersion(opt);
                $("#" + opt.containerId).keydown(function(e) {
                    if(e.which === 9 || e.which === 11) {
                        return false;
                    }
                });
            }

            return this;
        },


        pushTimes: function(id, times) {
            var _timeInsec = [];
            for (var j = 0; j < times.length; j++) {
                var _startTime = times[j].StartTime;
                var _timeStart = new Date("1900/01/01 " + _startTime);
                var _startTimeSec = _timeStart.getSeconds() + _timeStart.getMinutes() * 60 + _timeStart.getHours() * 60 * 60;
                var _endTime = times[j].EndTime;
                var _timeEnd = new Date("1900/01/01 " + _endTime);
                var _endTimeSec = _timeEnd.getSeconds() + _timeEnd.getMinutes() * 60 + _timeEnd.getHours() * 60 * 60;
                _timeInsec.push({
                    startTime: _startTimeSec === 0 ? 0.001 : _startTimeSec,
                    endTime: _endTimeSec,
                    status: 0
                });
            }
            var _times = this.model.attributes.times;
            for (var i = 0; i < _times.length; i++) {
                if (_times[i].id === id) {
                    this.model.attributes.times.splice(i, 1);
                    break;
                }
            }
            this.model.attributes.times.push({
                "id": id,
                "times": _timeInsec
            });

        },

        // add flash version audio template
        loadFlashVersion: function(opt) {
            // keep this context to 'that'
            var that = this;

            var _hasBar = 1;
            if(opt.display === "hide") {
                _hasBar = 0;
            }

            var _autoPlay = 0;
            if(opt.autoplay) {
                _autoPlay = 1;
            }

            var _times = this.getTime(opt.id);
            var _timesValue = undefined;
            if(_times) {
                _timesValue = JSON.stringify({
                    time: _times
                }).replace(/\"/g, "'");
            }

            var flashWidth = 175 * parseInt(opt.size, 10) / 49,
                flashHeight = 105 * parseInt(opt.size,10) / 49;

            var compiledTemplate = $$.render(this.flashTemplate, {
                id: opt.id,
                size: opt.size,
                display: opt.display,
                flashId: opt.flashId
            });
            $("#" + opt.containerId).html(compiledTemplate);

            var _audioSwfPath = "_imgs/ui/courseware/study/EFAudio_v1.610.swf";
            if(opt.display && opt.display === "left") {
                _audioSwfPath = "_imgs/ui/courseware/study/EFAudio_leftBar.swf";
                flashHeight = 115 * parseInt(size, 10) / 49;
            } 
            if(opt.audflash_url) {
                _audioSwfPath = opt.audflash_url;
                flashWidth = opt.size;
                flashHeight = opt.size;
            }
            if(window.cacheSvr !== "../../") {
                _audioSwfPath = window.cacheSvr + "/" + _audioSwfPath;
            }


            swfobject.embedSWF(_audioSwfPath, opt.flashId, flashWidth, flashHeight, "9.0.0", "_scripts/expressInstall.swf", {
                audioPath: opt.audioUrl,
                totalWidth: 52 * parseInt(opt.size, 10) / 49,
                autoLoad: 1,
                autoPlay: _autoPlay,
                loop: 0,
                hasBar: _hasBar,
                bufftime: 1,
                controllable: 1,
                id: opt.flashId,
                timeArr: _timesValue,
                onPlayFunction: that.model.onPlayCallback4Flash,
                onCompleteFunction: that.model.onCompleteCallback4Flash,
                stopFunction: "stopFunction",
                closeBarFunction: "closeBarFunction",
                playFunction: "playFunction",
                disableFunction: "disable",
                enableFunction: "enable"
            }, {
                wmode: 'transparent',
                allowscriptaccess: 'always'
            });
            $("#" + opt.containerId).addClass("act-audio_flash").prepend("&nbsp;");

        },

        loadHtml5Version: function (opt) {
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
            
            var compiledTemplate = $$.render(this.html5Template, {
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

        getTime: function(id) {
            var _times = this.model.get("times");
            var length = _times.length;

            for(var i = 0; i < length; i++) {
                if(_times[i].id === id) {
                    return _times[i].times;
                }
            }
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
        }
    };
});

