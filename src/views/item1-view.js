'use strict';

var util = require('util');

var BaseView = require('./base-view');
var itemTmpl = require('./tmpl/item.jade');

//require('./styles/home.css');

var Item1View = function () {

};

util.inherits(Item1View, BaseView);

Item1View.prototype.render = function () {
    return itemTmpl();
};

module.exports = Item1View;