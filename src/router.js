'use strict';

var HomeView = require('./views/home-view');
var Item1View = require('./views/item1-view');

var router = {

    /**
     * @param {JQuery} $container - the parent container for the page
     */
    init: function ($container) {
        this.$container = $container;

        window.addEventListener('hashchange', $.proxy(this.onChange, this));
        this.renderPage();
    },

    getFragment: function () {
        return window.location.hash.replace('#', '');
    },

    onChange: function () {
        this.renderPage(this.getFragment());
    },

    /**
     * Renders the current page
     */
    renderPage: function (hash) {

        if (hash === undefined) {
            hash = this.getFragment();
        }

        var content;
        switch (hash) {
            case 'item1':
                content = new Item1View().render();
                break;
            case 'item2':
                content = new Item2View().render();
                break;
            case 'item3':
                content = new Item3View().render();
                break;
            default:
                content = new HomeView().render();
                break;

        }

        this.$container.html(content);
    },

    /* www.jadeland.org/index.html#home */
};

module.exports = router;