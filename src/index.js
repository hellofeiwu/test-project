'use strict';

var util = require('util');
var $ = require('jquery');
var router = require('./router');

window.$ = $;
window.jQuery = $;

require('bootstrap/dist/css/bootstrap.css');
require('bootstrap');
require('./views/styles/home.css');

$(document).ready(function () {
   router.init($('body')); 
});