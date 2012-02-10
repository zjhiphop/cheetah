define(['jquery', 
'underscore', 
'backbone',
'lib/swfobject',
'lib/json2',
'models/widget/audio_player'], function($, _, Backbone, swfobjct, JSON, model) {

    var View = Backbone.View.extend({
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


            //use flash method to add audio
            opt.flashId = opt.id + "_flash";
            this.loadFlashVersion(opt);
            
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
            $("#" + opt.containerId).html('<div id="' + opt.id + '" class="act-player act-player_flash' + opt.size + ' act-player_flash' + opt.size + '_ps_bar_' + opt.display + '"><div id="' + opt.flashId + '"></div></div>');

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
                onPlayFunction: "ET.School.UI.Common.Player.onPlayCallback4Flash",
                onCompleteFunction: "ET.School.UI.Common.Player.onCompleteCallback4Flash",
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

        getTime: function(id) {
            var _times = this.model.get("times");
            var length = _times.length;

            for(var i = 0; i < length; i++) {
                if(_times[i].id === id) {
                    return _times[i].times;
                }
            }
        }

    });

    return {
        render : function(opt) {
            var view = new View();
            view.render(opt);
        }
    };
});

