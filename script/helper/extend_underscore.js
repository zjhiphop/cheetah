/**
 * Window
 * @creator jade
 */
define(function(require) {
    /**
     * 初始化继承对象
     */
    var extend = function() {
    };
    extend.method = {
        /**
         * 用来包装activity view，简化view的操作
         * @param {String} viewType:viewName
         */
        viewWrapper : function(view) {
            //@off
            var args = [].slice.call(arguments, 1),
                views = require('views/view_controller'),
                viewType = view.split(':')[0],
                viewName=view.split(':')[1];
          //@on
            require([views[viewType][viewName]], function(view) {
                view.render(args);
            })
        },
        /**
         *  Generate Guid
         * @return {String}
         */
        guid : function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            }).toUpperCase();
        },
        _uuid:0,
        /**
         * Generate sequence number
         * @return {Number}
         */
        uuid:function(){
          return this._uuid++;
        }
    };
    extend.prototype = {

    };
    return extend;
});
