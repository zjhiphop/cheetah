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

            if(this.model.get('duration')["#" + opt.id] !== undef) {
                this.model.get('duration')["#" + opt.id] = undef;
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
            "click .act-player_ps_close": 'clickCloseIcon',
            "click .act-player_ps_total": 'clickProgressBar',
            "click .act-player_ps_current": 'clickProgressBar'
        }

        clickProgressBar: function(e) {
            e.stopPropagation();
            
            var that = this;
            setTimeout(function () {
                var _width = that.getRelativePosition(e.pageX, $("#" + that.opt.id + " .act-player_ps_current"));
                that.updateProgressWidth(_width * that.progressWidth, "#" + that.opt.id);
                $("#act_global_audio")[0].currentTime = _width * (that.model.get('duration').id || 0);
            }, 50);
        },

        clickCloseIcon: function(e) {
            $(e.target).parents(".act-player_ps_panel").fadeOut('slow');
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

            var _audio = this.findAudio($("#" + this.opt.id));
            _audio.unbind("playing");
            _audio.bind("playing", function() {
                $target.addClass('act-player_pl_l').removeClass('act-player_pl_c');
            });
            _audio.unbind('play');
            _audio.bind('play', function() {
                $target.addClass('act-player_pl_l').removeClass('act-player_pl_n');
            });


            if($target.hasClass('act-player_pl_c') || $target.hasClass('act-player_pl_l')) {
                this.findAudio($("#" + this.opt.id))[0].pause();
                this.clearProgressInterval();
                $target.addClass('act-player_pl_n').removeClass('act-player_pl_c').removeClass('act-player_pl_l');
                $('#' + this.opt.id + ' .act-player_ps_panel').fadeOut('show');
            } else if($target.hasClass('act-player_pl_n')) {
                //todo
                //if (ET.School.UI.Common.Player.isRecording) {
                    //if (ET.School.UI.Common.Touch.isiPad()) {
                        //ET.NA.ASR.stopRecordingDelegate();
                    //}
                    //else {
                        //ET.NA.ASR.stopRecording();
                    //}
                //}
                var _id = this.opt.id;
                var _onPlaycallback = this.getCallback(_id);
                if (_onPlaycallback) {
                    setTimeout(function () {
                        _onPlaycallback(_id);
                    }, 1);
                }
                var that = this;
                setTimeout(function () {
                    var _display = that.getDisplay("#" + _id);
                    if (_display !== "hide") {
                        $("#" + _id + " .act-player_ps_panel").fadeIn('slow');
                    }
                }, 1);
                this.stopOthers(_id);
                this.setStartTime('#' + this.opt.id);
            }
        },

        findAudio: function($el) {
            var _global_audio = $('#act_global_audio');
            var _url = $el.find('.act-hide_audio').html();
            _global_audio.find('souce').remove();
            return _global_audio;
        },

        setStartTime: function(id) {
            this.setStartTimeCallback(id);
        },

        setStartTimeCallback: function(id) {
            var _id = id.substring(1, id.length);
            var _times = this.getTime(_id);
            var _audio = this.findAudio($(id));
            if (_times) {
                var _startTime = _times[0].startTime;
                var _endTime = _times[0].endTime;
                if (_times.length === 1) {
                    if (_audio[0].currentTime < _startTime || _audio[0].currentTime >= _endTime) {
                        this.setToStart(id, _audio[0], _startTime);
                    }
                    else {
                        _audio[0].play();
                        this.setProgressInterval(id);
                    }
                }
                else {
                    var _continue = false;
                    for (var i = 0; i < _times.length; i++) {
                        if (_times[i].status === 1) {
                            _audio[0].play();
                            this.setProgressInterval(id);
                            _continue = true;
                            break;
                        }
                    }
                    if (_continue === false) {
                        this.setToStart(id, _audio[0], _startTime);
                    }
                }
                if (!$(id + " .act-player_icon").hasClass("act-player_pl_c")) {
                    $(id + " .act-player_icon").addClass("act-player_pl_c");
                }
            }
            else {
                if ($(id + " .act-player_icon").hasClass("act-autoplay")) {
                    $(id + " .act-player_icon").removeClass("act-autoplay");
                    _audio[0].load();
                }
                if (_audio.find("source").length === 0) {
                    var _sourceElem = document.createElement('source');
                    var _url = $(id + " .act-hide_audio").text();
                    _sourceElem.src = _url;
                    _audio[0].appendChild(_sourceElem);
                    _audio[0].load();
                } else {
                    _audio[0].load();
                }        
                this.hackForAudioPlayTimeout(_audio);
                this.setProgressInterval(id);
            }

        },

        stopOthers: function(id) {
            var _times = this.getTime(id);
            if (_times) {
                var _playing = $(".act-player:not(#" + id + ") .act-player_pl_c");
                if (_playing.length === 0) {
                    _playing = $(".act-player:not(#" + id + ") .act-player_pl_l");
                }
                if (_playing.length > 0) {
                    var _id = _playing.parent().attr("id");
                    _playing.nextAll(".act-player_ps_panel").hide();
                    _playing.removeClass("act-player_pl_c").addClass("act-player_pl_n");
                    this.clearProgressInterval("#" + _id);
                    return;
                }
            }
            $(".act-player:not(#" + id + ")").each(function () {
                var _audio = this.findAudio($(this));
                if (_audio.length > 0) {
                    if (_audio[0].buffered && _audio[0].buffered.length > 0 && !_audio[0].paused) {
                        var _id = $(this).attr("id");
                        if (_audio[0].currentTime) {
                            _audio[0].currentTime = 0.01;
                        }
                        _audio[0].pause();
                        this.clearProgressInterval("#" + _id);
                        $(this).find(".act-player_ps_panel").hide();
                        $(this).find(".act-player_icon").removeClass("act-player_pl_c").removeClass("act-player_pl_l").addClass("act-player_pl_n");
                        return;
                    }
                    if ($(this).find(".act-player_icon").hasClass("act-player_pl_c")) {
                        $(this).find(".act-player_icon").removeClass("act-player_pl_c").addClass("act-player_pl_n");
                        return;
                    }
                    if ($(this).find(".act-player_icon").hasClass("act-player_pl_l")) {
                        $(this).find(".act-player_icon").removeClass("act-player_pl_l").addClass("act-player_pl_n");
                        return;
                    }
                }
            });

        },

        getCallback: function(id) {
            var playCallbackFunction = this.model.get('onPlayCallbackFunction');
            var length = playCallbackFunction.length;
            for (var i = 0; i < length; i++) {
                var temp = playCallbackFunction[i];
                if( temp.id === id) {
                    return temp.callback;
                }
            }
        },

        getDisplay: function(id) {
            var _display = this.model.get('display');
            var _myDisplay = "auto";
            var lenght = _display.length - 1;
            for (var i = length; i >= 0; i--) {
                var _displayItem = _display[i];
                var _index = _displayItem.indexOf(id);
                if (_index !== -1) {
                    _myDisplay = _displayItem.substring(id.length + 1, _displayItem.length);
                }
            }
            return _myDisplay;
        },

        getTime: function(id) {
            var _times = this.model.get('times');
            var length = _times.length;
            for (var i = 0; i < length; i++) {
                if (_times[i].id === id) {
                    return _times[i].times;
                }
            }
        },

        setToStart: function (id, audio, startTime) {
            if (startTime === 0) {
                if (audio.currentTime !== 0) {
                    audio.currentTime = 0.01;
                }
                audio.play();
                this.setProgressInterval(id);
                return;
            }
            if (audio.seekable === undefined || audio.seekable.length === 0) {
                audio.play();
                setTimeout(function () {
                    audio.pause();
                    setTimeout(function () {
                        this.setToStart(id, audio, startTime);
                    }, 1000);
                }, 100);
            }
            else {
                if (audio.seekable.end(0) > startTime) {
                    audio.currentTime = startTime;
                    audio.play();
                    this.setProgressInterval(id);
                }
                else {
                    audio.currentTime = audio.seekable.end(0);
                    audio.play();
                    setTimeout(function () {
                        audio.pause();
                        setTimeout(function () {
                            this.setToStart(id, audio, startTime);
                        }, 1000);
                    }, 100);
                }
            }
        },

        hackForAudioPlayTimeout: function (_audio) {
            this.model.set('currentVolume', _audio[0].volume);
            var that = this;
            setTimeout(function () {
                _audio[0].volume = 0;
                _audio[0].play();
                if (_audio[0].seekable === undefined || _audio[0].seekable.length === 0) {
                    _audio[0].pause();
                    setTimeout(function () {
                        that.hackForAidioPlayTimeout(_audio);
                    }, 100);
                } else {
                    _audio[0].volume = that.model.get('currentVolume');
                    _audio[0].play();
                    setTimeout(function () {
                        if (_audio[0].currentTime === 0) {
                            _audio[0].volume = 0;
                            _audio[0].load();
                            _audio[0].volume = that.model.get('currentVolume');
                            _audio[0].play();
                        }
                    }, 200);
                    _audio[0].play();
                }
            }, 100);
        },
        
        setProgressInterval: function(id) {
            var that = this;
            $('#act_global_audio').unbind("timeupdate");
            $('#act_global_audio').bind("timeupdate", function () { 
                that.updatePlayProgress(id); 
            });
        },

        updatePlayProgress: function(id) {
            var _id = id.substring(1, id.length),
            _times = this.getTime(_id),
            _audio = $('#act_global_audio')[0],
            _player = this.model.attributes;
            if (!_player.duration.id) {
                _player.duration.id = _audio.duration;
            }
            if (!_times) {
                if ($(id + " .act-player_ps_panel").length === 0) {
                    this.clearProgressInterval(id);
                    return;
                }
                var _progress = $(id + " .act-player_ps_current");
                var _width = (_audio.currentTime / _player.duration.id) * (this.model.get('progressWidth'));
                this.updateProgressWidth(_width, id);
            } else {
                this.changeTime(_audio, id);
            }
        },

        updateProgressWidth: function(width, id) {
            $(id + " .act-player_ps_current").css("width", width + 10 + "px");
            $(id + " .act-player_ps_icon").css("left", width + 9 + "px");
        },

        changeTime: function (audio, id) {
            var _id = id.substring(1, id.length);
            var _times = this.getTime(_id);
            if (!_times) {
                return;
            }
            if ($(id).find(".act-player_pl_c").length === 0) {
                return;
            }
            if (_times.length === 1) {
                var _endTime = _times[0].endTime;
                if (audio.currentTime >= _endTime) {
                    audio.currentTime = _times[0].startTime;
                    audio.pause();
                    this.clearProgressInterval(id);
                    $(id + " .act-player_icon").removeClass("act-player_pl_c").addClass("act-player_pl_n");
                }
            }
            else {
                var _lastPlayingTime = null;
                var _index = 0;
                for (_index; _index < _times.length; _index++) {
                    if (_times[_index].status === 1) {
                        _lastPlayingTime = _times[_index];
                        break;
                    }
                }
                var _callback = this.getCallback(_id);
                if (!_lastPlayingTime) {
                    _index = 0;
                    _lastPlayingTime = _times[0];
                    _lastPlayingTime.status = 1;
                    if (_callback) {
                        _callback(_id, 0);
                    }
                }
                if (audio.currentTime >= _lastPlayingTime.endTime) {
                    _lastPlayingTime.status = 0;
                    if (_index + 1 <= _times.length - 1) {
                        audio.currentTime = _times[_index + 1].startTime;
                        _times[_index + 1].status = 1;
                        if (_callback) {
                            _callback(_id, _index + 1);
                        }
                    }
                    else {
                        audio.currentTime = _times[0].startTime;
                        ET.School.UI.Common.Player._clearProgressInterval(id);
                        audio.pause();
                        $(id + " .act-player_icon").removeClass("act-player_pl_c").addClass("act-player_pl_n");
                    }
                }
            }
        },

        getRelativePosition: function(x, el) {
            return Math.max(0, Math.min(1, (x - el.offset().left) / this.model.get('progressWidth')));
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



