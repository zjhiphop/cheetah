/**
 * Window
 * @creator ika
 * dependency requirejs
 *              modernizr
 */
define(function(require) {
    require('lib/modernizr-2.0.6');

    Modernizr.addTest('ipad', function() {
        return !!navigator.userAgent.match(/iPad/i);
    });
});
