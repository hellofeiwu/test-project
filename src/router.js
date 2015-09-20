'use strict';

var HomeView = require('./views/home-view');

var router = {
    
    /**
     * @param {JQuery} $container - the parent container for the page
     */
    init: function ($container) {
        $container.html(this.getPage());
    },
    
    /**
     * Gets the current page
     * @returns {String} the page html
     */
    getPage: function () {
        
        return new HomeView().render();
    },
    
    /* www.jadeland.org/index.html#home */
};

module.exports = router;