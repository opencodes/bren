define(function (require, exports, module) {
    'use strict';
	console.log('Module One Loader .....');
	//var moduleTwo = require('module.two');
	var moduleOne = {
		
		init : function(){
			//moduleTwo.init();
		}		
	};
    return moduleOne;
});