define(['jquery', 
'underscore', 
'backbone',
'mustache',
'lib/swfobject',
'lib/json2',
'help/text!tpl/mustache/common/audio_player_flash.tpl',
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
            opt.flashId = opt.id + "_flash";
            this.setTemplate(opt);
            $('#' + opt.containerId).keydown(function (e) {
                if (e.which === 9 || e.which === 11) {
                    return false;
                }
            });

            return this;
        },

        setTemplate: function(opt) {
            var _hasBar = 1;
            if (opt.display === "hide") {
                _hasBar = 0;
            }
            var _autoPlay = 0;
            if (opt.autoplay) {
                _autoPlay = 1;
            }
            var _times = this.getTime(opt.id);
            var _timesValue = undefined;
            if (_times) {
                _timesValue = JSON.stringify({
                    time: _times
                    }).replace(/\"/g, "'");
            }
            var flashWidth = 175 * parseInt(opt.size, 10) / 49;
            var flashHeight = 105 * parseInt(opt.size, 10) / 49;

            var compiledTemplate = $$.render(this.template, {
                id: opt.id,
                size: opt.size,
                display: opt.display,
                flashId: opt.flashId
            });

            $(this.el).html(compiledTemplate);


            var _audioSwfPath = "_imgs/ui/courseware/study/EFAudio_v1.610.swf";
            if(opt.display && opt.display === "left") {
                _audioSwfPath = "_imgs/ui/courseware/study/EFAudio_leftBar.swf";
                flashHeight = 115 * parseInt(opt.size, 10) / 49;
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
                // todo
                //onPlayFunction: that.model.onPlayCallback4Flash,
                //onCompleteFunction: that.model.onCompleteCallback4Flash,
                stopFunction: "stopFunction",
                closeBarFunction: "closeBarFunction",
                playFunction: "playFunction",
                disableFunction: "disable",
                enableFunction: "enable"
            }, {
                wmode: 'transparent',
                allowscriptaccess: 'always'
            });
        },

        getTime: function(id) {
            var _times = this.model.get('times');
            for (var i = 0; i < _times.length; i++) {
                if (_times[i].id === id) {
                    return _times[i].times;
                }
            }
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


