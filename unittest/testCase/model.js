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
                afterEach(function() {
                    this.server.restore();
                });
                it("should fire the change event", function() {
                    var callback = sinon.spy();
                    var Episode = Backbone.Model.extend({
                        url : function() {
                            return "/episode/" + this.id;
                        }
                    });

                    // Set how the fake server will respond
                    // This reads: a GET request for /episode/123
                    // will return a 200 response of type
                    // application/json with the given JSON response body
                    this.server.respondWith("GET", "/episode/123", [200, {
                        "Content-Type" : "application/json"
                    }, '{"id":123,"title":"Hollywood - Part 2"}']);

                    var episode = new Episode({
                        id : 123
                    });

                    // Bind to the change event on the model
                    episode.bind('change', callback);

                    // makes an ajax request to the server
                    episode.fetch();

                    // Fake server responds to the request
                    this.server.respond();

                    // Expect that the spy was called with the new model
                    expect(callback.called).toBeTruthy();
                    expect(callback.getCall(0).args[0].attributes).toEqual({
                        id : 123,
                        title : "Hollywood - Part 2"
                    });

                });
            });
        }
    }
})