/** 
 * A module representing a module.
 * @module module-name
 */
define('module', function () {
    /**
     * @constructor
     * @alias module : module
     */
    var module = {
    	/**
    	 * initialize module
    	 */
    	init : function(){
    		console.log('initialized clp module');
    	}    	
    };
    
    return module;
});