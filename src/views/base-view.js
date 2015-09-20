'use strict';

/**
 * Provides a base class for all views
 * @class BaseView
 */
var BaseView = function () {
    
};


/**
 * Returns the rendered html
 * @returns {String} rendered html
 */
BaseView.prototype.render = function () {
    return 'Must provide render method';
};


module.exports = BaseView;