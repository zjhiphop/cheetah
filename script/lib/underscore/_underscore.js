// As above lets load the original underscore source code
define(['help/order!lib/underscore','help/order!help/extend_underscore'], function(__,_extend) {
    // Tell Require.js that this module returns  a reference to Underscore
    _.mixin(_extend.method,_extend.prototype);
    return _;
});
