//this file is used to test model
define(function(require) {
    var _ = require('underscore'), Backbone = require('backbone'), $ = require("jquery");
    return {
        run : function() {
            describe("Mutiple choice model", function() {
                beforeEach(function() {
                    var mcn = require('models/activity/multiple_choice_new');
                    this.mcn = new mcn({
                        act_title : "Hollywood - Part 2"
                    });
                });
                it("Spy excute", function() {

                    // Create an anonymous spy
                    var spy = sinon.spy();

                    // Call the anonymous spy method when 'foo' is triggered
                    this.mcn.bind('foo', spy);

                    // Trigger the foo event
                    this.mcn.trigger('foo');

                    // Expect that the spy was called at least once
                    expect(spy.called).toBeTruthy();

                });
                it("act_title should be 'Hollywood - Part 2'", function() {
                    expect(this.mcn.get("act_title")).toBe('Hollywood - Part 2');
                })
            })
            describe("Option box model", function() {
                beforeEach(function() {
                    var opx = require('models/modules/option_box');
                    this.opx = new opx;
                });
                it("should have attribute 'content'", function() {
                    expect(this.opx.get('content')).toBeDefined();
                });
                it("should have attribute 'type'", function() {
                    expect(this.opx.get('type')).toBeDefined();
                });
                it("should have attribute '_name'", function() {
                    expect(this.opx.get('_name')).toBeDefined();
                });
                it("should have attribute '_id'", function() {
                    expect(this.opx.get('_id')).toBeDefined();
                });
            });
            describe("Vertical question model", function() {
                beforeEach(function() {
                    var vq = require("models/modules/vertical_question");
                    this.vq = new vq;
                });
                it("The type of attribute 'selection' should be array", function() {
                    expect(this.vq.get('selection')).toBeDefined();
                });
            });
            describe("Bottom button model", function() {
            });
            describe("Episode", function() {

                beforeEach(function() {
                    this.server = sinon.fakeServer.create();
                });
               
                it("should make the correct server request", function() {

                    var episode = new Backbone.Model({
                        title : "Hollywood - Part 2",
                        url : "/episodes/1",
                        urlRoot:""
                    });

                    // Spy on jQuery's ajax method
                    var spy = sinon.spy(jQuery, 'ajax');

                    // Save the model
                    episode.save();

                    // Spy was called
                    expect(spy).toHaveBeenCalled();
                    // Check url property of first argument
                    expect(spy.getCall(0).args[0].url).toEqual("/episodes/1");

                    // Restore jQuery.ajax to normal
                    jQuery.ajax.restore();
                });
            });
        }
    }
})