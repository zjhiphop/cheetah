define("mcn",['backbone','models/activity/mutiple_choice_new',],function(Backbone,model){
    // define our collection
    var mutiple_choice_new_collection = Backbone.Collection.extend({
        model: model,
        init:function(){
          //do some init event
        }
    });
    return new mutiple_choice_new_collection;
});
