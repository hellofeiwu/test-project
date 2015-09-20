'use strict';

var util = require('util');
var $ = require('jquery');
var BaseView = require('./base-view');
var homeTmpl = require('./tmpl/home.jade');

require('./styles/home.css');

var HomeView = function () {

};

util.inherits(HomeView, BaseView);

HomeView.prototype.render = function () {
    return homeTmpl();
};

module.exports = HomeView;