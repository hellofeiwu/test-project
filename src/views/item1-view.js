'use strict';

var util = require('util');
var $ = require('jquery');

window.$ = $;
window.jQuery = $;

require('bootstrap/dist/css/bootstrap.css');
require('bootstrap');

var BaseView = require('./base-view');
var homeTmpl = require('./tmpl/home.jade');

//require('./styles/home.css');

var Item1View = function () {

};

util.inherits(Item1View, BaseView);

Item1View.prototype.render = function () {
    return homeTmpl();
};

module.exports = Item1View;