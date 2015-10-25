'use strict';

var HomeView = require('./views/home-view');
var Item1View = require('./views/item1-view');

var router = {
    
    /**
     * @param {JQuery} $container - the parent container for the page
     */
    init: function ($container) {
        window.addEventListener('hashchange', $.proxy(this.onChange, this));
        $container.html(this.getPage());
    },

    onChange: function () {
        this.getPage(this.getFragment());
    },

    getFragment: function () {
        return window.location.hash.replace('#', '');
    },
    
    /**
     * Gets the current page
     * @returns {String} the page html
     */
    getPage: function (hash) {

        if (hash === undefined) {
            hash = this.getFragment();
        }

        var view;
        switch (hash) {
            case 'item1':
                view = new Item1View().render();
                break;
            case 'item2':
                view = new Item2View().render();
                break;
            case 'item3':
                view = new Item3View().render();
                break;
            default:
                view = new HomeView().render();
                break;

        }

        return view;
    },
    
    /* www.jadeland.org/index.html#home */
};

module.exports = router;