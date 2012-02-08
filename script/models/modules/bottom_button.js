define(['underscore',
'backbone'],function(_,Backbone) {
    var model = Backbone.Model.extend({
        defaults: {
            'skipBtn': { 
                'disable': false,
                'text':'Skip Activity'
            },
            'prevBtn': {
                'disable': true,
                'text': 'Prev'
            },
            'nextBtn': {
                'disable': false,
                'text': 'Next'
            },
        }
    });

    return model;
});
