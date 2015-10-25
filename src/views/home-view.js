'use strict';

var util = require('util');

var BaseView = require('./base-view');
var homeTmpl = require('./tmpl/home.jade');
var gallery = require('../data/gallery');

//require('./styles/home.css');

var HomeView = function () {

};

util.inherits(HomeView, BaseView);

HomeView.prototype.render = function () {
    return homeTmpl(
        {
            gallery: gallery,
        }
    );
};

module.exports = HomeView;