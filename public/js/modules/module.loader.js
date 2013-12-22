define(['module.one'],function () {
	var module = {
		
		init : function(callback){
			console.log('Module Loader .....');
			callback('f');
		}		
	};
    return module;
});