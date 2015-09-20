'use strict';

var $ = require('jquery');
var router = require('./router');

$(document).ready(function () {
   router.init($('body')); 
});