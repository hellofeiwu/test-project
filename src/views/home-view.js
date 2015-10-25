'use strict';

var util = require('util');
var $ = require('jquery');

window.$ = $;
window.jQuery = $;

require('bootstrap/dist/css/bootstrap.css');
require('bootstrap');

var BaseView = require('./base-view');
var homeTmpl = require('./tmpl/home.jade');
var gallery = require('../gallery');

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