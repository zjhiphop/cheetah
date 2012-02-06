define("mcn",['backbone','models/activity/multiple_choice_new',],function(Backbone,model){
    // define our collection
    var multiple_choice_new_collection = Backbone.Collection.extend({
        model: model,
        init:function(){
          //do some init event
        }
    });
    return new multiple_choice_new_collection;
});
