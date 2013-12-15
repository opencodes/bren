/** 
 * A module representing a module.
 * @module module-name
 */
define(function () {
    /**
     * @constructor
     * @alias module : module
     */
    var module = {
    	element : '#wrapper',
    	/**
    	 * initialize module
    	 */
    	init : function(){
    		var _this = this,
    			el	  = $(_this.element);
    		
    		if(typeof el !== 'undefined' && el.length !== 0 ){
    			
    			var _module = el.attr('class').replace(new RegExp("-","g"),"").replace('pt_','');
    			
    			require(['modules/'+_module],function(module){
    				
    				module.init();
    				
    			});
    		}
    	}    	
    };
    
    return module;
});