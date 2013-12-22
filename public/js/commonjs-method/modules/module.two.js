'use strict';
define(function (require, exports, module) {
	console.log('Module Two Loader .....');
	var util1	  = require('util1');
	
	var moduleTwo = {		
		init : function(){
			util1.init();
		}		
	};
    return moduleTwo;
});