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
        uuid:function(prefix){
          return prefix+extend.method._uuid++;
        },
        deepClone:function(a){
            var plainType=['number','string'];
            if(!a||~plainType.indexOf(typeof a)){
              return a;
            }
            var refType=['object','array','function','date'],
                f=function(){};
            f.prototype=a;
            var o=new f();
            for(var i in a){
              if(a.hasOwnProperty(i)){
                if(~refType.indexOf(typeof a[i])){
                  o[i]=this.deepClone(a[i]);
                }else{
                  o[i]=a[i];  
                }                 
              }
            }
            return o;
        }
    }; 
    extend.prototype = {

    };
    return extend;
});
