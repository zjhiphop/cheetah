define(['jquery', 
		'underscore',
	   	'backbone'], function($, _, Backbone) {
    var model = Backbone.Model.extend({
        defaults: {
            playProgressIntervals: [],
            progressWidth: 129,
            display: [], //hide, auto, show
            timeOuts: [],
            onPlayCallbackFunction: [],
            times: [],
            isRecording: false,
            duration: {}
        },

        initialize : function(options) {
            this.attributes = _.extend(this.attributes, options);
        },

        /**
         * play call back function for flash version player
         * @param {String} id player ID
         * @param {int} index The current index for playing.
         */
        onPlayCallback4Flash: function(id, index) {
            if (!id) {
                return;
            }
/*
 *              todo
 *            ET.NA.ASR.stopPlayback();
 *            var _id = id.substring(0, id.length - "_flash".length);
 *            var callback = ET.School.UI.Common.Player._getCallback(_id);
 *            if (callback) {
 *                callback(_id, index);
 *            }
 *            $(".act-player object:not(#" + id + ")").each(function () {
 *                try {
 *                    if ($(this)[0].stopFunction) {
 *                        $(this)[0].stopFunction();
 *                    }
 *                }
 *                catch (e) {
 *
 *                }
 *            });
 */
        },

        /**
         * The call back function for flash player when the audio is completed.
         * @param {String} id The player ID
         */
        onCompleteCallback4Flash: function (id) {
/*
 *            todo
 *            
 *            try {
 *                if ($("#" + id).length === 0) {
 *                    return;
 *                }
 *                if ($("#" + id)[0].closeBarFunction) {
 *                    $("#" + id)[0].closeBarFunction();
 *                }
 *            }
 *            catch (e) {
 *
 *            }
 */
        }
        

    });
    return model;
});
