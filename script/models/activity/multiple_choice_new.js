define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var mcn_model = Backbone.Model.extend({
        defaults : {
            act_title : "Read the article and answer questions",
            //epaper_content:'<img src="imgs/_temp/article.gif" alt="" style="margin: 15px 0px 15px 25px;" />'
            epaper_content: '<div id="lipsum">'+
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce adipiscing ultricies sem, vitae congue felis dictum hendrerit. Duis pretium quam risus, at sodales dui. Duis vehicula tristique erat, at dapibus enim rhoncus at. Morbi ut sem turpis, dapibus adipiscing quam. Vestibulum volutpat iaculis faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et lorem eu eros gravida ultrices.</p>'+
            '<p>Nunc tempor condimentum eros commodo fermentum. Donec adipiscing pharetra purus, sit amet dapibus tortor pretium sed. In accumsan commodo neque at vulputate. Sed in nulla a erat consequat hendrerit eu vel lorem. Nulla lacus enim, tempor nec vehicula nec, vestibulum laoreet tellus. Vivamus vehicula, risus nec varius adipiscing, turpis diam iaculis ante, id dignissim ligula velit quis lacus. Suspendisse arcu urna, tincidunt vitae accumsan eu, rutrum at ligula. Vestibulum et urna vel neque placerat iaculis eu vitae ipsum. Vivamus in lobortis diam. Nulla fringilla eleifend laoreet. Mauris pretium adipiscing nisi sed eleifend. Sed tristique felis vitae ante luctus condimentum. Vivamus id eros non eros laoreet viverra.</p>'+
            '<p>Duis mollis dui ac nisl commodo venenatis. Nunc in varius neque. Suspendisse dignissim accumsan elit. Praesent vitae nunc purus, convallis suscipit nisl. Nulla quis lacus leo. Vivamus hendrerit cursus elit, sit amet feugiat velit fermentum eget. Nam consequat neque ac lectus tincidunt ut fermentum neque varius. Nam porta lorem posuere turpis interdum sit amet facilisis tortor gravida. Duis non metus non nulla dignissim pellentesque ut quis mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>'+
            '<p>Sed feugiat eros sed sem placerat tincidunt. Fusce at semper massa. Etiam viverra gravida erat, ac posuere arcu pulvinar id. Aenean sed ultricies est. Morbi mollis, lorem sed mattis dictum, metus enim sollicitudin eros, id imperdiet lacus ante in libero. Donec ut tellus libero. In ac placerat sapien. Sed ut auctor eros. Donec sagittis, lacus nec viverra placerat, enim turpis imperdiet ligula, ac feugiat odio mi vitae tellus. Integer et bibendum erat. Duis nisl arcu, vestibulum tempor accumsan hendrerit, pulvinar sed velit. Fusce euismod elit vel orci adipiscing eu feugiat libero vulputate.</p>'+
            '<p> Cras eu luctus ligula. Nunc consectetur dolor sit amet leo dictum tincidunt. Fusce faucibus elementum molestie. Nulla sed risus quis est vehicula pretium dictum eget mi. Aenean vel elit dolor. Cras sit amet facilisis est. Proin semper imperdiet quam, eget congue massa auctor ut. Vivamus ipsum nisl, facilisis in porta quis, commodo non massa. Fusce cursus, nisi dapibus gravida ultrices, est diam adipiscing sem, in ultrices sapien neque id massa.</p></div>',
            act_box_fullwidth: false
        },
        initialize : function(option) {
            this.attributes = _.extend(this.attributes, option);
        },
        validate : function() {
        }
    });
    return mcn_model;
});
