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
                _temp=view.split(':'),
                viewType = _temp[0],
                viewName=_temp[1],
                viewMode=_temp[2],//txt/img
                viewBox=_temp[3]//checkbox/radiobox
                ;
                if(viewMode||viewBox){
                  args.push(viewMode,viewBox);  
                }                
          //@on
            require([views[viewType][viewName]], function(view) {
                view.render.apply(view, args);
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
        _uuid : 0,
        /**
         * Generate sequence number
         * @return {Number}
         */
        uuid : function(prefix) {
            return prefix + extend.method._uuid++;
        },
        /**
         * Deep clone Object
         * @param {Object} source object
         * @return {Object}
         */
        deepClone : function(a) {
            var plainType = ['number', 'string'];
            if(!a || ~plainType.indexOf( typeof a)) {
                return a;
            }
            var refType = ['object', 'array', 'function', 'date'], f = function() {
            };
            f.prototype = a;
            var o = new f();
            for(var i in a) {
                if(a.hasOwnProperty(i)) {
                    if(~refType.indexOf( typeof a[i])) {
                        o[i] = this.deepClone(a[i]);
                    }
                    else {
                        o[i] = a[i];
                    }
                }
            }
            return o;
        },
        /**
         * Deep extend Object
         * @param {Object} source object
         * @return {Object}
         */
        deepExtend : function(src) {
            var args = [].slice.call(arguments, 1), that = this;
            args = this.map(args, function(arg) {
                return that.deepClone(arg);
            });
            args.unshift(true, {}, src);
            return this._extend.apply(this, args);
        },
        _extend : function() {
            var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;

            // Handle a deep copy situation
            if( typeof target === "boolean") {
                deep = target;
                target = arguments[1] || {};
                // skip the boolean and the target
                i = 2;
            }

            // Handle case when target is a string or something (possible in deep
            // copy)
            if( typeof target !== "object" && !this.isFunction(target)) {
                target = {};
            }

            // extend underscore itself if only one argument is passed
            if(length === i) {
                target = this; --i;
            }

            for(; i < length; i++) {
                // Only deal with non-null/undefined values
                if(( options = arguments[i]) != null) {
                    // Extend the base object
                    for(name in options ) {
                        src = target[name];
                        copy = options[name];
                        // Prevent never-ending loop
                        if(target === copy) {
                            continue;
                        }
                        // Recurse if we're merging plain objects or arrays
                        if(deep && copy && ( this.isPlainObject(copy)|| ( copyIsArray = this.isArray(copy)) )) {
                            if(copyIsArray) {
                                copyIsArray = false;
                                clone = src && this.isArray(src) ? src : [];
                            }
                            else {
                                clone = src && this.isPlainObject(src) ? src : {};
                            }
                            // Never move original objects, clone them
                            target[name] = this.deepExtend(deep, clone, copy);
                            // Don't bring in undefined values
                        }
                        else
                        if(copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }

            // Return the modified object
            return target;
        },
        isPlainObject : function(obj) {
            var hasOwn = Object.hasOwnProperty;
            if(!obj || typeof (obj) !== "object" || obj.nodeType || ( typeof obj === "object" && "setInterval" in obj)) {
                return false;
            }
            if(obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
            for(var key in obj );
            return key === undefined || hasOwn.call(obj, key);
        }
    };
    extend.prototype = {

    };
    return extend;
});
